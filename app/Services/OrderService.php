<?php

namespace App\Services;

use App\Models\User;
use App\Models\Order;
use App\Models\Process;
use App\Models\Product;
use App\Models\Customer;
use App\Models\LogOrder;
use App\Models\OrderStatus;
use App\Models\SalesPerson;
use App\Models\OrderProblem;
use Illuminate\Http\Request;
use App\Models\MethodShipping;
use App\Models\OrderItemProblem;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\OrderResource;

class OrderService
{
    const ACTION_APPROVE = 'approve';
    const ACTION_REJECT  = 'reject';
    const ACTION_INFO    = 'info';

    const SYNC_MASSIVE = 'Sincronizacion masiva';

    public function listOrdersCdaToManage(bool $execute = true)
    {
        $query = Order::query();
        $query->withOrderDetails()
            ->where('process_id', Process::PROCESS_ID_CDA)
            ->where('is_managed', false)
            ->orderBy('DocDate', 'DESC')
            ->orderBy('DocTime', 'DESC');

        if ($execute) {
            return $query->paginate(20);
        }
        return $query;
    }

    public function listOrdersCdaManage(bool $execute = true)
    {
        $query = Order::query();
        $query->withOrderDetails()
            ->where('is_managed', true)
            ->orderBy('updated_at', 'ASC');

            if ($execute) {
                return $query->paginate(20);
            }
            return $query;
    }

    public function listOrdersPickerReviewer($wareHouseCode, bool $execute = true)
    {
        if (!$this->isValidWarehouseForUser($wareHouseCode)) {
            throw new \Exception('No tiene permisos para acceder a esta bodega');
        }
        $query = Order::query();
        $query->byWarehouse([$wareHouseCode])
            ->withOrderDetails()
            ->whereIn('process_id', [Process::PROCESS_ID_PICKER, Process::PROCESS_ID_REVIEWER])
            ->orderBy('updated_at', 'DESC')
            ->orderBy('DocDate', 'DESC');
            // ->orderBy('DocDate', 'DESC');

        if ($execute) {
            return $query->paginate(20);
        }
        return $query;
    }

    public function listOrdersBills($type = null, bool $execute = true )
    {
        $condition = $type === MethodShipping::METHOD_SHIPPING_HERE ? '!=' : '=';

        $query = Order::query();
        $query->withOrderDetails()
            ->where('process_id', Process::PROCESS_ID_BILLS)
            ->where('method_shipping_id', $condition, MethodShipping::METHOD_SHIPPING_DELIVERY)
            ->orderBy('DocDate', 'DESC');

        if ($execute) {
            return $query->paginate(20);
        }
        return $query;
    }

    public function listOrdersPayment(bool $execute = true)
    {
        $query = Order::query();
        $query->withOrderDetails()
            ->where('process_id', Process::PROCESS_ID_PAYMENT)
            ->orderBy('DocDate', 'DESC');

        if ($execute) {
            return $query->paginate(20);
        }
        return $query;
    }

    public function listOrdersTracker($type, bool $execute = true)
    {
        $condition = $type === 'warehouse' ? '!=' : '=';

        $query = Order::query();
        $query->withOrderDetails()
            ->where('order_status_id', '!=', OrderStatus::STATUS_REJECTED)
            ->orderBy('updated_at', 'DESC')
            ->where('method_shipping_id', $condition, MethodShipping::METHOD_SHIPPING_HERE);

        if ($execute) {
            return $query->paginate(10);
        }
        return $query;
    }

    public function searchOrders(Request $request)
    {
        $type = $request->type;
        $search = $request->search;
        
        switch ($type):
            case 'cda:true':
                $query = $this->listOrdersCdaToManage(false);
                break;
            case 'cda:false':
                $query = $this->listOrdersCdaManage(false);
                break;
            case 'picker-reviewer':
                $query = $this->listOrdersPickerReviewer($request->warehouses, false);
                break;
            case 'bills':
                $query = $this->listOrdersBills($request->methodShipping, false);
                break;
            case 'payment':
                $query = $this->listOrdersPayment(false);
                break;
        endswitch;

        $query->where(function($query) use ($search) {
            $query->where('DocNum', 'LIKE', '%'.$search.'%')
                ->orWhere(  function($query) use ($search){
                    $query->whereHas('customer', function ($query) use ($search) {
                        $query->where('CardName', 'LIKE', '%'.$search.'%');
                        $query->orWhere('CardCode', 'LIKE', '%'.$search.'%');
               });
            });
        });
        
        return $query->paginate(10);
    }

    public function processOrderCda(Request $request)
    {
        $order = Order::getOrder($request->orderId);

        switch ($request->action):
            case self::ACTION_APPROVE:
                $order->order_status_id = OrderStatus::STATUS_ON_PICKER;
                break;
            case self::ACTION_REJECT:
                $order->order_status_id = OrderStatus::STATUS_REJECTED;
                $this->assingProbelmsOrder($order, $request);
                break;  
        endswitch;    

        $order->is_managed = true;

        $order->assignResponsible($request->responsible);
        $order->save();

        $orders = $this->listOrdersCdaToManage();

        
        return (object) [
            'message' => 'Orden actualizada correctamente',
            'orders' => $orders,
        ];
    }

    public function processOrderPickerReviewer(Request $request)
    {
        $order = Order::getOrder($request->orderId);

        switch ($request->action):
            case self::ACTION_APPROVE:
                $order->order_status_id = $order->order_status_id === OrderStatus::STATUS_ON_PICKER ? OrderStatus::STATUS_PICKED : OrderStatus::STATUS_REVIEWED;
                break;
            case self::ACTION_REJECT:
                $order->order_status_id = OrderStatus::STATUS_REJECTED;
                $this->assingProbelmsOrderItems($order, $request);
                break;  
        endswitch;  

        $order->save();
        $order->refresh();
        
        return (object) [
            'message' => 'Orden actualizada correctamente',
            'order' => new OrderResource($order),
        ];
    }

    public function assingResponsible(Request $request)
    {
        $order = Order::getOrder($request->orderId);

        $order->order_status_id = $request->responsible === 'picker' ? OrderStatus::STATUS_ON_PICKER : OrderStatus::STATUS_ON_REVIEWER;
        $order->updated_at = now();

        $order->save();

        $result = $order->assignResponsible($request->responsible);

        $order->refresh();

        if($result->status === 'warning'){
            throw new \Exception($result->message);
        }

        return (object) [
            'message' => $result->message,
            'order' => new OrderResource($order),
        ];
    }

    public function assingProbelmsOrder(Order $order, Request $request)
    {
        if (count($request->problems) > 0) {
            foreach ($request->problems as $orderItem) {
                OrderProblem::updateOrCreate(
                    [
                        'order_id' => $order->id,
                        'problem_id' => $orderItem['id'],
                    ],
                    [
                        'order_id' => $order->id,
                        'problem_id' => $orderItem['id'],
                        'other' => $orderItem['title'] === 'Otro' ? $request->other : null,
                    ]
                );
            }
        }
    }

    public function assingProbelmsOrderItems(Order $order, Request $request)
    {
        if (count($request->orderItemsProblem) > 0) {
            foreach ($request->orderItemsProblem as $key => $orderItem) {
                foreach ($orderItem['problems'] as $problem) {
                    $orderItemProblem = OrderItemProblem::updateOrCreate(
                        [
                            'order_item_id' => $orderItem['id'],
                            'problem_id' => $problem['id'],
                        ],
                        [
                            'order_item_id' => $orderItem['id'],
                            'problem_id' => $problem['id'],
                            'other' => $problem['title'] === 'Otro' ? $orderItem['other'] : null,
                        ]
                    );
                }
            }
        }
    }

    public function generateDocument($document, $orderId)
    {
        $order = Order::getOrder($orderId);
        $order->order_status_id = OrderStatus::STATUS_BILLED;
        $order->save();

        return (object) [
            'message' => 'Orden actualizada correctamente',
            'order' => new OrderResource($order),
        ];
    }

    public function addObservation(Request $request)
    {
        $order = Order::getOrder($request->orderId);
        $order->observation = $request->observation;
        $order->save();

        return (object) [
            'message' => 'Observación agregada correctamente',
            'order' => new OrderResource($order),
        ];
    }

    public function isValidWarehouseForUser($wareHouseCode)
    {
        $user = auth()->user() ?? User::find(1);

        return in_array($wareHouseCode, $user->allowedWarehouses()->toArray(), true);
    }

    public static function syncOrderWithItems(array $where, array $orderData)
    {
        $items = $orderData['DocumentLines'];
        unset($orderData['DocumentLines']);

        $customer = Customer::where('CardCode', $orderData['CardCode'])->first();
        $methodShipping = MethodShipping::where('name', $orderData['U_SBO_FormaEntrega'])->first();
        $salesPerson = SalesPerson::where('SalesEmployeeCode', $orderData['SalesPersonCode'])->first();

        $data = array_merge($orderData, [
            'customer_id'        => optional($customer)->id,
            'method_shipping_id' => optional($methodShipping)->id,
            'SalesEmployeeName'  => optional($salesPerson)->SalesEmployeeName,
        ]);

        try {
            $order = Order::updateOrCreate($where, $data);
            $order->syncOrderItems($items, $data['DocNum']);
            LogOrder::success(self::SYNC_MASSIVE, $data['DocNum']);

            return $order;
        } catch (\Exception $e) {
            LogOrder::error(self::SYNC_MASSIVE, $data['DocNum'], $e->getMessage());
            \Log::error($e->getMessage());
            return null;
        }
    }

    private function syncOrderItems(array $orderItemsData, $docNum)
    {
        DB::beginTransaction();
        try {
            foreach ($orderItemsData as $orderItemData) {
                $this->syncSingleOrderItem($orderItemData, $docNum);
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            LogOrder::error(self::SYNC_MASSIVE, $docNum, "Error general al sincronizar order_items. Error: {$e->getMessage()}");
            \Log::error($e->getMessage());
        }
    }

    private function syncSingleOrderItem(array $orderItemData, $docNum)
    {
        $product = Product::where('ItemCode', $orderItemData['ItemCode'])->first();

        if (!$product) {
            DB::rollBack();
            LogOrder::error(self::SYNC_MASSIVE, $docNum, "Producto no encontrado para ItemCode: {$orderItemData['ItemCode']}");
            \Log::error("Producto no encontrado para ItemCode: {$orderItemData['ItemCode']}");
            return;
        }

        try {
            $columnNames = Schema::getColumnListing('order_items');
            $dataToInsert = array_intersect_key($orderItemData, array_flip($columnNames));
            $data = array_merge($dataToInsert, ['product_id' => $product->id]);
            $this->orderItems()->create($data);
        } catch (\Exception $e) {
            DB::rollBack();
            LogOrder::error(self::SYNC_MASSIVE, $docNum, "Error al crear producto para ItemCode: {$orderItemData['ItemCode']}. Error: {$e->getMessage()}");
            \Log::error($e->getMessage());
            return;
        }
    }

}

<?php

namespace App\Services;

use App\Models\User;
use App\Models\Order;
use App\Models\Process;
use App\Models\OrderStatus;
use App\Models\OrderProblem;
use Illuminate\Http\Request;
use App\Models\MethodShipping;
use App\Models\OrderItemProblem;
use App\Http\Resources\OrderResource;

class OrderService
{
    const ACTION_APPROVE = 'approve';
    const ACTION_REJECT  = 'reject';
    const ACTION_INFO    = 'info';

    public function listOrdersCdaToManage()
    {
        return Order::withOrderDetails()
            ->where('process_id', Process::PROCESS_ID_CDA)
            ->where('is_managed', false)
            ->orderBy('created_at', 'ASC')->get();
    }

    public function listOrdersCdaManage()
    {
        return Order::withOrderDetails()
            ->where('is_managed', true)
            ->orderBy('updated_at', 'ASC')->get();
    }

    public function listOrdersPickerReviewer($wareHouseCode)
    {
        if (!$this->isValidWarehouseForUser($wareHouseCode)) {
            throw new \Exception('No tiene permisos para acceder a esta bodega');
        }
        
        return Order::byWarehouse([$wareHouseCode])
            ->withOrderDetails()
            ->whereIn('process_id', [Process::PROCESS_ID_PICKER, Process::PROCESS_ID_REVIEWER])
            ->orderByRaw('order_status_id = 4 DESC')
            ->orderBy('created_at', 'ASC')
            ->get();
    }

    public function listOrdersBills($type = null)
    {
        $query = Order::withOrderDetails()
            ->where('process_id', Process::PROCESS_ID_BILLS);
    
        if ($type === MethodShipping::METHOD_SHIPPING_HERE) {
            $query->whereNot('method_shipping_id', MethodShipping::METHOD_SHIPPING_DELIVERY);
        } elseif ($type === MethodShipping::METHOD_SHIPPING_DELIVERY) {
            $query->where('method_shipping_id', MethodShipping::METHOD_SHIPPING_DELIVERY);
        }
    
        $query->orderBy('created_at', 'ASC');
    
        return $query->get();
    }

    public function listOrdersPayment()
    {
        return Order::withOrderDetails()
            ->where('process_id', Process::PROCESS_ID_PAYMENT)
            ->orderBy('created_at', 'ASC')
            ->get();
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
        $order->refresh();
        
        return (object) [
            'message' => 'Orden actualizada correctamente',
            'order' => new OrderResource($order),
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

    public function assingResponsible($request){
        $order = Order::getOrder($request->orderId);
        $order->order_status_id = $request->responsible === 'picker' ? OrderStatus::STATUS_ON_PICKER : OrderStatus::STATUS_ON_REVIEWER;
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
        $order->is_managed = true;
        $order->is_approved = true;
        $order->order_status_id = Order::ORDER_STATUS_BILLED;
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

}

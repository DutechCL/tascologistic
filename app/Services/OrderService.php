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

    public function listOrdersBills($available = null)
    {
        return Order::withOrderDetails()
            ->where('process_id', Process::PROCESS_ID_BILLS)
            ->orderBy('created_at', 'ASC')
            ->get();
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
        $order = Order::findOrFail($request->orderId);

        switch ($request->action):
            case self::ACTION_APPROVE:
                $order->order_status_id = OrderStatus::STATUS_ON_PICKER;
                break;
            case self::ACTION_REJECT:
                $order->order_status_id = Order::ORDER_STATUS_REJECTED;
                $this->assingProbelmsOrder($order, $request);
                break;  
        endswitch;    

        $order->is_managed = true;

        $order->assignResponsible($request->responsible);
        $order->save();
        
        return (object) [
            'message' => 'Orden actualizada correctamente',
            'order' => new OrderResource($order),
        ];
    }

    public function processOrderPickerReviewer(Request $request)
    {
        $order = Order::findOrFail($request->orderId);

        switch ($request->action):
            case self::ACTION_APPROVE:
                $order->order_status_id = $request->orderStatus;
                break;
            case self::ACTION_REJECT:
                $order->order_status_id = $request->orderStatus;
                $this->assingProbelmsOrderItems($order, $request);
                break;  
        endswitch;  

        $order->is_managed = true;

        $order->assignResponsible($request->responsible);
        $order->save();
        
        return (object) [
            'message' => 'Orden actualizada correctamente',
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

    public function issueInvoiceOrReceipt(Order $order, Request $request)
    {
        $order->is_managed = true;
        $order->is_approved = true;
        $order->order_status_id = Order::ORDER_STATUS_BILLED;
        $order->save();

        return (object) [
            'message' => 'Orden actualizada correctamente',
            'order' => new OrderResource($order),
        ];
    }

    public function addObservation(Order $order, Request $request)
    {
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

<?php

namespace App\Services;

use App\Models\User;
use App\Models\Order;
use App\Models\OrderProblem;
use Illuminate\Http\Request;
use App\Models\MethodShipping;
use App\Models\OrderItemProblem;
use App\Http\Resources\OrderResource;

class OrderService
{
    const ORDER_STATUS_ON_HOLD = 1;
    const ORDER_STATUS_REJECTED = 2;
    const ACTION_APPROVE = 1;
    const ACTION_REJECT = 2;
    const ACTION_INFO = 3;

    public function listOrdersCda()
    {
        return Order::withOrderDetails()
                ->orderByRaw('order_status_id = 4 DESC')
                ->orderBy('created_at', 'ASC')
                ->where(function ($query) {
                        $query->whereIn('method_shipping_id', [MethodShipping::METHOD_SHIPPING_HERE])
                        ->where('order_status_id', Order::ORDER_STATUS_REJECTED);
                })->orWhere(function ($query) {
                    $query->whereIn('method_shipping_id', [MethodShipping::METHOD_SHIPPING_PICKUP, MethodShipping::METHOD_SHIPPING_DELIVERY])
                        ->whereIn('order_status_id', [Order::ORDER_STATUS_ON_HOLD, Order::ORDER_STATUS_REJECTED]);
                })->get();
    }

    public function listOrdersPickerAndReviewer($wareHouseCode)
    {
        if (!$this->isValidWarehouseForUser($wareHouseCode)) {
            throw new \Exception('No tiene permisos para acceder a esta bodega');
        }
        
        return Order::byWarehouse([$wareHouseCode])
                ->withOrderDetails()
                ->orderByRaw('order_status_id = 4 DESC')
                ->orderBy('created_at', 'ASC')
                ->where(function ($query) {
                    $query->whereIn('method_shipping_id', [MethodShipping::METHOD_SHIPPING_HERE])
                        ->whereNotIn('order_status_id', [Order::ORDER_STATUS_REJECTED, Order::ORDER_STATUS_REVIEWED]);
                })->orWhere(function ($query) {
                    $query->whereIn('method_shipping_id', [MethodShipping::METHOD_SHIPPING_PICKUP, MethodShipping::METHOD_SHIPPING_DELIVERY])
                        ->whereNotIn('order_status_id', [Order::ORDER_STATUS_REJECTED, Order::ORDER_STATUS_REVIEWED])
                        ->where('is_managed', true);
                })->get();
    }


    public function listOrdersBills($available = null)
    {
        $ordersQuery = Order::withOrderDetails()
            ->orderBy('created_at', 'ASC');

        switch ($available) {
            case 'pickup-here':
                $this->applyShippingAndStatusFilter($ordersQuery, [
                    MethodShipping::METHOD_SHIPPING_PICKUP, 
                    MethodShipping::METHOD_SHIPPING_HERE
                    ], 
                    [Order::ORDER_STATUS_REVIEWED]);
                break;

            case 'delivery':
                $this->applyShippingAndStatusFilter($ordersQuery, [
                    MethodShipping::METHOD_SHIPPING_DELIVERY
                    ], 
                    [Order::ORDER_STATUS_REVIEWED]);
                break;
        }

        return $ordersQuery->get();
    }

    public function listOrdersPayment()
    {
        return Order::withOrderDetails()
            ->orderBy('created_at', 'ASC')
            ->whereIn('order_status_id', [Order::ORDER_STATUS_REVIEWED])
            ->get();
    }

    private function applyShippingAndStatusFilter($query, $shippingMethods, $orderStatus)
    {
        $query->whereIn('method_shipping_id', $shippingMethods)
            ->whereIn('order_status_id', $orderStatus);
    }

    public function processOrderAction(Order $order, Request $request)
    {
        $order->is_managed = true;
        switch ($request->responsible):
            case 'cda':
                switch ($request->action):
                    case self::ACTION_APPROVE:
                        $this->updateOrderStatus($order, Order::ORDER_STATUS_ON_HOLD, $request);
                        $order->is_approved = true;
                        break;
                    case self::ACTION_REJECT:
                        $this->updateOrderStatus($order, Order::ORDER_STATUS_REJECTED, $request);
                        $this->assingProbelmsOrder($order, $request);
                        $order->is_approved = false;
                        break;  
                    case self::ACTION_INFO:
                        $order->is_managed = true;
                        break;  
                endswitch;    
                break;
            case 'picker':
                if($request->action){
                    $this->updateOrderStatus($order, Order::ORDER_STATUS_REVIEWER, $request);
                }else{
                    $this->updateOrderStatus($order, Order::ORDER_STATUS_REJECTED, $request);
                    $this->assingProbelmsOrderItems($order, $request);
                    $order->is_approved = false;
                    $order->is_managed = false;
                }
                break;
            case 'reviewer':
                if($request->action){
                    $this->updateOrderStatus($order, Order::ORDER_STATUS_REVIEWED, $request);
                }else{
                    $this->updateOrderStatus($order, Order::ORDER_STATUS_REJECTED, $request);
                    $this->assingProbelmsOrderItems($order, $request);
                    $order->is_approved = false;
                    $order->is_managed = false;
                }
                break;
            default:
                throw new \Exception('Rol no válido');
                break;
        endswitch;

        
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

    public function updateOrderStatus(Order $order, $OrderStatus, Request $request = null)
    {
        $order->order_status_id = $OrderStatus;
        $result = $order->assignResponsible($request->responsible);
        $order->save();
        return $result;
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

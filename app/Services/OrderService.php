<?php

namespace App\Services;

use App\Models\Order;
use App\Models\OrderProblem;
use Illuminate\Http\Request;
use App\Models\MethodShipping;
use App\Http\Resources\OrderResource;

class OrderService
{
    const ORDER_STATUS_ON_HOLD = 1;
    const ORDER_STATUS_REJECTED = 2;
    const ACTION_APPROVE = 1;
    const ACTION_REJECT = 2;

    public function listOrders($available = null){
        
        $ordersQuery = Order::withOrderDetails()
            ->orderByRaw('order_status_id = 4 DESC') 
            ->orderBy('created_at', 'ASC');

        if($available == 'cda'){

            $ordersQuery->where(function ($query) {
                $query->whereIn('method_shipping_id', [MethodShipping::METHOD_SHIPPING_HERE]) 
                    ->where('order_status_id', Order::ORDER_STATUS_REJECTED);
            })
            ->orWhere(function ($query) {
                $query->whereIn('method_shipping_id', [MethodShipping::METHOD_SHIPPING_PICKUP, MethodShipping::METHOD_SHIPPING_DELIVERY]) 
                    ->whereIn('order_status_id', [Order::ORDER_STATUS_ON_HOLD, Order::ORDER_STATUS_REJECTED]);
            });

        }else if($available == 'picker-revisor'){

            $ordersQuery->where(function ($query) {
                $query->whereIn('method_shipping_id', [MethodShipping::METHOD_SHIPPING_HERE]) // method_shipping_id igual a 1
                      ->whereNotIn('order_status_id', [Order::ORDER_STATUS_REJECTED, Order::ORDER_STATUS_REVIEWED]); // order_status_id igual a 4
            })
            ->orWhere(function ($query) {
                $query->whereIn('method_shipping_id', [MethodShipping::METHOD_SHIPPING_PICKUP, MethodShipping::METHOD_SHIPPING_DELIVERY]) // method_shipping_id igual a 2 o 3
                      ->whereNotIn('order_status_id', [Order::ORDER_STATUS_REJECTED, Order::ORDER_STATUS_REVIEWED])
                      ->where('is_managed', true);
            });       
        }

        return $ordersQuery->get();;
    }

    public function processOrderAction(Order $order, Request $request)
    {
        switch ($request->responsible):
            case 'cda':
                switch ($request->action):
                    case self::ACTION_APPROVE:
                        $this->updateOrderStatus($order, Order::ORDER_STATUS_PICKED);
                        $order->is_approved = true;
                        break;
                    case self::ACTION_REJECT:
                        $this->updateOrderStatus($order, Order::ORDER_STATUS_REJECTED);
                        $this->assingProbelmsOrder($order, $request);
                        $order->is_approved = false;
                        break;  
                endswitch;    
                break;
            case 'picker':
                $this->updateOrderStatus($order, Order::ORDER_STATUS_REVIEWER);
                break;
            case 'reviewer':
                $this->updateOrderStatus($order, Order::ORDER_STATUS_REVIEWED);
                $this->assingProbelmsOrderItems($order, $request);
                $order->is_approved = false;
                break;
            default:
                throw new \Exception('Rol no válido');
                break;
        endswitch;

        $order->is_managed = true;
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
        if (count($request->orderItemsProble) > 0) {
            foreach ($request->orderItemsProble as $key => $orderItem) {
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

    public function updateOrderStatus(Order $order, $OrderStatus)
    {
        $order->order_status_id = $OrderStatus;
        $order->assignResponsible();
        $order->save();
    }
}

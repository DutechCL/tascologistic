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
        $order->is_managed = true;

        $message = 'Orden autorizada correctamente';
        
        if ($request->action == self::ACTION_APPROVE) {
            $this->approveOrder($order);
        } elseif ($request->action== self::ACTION_REJECT) {
            $this->rejectOrder($order, $request);
            $message = 'Orden rechazada correctamente';
        }

        $order->save();
        $order->assignResponsible();

        return (object) [
            'message' => $message,
            'order' => new OrderResource($order),
        ];
    }


    public function approveOrder(Order $order)
    {
        $order->order_status_id = Order::ORDER_STATUS_ON_HOLD;
        $order->is_approved = true;
    }

    public function rejectOrder(Order $order, Request $request)
    {
        $order->order_status_id = Order::ORDER_STATUS_REJECTED;
        $order->is_approved = false;

        if (count($request->problems) > 0) {
            foreach ($request->problems as $orderItem) {
                $this->updateOrInsertOrderProblem($order, $orderItem, $request);
            }
        }
    }

    public function updateOrInsertOrderProblem(Order $order, $orderItem, Request $request)
    {
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

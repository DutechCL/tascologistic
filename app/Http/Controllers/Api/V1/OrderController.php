<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use App\Models\OrderProblem;
use Illuminate\Http\Request;
use App\Models\OrderItemProblem;
use App\Models\ResponsibleRoles;
use App\Http\Controllers\Controller;
use App\Collections\OrdersCollection;

class OrderController extends Controller
{
    const METHOD_SHIPPING_HERE = 1;
    const METHOD_SHIPPING_PICKUP = 2;
    const METHOD_SHIPPING_DELIVERY = 3;

    const ORDER_STATUS_ON_HOLD = 1;
    const ORDER_STATUS_PICKED = 2;
    const ORDER_STATUS_REVIEWER = 3;
    const ORDER_STATUS_REJECTED = 4;
    const ORDER_STATUS_REVIEWED = 5;
    const ORDER_STATUS_AUTHORIZED = 6;

    public function index()
    {
        $orders = Order::withOrderDetails()
        ->where(function ($query) {
            $query->whereIn('method_shipping_id', [self::METHOD_SHIPPING_HERE]) // method_shipping_id igual a 1
                  ->where('order_status_id', self::ORDER_STATUS_REJECTED); // order_status_id igual a 4
        })
        ->orWhere(function ($query) {
            $query->whereIn('method_shipping_id', [self::METHOD_SHIPPING_PICKUP, self::METHOD_SHIPPING_DELIVERY]) // method_shipping_id igual a 2 o 3
                  ->whereIn('order_status_id', [self::ORDER_STATUS_ON_HOLD, self::ORDER_STATUS_REJECTED]); // order_status_id igual a 1 o 4
                //   ->where('is_approved', true);
        })
        ->orderByRaw('order_status_id = 4 DESC') 
        ->orderBy('created_at', 'ASC') 
        ->get();

        return (new OrdersCollection($orders))->toJson();
    }

    public function getOrdersByMethodShipping(Request $request)
    {
        $orders = Order::with([
            'customer', 
            'orderStatus', 
            'methodShipping', 
        ])
        ->whereIn('method_shipping_id', $request->method_shipping_ids) // method_shipping_id igual a 2 o 3
        ->whereNot('order_status_id', 4)
        ->get();

        // Devolver los datos como respuesta JSON
        return response()->json($orders);
    }

    public function getOrdersByParams(Request $request)
    {
        $ordersQuery = Order::withOrderDetails();
        
        if ($request->methodShippingId) {
            $ordersQuery->whereIn('method_shipping_id', $request->methodShippingId);
        }
        
        if ($request->ordersStatusId) {
            $ordersQuery->whereIn('order_status_id', $request->ordersStatusId);
        }

        
        $orders = $ordersQuery->get();

        // Devolver los datos como respuesta JSON
        return (new OrdersCollection($orders))->toJson();
    }

    public function show($id)
    {
        $order = Order::withOrderDetails()
        ->where('id', $id)
        ->first();

        // Devolver los datos como respuesta JSON
        return response()->json($order);
    }

    public function update(Request $request, $id)
    {
        $order_status_id = $request->responsible == 'picker' ? self::ORDER_STATUS_PICKED : self::ORDER_STATUS_REVIEWER;
        $order = Order::find($id);
        $order->order_status_id = $order_status_id;
        $order->save();

        $responsibles = ResponsibleRoles::where('slug', $request->responsible)->first();
        $user = auth()->user();

        $order->responsibles()->create([
            'order_id' => $id,
            'responsible_role_id' => $responsibles->id,
            'user_id' => $user->id,
            // otros campos si los tienes
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Orden actualizado con éxito',
            'order' => $order
        ]
        );

    }

    public function postActionOrder(Request $request)
    {
        $order = Order::find($request->order_id);
        $order->is_managed = true;

        if($request->action == 1)
        {
            $order->order_status_id = self::ORDER_STATUS_ON_HOLD;
            $order->is_approved = true;
        }
        else if($request->action == 2)
        {
            $order->order_status_id = self::ORDER_STATUS_REJECTED;

            foreach ($request->problems as $orderItem) {
                $orderProblem = OrderProblem::updateOrCreate(
                    [
                        'order_id' => $request->order_id,
                        'problem_id' => $orderItem['id'],
                    ],
                    [
                        'order_id' => $request->order_id,
                        'problem_id' => $orderItem['id'],
                        'other' => $orderItem['title'] === 'Otro' ? $request->other : null,
                    ]
                );
            }
        }

        $order->save();
        $responsibles = ResponsibleRoles::where('slug', $request->responsible)->first();
        $user = auth()->user();

        $order->responsibles()->create([
            'order_id' => $order->id,
            'responsible_role_id' => $responsibles->id,
            'user_id' => $user->id,
            // otros campos si los tienes
        ]);
        $orderUpdate = Order::withOrderDetails()->where('id', $order->id)->get();
        $jsonOrder = (new OrdersCollection($orderUpdate))->toJson();
        $jsonOrder = json_decode($jsonOrder, false)->data;

        return response()->json([
            'status' => 'success',
            'message' => 'Orden actualizada',
            'order_id' => $order->id,
            'order' => reset($jsonOrder)
        ]
        );
    }

    public function getProcessedOrders(){
        $orders = Order::withOrderDetails()
            ->where(function ($query) {
                $query->whereIn('method_shipping_id', [self::METHOD_SHIPPING_HERE]) // method_shipping_id igual a 1
                      ->whereNotIn('order_status_id', [4,5]); // order_status_id igual a 4
            })
            ->orWhere(function ($query) {
                $query->whereIn('method_shipping_id', [self::METHOD_SHIPPING_PICKUP, self::METHOD_SHIPPING_DELIVERY]) // method_shipping_id igual a 2 o 3
                      ->whereNotIn('order_status_id', [4,5])
                      ->where('is_managed', true);
            })
            ->get(); 

            // Devolver los datos como respuesta JSON
            return (new OrdersCollection($orders))->toJson();
    }

    public function processOrderPickerAndReviewer(Request $request){

        $order = Order::find($request->orderId);

        if($request->isSuccessOrder){
            $order->order_status_id = $request->responsible == 'picker' ? self::ORDER_STATUS_REVIEWER : self::ORDER_STATUS_REVIEWED;
        }else{
            $order->order_status_id = 4;
            $order->is_approved = false;

            $orderItems = $request->orderItemsProblem;

            foreach ($orderItems as $key => $orderItem) {
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

        $order->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Orden actualizado con éxito'
        ]
        );
    }
}

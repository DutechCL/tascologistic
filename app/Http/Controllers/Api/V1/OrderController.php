<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\OrderItemProblem;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    const METHOD_SHIPPING_HERE = 1;
    const METHOD_SHIPPING_PICKUP = 2;
    const METHOD_SHIPPING_DELIVERY = 3;
    const ORDER_STATUS_ON_HOLD = 1;
    const ORDER_STATUS_PICKED = 2;

    public function index()
    {
        $orders = Order::with([
            'customer', 
            'orderStatus', 
            'methodShipping', 
            'orderItems'=> function ($query) {
                // Utilizar una subconsulta para cargar los campos necesarios de la relación 'product'
                $query->select(['order_items.*', 'products.ItemDescription as ItemDescription'])
                ->with(
                    ['problems' => function ($query) {
                        // Utilizar una subconsulta para cargar los campos necesarios de la relación 'product'
                        $query->select(['order_item_problems.*', 'problems.title as problem_name'])
                        ->join('problems', 'problems.id', '=', 'order_item_problems.problem_id');
                    }])
                ->join('products', 'products.id', '=', 'order_items.product_id');
            }
        ])
        ->where(function ($query) {
            $query->whereIn('method_shipping_id', [self::METHOD_SHIPPING_HERE]) // method_shipping_id igual a 1
                  ->where('order_status_id', 4); // order_status_id igual a 4
        })
        ->orWhere(function ($query) {
            $query->whereIn('method_shipping_id', [self::METHOD_SHIPPING_PICKUP, self::METHOD_SHIPPING_DELIVERY]) // method_shipping_id igual a 2 o 3
                  ->whereIn('order_status_id', [1, 4]); // order_status_id igual a 1 o 4
        })
        ->get();

        // Devolver los datos como respuesta JSON
        return response()->json($orders);
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

    public function show($id)
    {
        $order = Order::with([
            'customer', 
            'orderStatus', 
            'methodShipping', 
            'orderItems'=> function ($query) {
                // Utilizar una subconsulta para cargar los campos necesarios de la relación 'product'
                $query->select(['order_items.*', 'products.ItemDescription as ItemDescription'])
                ->join('products', 'products.id', '=', 'order_items.product_id');
            }
        ])
        ->where('id', $id)
        ->first();

        // Devolver los datos como respuesta JSON
        return response()->json($order);
    }

    public function store(Request $request)
    {

    }

    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {

    }

    public function authorizerAction(Request $request)
    {

        $order = Order::find($request->order_id);
        if($request->action == 2){
        }
        $order->is_approved = true;
        $order->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Orden actualizado con éxito'
        ]
        );
    }

    public function authorizerList(){
        $orders = Order::with([
            'customer', 
            'orderStatus', 
            'responsibles',
            'methodShipping', 
            'orderItems'=> function ($query) {
                // Utilizar una subconsulta para cargar los campos necesarios de la relación 'product'
                $query->select(['order_items.*', 'products.ItemDescription as ItemDescription'])
                ->join('products', 'products.id', '=', 'order_items.product_id');
            }
            ])
            ->orWhere(function ($query) {
                $query->whereIn('method_shipping_id', [self::METHOD_SHIPPING_PICKUP, self::METHOD_SHIPPING_DELIVERY, self::METHOD_SHIPPING_HERE]) // method_shipping_id igual a 2 o 3
                      ->whereIn('order_status_id', [1,]); // order_status_id igual a 1 o 4
            })
            ->get(); 

        // Devolver los datos como respuesta JSON
        return response()->json($orders);
    }

    public function reportProblem(Request $request){
        if($request->has_problems){
            $order = Order::find($request->order_id);
            $order->order_status_id = 4;
            $order->save();

            $orderItems = $request->order_items;

            foreach ($orderItems as $key => $orderItem) {
                $orderItem = OrderItemProblem::UpdateOrCreate([
                    'order_item_id' => $orderItem['id'],
                ],
                [
                    'order_item_id' => $orderItem['id'],
                    'problem_id' => $orderItem['problems'][0]['id'],
                ]
                );
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Orden actualizado con éxito'
        ]
        );
    }
}

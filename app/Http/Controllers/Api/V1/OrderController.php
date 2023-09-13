<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
use App\Models\Order;
use App\Models\Product;
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
    const ORDER_STATUS_REVIEWED = 5;

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
                  ->whereIn('order_status_id', [1, 4]) // order_status_id igual a 1 o 4
                  ->where('is_approved', false);
        })
        ->orderByRaw('order_status_id = 4 DESC') 
        ->get();

        // Devolver los datos como respuesta JSON
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
        $ordersQuery = Order::with([
            'customer', 
            'orderStatus', 
            'methodShipping', 
            'orderItems'=> function ($query) {
                // Utilizar una subconsulta para cargar los campos necesarios de la relación 'product'
                $query->select(['order_items.*', 'products.ItemDescription as ItemDescription'])
                ->join('products', 'products.id', '=', 'order_items.product_id');
            }
        ]);
        
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
        $order_status_id = $request->responsible == 'picker' ? self::ORDER_STATUS_PICKED : self::ORDER_STATUS_REVIEWER;
        $order = Order::find($id);
        $order->order_status_id = $order_status_id;
        $order->save();

        $responsibles = ResponsibleRoles::where('slug', $request->responsible)->first();
        $user = User::find(1); // Supongamos que quieres obtener el usuario con ID 1.

        $order->responsibles()->create([
            'order_id' => $id,
            'responsible_role_id' => $responsibles->id,
            'user_id' => $user->id,
            // otros campos si los tienes
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Orden actualizado con éxito'
        ]
        );

    }

    public function destroy($id)
    {

    }

    public function authorizerAction(Request $request)
    {

        $order = Order::find($request->order_id);
        if($request->action == 1){
            $order->order_status_id = self::ORDER_STATUS_ON_HOLD;
            $order->is_approved = true;
            $order->save();

            $responsibles = ResponsibleRoles::where('slug', $request->responsible)->first();
            $user = User::find(1); 
    
            $order->responsibles()->create([
                'order_id' => $order->id,
                'responsible_role_id' => $responsibles->id,
                'user_id' => $user->id,
                // otros campos si los tienes
            ]);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Orden autorizada'
        ]
        );
    }

    public function authorizerList(){
        $orders = Order::with([
            'customer', 
            'orderStatus', 
            'methodShipping', 
            'responsibles',
            'orderItems'=> function ($query) {
                // Utilizar una subconsulta para cargar los campos necesarios de la relación 'product'
                $query->select(['order_items.*', 'products.ItemDescription as ItemDescription'])
                ->join('products', 'products.id', '=', 'order_items.product_id');
            }
            ])
            ->where(function ($query) {
                $query->whereIn('method_shipping_id', [self::METHOD_SHIPPING_HERE]) // method_shipping_id igual a 1
                      ->whereNotIn('order_status_id', [4,5]); // order_status_id igual a 4
            })
            ->orWhere(function ($query) {
                $query->whereIn('method_shipping_id', [self::METHOD_SHIPPING_PICKUP, self::METHOD_SHIPPING_DELIVERY]) // method_shipping_id igual a 2 o 3
                      ->whereNotIn('order_status_id', [4,5])
                      ->where('is_approved', true); // order_status_id igual a 1 o 4
            })
            ->get(); 

            // Devolver los datos como respuesta JSON
            return (new OrdersCollection($orders))->toJson();
    }

    public function processOrderPickerAndReviewer(Request $request){

        $order = Order::find($request->orderId);

        if($request->isSuccessOrder){
            
            $order->order_status_id = $request->responsible == 'picker' ? self::ORDER_STATUS_REVIEWER : self::ORDER_STATUS_REVIEWED;
            $order->save();

        }else{
            $order->order_status_id = 4;
            $order->is_approved = false;
            $order->save();

            $orderItems = $request->orderItemsProblem;

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

<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use App\Models\OrderProblem;
use Illuminate\Http\Request;
use App\Models\MethodShipping;
use App\Services\OrderService;
use App\Models\OrderItemProblem;
use App\Models\ResponsibleRoles;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\Controller;
use App\Collections\OrdersCollection;
use App\Http\Resources\OrderResource;
use App\Exceptions\OrderNotFoundException;

class OrderController extends Controller
{
    protected OrderService $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getOrdersCda()
    {
        try {

            $orders = $this->orderService->listOrders('cda');

            return $this->success(
                OrderResource::collection($orders)->resolve()
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function getOrdersPickerAndReviewer()
    {
        try {

            $orders = $this->orderService->listOrders('picker-revisor');

            return $this->success(
                OrderResource::collection($orders)->resolve()
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function postActionOrder(Request $request)
    {
        try {
            $order = Order::findOrFail($request->order_id);
            $result = $this->orderService->processOrderAction($order, $request);

            return response()->json([
                'status' => 'success',
                'message' => $result->message,
                'order' => $result->order,
            ]);

        } catch (OrderNotFoundException $exception) {

            throw $exception;

        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error interno del servidor. Por favor, inténtalo de nuevo más tarde.'
            ], 500);
        }
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
        $order_status_id = $request->responsible == 'picker' ? Order::ORDER_STATUS_PICKED : Order::ORDER_STATUS_REVIEWER;
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

    public function processOrderPickerAndReviewer(Request $request){

        $order = Order::find($request->orderId);

        if($request->isSuccessOrder){
            $order->order_status_id = $request->responsible == 'picker' ? Order::ORDER_STATUS_REVIEWER : Order::ORDER_STATUS_REVIEWED;
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
        $order->assignResponsible();

        $orderUpdate = Order::withOrderDetails()->where('id', $order->id)->get();
        $jsonOrder = (new OrdersCollection($orderUpdate))->toJson();
        $jsonOrder = json_decode($jsonOrder, false)->data;

        return response()->json([
            'status' => 'success',
            'message' => 'Orden actualizada',
            'order' => reset($jsonOrder)
        ]
        );
    }
}

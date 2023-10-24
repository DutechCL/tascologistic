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

            $orders = $this->orderService->listOrdersCda();

            return $this->success(
                OrderResource::collection($orders)->resolve()
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function getOrdersPickerAndReviewer($wareHouseCode)
    {
        try {
            $orders = $this->orderService->listOrdersPickerAndReviewer($wareHouseCode);

            return $this->success(
                OrderResource::collection($orders)->resolve()
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function getOrdersBillPickupAndHere()
    {
        try {

            $orders = $this->orderService->listOrdersBills('pickup-here');

            return $this->success(
                OrderResource::collection($orders)->resolve()
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function getOrdersBillDelivery()
    {
        try {

            $orders = $this->orderService->listOrdersBills('delivery');

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
    public function processOrderAction(Request $request)
    {
        try {
            $order = Order::findOrFail($request->orderId);
            $result = $this->orderService->processOrderAction($order, $request);

            return response()->json([
                'status' => 'success',
                'message' => $result->message,
                'order' => $result->order,
            ]);

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function addObservation(Request $request)
    {
        try {
            $order = Order::findOrFail($request->orderId);
            $result = $this->orderService->addObservation($order, $request);

            return response()->json([
                'status' => 'success',
                'message' => $result->message,
                'order' => $result->order,
            ]);

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function assingResponsible(Request $request, $id)
    {
        try {
            $order = Order::findOrFail($id);
            
            switch ($request->responsible) {
                case 'picker':
                    $orderStatusId = Order::ORDER_STATUS_PICKED;
                    break;
                case 'reviewer':
                    $orderStatusId = Order::ORDER_STATUS_REVIEWER;
                    break;
                default:
                    throw new \Exception('Rol no válido');
                    break;
            }
        
            $result = (object) $this->orderService->updateOrderStatus($order, $orderStatusId, $request);

            return response()->json([
                'status' =>  $result->status,
                'message' => $result->message,
                'order' => new OrderResource($order),
            ]);

        } catch (OrderNotFoundException $exception) {

            throw $exception;

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
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
}

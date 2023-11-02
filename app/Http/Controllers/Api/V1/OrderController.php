<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use App\Models\OrderStatus;
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

    public function getOrdersCdaToManager()
    {
        try {
            $orders = $this->orderService->listOrdersCdaToManage();

            return $this->success(
                OrderResource::collection($orders)->resolve()
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function getOrdersCdaManage()
    {
        try {
            $orders = $this->orderService->listOrdersCdaManage();

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
            $orders = $this->orderService->listOrdersPickerReviewer($wareHouseCode);

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
            $orders = $this->orderService->listOrdersBills(MethodShipping::METHOD_SHIPPING_HERE);

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
            $orders = $this->orderService->listOrdersBills(MethodShipping::METHOD_SHIPPING_DELIVERY);

            return $this->success(
                OrderResource::collection($orders)->resolve()
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function getOrdersPayment()
    {
        try {
            $orders = $this->orderService->listOrdersPayment();

            return $this->success(
                OrderResource::collection($orders)->resolve()
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function processOrderCda(Request $request)
    {
        try {
            $result = $this->orderService->processOrderCda($request);

            return $this->success(
                $result->order,
                $result->message
            );

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function processOrderPickerReviewer(Request $request)
    {
        try {
            $result = $this->orderService->processOrderPickerReviewer($request);
            
            return $this->success(
                $result->order,
                $result->message
            );

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function addObservation(Request $request)
    {
        try {
            $result = $this->orderService->addObservation($request);

            return $this->success(
                $result->order,
                $result->message
            );

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function generateDocument($document, $orderId)
    {
        try {
            $result = $this->orderService->generateDocument($document, $orderId);

            return $this->success(
                $result->order,
                $result->message
            );

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function assingResponsible(Request $request)
    {
        try {

            $result = $this->orderService->assingResponsible($request);

            return $this->success(
                $result->order,
                $result->message
            );

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
        ->whereIn('method_shipping_id', $request->method_shipping_ids)
        ->whereNot('order_status_id', 4)
        ->get();

        return response()->json($orders);
    }
}

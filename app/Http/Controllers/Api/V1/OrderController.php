<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\MethodShipping;
use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Services\Order\OrderQueryService;
use App\Services\Order\OrderManagementService;

class OrderController extends Controller
{
    public function __construct(
        protected OrderQueryService $orderQueryService,
        protected OrderManagementService $orderManagementService,
    ){}

    public function getOrdersCdaToManager()
    {
        try {
            $orders = $this->orderQueryService->listOrdersCdaToManage();

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
            $orders = $this->orderQueryService->listOrdersCdaManage();

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
            $orders = $this->orderQueryService->listOrdersPickerReviewer($wareHouseCode);

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
            $orders = $this->orderQueryService->listOrdersBills(MethodShipping::METHOD_SHIPPING_HERE);

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
            $orders = $this->orderQueryService->listOrdersBills(MethodShipping::METHOD_SHIPPING_DELIVERY);

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
            $orders = $this->orderQueryService->listOrdersPayment();

            return $this->success(
                OrderResource::collection($orders)->resolve()
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function getOrdersTracker($type)
    {
        try {

            $orders = $this->orderQueryService->listOrdersTracker($type);

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
            $result = $this->orderManagementService->processOrderCda($request);

            return $this->success(
                OrderResource::collection($result->orders)->resolve(),
                $result->message
            );

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function processOrderPickerReviewer(Request $request)
    {
        try {
            $result = $this->orderManagementService->processOrderPickerReviewer($request);
            
            return $this->success(
                $result->order,
                $result->message
            );

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function processOrderBiller(Request $request)
    {
        try {
            $result =  $this->orderManagementService->processOrderBiller($request);
            
            if ($result->status == 'success') {
                return $this->success(
                    $result->order,
                    $result->message
                );
            } else {
                return $this->error(
                    $result->message,
                    $result->statusCode ?? Response::HTTP_BAD_REQUEST,
                    Response::HTTP_BAD_REQUEST,
                    $result->order,
                );
            }
    
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function addObservation(Request $request)
    {
        try {
            $result = $this->orderManagementService->addObservation($request);

            return $this->success(
                $result->order,
                $result->message
            );

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function assignResponsible(Request $request)
    {
        try {

            $result = $this->orderManagementService->assignResponsible($request);

            return $this->success(
                $result->order,
                $result->message
            );

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function searchOrders(Request $request)
    {
        try {

            $orders = $this->orderQueryService->searchOrders($request);

            return $this->success(
                OrderResource::collection($orders)->resolve()
            );

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }
}

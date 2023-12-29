<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Mockery\Generator\Method;
use App\Models\MethodShipping;
use App\Http\Controllers\Controller;
use App\Http\Exports\DispatchExport;
use Maatwebsite\Excel\Facades\Excel;
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

    public function getOrdersBillManage($methodShipping)   
    {
        try {
            $orders = $this->orderQueryService->listOrderBillManage($methodShipping);

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

    public function getOrdersDispatch()
    {
        try {
            $orders = $this->orderQueryService->listOrdersDispatch();

            return $this->success(
                OrderResource::collection($orders)->resolve()
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function getOrdersDispatchManage()
    {
        try {
            $orders = $this->orderQueryService->listOrdersDispatchManage();

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

    public function getWarehouses()
    {
        try {
            $warehouses = $this->orderQueryService->listWarehouses();

            return $this->success(
                $warehouses
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
                    401,
                    401,
                    $result->order,
                );
            }
    
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function returnProcessOrderBiller(Request $request)
    {
        try {
            $order =  $this->orderManagementService->returnProcessOrderBiller($request);
            
            return $this->success(
                $order,
                'La orden regreso al proceso de gestión'
            );

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

    public function exportDispatch(Request $request)
    {
        try {
            $orderIds = explode(',', $request->query('ids'));
    
            $orders = $this->orderQueryService
                ->listOrdersDispatch(false)
                ->whereIn('id', $orderIds)
                ->get();

            

            return Excel::download(new DispatchExport($orders), 'Ordenes despachadas '.date('Y-m-d H:i:s').'.xlsx');
    
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function markAsExported(Request $request)
    {
        try {
            $orderIds = explode(',', $request->ids);

            Order::whereIn('id', $orderIds)->update(['is_dispatched' => true]);

            $allDispatched = Order::whereIn('id', $orderIds)
                                  ->where('is_dispatched', true)
                                  ->count() === count($orderIds);
    
            if ($allDispatched) {
                return response()->json(['export' => true, 'message' => 'Todas las órdenes están marcadas como despachadas']);
            } else {
                return response()->json(['export' => false, 'message' => 'Algunas órdenes no están marcadas como despachadas']);
            }
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }
}

<?php

namespace App\Services;

use App\Models\Order;
use App\Models\Process;
use App\Models\OrderStatus;
use App\Models\MethodShipping;

class ProcessService
{
    // public function classifyOrdersByProcess($order)
    // {
    //     switch ($order->method_shipping_id):
    //         case MethodShipping::METHOD_SHIPPING_HERE:
    //             $order->order_status_id = OrderStatus::STATUS_ON_PICKER;
    //             $order->process_id = Process::PROCESS_ID_PICKER;
    //             break;
    //         case MethodShipping::METHOD_SHIPPING_PICKUP:
    //         case MethodShipping::METHOD_SHIPPING_DELIVERY:
    //             $order->order_status_id = OrderStatus::STATUS_ON_HOLD;
    //             $order->process_id = Process::PROCESS_ID_CDA;
    //             break;
    //     endswitch;

    //     $order->save();
        
    //     return $order;
    // }

    // public function updateClassfyOrdersByProcess($order)
    // {
    //     switch($order->order_status_id):
    //         case OrderStatus::STATUS_ON_PICKER:
    //         case OrderStatus::STATUS_PICKED:
    //             $order->process_id = Process::PROCESS_ID_PICKER;
    //             break;
    //         case OrderStatus::STATUS_ON_REVIEWER:
    //             $order->process_id = Process::PROCESS_ID_REVIEWER;
    //             break;
    //         case OrderStatus::STATUS_REJECTED:
    //         case OrderStatus::STATUS_ON_HOLD:
    //             $order->process_id = Process::PROCESS_ID_CDA;
    //             break;
    //         case OrderStatus::STATUS_REVIEWED:
    //             $order->process_id = Process::PROCESS_ID_BILLS;
    //             break;
    //         case OrderStatus::STATUS_BILLED:
    //             $order->process_id = Process::PROCESS_ID_PAYMENT;
    //             break;
    //     endswitch;

    //     $order->save();

    //     return $order;
    // }
}
<?php

namespace App\Observers;

use App\Models\Order;
use App\Models\Process;
use App\Models\OrderStatus;
use App\Models\MethodShipping;

class OrderObserver
{
    public function created(Order $order)
    {
        switch ($order->U_SBO_FormaEntrega):
            case 'Cliente aqui':
                $order->order_status_id = OrderStatus::STATUS_ON_PICKER;
                $order->process_id = Process::PROCESS_ID_PICKER;
                break;
            default:
                $order->order_status_id = OrderStatus::STATUS_ON_HOLD;
                $order->process_id = Process::PROCESS_ID_CDA;
                break;
        endswitch;        

        $order->save();
        return $order;
    }

    public function updating(Order $order)
    {
        switch($order->order_status_id):
            case OrderStatus::STATUS_ON_PICKER:
                $order->process_id = Process::PROCESS_ID_PICKER;
                break;
            case OrderStatus::STATUS_PICKED:
            case OrderStatus::STATUS_ON_REVIEWER:
                $order->process_id = Process::PROCESS_ID_REVIEWER;
                break;
            case OrderStatus::STATUS_REJECTED:
            case OrderStatus::STATUS_ON_HOLD:
                $order->process_id = Process::PROCESS_ID_CDA;
                break;
            case OrderStatus::STATUS_REVIEWED:
                $order->process_id = Process::PROCESS_ID_BILLS;
                break;
            case OrderStatus::STATUS_BILLED:
                $order->process_id = Process::PROCESS_ID_PAYMENT;
                break;
        endswitch;
    }

    public function deleted(Order $order)
    {
        // Lógica a ejecutar después de eliminar un modelo Order
    }
}

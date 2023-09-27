<?php

namespace App\Collections;

use Illuminate\Support\Collection;
use App\Collections\ProductsCollection;

class OrdersCollection extends Collection
{
    public function toJson($options = 0)
    {
        return json_encode([
            'data' => $this->map(function ($item) {
                $orderItems = (object) (new ProductsCollection($item->orderItems))->toArray();

                $picker = $item->responsibles->where('responsible_role_id', 1)->first();
                $revisor = $item->responsibles->where('responsible_role_id', 2)->first();
                $authorizer = $item->responsibles->where('responsible_role_id', 3)->first();
                $preparer = $item->responsibles->where('responsible_role_id', 4)->first();
                return [
                    'id' => $item->id,
                    'Comments' => $item->Comments,
                    'DocDate' => $item->DocDate,
                    'DocEntry' => $item->DocEntry,
                    'DocNum' => $item->DocNum,
                    'DocTime' => $item->DocTime,
                    'DocTotal' => $item->DocTotal,
                    'U_SBO_FormaEntrega' => $item->U_SBO_FormaEntrega,
                    'Customer' => $item->customer,
                    'MethodShippingId' => $item->method_shipping_id,
                    'MethodShippingName' => $item->methodShipping->name,
                    'OrderItems' => $orderItems->data,
                    'OrderStatusId' => $item->order_status_id,
                    'OrderStatusName' => $item->orderStatus->name,
                    'SalesPersonCode' => $item->SalesPersonCode,
                    'SalesEmployeeName' => $item->SalesEmployeeName,
                    'ResponsibleAuthorizerId' => $authorizer ? $authorizer->user->id : null,
                    'ResponsibleAuthorizerName' => $authorizer ? $authorizer->user->name : null,
                    'ResponsiblePickerId' => $picker ? $picker->user->id : null,
                    'ResponsiblePickerName' => $picker ? $picker->user->name : null,
                    'ResponsibleReviewerId' => $revisor ? $revisor->user->id : null,
                    'ResponsibleReviewerName' => $revisor ? $revisor->user->name : null,
                    'ResponsiblePreparerId' => $preparer ? $preparer->user->id : null,
                    'ResponsiblePreparerName' => $preparer ? $preparer->user->name : null,
                ];
            }),
        ], $options);
    }
}

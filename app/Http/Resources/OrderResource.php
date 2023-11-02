<?php
// app/Http/Resources/OrderResource.php
namespace App\Http\Resources;

use App\Models\Problem;
use App\Http\Resources\OrderResource;
use App\Collections\ProductsCollection;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    public function toArray($request)
    {
        $orderItems = ProductResource::collection($this->orderItems)->resolve();

        // Define la estructura de la respuesta para una sola orden
        
        return [
            'id' => $this->id,
            'Comments' => $this->Comments,
            'DocDate' => $this->DocDate,
            'DocEntry' => $this->DocEntry,
            'DocNum' => $this->DocNum,
            'DocTime' => $this->DocTime,
            'DocTotal' => '$' . number_format($this->DocTotal, 0, '.', ','),
            'Customer' => $this->customer,
            'U_SBO_FormaEntrega' => $this->U_SBO_FormaEntrega,
            'method_shipping_id' => $this->method_shipping_id,
            'MethodShippingName' => ucfirst(str_replace('Cliente ', '', optional($this->methodShipping)->name)),
            'OrderStatusName' => optional($this->orderStatus)->name,
            'OrderStatusColor' => optional($this->orderStatus)->color,
            'OrderItems' => $orderItems,
            'order_status_id' => $this->order_status_id,
            'SalesPersonCode' => $this->SalesPersonCode,
            'SalesEmployeeName' => $this->SalesEmployeeName,
            'other' => $this->other,
            'is_managed' => $this->is_managed,
            'HasProblems' => $this->problems->count() > 0,
            'Responsibles' => $this->responsibles,
            'updated_at' => $this->updated_at,
            'observation' => $this->observation,
            'process_id' => $this->process_id,
            'Problems' => $this->problems->map(function ($problem) {
                return [
                    'id' => $problem->id,
                    'ProblemId' => $problem->problem_id,
                    'ProblemName' => Problem::find($problem->problem_id)->title,
                    'Other' => $problem->other,
                ];
            }),
        ];
    }
}

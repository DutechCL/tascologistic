<?php
namespace App\Http\Resources;

use App\Models\Problem;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    public function toArray($request)
    {
        $orderItems = ProductResource::collection($this->orderItems)->resolve();

        $location = [
            'cda'      => 'CDA',
            'picker'   => 'Bodega',
            'reviewer' => 'Bodega',
            'biller'   => 'Facturador',
            'payment'  => 'Pagos',
            'dispatch' => 'Despacho',
        ];
        
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
            'U_SBO_FormaPago' => $this->U_SBO_FormaPago,
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
            'report_user_id' => $this->report_user_id,
            'report_user_responsibles' => $this->report_user_responsible,
            'report_problem_location' => $this->report_user_responsible ? $location[$this->report_user_responsible] : null,
            'report_user_name' => $this->report_user_name,
            'has_problems' => $this->has_problems,
            'is_resolved' => $this->is_resolved,
            'Indicator' => $this->indicator,
            'warehouse' => $this->warehouse,
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

<?php
// app/Http/Resources/OrderResource.php
namespace App\Http\Resources;

use App\Models\Problem;
use App\Collections\ProductsCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'ItemDescription' => $this->ItemDescription,
            'ItemCode' => $this->ItemCode,
            'LineTotal' => $this->LineTotal,
            'Price' => $this->Price,
            'Quantity' => $this->Quantity,
            'product_id' => $this->product_id,
            'U_SBO_StockVentas' => $this->U_SBO_StockVentas,
            'WarehouseCode' => $this->WarehouseCode,
            'Problems' => $this->problems->map(function ($problem) {
                return [
                    'id' => $problem->id,
                    'ProblemId' => $problem->problem_id,
                    'ProblemName' => $problem->other == null ? Problem::find($problem->problem_id)->title : $problem->other,
                ];
            }),
        ];
    }
}

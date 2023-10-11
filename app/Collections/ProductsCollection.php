<?php

namespace App\Collections;

use App\Models\Problem;
use Illuminate\Support\Collection;

class ProductsCollection extends Collection
{
    public function toArray()
    {
        return [
            'data' => $this->map(function ($item) {
                return [
                    'id' => $item->id,
                    'ItemDescription' => $item->ItemDescription,
                    'ItemCode' => $item->ItemCode,
                    'LineTotal' => $item->LineTotal,
                    'Price' => $item->Price,
                    'Quantity' => $item->Quantity,
                    'product_id' => $item->product_id,
                    'Problems' => $item->problems->map(function ($problem) {
                        return [
                            'id' => $problem->id,
                            'ProblemId' => $problem->problem_id,
                            'ProblemName' => Problem::find($problem->problem_id)->title,
                            'Other' => $problem->other,
                        ];
                    }),
                ];
            }),
        ];
    }
}

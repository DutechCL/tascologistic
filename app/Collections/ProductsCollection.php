<?php

namespace App\Collections;

use App\Models\Problem;
use Illuminate\Support\Collection;
use App\Http\Resources\OrderResource;

class ProductsCollection extends Collection
{
    public function toArray()
    {
        return [
            'data' => $this->map(function ($item) {
                return new OrderResource($item);
            }),
        ];
    }
}

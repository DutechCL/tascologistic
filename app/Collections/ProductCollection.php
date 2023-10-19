<?php

namespace App\Collections;

use App\Models\Problem;
use Illuminate\Support\Collection;
use App\Http\Resources\OrderResource;
use App\Http\Resources\ProductResource;

class ProductCollection extends Collection
{
    public $collects = ProductResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
    
}

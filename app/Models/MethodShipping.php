<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MethodShipping extends Model
{
    use CrudTrait;
    use HasFactory;

    const METHOD_SHIPPING_HERE = 1;
    const METHOD_SHIPPING_PICKUP = 2;
    const METHOD_SHIPPING_DELIVERY = 3;
    const METHOD_SHIPPING_PICKUP_SAMEX = 4;

    protected $fillable = [
        'name', 
        'description'
    ];
}

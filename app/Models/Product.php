<?php

namespace App\Models;

use App\Models\OrderItem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    const FILLABLE = [
        'ItemCode',
        'ItemName',
        'ItemsGroupCode',
        'QuantityOnStock',
        'DefaultWarehouse',
    ];

    const IDENTIFIER = 'ItemCode';

    protected $fillable = self::FILLABLE;

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}

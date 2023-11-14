<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use App\Models\OrderItem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use CrudTrait;
    use HasFactory;

    const FILLABLE = [
        'ItemCode',
        'ItemName',
        'ItemsGroupCode',
        'QuantityOnStock',
        'DefaultWarehouse',
        'CreateDate',
        'CreateTime',
        'UpdateDate',
        'UpdateTime',
    ];

    const IDENTIFIER = 'ItemCode';

    protected $fillable = self::FILLABLE;

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}

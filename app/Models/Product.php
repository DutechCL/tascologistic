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
    
    const IDENTIFIER = 'ItemCode';
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
    const SYNC_INFO = [
        'endpoint'   => 'products', // SAP endpoint confifgured in config/service.php
        'model'      => self::class,
        'fields'     => self::FILLABLE,
        'identifier' => self::IDENTIFIER,
        'method'     => 'updateOrCreate',
    ];

    protected $fillable = self::FILLABLE;

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}

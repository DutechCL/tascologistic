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

    protected $fillable = self::FILLABLE;

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public static function getSyncInfo()
    {
        $product = self::latest('CreateDate')->first();

        if ($product) {
            $params = [
                [
                    'field'    => 'CreateDate',
                    'operator' => 'ge', // greater than or equal
                    'value'    => $product->CreateDate,
                ],
                [
                    'field'    => 'CreateTime',
                    'operator' => 'gt', // greater than
                    'value'    => $product->CreateTime,
                ]
            ];
        }

        return [
            'endpoint'   => 'products', // SAP endpoint confifgured in config/service.php
            'model'      => self::class,
            'fields'     => self::FILLABLE,
            'identifier' => self::IDENTIFIER,
            'method'     => 'updateOrCreate',
            'filter'     => [
                'operator' => 'and',
                'params'   => $params ?? []
            ],
        ];
    }
}

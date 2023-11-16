<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    use CrudTrait;
    use HasFactory;
    
    const IDENTIFIER = 'WarehouseCode';
    const FILLABLE = [
        'WarehouseCode',
        'WarehouseName',
        'Street',
        'StreetNo',
        'AllowUseTax',
        'State',
        'City',
    ];

    protected $fillable = self::FILLABLE;

    public static function getSyncInfo(array $params = [], string $operator = 'and')
    {
        return [
            'endpoint'   => 'warehouses', // SAP endpoint confifgured in config/service.php
            'model'      => self::class,
            'identifier' => self::IDENTIFIER,
            'fields'     => self::FILLABLE,
            'method'     => 'updateOrCreate',
            'filter'     => [
                'operator' => $operator,
                'params'   => $params
            ],
        ];
    }

}

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
    const SYNC_INFO = [
        'endpoint'   => 'warehouses', // SAP endpoint confifgured in config/service.php
        'model'      => self::class,
        'identifier' => self::IDENTIFIER,
        'fields'     => self::FILLABLE,
        'method'     => 'updateOrCreate',
    ];

    protected $fillable = self::FILLABLE;



}

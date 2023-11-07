<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = [
        'WarehouseCode',
        'WarehouseName',
        'Street',
        'StreetNo',
        'AllowUseTax',
        'State',
        'City',
    ];

    public static function getFillable() : array
    {
        return $this->fillable;
    }

    public static function getIdentifier() : string
    {
        return 'WarehouseCode';
    }


}

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
        'WarehouseCodeEncrey',
        'WarehouseCode',
        'WarehouseName',
        'Street',
        'StreetNo',
        'AllowUseTax',
        'State',
        'City',
    ];
}

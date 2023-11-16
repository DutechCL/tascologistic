<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesPerson extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $table = 'sales_persons';

    const IDENTIFIER = 'SalesEmployeeCode';
    const FILLABLE = [
        'SalesEmployeeCode',
        'SalesEmployeeName',
        'CommissionForSalesEmployee',
        'CommissionGroup',
        'Locked',
        'EmployeeID',
        'Active',
        'Telephone',
        'Mobile',
        'Email',
    ];

    protected $fillable = self::FILLABLE;

    protected static function boot()
    {
        parent::boot();

        // Utiliza el evento creating para convertir el valor de 'Active'
        static::creating(function ($salesPerson) {
            $salesPerson->attributes['Active'] = strtolower($salesPerson->attributes['Active']) === 'tyes' ? 1 : 0;
        });
    }

    public static function getSyncInfo()
    {
        return [
            'endpoint'   => 'sales_persons', // SAP endpoint confifgured in config/service.php
            'model'      => self::class,
            'fields'     => self::FILLABLE,
            'identifier' => self::IDENTIFIER,
            'method'     => 'updateOrCreate',
        ];
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

        static::updating(function ($salesPerson) {
            $salesPerson->attributes['Active'] = strtolower($salesPerson->attributes['Active']) === 'tyes' ? 1 : 0;
        });
    }

    public static function getSyncInfo(array $params = [], string $operator = 'and')
    {
        return [
            'endpoint'   => 'sales_persons', // SAP endpoint confifgured in config/service.php
            'model'      => self::class,
            'fields'     => self::FILLABLE,
            'identifier' => self::IDENTIFIER,
            'method'     => 'updateOrCreate',
            'filter'     => [
                'operator' => $operator,
                'params'   => $params
            ],
        ];
    }

    protected function formatEmployee(): Attribute
    {
        return Attribute::make(
            get: fn($value, $attributes) => 'COD: ' . $attributes['SalesEmployeeCode']. ' - ' . $attributes['SalesEmployeeName'],
        );
    }

}

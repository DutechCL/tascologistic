<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesPerson extends Model
{
    use HasFactory;

    protected $table = 'sales_persons';

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

    const IDENTIFIER = 'SalesEmployeeCode';

    protected $fillable = self::FILLABLE;

    protected static function boot()
    {
        parent::boot();

        // Utiliza el evento creating para convertir el valor de 'Active'
        static::creating(function ($salesPerson) {
            $salesPerson->attributes['Active'] = strtolower($salesPerson->attributes['Active']) === 'tyes' ? 1 : 0;
        });
    }
}

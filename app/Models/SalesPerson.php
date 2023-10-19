<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesPerson extends Model
{
    use HasFactory;

    protected $table = 'sales_persons';

    protected $fillable = [
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
}

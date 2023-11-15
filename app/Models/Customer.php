<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use App\Models\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Customer extends Model
{
    use CrudTrait;
    use HasFactory;

    const IDENTIFIER = 'CardCode';
    const FILLABLE = [
        'CardCode', 
        'CardName', 
        'Address', 
        'FederalTaxID', 
        'EmailAddress', 
        'CreditLimit', 
        'MaxCommitment',
        'CreateDate',
        'CreateTime',
        'UpdateDate',
        'UpdateTime',
    ];
    const SYNC_INFO = [
        'endpoint'   => 'business_partners', // SAP endpoint confifgured in config/service.php
        'model'      => self::class,
        'fields'     => self::FILLABLE,
        'identifier' => self::IDENTIFIER,
        'method'     => 'updateOrCreate',
    ];

    protected $fillable = self::FILLABLE;

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}

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

    const FILLABLE = [
        'CardCode', 
        'CardName', 
        'Address', 
        'FederalTaxID', 
        'EmailAddress', 
        'CreditLimit', 
        'MaxCommitment'
    ];

    const IDENTIFIER = 'CardCode';

    protected $fillable = self::FILLABLE;

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}

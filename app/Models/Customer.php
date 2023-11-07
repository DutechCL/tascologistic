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

    protected $fillable = [
        'CardCode', 
        'CardName', 
        'Address', 
        'FederalTaxID', 
        'EmailAddress', 
        'CreditLimit', 
        'MaxCommitment'
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public static function getIdentifier() : string
    {
        return 'CardCode';
    }
}

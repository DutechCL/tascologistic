<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use App\Models\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderStatus extends Model
{
    use CrudTrait;
    use HasFactory;

    const STATUS_ON_HOLD         = 1;
    const STATUS_ON_PICKER       = 2;
    const STATUS_PICKED          = 3;
    const STATUS_ON_REVIEWER     = 4;
    const STATUS_REVIEWED        = 5;
    const STATUS_BILLED          = 6;
    const STATUS_PAYMENT         = 7;
    const STATUS_REJECTED        = 8;
    const STATUS_DISPATCH        = 9;

    protected $fillable = [
        'name',
        'description',
        'color'
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}

<?php

namespace App\Models;

use App\Models\Customer;
use App\Models\OrderItem;
use App\Models\OrderStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'DocEntry',
        'DocNum',
        'DocDate',
        'DocTotal',
        'Comments',
        'SalesPersonCode',
        'U_SBO_FormaEntrega',
    ]; // Campos permitidos para llenado masivo

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function orderStatus()
    {
        return $this->belongsTo(OrderStatus::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
    
}

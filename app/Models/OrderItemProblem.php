<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItemProblem extends Model
{
    use HasFactory;
    
    public $fillable = [
        'order_item_id',
        'problem_id',
        'other'
    ];


    public function orderItem()
    {
        return $this->belongsTo(OrderItem::class, 'order_item_id');
    }
    
    public function problem()
    {
        return $this->belongsTo(Problem::class, 'problem_id');
    }
}

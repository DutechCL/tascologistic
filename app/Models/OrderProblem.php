<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderProblem extends Model
{
    public $fillable = [
        'order_id',
        'problem_id',
    ];

    use HasFactory;

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }
    
    public function problem()
    {
        return $this->belongsTo(Problem::class, 'problem_id');
    }
}

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

    protected $fillable = [
        'name',
        'description',
        'color'
    ];

    protected $appends = [
        'color_tag',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }


public function getColorTagAttribute()
{
    return '<div style="background-color: ' . $this->attributes['color'] . '; width: 20px; height: 20px;">'. $this->attributes['name'] .'</div>';
}
}

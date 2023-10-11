<?php

namespace App\Models;

use App\Models\Customer;
use App\Models\OrderItem;
use App\Models\OrderStatus;
use App\Models\OrderProblem;
use App\Models\RoleAssignments;
use App\Models\OrderItemProblem;
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
        'is_approved'
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

    public function methodShipping()
    {
        return $this->belongsTo(MethodShipping::class, 'method_shipping_id');
    }

    public function responsibles()
    {
        return $this->hasMany(RoleAssignments::class, 'order_id')->with('user', 'responsibleRole');
    }

    public function problems()
    {
        return $this->hasMany(OrderProblem::class, 'order_id');
    }
    



    public function scopeWithOrderDetails($query)
    {
        return $query->with([
            'customer', 
            'orderStatus', 
            'methodShipping', 
            'orderItems' => function ($query) {
                $query->select(['order_items.*', 'products.ItemDescription as ItemDescription'])
                    ->with(['problems' => function ($query) {
                        $query->select(['order_item_problems.*', 'problems.title as problem_name'])
                            ->join('problems', 'problems.id', '=', 'order_item_problems.problem_id');
                    }])
                    ->join('products', 'products.id', '=', 'order_items.product_id');
            },
            'problems' => function ($query) {
                $query->select(['order_problems.*', 'problems.title as problem_name'])
                    ->join('problems', 'problems.id', '=', 'order_problems.problem_id');
            }
        ]);
    }


}

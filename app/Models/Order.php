<?php

namespace App\Models;

use App\Models\Customer;
use App\Models\OrderItem;
use App\Models\OrderStatus;
use App\Models\OrderProblem;
use App\Models\RoleAssignments;
use App\Models\OrderItemProblem;
use App\Services\ProcessService;
use App\Events\OrderStatusUpdated;
use App\Events\OrderClassifiedProcess;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    const ORDER_STATUS_ON_HOLD = 1;
    const ORDER_STATUS_PICKED = 2;
    const ORDER_STATUS_REVIEWER = 3;
    const ORDER_STATUS_REJECTED = 4;
    const ORDER_STATUS_REVIEWED = 5;
    // const ORDER_STATUS_AUTHORIZED = 6;
    const ORDER_STATUS_BILLED = 6;

    protected $fillable = [
        'DocEntry',
        'DocNum',
        'DocDate',
        'DocTotal',
        'Comments',
        'SalesPersonCode',
        'U_SBO_FormaEntrega',
        'is_approved',
        'customer_id',
    ];

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
        return $this->belongsToMany(User::class, 'orden_responsibles', 'order_id', 'user_id')->withPivot('task')->withTimestamps();;
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
            'responsibles',
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

    public function scopeByWarehouse($query, $allowedWarehouses)
    {
        return $query->whereHas('orderItems', function ($subquery) use ($allowedWarehouses) {
            $subquery->whereIn('WareHouseCode', $allowedWarehouses);
        });
    }

    public function assignResponsible($task)
    {
        $tasks = [
            'cda' => 'CDA',
            'picker' => 'PICKEO',
            'reviewer' => 'REVISIÓN',
        ];
    
        $user = auth()->user() ?? User::find(1);
    
        $existingAssignment = $this->responsibles()->where('user_id', $user->id)->where('task', $task)->first();
    
        if ($existingAssignment) {
            return ['status' => 'success', 'message' => 'Tarea asignada exitosamente.'];
        }
    
        $existingAssignment = $this->responsibles()->where('task', $task)->first();
    
        if ($existingAssignment) {
            return ['status' => 'warning', 'message' => 'Esta tarea ya está en proceso de ' . $tasks[$task] . ' por otro usuario.'];
        }
    
        $this->responsibles()->attach($user->id, ['task' => $task]);
    
        return ['status' => 'success', 'message' => 'Tarea asignada a '. $tasks[$task]. ' exitosamente.'];
    }
}

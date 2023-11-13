<?php

namespace App\Models;

use App\Models\Product;
use App\Models\Customer;
use App\Models\LogOrder;
use App\Models\OrderItem;
use App\Models\OrderStatus;
use App\Models\SalesPerson;
use App\Models\OrderProblem;
use App\Models\MethodShipping;
use App\Models\RoleAssignments;
use App\Models\OrderItemProblem;
use App\Services\ProcessService;
use App\Events\OrderStatusUpdated;
use Illuminate\Support\Facades\DB;
use App\Events\OrderClassifiedProcess;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    const FILLABLE_API = [
        'DocEntry',
        'DocNum',
        'DocType',
        'DocDate',
        'DocTime',
        'DocTotal',
        'CardCode',
        'Comments',
        'SalesPersonCode',
        'U_SBO_FormaEntrega',
        'U_SBO_FormaPago',
        'DocumentLines',
        'Confirmed',
        'ShipToCode',
        'Indicator'
    ];

    const FILLABLE_INTERNAL = [
        'process_id',
        'customer_id',
        'order_status_id',
        'method_shipping_id',
        'SalesEmployeeName',
        'observation',
        'is_managed',
    ];

    const IDENTIFIER = 'CardCode';

    protected $fillable = [
        ...self::FILLABLE_API,
        ...self::FILLABLE_INTERNAL,
    ];

    protected static function boot()
    {
        parent::boot();

        // Utiliza el evento creating para convertir el valor de 'Active'
        static::creating(function ($order) {
            $order->attributes['Confirmed'] = strtolower($order->attributes['Confirmed']) === 'tyes' ? 1 : 0;
        });

        static::updating(function ($order) {
            $order->attributes['Confirmed'] = strtolower($order->attributes['Confirmed']) === 'tyes' ? 1 : 0;
        });
    }

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
    
    public static function syncOrderWithItems(array $orderData)
    {
        $process = 'Sincronizacion masiva';

        $documentLines = $orderData['DocumentLines'];
        unset($orderData['DocumentLines']);
    
        $customer = Customer::where('CardCode', $orderData['CardCode'])->first();
        $methodShipping = MethodShipping::where('name', $orderData['U_SBO_FormaEntrega'])->first();
        $salesPerson = SalesPerson::where('SalesEmployeeCode', $orderData['SalesPersonCode'])->first();
    
        $data = array_merge($orderData, [
            'customer_id'        => optional($customer)->id,
            'method_shipping_id' => optional($methodShipping)->id,
            'SalesEmployeeName'  => optional($salesPerson)->SalesEmployeeName,
        ]);

        try {
            $order = self::updateOrCreate(
                ['DocNum' => $orderData['DocNum']],
                $data
            );

            $order->syncOrderItems($documentLines);

            logOrder::success($process, $orderData['DocNum']);
    
            return $order;
        } catch (\Exception $e) {
            LogOrder::error($process, $orderData['DocNum'], $e->getMessage());
        }
    }
    

    private function syncOrderItems(array $orderItemsData, $order)
    {
        DB::beginTransaction();
        $process = 'Sincronizacion masiva';
        try {
            foreach ($orderItemsData as $orderItemData) {
                $product = Product::where('ItemCode', $orderItemData['ItemCode'])->first();
    
                if ($product) {
                    try {
                        $columnNames = Schema::getColumnListing('order_items');
                        $dataToInsert = array_intersect_key($orderItemData, array_flip($columnNames));
    
                        $data = array_merge($dataToInsert, ['product_id' => $product->id]);
    
                        $order->orderItems()->create($data);
    
                    } catch (\Exception $e) {
                        DB::rollBack();
                        LogOrder::error($process, $order->DocNum, "Error al crear producto para ItemCode: {$orderItemData['ItemCode']}. Error: {$e->getMessage()}");
                        return;
                    }
                } else {
                    DB::rollBack();
                    LogOrder::error($process, $order->DocNum, "Producto no encontrado para ItemCode: {$orderItemData['ItemCode']}");
                    return;
                }
            }
    
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            LogOrder::error($process, $order->DocNum, "Error general al sincronizar order_items. Error: {$e->getMessage()}");
        }
    }
    


    public function scopeWithOrderDetails($query)
    {
        return $query->with([
            'customer', 
            'orderStatus', 
            'methodShipping', 
            'responsibles',
            'orderItems' => function ($query) {
                $query->with(['problems' => function ($query) {
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

    public static function getOrder($id)
    {
        return  self::withOrderDetails()->where('id', $id)->first();
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
            return (object) ['status' => 'success', 'message' => 'Tarea asignada exitosamente.'];
        }
    
        $existingAssignment = $this->responsibles()->where('task', $task)->first();
    
        if ($existingAssignment) {
            return (object) ['status' => 'warning', 'message' => 'Esta tarea ya está en proceso de ' . $tasks[$task] . ' por otro usuario.'];
        }
    
        $this->responsibles()->attach($user->id, ['task' => $task]);
    
        return (object) ['status' => 'success', 'message' => 'Tarea asignada a '. $tasks[$task]. ' exitosamente.'];
    }
}

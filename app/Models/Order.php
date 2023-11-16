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

    const IDENTIFIER = 'CardCode';
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

    protected $fillable = [
        ...self::FILLABLE_API,
        ...self::FILLABLE_INTERNAL,
    ];

    public static function getSyncInfo(array $params = [], string $operator = 'and')
    {
        $order = self::latest('DocNum')->first();

        if ($order && empty($params)) {
            $params = [
                [
                    'field'    => 'DocNum',
                    'operator' => 'ge', // greater than or equal
                    'value'    => $order->DocNum,
                ],
                [
                    'field'    => 'DocTime',
                    'operator' => 'gt', // greater than
                    'value'    => $order->DocTime,
                ]
            ];
        }

        return [
            'endpoint'   => 'orders', // SAP endpoint confifgured in config/service.php
            'model'      => self::class,
            'fields'     => self::FILLABLE_API,
            'identifier' => self::IDENTIFIER,
            'method'     => 'syncOrderWithItems',
            'notNull'    => ['DocNum', 'U_SBO_FormaEntrega', 'CardCode'],
            'filter'     => [
                'operator' => $operator,
                'params'   => $params
            ],
        ];
    }

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
    
    public static function syncOrderWithItems(array $where, array $orderData)
    {
        $process = 'Sincronizacion masiva';

        $items = $orderData['DocumentLines'];
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

            $order = self::updateOrCreate($where, $data);

            $order->syncOrderItems($items);

            logOrder::success($process, $data['DocNum']);

            return $order;
        } catch (\Exception $e) {
            LogOrder::error($process, $data['DocNum'], $e->getMessage());
            \Log::error($e->getMessage());
            return;
        }
    }
    

    private function syncOrderItems(array $orderItemsData)
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
    
                        $this->orderItems()->create($data);
    
                    } catch (\Exception $e) {
                        DB::rollBack();
                        LogOrder::error($process, $this->DocNum, "Error al crear producto para ItemCode: {$orderItemData['ItemCode']}. Error: {$e->getMessage()}");
                        \Log::error($e->getMessage());
                        return;
                    }
                } else {
                    DB::rollBack();
                    LogOrder::error($process, $this->DocNum, "Producto no encontrado para ItemCode: {$orderItemData['ItemCode']}");
                    \Log::error("Producto no encontrado para ItemCode: {$orderItemData['ItemCode']}");
                    return;
                }
            }
    
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            LogOrder::error($process, $this->DocNum, "Error general al sincronizar order_items. Error: {$e->getMessage()}");
            \Log::error($e->getMessage());
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

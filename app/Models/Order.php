<?php

namespace App\Models;

use App\Models\Bill;
use App\Models\Customer;
use App\Models\Chat\Chat;
use App\Models\OrderItem;
use App\Models\OrderStatus;
use App\Models\OrderProblem;
use App\Models\MethodShipping;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use App\Services\Order\OrderSynchronizationService;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    const IDENTIFIER = 'DocNum';
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
        'Indicator',
        'TaxDate',
        'DocCurrency',
        'DocRate',
        'FederalTaxID',
        'DiscountPercent',
        'Address2',
    ];
    const FILLABLE_INTERNAL = [
        'process_id',
        'customer_id',
        'order_status_id',
        'method_shipping_id',
        'SalesEmployeeName',
        'observation',
        'is_managed',
        'has_problems',
        'report_user_id',
        'report_user_responsible',
        'report_user_name',
        'is_resolved',
        'is_managed_in_billing',
        'is_dispatched',
    ];

    protected $fillable = [
        ...self::FILLABLE_API,
        ...self::FILLABLE_INTERNAL,
    ];

    protected $appends = [
        'indicator',
        'warehouse',
        'guide',
        'document',
    ];

    protected $casts = [
        'DocRate'         => 'integer',
        'SalesPersonCode' => 'integer',
        'DiscountPercent' => 'integer',
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

    public function bills()
    {
        return $this->hasMany(Bill::class, 'order_id');
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

    public function chats()
    {
        return $this->hasMany(Chat::class);
    }


    protected function Indicator(): Attribute
    {
        return Attribute::make(
            get: function () {

                $formaPago = $this->U_SBO_FormaPago ?? null;
    
                switch ($formaPago) {
                    case 'Factura':
                        return "33";
                    case 'Boleta':
                        return "39";
                    default:
                        return "52";
                }
            }
        );
    }

    protected function Guide(): Attribute
    {
        return Attribute::make(
            get: function () {
                if ($this->bills) {
                    return null;
                }
                foreach ($this->bills as $bill) {
                    if ($bill->esGuia()) {
                        return $bill;
                    }
                }
            return null;
        });
    }

    protected function Document(): Attribute
    {
        return Attribute::make(
            get: function () {
                if ($this->bills) {
                    return null;
                }
                foreach ($this->bills as $bill) {
                    if (!$bill->esGuia()) {
                        return $bill;
                    }
                }
                return null;
            }
        );
    }


    protected function Warehouse(): Attribute
    {
        return Attribute::make(
            get: function () {

                $orderItems = $this->orderItems;
    
                if ($orderItems->isEmpty()) {
                    return null; 
                }
    
                return $orderItems->first()->WarehouseCode;
            }
        );
    }

    public static function getSyncInfo(array $params = [], string $operator = 'and')
    {
        $order = self::latest('DocNum')->first();

        if ($order && empty($params)) {
            $params = [
                [
                    'field'    => 'DocDate',
                    'operator' => 'ge', // greater than or equal
                    'value'    => $order->DocDate,
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
            'method'     => 'syncOrder', //method static 
            'notNull'    => ['DocNum', 'U_SBO_FormaEntrega', 'CardCode'],
            'filter'     => [
                'operator' => $operator,
                'params'   => $params
            ],
        ];
    }

    public static function syncOrder(array $where, array $orderData)
    {
       return  (new OrderSynchronizationService)->syncOrderWithItems($where, $orderData);
    }
    
    public function scopeWithOrderDetails($query)
    {
        return $query->with([
            'orderStatus', 
            'methodShipping', 
            'responsibles',
            'customer' => function ($query) {
                $query->select('customers.*')
                    ->with(['addresses', 'contactEmployees']);
            }, 
            'orderItems' => function ($query) {
                $query->with(['problems' => function ($query) {
                        $query->select(['order_item_problems.*', 'problems.title as problem_name'])
                            ->join('problems', 'problems.id', '=', 'order_item_problems.problem_id');
                    }])
                    ->join('products', 'products.id', '=', 'order_items.product_id')
                    ->select('order_items.*');
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
            'cda'      => 'CDA',
            'picker'   => 'PICKEO',
            'reviewer' => 'REVISIÓN',
            'biller'   => 'FACTURADOR',
            'payment'  => 'PAGOS',
            'dispatch' => 'DESPACHO',
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

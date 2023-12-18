<?php

namespace App\Models;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderItem extends Model
{
    use HasFactory;
    
    protected $table = 'order_items';

    protected $fillable = [
        'id',
        'order_id',
        'ItemCode', 
        'WarehouseCode',
        'ItemDescription',
        'Price',
        'Quantity', 
        'VatGroup',
        'TaxCode',
        'PickStatus',
        'DeferredTax',
        'EqualizationTaxPercent',
        'TotalEqualizationTaxFC',
        'TotalEqualizationTaxSC',
        'NetTaxAmount',
        'NetTaxAmountFC',
        'NetTaxAmountSC',
        'LineTotal',
        'TaxPercentagePerRow',
        'TaxTotal',
        'U_SBO_StockVentas',
        'product_id',
    ];

    protected $casts = [
        'Price' => 'float',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function problems()
    {
        return $this->hasMany(OrderItemProblem::class, 'order_item_id');
    }
}

<?php

namespace App\Models;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'ItemCode', // Precio del producto en el momento de la orden
        'Price',// Precio del producto en el momento de la orden
        'Quantity', // Precio del producto en el momento de la orden
        'VatGroup',
        'TaxLiable',
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
    ]; // Campos permitidos para llenado masivo

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}

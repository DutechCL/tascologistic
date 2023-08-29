<?php

namespace App\Models;

use App\Models\OrderItem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'ItemCode',
        'ItemDescription',
        'Quantity',
        'Price',
        'PriceAfterVAT',
        'Currency',
        'WarehouseCode',
        'Height1',
        'Hight1Unit',
        'Height2',
        'Height2Unit',
        'Lengh1',
        'Lengh1Unit',
        'Lengh2',
        'Lengh2Unit',
        'Weight1',
        'Weight1Unit',
        'Weight2',
        'Weight2Unit',
        'Factor1',
        'Factor2',
        'Factor3',
        'Factor4',
        'TaxCode',
        'TaxType',
    ]; // Campos permitidos para llenado masivo

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}

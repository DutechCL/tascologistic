<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bill extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'user_id',
        'Creado',
        'Facturado',
        'Error',
        'Folio',
        'FebosID',
        'DocEntry',
        'IndicadorFinanciero',
        'LinkPDF',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function isGuide()
    {
        return $this->IndicadorFinanciero === '52';
    }



}

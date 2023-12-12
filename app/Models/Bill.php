<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}

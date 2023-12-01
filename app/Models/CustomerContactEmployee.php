<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerContactEmployee extends Model
{
    use HasFactory;

    public const FILLABLE = [
        'customer_id',
        'Name',
        'Phone1',
        'E_Mail',
        'FirstName',
        'MiddleName',
        'LastName',
    ];

    protected $fillable = self::FILLABLE;

    /**
     * Obtiene el cliente al que pertenece este empleado de contacto.
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}

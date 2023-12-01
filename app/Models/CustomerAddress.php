<?php

namespace App\Models;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CustomerAddress extends Model
{
    use HasFactory;

    public const FILLABLE = [
        'customer_id',
        'AddressName',
        'Street',
        'Block',
        'ZipCode',
        'City',
        'County',
        'Country',
        'State',
        'FederalTaxID',
        'TaxCode',
        'BuildingFloorRoom',
        'AddressType',
        'AddressName2',
        'AddressName3',
        'TypeOfAddress',
        'StreetNo',
        'BPCode',
        'RowNum',
        'GlobalLocationNumber',
        'Nationality',
        'TaxOffice',
        'GSTIN',
        'GstType',
        'CreateDate',
        'CreateTime',
        'MYFType',
        'TaasEnabled',
    ];

    protected $fillable = self::FILLABLE;

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}

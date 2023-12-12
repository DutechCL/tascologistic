<?php

namespace App\Models;

use App\Models\Order;
use App\Services\Customer\CustomerService;
use App\Models\CustomerContactEmployee;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Customer extends Model
{
    use CrudTrait;
    use HasFactory;

    const IDENTIFIER = 'CardCode';
    const FILLABLE = [
        'CardCode', 
        'CardName', 
        'Address', 
        'FederalTaxID', 
        'EmailAddress', 
        'CreditLimit', 
        'MaxCommitment',
        'CreateDate',
        'CreateTime',
        'UpdateDate',
        'UpdateTime',
        'CardType',
        'GroupCode',
        'CreditLimit',
        'CurrentAccountBalance',
        'ContactPerson',
        'CardForeignName',
        'ShipToDefault',
        'BilltoDefault',
        'Currency',
        'BPAddresses',
        'ContactEmployees'
    ];

    protected $fillable = self::FILLABLE;

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function addresses()
    {
        return $this->hasMany(CustomerAddress::class);
    }

    public function contactEmployees()
    {
        return $this->hasMany(CustomerContactEmployee::class);
    }

    public static function getSyncInfo()
    {
        $customer = self::latest('CreateDate')->first();

        if ($customer) {
            $params = [
                [
                    'field'    => 'CreateDate',
                    'operator' => 'ge', // greater than or equal
                    'value'    => $customer->CreateDate,
                ],
                [
                    'field'    => 'CreateTime',
                    'operator' => 'gt', // greater than
                    'value'    => $customer->CreateTime,
                ]
            ];
        }

        return [
            'endpoint'   => 'business_partners', // SAP endpoint confifgured in config/service.php
            'model'      => self::class,
            'fields'     => self::FILLABLE,
            'identifier' => self::IDENTIFIER,
            'method'     => 'syncCustomer', //method static
            'filter'     => [
                'operator' => 'and',
                'params'   => $params ?? []
            ],
        ];
    }

    public static function syncCustomer(array $where, array $orderData)
    {
       return  (new CustomerService)->syncCustomerWithAddress($where, $orderData);
    }
}

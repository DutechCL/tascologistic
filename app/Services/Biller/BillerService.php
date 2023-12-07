<?php

namespace App\Services\Biller;

use App\Models\Setting;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class BillerService
{
    private $apiDomain;
    private $apiUrl;
    private $companyId;
    private $username;
    private $password;

    /**
     * SAPService constructor.
     */
    public function __construct()
    {
        $this->apiUrl    = $this->getConfig('_biller_url_api', 'services.biller.url');
        $this->companyId = $this->getConfig('_biller_company_db', 'services.biller.credentials.company_db');
        $this->username  = $this->getConfig('_biller_username', 'services.biller.credentials.username');
        $this->password  = $this->getConfig('_biller_password', 'services.biller.credentials.password');
    }
    
    /**
     * @param string $productionKey
     * @param string $devKey
     * @return array|mixed
     */
    private function getConfig($productionKey, $devKey)
    {
        $modeDev = (bool) Setting::get('_biller_dev_mode');
        return $modeDev ? config($devKey) : Setting::get($productionKey);
    }

    /**
     * @return array|mixed
     */
    public function generateDocument($data)
    {
        try {
            $response = Http::timeout(60)->post($this->apiUrl, $data);

            return $response;
        } catch (\Exception $e) {

            Log::error("Error en la operación de login: {$e->getMessage()}");

            return ['error' => $e->getMessage()];
        }
    }

    public function buildData($order)
    {
        $data['User'] = [
            'Prod' => $this->companyId,
            'Password' => $this->username,
            'UserName' => $this->password,
        ];

        $customer = $order->customer;
        $data['SN'] = [
            'CardCode'        => $customer->CardCode,
            'CardName'        => $customer->CardName,
            'CardType'        => $customer->CardType,
            'GroupCode'       => $customer->GroupCode,
            'ContactPerson'   => $customer->ContactPerson,
            'FederalTaxID'    => $customer->FederalTaxID,
            'EmailAddress'    => $customer->EmailAddress,
            'CardForeignName' => $customer->CardForeignName,
            'ShipToDefault'   => $customer->ShipToDefault,
            'BilltoDefault'   => $customer->BilltoDefault,
            'Currency'        => $customer->Currency,
        ];

        // BPAddresses
        $data['SN']['BPAddresses'] = $customer->addresses->map(function ($address) {
            return [
                'AddressName' => $address->AddressName,
                'Street'      => $address->Street,
                'City'        => $address->City,
                'County'      => $address->County,
                'Country'     => $address->Country,
                'State'       => $address->State,
                'TaxCode'     => $address->TaxCode,
                'AddressType' => $address->AddressType,
            ];
        })->toArray();

        // ContactEmployees
        $data['SN']['ContactEmployees'] = $customer->contactEmployees->map(function ($contact) {
            return [
                'Name'       => $contact->Name,
                'Phone1'     => $contact->Phone1,
                'E_Mail'     => $contact->E_Mail,
                'FirstName'  => $contact->FirstName,
                'MiddleName' => $contact->MiddleName,
                'LastName'   => $contact->LastName,
            ];
        })->toArray();

        $orderData = $order->only([
            'DocDate', 'DocDueDate', 'TaxDate', 'CardCode', 'DocCurrency',
            'DocRate', 'SalesPersonCode', 'ContactPersonCode', 'ShipToCode',
            'Indicator', 'FederalTaxID', 'DiscountPercent',
        ]);

        $data['Order'] = $orderData;

        // DocumentLines
        $data['Order']['DocumentLines'] = $order->orderItems->map(function ($item) {
            return [
                'ItemCode' => $item->ItemCode,
                'TaxCode' => $item->TaxCode,
                'Quantity' => $item->Quantity,
                'Price' => $item->Price,
            ];
        })->toArray();

        return $data;
    }
}

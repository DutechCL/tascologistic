<?php

namespace App\Services\Biller;

use App\Models\Setting;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class BillerService
{
    private $apiUrl;
    private $companyId;
    private $username;
    private $password;

    /**
     * Constructor del servicio de facturación.
     * Inicializa las configuraciones necesarias para la conexión con el servicio.
     */
    public function __construct()
    {
        $this->apiUrl    = $this->getConfig('_biller_url_api', 'services.biller.url');
        $this->companyId = $this->getConfig('_biller_company_db', 'services.biller.credentials.company_db');
        $this->username  = $this->getConfig('_biller_username', 'services.biller.credentials.username');
        $this->password  = $this->getConfig('_biller_password', 'services.biller.credentials.password');
    }
    
    /**
     * Obtiene una configuración específica del servicio de facturación.
     *
     * @param string $productionKey Llave para la configuración en producción.
     * @param string $devKey Llave para la configuración en modo de desarrollo.
     * @return mixed Valor de la configuración obtenida.
     */
    private function getConfig($productionKey, $devKey)
    {
        $modeDev = (bool) Setting::get('_biller_dev_mode');
        return $modeDev ? config($devKey) : Setting::get($productionKey);
    }

    /**
     * Genera un documento de facturación a través del servicio externo.
     *
     * @param array $data Datos para generar el documento.
     * @return array|mixed Respuesta del servicio de facturación o error.
     */
    public function generateDocument($data)
    {
        try {
            $response = Http::timeout(60)->post($this->apiUrl, $data);

            if($response['Creado'] ?? false === true) 
            {
                $response['LocalLinkPDF'] = $this->downloadPDFFromURL($response['LinkPDF']);
            }

            return $response;
        } catch (\Exception $e) {
            Log::error("Error en la generación del documento: {$e->getMessage()}");
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * Construye los datos necesarios para generar un documento de facturación.
     *
     * @param Order $order Orden para la cual se generará el documento.
     * @return array Datos construidos para la factura.
     */
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

    /**
     * Descarga un PDF desde una URL y lo guarda en el sistema de archivos local.
     *
     * @param string $url URL del PDF a descargar.
     * @return string|null URL local del PDF descargado o null si falla.
     */
    public function downloadPDFFromURL($url)
    {
        $pathInfo = pathinfo($url);
        $fileName = $pathInfo['basename'];

        $pdfContent = file_get_contents($url);

        if ($pdfContent !== false) {

            $storagePath = storage_path('app/pdf/biller/');

            file_put_contents($storagePath . $fileName, $pdfContent);

            $dbFilePath = 'pdf/biller/' . $fileName;

            return url(Storage::url($dbFilePath));
        } else {
            return null;
        }
    }


}

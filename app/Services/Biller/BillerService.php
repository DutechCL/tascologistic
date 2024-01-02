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

            $response = Http::withoutVerifying()->timeout(60)->post($this->apiUrl, $data);

            $response = $response->json();

            if($response['Creado'] ?? false === true) 
            {
                $response['LocalLinkPDF'] = $this->downloadPDFFromURL($response['LinkPDF']);
            }else{
                $error = $this->parseJsonToObject($response['Error'], $data);

                $response['Error'] = json_encode($error);

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
            'Prod'     => $this->companyId,
            'Password' => $this->password,
            'UserName' => $this->username,
        ];

        $customer = $order->customer;
        $cardCode = $customer->CardCode;

        if (strpos($cardCode, '-') !== false) {
            $cardCode = explode('-', $cardCode)[0];
        }
        
        $data['SN'] = [
            'CardCode'        => $cardCode,
            'CardName'        => $customer->CardName,
            'CardType'        => $customer->CardType,
            'GroupCode'       => intval($customer->GroupCode),
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
        $data['Order']['CardCode'] = $cardCode;

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

    private function parseJsonToObject($json, $data): ?object
    {
        // Primero, intenta encontrar y extraer el error "httpException"
        $jsonStartPosition = strpos($json, '{"httpException":');
        if ($jsonStartPosition !== false) {
            $jsonClean = substr($json, $jsonStartPosition);
            $decodedJson = json_decode($jsonClean);
    
            if (json_last_error() === JSON_ERROR_NONE) {
                $decodedJson->httpException->message = explode('JSON', $decodedJson->httpException->message)[0];
                if ($this->extractLinePosition($jsonClean) !== null) {
                    $Item = $data['Order']['DocumentLines'][$this->extractLinePosition($jsonClean)];
                    $decodedJson->httpException->errorItem = $Item;
                }
                return (object) [
                    'systemError' => false,
                    'message' => $decodedJson
                ];
            }
        }
    
        // Luego, intenta encontrar y extraer el error en el formato "LlamarSL"
        $llamarSLStartPosition = strpos($json, 'LlamarSL:');
        if ($llamarSLStartPosition !== false) {
            // Ajusta el JSON para obtener un objeto válido
            $jsonClean = substr($json, $llamarSLStartPosition + 10); // +10 para saltar "LlamarSL:"
            $jsonClean = trim($jsonClean); // Elimina espacios y caracteres de nueva línea
    
            $decodedJson = json_decode($jsonClean);
    
            if (json_last_error() === JSON_ERROR_NONE && isset($decodedJson->error->message->value)) {
                // Crea un objeto de error personalizado con el mensaje
                return (object)[
                    'systemError' => true,
                    'message' => $decodedJson->error->message->value
                ];
            }
        }
    
        // Retorna null si no se encuentra un formato de error reconocido
        return null;
    }
    

    private function extractLinePosition($jsonString) {

        if (strpos($jsonString, '[DocumentLines.ItemCode]') !== false) {

            if (preg_match('/\[line: (\d+)\]/', $jsonString, $matches)) {

                return intval($matches[1]) + 1;
            }
        }
        return null; 
    }
}

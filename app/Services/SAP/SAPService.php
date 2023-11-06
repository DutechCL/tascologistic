<?php

namespace App\Services\SAP;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Response;

class SAPService
{
    private $apiDomain;
    private $apiUrl;
    private $companyId;
    private $username;
    private $password;
    private $loginCookies;

    /**
     * SAPService constructor.
     */
    public function __construct()
    {
        $this->apiUrl    = sprintf(
            '%s://%s:%s/%s',
            config('services.sap.url.protocol'),
            config('services.sap.url.domain'),
            config('services.sap.url.port'),
            config('services.sap.url.version')
        );
        $this->companyId = config('services.sap.credentials.company_db');
        $this->username  = config('services.sap.credentials.username');
        $this->password  = config('services.sap.credentials.password');
    }

    /**
     * @return array|mixed
     */
    public function login()
    {
        $endpoint = config('services.sap.endpoints.login');

        try {
            $response = Http::timeout(60)->post("{$this->apiUrl}/$endpoint", [
                "CompanyDB" => $this->companyId,
                "UserName" => $this->username,
                "Password" => $this->password,
            ]);

            // Almacenar las cookies en la propiedad $loginCookies
            $this->loginCookies = $response->cookies();

            // Retornar la nueva respuesta
            return $response;
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * @param string $endpoint
     * @param string $method
     * @param array $data
     * @return array|mixed
     */
    public function makeRequest($endpoint, $method = 'get', $data = [])
    {
        $domain = config('services.sap.url.domain');
        
        try {
            if (!$this->loginCookies) {
                $this->login();
            }
    
            // Convertir CookieJar a un array
            $cookiesArray = [];

            foreach ($this->loginCookies as $cookie) {
                $cookiesArray[$cookie->getName()] = $cookie->getValue();
            }
    
            // Utilizar el array de cookies en la solicitud
            $response = Http::timeout(60)->withCookies($cookiesArray, $domain)->$method("{$this->apiUrl}/$endpoint", $data);

            return $response->json();
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * @return array|mixed
     */
    public function getOrders($fields = null, $skip = 0)
    {
        $endpoint = config('services.sap.endpoints.orders.get');

        try {

            $response = $this->makeRequest($endpoint, 'get', [
                '$select' => implode(',', $fields),
                '$skip'   => $skip,
            ]);
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

// En SAPService.php
public function getBusinessPartners($fields = null, $skip = 0)
{
    $endpoint = config('services.sap.endpoints.business_partners.get');

    try {
        $results = [];

        // Realiza la solicitud con los parámetros de paginación
        $response = $this->makeRequest($endpoint, 'get', [
            '$select' => implode(',', $fields),
            '$skip'   => $skip,
        ]);

        return ['value' => $response];
    } catch (\Exception $e) {
        return ['error' => $e->getMessage()];
    }
}

}

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
     * @param string $key
     * @param int $skip
     * @param array $fields
     * @return array|mixed
     */
    public function get(string $key, int $skip = 0, array $fields = [], $filterParam = null)
    {
        try {

            $endpoint = $this->endpoint($key);

            $requestData = [
                '$skip' => $skip,
            ];
    
            if (!empty($fields)) {
                $requestData['$select'] = implode(',', $fields);
            }

            if ($filterParam) {
                $requestData['$filter'] = $filterParam;
            }

            return $this->makeRequest($endpoint, 'get', $requestData);

        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function post(string $key, $data = [])
    {
        try {
            $endpoint =  $this->endpoint($key);

            return $this->makeRequest($endpoint, 'post', $data);
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function endpoint(string $endpoint)
    {
        return config("services.sap.endpoints.$endpoint");
    }
}

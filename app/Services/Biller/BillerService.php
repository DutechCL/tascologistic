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
        $this->apiUrl    = $this->getConfig('_sap_url_api', 'services.sap.url');
        $this->companyId = $this->getConfig('_sap_company_db', 'services.sap.credentials.company_db');
        $this->username  = $this->getConfig('_sap_username', 'services.sap.credentials.username');
        $this->password  = $this->getConfig('_sap_password', 'services.sap.credentials.password');

    }
    
    /**
     * @param string $productionKey
     * @param string $devKey
     * @return array|mixed
     */
    private function getConfig($productionKey, $devKey)
    {
        $modeDev = (bool) Setting::get('_sap_dev_mode');

        return $modeDev ? config($devKey) : Setting::get($productionKey);
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

            return $response;
        } catch (\Exception $e) {

            Log::error("Error en la operación de login: {$e->getMessage()}");

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
        $domain = config('services.sap.domain');
        
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
}

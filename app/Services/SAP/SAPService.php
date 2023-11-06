<?php

namespace App\Services\SAP;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cookie;

class SAPService
{
    private $apiUrl;
    private $companyId;
    private $username;
    private $password;

    /**
     * SAPService constructor.
     */
    public function __construct()
    {
        $this->apiUrl    = config('services.sap.api_url');
        $this->companyId = config('services.sap.company_id');
        $this->username  = config('services.sap.username');
        $this->password  = config('services.sap.password');

        // dd($this->apiUrl, $this->companyId, $this->username, $this->password);
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

            $sessionId = $response['SessionId'];

            // Almacena el SessionId en una cookie llamada 'B1SESSION'
            Cookie::queue('B1SESSION', $sessionId, 30);

            return $response->json();
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
        try {
            $sessionId = Cookie::get('B1SESSION');
    
            if (!$sessionId) {
                $this->login();
                $sessionId = Cookie::get('B1SESSION');
            }
    
            $response = Http::timeout(60)->withCookies(['B1SESSION' => $sessionId], $this->apiUrl)->$method("{$this->apiUrl}/$endpoint", $data);
    
            return $response->json();
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }
    

    /**
     * @return array|mixed
     */
    public function getOrders()
    {
        $endpoint = config('services.sap.endpoints.orders.get');
    
        try {

            $response = $this->makeRequest($endpoint, 'get');
            
            return $response;
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

}
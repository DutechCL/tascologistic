<?php

namespace App\Services\SAP;

use App\Models\Setting;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class SAPService
{
    private $apiUrl;
    private $companyId;
    private $username;
    private $password;
    private $loginCookies;

    /**
     * Constructor del servicio SAP.
     * Inicializa las configuraciones necesarias para conectar con el API de SAP.
     */
    public function __construct()
    {
        $this->apiUrl    = $this->getConfig('_sap_url_api', 'services.sap.url');
        $this->companyId = $this->getConfig('_sap_company_db', 'services.sap.credentials.company_db');
        $this->username  = $this->getConfig('_sap_username', 'services.sap.credentials.username');
        $this->password  = $this->getConfig('_sap_password', 'services.sap.credentials.password');
    }
    
    /**
     * Obtiene la configuración para el servicio SAP, eligiendo entre configuraciones de producción o desarrollo.
     *
     * @param string $productionKey Clave para la configuración en producción.
     * @param string $devKey Clave para la configuración en modo desarrollo.
     * @return mixed Configuración obtenida.
     */
    private function getConfig($productionKey, $devKey)
    {
        $modeDev = (bool) Setting::get('_sap_dev_mode');
        return $modeDev ? config($devKey) : Setting::get($productionKey);
    }

    /**
     * Realiza el login en el servicio SAP y almacena las cookies de sesión.
     *
     * @return array|mixed Respuesta del servicio SAP o error en caso de fallo.
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

            $this->loginCookies = $response->cookies();
            return $response;
        } catch (\Exception $e) {
            Log::error("Error en la operación de login: {$e->getMessage()}");
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * Realiza una petición al servicio SAP.
     *
     * @param string $endpoint Endpoint a solicitar.
     * @param string $method Método HTTP para la petición.
     * @param array $data Datos para la petición.
     * @return array|mixed Respuesta de la petición o error en caso de fallo.
     */
    public function makeRequest($endpoint, $method = 'get', $data = [])
    {
        $domain = config('services.sap.domain');
        
        try {
            if (!$this->loginCookies) {
                $this->login();
            }

            $cookiesArray = $this->convertCookiesToArray();

            $response = Http::timeout(60)->withCookies($cookiesArray, $domain)->$method("{$this->apiUrl}/$endpoint", $data);
            return $response->json();
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * Convierte el objeto CookieJar a un array asociativo.
     *
     * @return array Array de cookies.
     */
    private function convertCookiesToArray()
    {
        $cookiesArray = [];
        foreach ($this->loginCookies as $cookie) {
            $cookiesArray[$cookie->getName()] = $cookie->getValue();
        }
        return $cookiesArray;
    }

   /**
     * Realiza una petición GET al servicio SAP.
     *
     * @param string $key Clave que identifica el endpoint específico de SAP a consultar.
     * @param int $skip Número de registros a saltar en la respuesta (para paginación).
     * @param array $fields Campos específicos a seleccionar en la respuesta.
     * @param string|null $filterParam Parámetros adicionales para filtrar los datos.
     * @return array|mixed Respuesta de la petición o error en caso de fallo.
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
            Log::error("Error en la operación GET para $key: {$e->getMessage()}");
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * Realiza una petición POST al servicio SAP.
     *
     * @param string $key Clave que identifica el endpoint específico de SAP a consultar.
     * @param array $data Datos a enviar en la petición POST.
     * @return array|mixed Respuesta de la petición o error en caso de fallo.
     */
    public function post(string $key, $data = [])
    {
        try {
            $endpoint = $this->endpoint($key);
            return $this->makeRequest($endpoint, 'post', $data);
        } catch (\Exception $e) {
            Log::error("Error en la operación POST para $key: {$e->getMessage()}");
            return ['error' => $e->getMessage()];
        }
    }

    /**
     * Obtiene la URL completa de un endpoint del servicio SAP basado en una clave de configuración.
     *
     * @param string $endpoint Clave que identifica el endpoint en el archivo de configuración.
     * @param string $method Método HTTP (por defecto 'get').
     * @return string URL completa del endpoint solicitado.
     */
    public function endpoint(string $endpoint, string $method = 'get')
    {
        return config("services.sap.endpoints.$endpoint.$method");
    }

}

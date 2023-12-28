<?php
namespace App\Services\SAP;

use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use App\Models\Warehouse;
use App\Models\SalesPerson;
use App\Services\SAP\SAPService;
use Illuminate\Support\Facades\Log;

class SyncService
{
    private $batchSize = 20;

    /**
     * Construye la configuración para la sincronización basada en el tipo y parámetros dados.
     *
     * @param string $type Tipo de entidad a sincronizar.
     * @param array $params Parámetros adicionales para la sincronización.
     * @param string $operator Operador lógico para aplicar a los filtros.
     * @return array Configuración para la sincronización.
     */
    public function buildConfig(string $type, array $params = [], string $operator = 'and')
    {
        $config = [
            'customers'    => Customer::getSyncInfo($params, $operator),
            'salesPersons' => SalesPerson::getSyncInfo($params, $operator),
            'warehouses'   => Warehouse::getSyncInfo($params, $operator),
            'products'     => Product::getSyncInfo($params, $operator),
            'orders'       => Order::getSyncInfo($params, $operator),
        ];

        return $config[$type];
    }

    /**
     * Realiza la sincronización de datos desde SAP basándose en la configuración dada.
     *
     * @param array $config Configuración para la sincronización.
     * @return int Cantidad de registros sincronizados o -1 en caso de error.
     */
    public function sync(array $config)
    {
        $skip = 0;
        $count = 0;
        try {
            extract($config); // $endpoint, $model, $fields, $identifier, $method, $filter

            $params = $this->buildUrlParams($filter);

            do {
                $response = (new SAPService)->get($endpoint, $skip, $fields, $params);

                if (!empty($response['value'])) {
                    $count += $this->createRecords($model, $method, $identifier, $fields, $response);
                }
    
                $skip += $this->batchSize;
    
            } while (isset($response['odata.nextLink']));
    
            return $count;
    
        } catch (\Exception $e) {
            $this->logError($e, $model);
            return -1;
        }
    }

    /**
     * Construye los parámetros de la URL para la sincronización basándose en los filtros dados.
     *
     * @param array $filter Filtros para la sincronización.
     * @return string Parámetros de la URL construidos.
     */
    public function buildUrlParams(array $filter)
    {
        $url = '';

        foreach ($filter['params'] as $param) {
            if (!empty($url)) {
                $url .= ' ' . $filter['operator'] . ' ';
            }

            $url .= "{$param['field']} {$param['operator']} {$param['value']}";
        }

        return $url;
    }

    /**
     * Crea registros en la base de datos local basándose en la respuesta de SAP.
     *
     * @param string $model Modelo a utilizar para la creación de registros.
     * @param string $method Método del modelo para la creación o actualización de registros.
     * @param string $identifier Identificador único para los registros.
     * @param array $fields Campos a considerar para la sincronización.
     * @param array $response Respuesta de SAP con los datos a sincronizar.
     * @return int Cantidad de registros creados o actualizados.
     */
    public function createRecords($model, $method, $identifier, $fields, $response)
    {
        $count = 0;
        
        try {
            foreach ($response['value'] as $record) {
                $dataToInsert = array_intersect_key($record, array_flip($fields));

                if (is_array($record) && isset($record[$identifier])) {
                    $model::$method([$identifier => $record[$identifier]], $dataToInsert);
                    $count++;
                }
            }
        } catch (\Exception $e) {
            $this->logError($e, $model);
        }
        return $count;
    }

    /**
     * Registra un error en el log durante la sincronización.
     *
     * @param \Exception $exception Excepción capturada durante la sincronización.
     * @param string $modelClass Clase del modelo que estaba siendo sincronizado.
     * @param mixed $lastSyncedOrder Último pedido sincronizado, si aplica.
     */
    private function logError(\Exception $exception, $modelClass, $lastSyncedOrder = null)
    {
        Log::error("Error sincronizando {$modelClass} - Error: {$exception->getMessage()}");
    }
}

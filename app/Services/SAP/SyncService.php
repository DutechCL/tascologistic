<?php
namespace App\Services\SAP;

use App\Models\Order;
use App\Services\SAP\SAPService;
use Illuminate\Support\Facades\Log;

class SyncService
{
    protected $sapService;
    private $batchSize = 20;

    public function __construct(SAPService $sapService)
    {
        $this->sapService = $sapService;
    }

    public function sync(array $config)
    {
        $skip = 0;
        $count = 0;
        try {
            
            extract($config); // $endpoint, $model, $fields, $identifier, $method, $filter

            $params = $this->buildUrlParams($filter);


            do {
                $response = $this->sapService->get($endpoint, $skip, $fields, $params);
                dd($response);
                if (!empty($response['value'])) {
                    $count += $this->createRecords($model, $method, $identifier, $fields, $response);
                }
    
                $skip += $this->batchSize;
    
            } while (isset($response['odata.nextLink']));
    
            return $count;
    
        } catch (\Exception $e) {
            $this->logError($e, $modelClass);

            return -1;
        }
    }

    public function buildUrlParams(array $filter)
    {
        $url = '';

        foreach ($filter['params'] as $param) {
            // Agregamos el operador lógico entre parámetros
            if (!empty($url)) {
                $url .= ' ' . $filter['operator'] . ' ';
            }

            $url .= "{$param['field']} {$param['operator']} {$param['value']}";
        }

        return $url;
    }

    public function createRecord($modelClass, $method, $identifier, $fields, $response)
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

    private function logError(\Exception $exception, $modelClass, $lastSyncedOrder = null)
    {
        Log::error("Error syncing {$modelClass} - Error: {$exception->getMessage()}");
    }
}

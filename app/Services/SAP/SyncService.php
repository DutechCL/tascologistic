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

        // dd($config);
        $skip = 0;
        $createdOrUpdatedCount = 0;
        try {
            
            extract($config); // $endpoint, $model, $fields, $identifier, $method, $filter

            // $lastSyncedRecord = $model::latest('CreateDate')->first();

            // if($lastSyncedRecord){
            //     $filterParam = $lastSyncedRecord->CreateDate ? "CreateDate ge $lastSyncedRecord->CreateDate and CreateTime gt $lastSyncedRecord->CreateTime" : null;
            // }

            // Inicializamos la URL con el operador lógico principal

            $url = '';

            // Iteramos sobre los parámetros
            foreach ($filter['params'] as $param) {
                // Agregamos el operador lógico entre parámetros
                if (!empty($url)) {
                    $url .= ' ' . strtoupper($filter['operator']) . ' ';
                }

                // Agregamos el campo, operador y valor al URL
                $url .= "{$param['field']} {$param['operator']} {$param['value']}";
            }

            dd($url);


            do {
                $response = $this->sapService->get($endpoint, $skip, $fields);
    
                if (!empty($response['value'])) {
                    try {

                        $argsArray = array_map(function ($record) use ($model, $method, $identifier, $fields) {

                            $dataToInsert = array_intersect_key($record, array_flip($fields));
                
                            if (is_array($record) && isset($record[$identifier])) {

                                call_user_func(
                                    [$model, $method], // model and method to call
                                    [$identifier => $record[$identifier]],  // params #1
                                    $dataToInsert // params #2
                                );

                            }
                
                            return null;
                        }, $response['value']);
                
                        $createdOrUpdatedCount += count($argsArray);
                
                    } catch (\Exception $e) {
                        $this->logError($e, $model);
                    }
                }
    
                $skip += $this->batchSize;
    
            } while (isset($response['odata.nextLink']));
    
            return $createdOrUpdatedCount;
    
        } catch (\Exception $e) {
            $this->logError($e, $modelClass);

            return -1;
        }
    }

    private function logError(\Exception $exception, $modelClass, $lastSyncedOrder = null)
    {
        Log::error("Error syncing {$modelClass} - Error: {$exception->getMessage()}");
    }
}

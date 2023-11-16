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
        $createdOrUpdatedCount = 0;
        try {
            
            extract($config); // $endpoint, $model, $fields, $identifier, $method

            // $lastSyncedRecord = $model::latest('CreateDate')->first();

            // if($lastSyncedRecord){
            //     $filterParam = $lastSyncedRecord->CreateDate ? "CreateDate ge $lastSyncedRecord->CreateDate and CreateTime gt $lastSyncedRecord->CreateTime" : null;
            // }

            do {
                $response = $this->sapService->get($endpoint, $skip, $fields);
    
                if (!empty($response['value'])) {
                    try {
                        // Crea un array de arrays de argumentos para el método
                        $argsArray = array_map(function ($record) use ($model, $identifier, $fields) {
                            $dataToInsert = array_intersect_key($record, array_flip($fields));
                
                            if (is_array($record) && isset($record[$identifier])) {
                                return [[$identifier => $record[$identifier]], $dataToInsert];
                            }
                
                            return null;
                        }, $response['value']);
                
                        // Filtra los elementos nulos
                        $argsArray = array_filter($argsArray);
                
                        // Llama al método utilizando call_user_func_array
                        call_user_func_array([$model, $method], $argsArray);
                
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
    
    // public function syncOrders(array $syncConfig)
    // {



    //     $endpoint = 'orders.get';
    //     $modelClass = Order::class;
    //     $skip = 0;

    //     try {
            
    //         $fields = $modelClass::FILLABLE_API;
    //         $identifier = $modelClass::IDENTIFIER;
            
    //         $filterParam = "not (DocNum eq null and U_SBO_FormaEntrega eq null and CardCode eq null)";

    //         if ($docDate) {

    //             $filterParam = "and DocDate ge {$docDate}";

    //         } else {

    //             $lastSyncedOrder = $modelClass::latest('DocNum')->first();

    //             if($lastSyncedOrder){

    //                 $filterParam .= $lastSyncedOrder ? "and DocDate ge $lastSyncedOrder->DocDate and DocTime gt $lastSyncedOrder->DocTime" : null;

    //             }
    //         }


    //         do {

    //             $response = $this->sapService->get($endpoint, $skip, $fields, $filterParam);

    //             if (!empty($response['value'])) {

    //                 foreach ($response['value'] as $orderData) {

    //                     $modelClass::syncOrderWithItems($orderData);
    //                 }

    //                 $skip += $this->batchSize;
    //             } else {

    //                 break;
    //             }
    //         } while (isset($response['odata.nextLink']));

    //     } catch (\Exception $e) {

    //         $this->logError($e, $modelClass, $lastSyncedOrder->DocNum);
            
    //     }
    // }

    private function logError(\Exception $exception, $modelClass, $lastSyncedOrder = null)
    {
        Log::error("Error syncing {$modelClass} - Error: {$exception->getMessage()}");
    }

    private function log($message)
    {
        echo $message . PHP_EOL;
    }
}

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

    public function syncData(string $endpoint, $modelClass)
    {
        $this->log("Syncing $endpoint...");
        $skip = 0;
        $createdOrUpdatedCount = 0;
        $filterParam = null;
        try {
            $fields = $modelClass::FILLABLE;
            $identifier = $modelClass::IDENTIFIER;


            $lastSyncedRecord = $modelClass::latest('id')->first();

            if($lastSyncedRecord){

                $filterParam = $lastSyncedRecord->CreateDate ? "CreateDate ge $lastSyncedRecord->CreateDate and CreateTime gt $lastSyncedRecord->CreateTime" : null;

            }

            do {
                $response = $this->sapService->get($endpoint, $skip, $fields, $filterParam);
    
                if (!empty($response['value'])) {
                    foreach ($response['value'] as $record) {
                        $dataToInsert = array_intersect_key($record, array_flip($fields));
    
                        if (is_array($record) && isset($record[$identifier])) {
                            try {
                                $modelClass::updateOrCreate(
                                    [$identifier => $record[$identifier]],
                                    $dataToInsert
                                );
    
                                // Aumenta el contador al crear o actualizar un elemento
                                $createdOrUpdatedCount++;
    
                            } catch (\Exception $e) {
                                $this->logError($e, $modelClass);
                            }
                        }
                    }
    
                    $skip += $this->batchSize;
    
                } else {
                    break;
                }
            } while (isset($response['odata.nextLink']));
    
            // Devuelve la cantidad de elementos creados o actualizados
            return $createdOrUpdatedCount;
    
        } catch (\Exception $e) {
            $this->logError($e, $modelClass);
    
            // En caso de error, puedes devolver -1 u otra señal de error según tu necesidad
            return -1;
        }
    }
    
    public function syncOrders($docDate = '2023-11-10')
    {
        $endpoint = 'orders.get';
        $this->log("Syncing $endpoint...");
        $modelClass = Order::class;
        $skip = 0;

        try {
            
            $fields = $modelClass::FILLABLE_API;
            $identifier = $modelClass::IDENTIFIER;
            
            if ($docDate) {

                $filterParam = "DocDate ge {$docDate}";

            } else {

                $lastSyncedOrder = $modelClass::latest('DocNum')->first();

                if($lastSyncedOrder){

                    $filterParam = $lastSyncedOrder ? "DocDate ge $lastSyncedOrder->DocDate and DocTime gt $lastSyncedOrder->DocTime" : null;

                }
            }

            do {

                $response = $this->sapService->get($endpoint, $skip, $fields, $filterParam);

                if (!empty($response['value'])) {

                    foreach ($response['value'] as $orderData) {

                        $modelClass::syncOrderWithItems($orderData);
                    }

                    $skip += $this->batchSize;
                } else {

                    break;
                }
            } while (isset($response['odata.nextLink']));

        } catch (\Exception $e) {

            $this->logError($e, $modelClass, $lastSyncedOrder->DocNum);
            
        }
    }

    private function logError(\Exception $exception, $modelClass, $lastSyncedOrder = null)
    {
        Log::error("Error syncing {$modelClass} - Error: {$exception->getMessage()}");
    }

    private function log($message)
    {
        echo $message . PHP_EOL;
    }
}

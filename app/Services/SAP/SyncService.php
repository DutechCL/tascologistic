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
        $skip = 0;

        try {

            $fields = $modelClass::FILLABLE;
            $identifier = $modelClass::IDENTIFIER;
            $filterParam = null;

            do {
                $response = $this->sapService->get($endpoint, $skip, $fields, $filterParam);

                if (!empty($response['value'])) {
                    foreach ($response['value'] as $record) {
                        $dataToInsert = array_intersect_key($record, array_flip($fields));

                        if (is_array($record) && isset($record[$identifier])) {
                            $modelClass::updateOrCreate(
                                [$identifier => $record[$identifier]],
                                $dataToInsert
                            );
                        }
                    }
                    $skip += $this->batchSize;
                } else {
                    break;
                }
            } while (isset($response['odata.nextLink']));
        } catch (\Exception $e) {

            $this->logError($e, $modelClass);

        }
    }

    public function syncOrders()
    {
        $endpoint = 'orders.get';
        $modelClass = Order::class;

        $skip = 0;

        try {
            
            $fields = $modelClass::FILLABLE_API;
            $identifier = $modelClass::IDENTIFIER;
            $lastSyncedOrder = $modelClass::latest('DocNum')->first();
            $filterParam = $lastSyncedOrder ? "DocNum ge {$lastSyncedOrder->DocNum}" : null;

            do {

                $response = $this->sapService->get($endpoint, $skip, $fields, $filterParam);

                if (!empty($response['value'])) {
                    foreach ($response['value'] as $orderData) {
                        $this->log("Loading orders {$orderData['DocNum']}...");
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
        Log::error("Error syncing {$modelClass} - DocNum: {$lastSyncedOrder->DocNum}. Error: {$exception->getMessage()}");
    }

    private function log($message)
    {
        echo $message . PHP_EOL;
    }
}

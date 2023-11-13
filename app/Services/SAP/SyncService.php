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

                        $this->log("Loading {$endpoint} $skip...");

                        if (is_array($record) && isset($record[$identifier])) {
                            try {
                                $modelClass::updateOrCreate(
                                    [$identifier => $record[$identifier]],
                                    $dataToInsert
                                );
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
        } catch (\Exception $e) {

            $this->logError($e, $modelClass);

        }
    }

    public function syncOrders($docNum = null)
    {
        $endpoint = 'orders.get';
        $modelClass = Order::class;

        $skip = 0;

        try {
            
            $fields = $modelClass::FILLABLE_API;
            $identifier = $modelClass::IDENTIFIER;
            
            if ($docNum) {
                $filterParam = "docDate ge {$docNum}";
            } else {
                $lastSyncedOrder = $modelClass::latest('DocEntry')->first();
                $filterParam = $lastSyncedOrder ? "DocEntry ge {$lastSyncedOrder->DocEntry}" : null;
            }

            do {

                $response = $this->sapService->get($endpoint, $skip, $fields, $filterParam);

                if (!empty($response['value'])) {
                    foreach ($response['value'] as $orderData) {
                        $this->log("Loading orders {$orderData['DocEntry']}...");
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
        // Log::error("Error syncing {$modelClass} - DocNum: {$lastSyncedOrder->DocNum}. Error: {$exception->getMessage()}");
    }

    private function log($message)
    {
        echo $message . PHP_EOL;
    }
}

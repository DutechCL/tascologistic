<?php

namespace App\Console\Commands;

use App\Models\Customer;
use App\Models\Product;
use App\Models\Order;
use Illuminate\Console\Command;
use App\Services\SAP\SAPService;

class SAPIntegration extends Command
{
    // ...

    protected $signature = 'sap:sync {type}';
    protected $description = 'Synchronize SAP data';

    public function handle(SAPService $sapService)
    {
        $type = $this->argument('type');

        switch ($type) {
            case 'customers':
                $this->syncCustomers($sapService);
                break;
            case 'products':
                $this->syncProducts($sapService);
                break;
            case 'orders':
                $this->syncOrders($sapService);
                break;
            // Agrega más casos según sea necesario para otros tipos de datos
            default:
                $this->error('Invalid data type specified.');
                break;
        }

        $this->info('Synchronization completed.');
    }

    private function syncCustomers(SAPService $sapService)
    {
        $this->info('Syncing customers...');
        $fields = ['CardCode', 'CardName', 'Address', 'FederalTaxID', 'EmailAddress', 'CreditLimit', 'MaxCommitment'];
        $batchSize = 20;
        $skip = 0;

        do {
            $response = $sapService->getBusinessPartners($fields, $skip);
            if (!empty($response['value'])) {
                foreach ($response['value']as $record) {
                    $dataToInsert = array_intersect_key($record, array_flip($fields));
                    if (is_array($record)) {
                        if (isset($record['CardCode']) && isset($record['CardName'])){
                            Customer::updateOrCreate(
                                ['CardCode' => $record['CardCode']],
                                $dataToInsert
                            );
                        }
                    }
                }
                $skip += $batchSize;
            } else {
                break;
            }
        } while (isset($response['odata.nextLink']));
    }

    private function syncProducts(SAPService $sapService)
    {
        // Lógica similar para sincronizar productos
    }

    private function syncOrders(SAPService $sapService)
    {
        // Lógica similar para sincronizar órdenes
    }
}
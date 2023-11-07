<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use App\Models\Warehouse;
use App\Models\SalesPerson;
use Illuminate\Console\Command;
use App\Services\SAP\SAPService;

class SAPIntegration extends Command
{

    protected $signature = 'sap:sync {type}';
    protected $description = 'Synchronize SAP data';
    protected $sapService ;
    private $batchSize = 20;

    public function __construct(SAPService $sapService)
    {
        parent::__construct();
        $this->sapService = $sapService;
    }

    public function handle()
    {
        $type = $this->argument('type');

        switch ($type) {
            case 'customers':
                $this->syncData('business_partners.get', Customer::class);
                break;
            case 'salesPersons':
                $this->syncData('sales_persons.get', SalesPerson::class);
                break;
            case 'warehouses':
                $this->syncData('warehouses.get', Warehouse::class);
                break;
            case 'products':
                $this->syncData('products.get', Product::class);
                break;
            default:
                $this->error('Invalid data type specified.');
                break;
        }

        $this->info('Synchronization completed.');
    }


    private function syncData(string $endpoint, $modelClass)
    {
        $this->info("Syncing $endpoint...");

        $skip = 0;

        do {
            $fields = $modelClass::FILLABLE;
            $identifier = $modelClass::IDENTIFIER;

            $response = $this->sapService->get($endpoint, $skip, $fields);
            
            if (!empty($response['value'])) {
                foreach ($response['value'] as $record) {
                    $dataToInsert = array_intersect_key($record, array_flip($fields));
                    
                    if (is_array($record) && isset($record[$identifier])) {
                        $modelClass::updateOrCreate(
                            [ $identifier => $record[$identifier] ],
                            $dataToInsert
                        );
                    }
                }
                $skip += $this->batchSize;
            } else {
                break;
            }
        } while (isset($response['odata.nextLink']));
    }

}
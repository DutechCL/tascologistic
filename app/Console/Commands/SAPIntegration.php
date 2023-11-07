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
    // ...

    protected $signature = 'sap:sync {type}';
    protected $description = 'Synchronize SAP data';
    protected SAPService $sapService ;
    private $batchSize = 20;

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


    // private function syncCustomers(SAPService $sapService)
    // {
    //     $this->info('Syncing customers...');
    //     $fields = [
    //         'CardCode', 
    //         'CardName', 
    //         'Address', 
    //         'FederalTaxID', 
    //         'EmailAddress', 
    //         'CreditLimit', 
    //         'MaxCommitment'
    //     ];
    //     $batchSize = 20;
    //     $skip = 0;

    //     do {
    //         $response = $sapService->get('business_partners.get', $skip, $fields);
    //         if (!empty($response['value'])) {
    //             foreach ($response['value']as $record) {
    //                 $dataToInsert = array_intersect_key($record, array_flip($fields));
    //                 if (is_array($record)) {
    //                     if (isset($record['CardCode']) && isset($record['CardName'])){
    //                         Customer::updateOrCreate(
    //                             ['CardCode' => $record['CardCode']],
    //                             $dataToInsert
    //                         );
    //                     }
    //                 }
    //             }
    //             $skip += $batchSize;
    //         } else {
    //             break;
    //         }
    //     } while (isset($response['odata.nextLink']));
    // }

    // private function syncSalesPersons(SAPService $sapService)
    // {
    //     $this->info('Syncing SalesEmploye...');
    //     $fields = [
    //         'SalesEmployeeCode', 
    //         'SalesEmployeeName', 
    //         'CommissionForSalesEmployee', 
    //         'CommissionGroup', 
    //         'Locked', 
    //         'EmployeeID', 
    //         'Active',
    //         'Telephone',
    //         'Mobile',
    //         'Email',
    //     ];
    //     $batchSize = 20;
    //     $skip = 0;

    //     do {
    //         $response = $sapService->get('sales_persons.get', $skip, $fields);
    //         if (!empty($response['value'])) {

    //             $result =  array_map(function($element) {
    //                 $element['Active'] = ($element['Active'] == 'tYES') ? 1 : 0;
    //                 return $element;
    //             }, $response['value'] );

    //             foreach ($result as $record) {
    //                 $dataToInsert = array_intersect_key($record, array_flip($fields));
    //                 if (is_array($record)) {
    //                     if (isset($record['SalesEmployeeCode'])){
    //                         SalesPerson::updateOrCreate(
    //                             ['SalesEmployeeCode' => $record['SalesEmployeeCode']],
    //                             $dataToInsert
    //                         );
    //                     }
    //                 }
    //             }
    //             $skip += $batchSize;
    //         } else {
    //             break;
    //         }
    //     } while (isset($response['odata.nextLink']));
    // }

    // private function syncWarehouses(SAPService $sapService)
    // {
    //     $this->info('Syncing warehouses...');
    //     $fields = [
    //         'AllowUseTax',
    //         'City',
    //         'State',
    //         'Street',
    //         'StreetNo',
    //         'WarehouseCode',
    //         'WarehouseCodeEncrey',
    //         'WarehouseName',
    //     ];
    //     $batchSize = 20;
    //     $skip = 0;

    //     do {
    //         $response = $sapService->get('warehouses.get', $skip, $fields);
    //         if (!empty($response['value'])) {
    //             foreach ($response['value']as $record) {
    //                 $dataToInsert = array_intersect_key($record, array_flip($fields));
    //                 if (is_array($record)) {
    //                     if (isset($record['WarehouseCode'])){
    //                         Warehouse::updateOrCreate(
    //                             ['WarehouseCode' => $record['WarehouseCode']],
    //                             $dataToInsert
    //                         );
    //                     }
    //                 }
    //             }
    //             $skip += $batchSize;
    //         } else {
    //             break;
    //         }
    //     } while (isset($response['odata.nextLink']));
    // }
}
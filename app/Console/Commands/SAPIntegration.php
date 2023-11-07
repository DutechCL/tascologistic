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
            case 'salesPersons':
                $this->syncSalesPersons($sapService);
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
        $fields = [
            'CardCode', 
            'CardName', 
            'Address', 
            'FederalTaxID', 
            'EmailAddress', 
            'CreditLimit', 
            'MaxCommitment'
        ];
        $batchSize = 20;
        $skip = 0;

        do {
            $response = $sapService->get('business_partners.get', $skip, $fields);
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

    private function syncSalesPersons(SAPService $sapService)
    {
        $this->info('Syncing SalesEmploye...');
        $fields = [
            'SalesEmployeeCode', 
            'SalesEmployeeName', 
            'CommissionForSalesEmployee', 
            'CommissionGroup', 
            'Locked', 
            'EmployeeID', 
            'Active',
            'Telephone',
            'Mobile',
            'Email',
        ];
        $batchSize = 20;
        $skip = 0;

        do {
            $response = $sapService->get('sales_persons.get', $skip, $fields);
            if (!empty($response['value'])) {

                $result =  array_map(function($element) {
                    $element['active'] = ($element['Active'] == 'tYES') ? 1 : 0;
                    return $element;
                }, $response['value'] );

                foreach ($result as $record) {
                    $dataToInsert = array_intersect_key($record, array_flip($fields));
                    if (is_array($record)) {
                        if (isset($record['SalesEmployeeCode'])){
                            Customer::updateOrCreate(
                                ['SalesEmployeeCode' => $record['SalesEmployeeCode']],
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
        $this->info('Syncing products...');
        // $fields = [
        //     'ItemCode',
        //     'ItemName',
        //     'Quantity',
        //     'Price',
        //     'PriceAfterVAT',
        //     'Currency',
        //     'WarehouseCode',
        //     'Height1',
        //     'Hight1Unit',
        //     'Height2',
        //     'Height2Unit',
        //     'Lengh1',
        //     'Lengh1Unit',
        //     'Lengh2',
        //     'Lengh2Unit',
        //     'Weight1',
        //     'Weight1Unit',
        //     'Weight2',
        //     'Weight2Unit',
        //     'Factor1',
        //     'Factor2',
        //     'Factor3',
        //     'Factor4',
        //     'TaxCode',
        //     'TaxType',
        //     ];
        // $batchSize = 20;
        // $skip = 0;

        // do {
        //     $response = $sapService->get('products.get', $skip, $fields);
        //     if (!empty($response['value'])) {
        //         foreach ($response['value']as $record) {
        //             $dataToInsert = array_intersect_key($record, array_flip($fields));
        //             if (is_array($record)) {
        //                 if (isset($record['ItemCode'])){
        //                     Product::updateOrCreate(
        //                         ['ItemCode' => $record['ItemCode']],
        //                         $dataToInsert
        //                     );
        //                 }
        //             }
        //         }
        //         $skip += $batchSize;
        //     } else {
        //         break;
        //     }
        // } while (isset($response['odata.nextLink']));
    }

    private function syncOrders(SAPService $sapService)
    {
        // Lógica similar para sincronizar órdenes
    }
}
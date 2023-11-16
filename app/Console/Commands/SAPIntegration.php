<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use App\Models\Warehouse;
use App\Models\SalesPerson;
use App\Services\SAP\SyncService;
use Illuminate\Console\Command;

class SAPIntegration extends Command
{
    protected $signature = 'sap:sync {type} {--docDate=} {--docNum=}';
    protected $description = 'Synchronize SAP data';
    protected $sap;

    public function __construct(SyncService $sap)
    {
        parent::__construct();
        $this->sap = $sap;
    }

    public function handle()
    {
        $type = $this->argument('type');
        $dateTo = $this->option('docDate') ?? null;
        $docNum = $this->option('docNum') ?? null;

        $params = [];

        if ($dateTo) {
            $params = [
                [
                    'field'    => 'DocDate',
                    'operator' => 'ge', // greater than
                    'value'    => $dateTo,
                ]
            ];
        }

        if ($docNum) {
            $params = [
                [
            
                    'field'    => 'DocNum',
                    'operator' => 'eq', // equal
                    'value'    => $docNum,
                ]
            ];
        }

        $syncCases = [
            'customers'    => Customer::getSyncInfo(),
            'salesPersons' => SalesPerson::getSyncInfo(),
            'warehouses'   => Warehouse::getSyncInfo(),
            'products'     => Product::getSyncInfo(),
            'orders'       => Order::getSyncInfo($params),
        ];

        $this->info("Syncing $type...");

        if ($type === 'all') {
            foreach ($syncCases as $case => $info) {
                $this->info("Start Syncing $case...");
                $this->sap->sync($info);
                $this->info("End Syncing $case...");

            }
        } else {
            $this->info("Start Syncing $type...");
            $this->sap->sync($syncCases[$type]);
            $this->info("End Syncing $type...");
        }

        $this->info('Synchronization completed.');
    }
}
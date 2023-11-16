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
        $type   = $this->argument('type');
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

        $syncCases = ['customers', 'salesPersons', 'warehouses', 'products', 'orders'];

        $this->info("Syncing $type...");

        if ($type === 'all') {
            foreach ($syncCases as $case => $info) {
                $this->info("Start Syncing $case...");

                $config = ($case === 'orders') ? $this->sap->build($case, $params) : $this->sap->build($case);
                $this->sap->sync($config);
            }
        } else {
            $this->info("Start Syncing $type...");
            $config = ($type === 'orders') ? $this->sap->build($type, $params) : $this->sap->build($type);
            $this->sap->sync($config);
        }

        $this->info('Synchronization completed.');
    }
}
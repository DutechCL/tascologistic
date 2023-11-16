<?php

namespace App\Console\Commands;

use App\Services\SAP\SyncService;
use Illuminate\Console\Command;

class SAPIntegration extends Command
{
    const SYNC_ALL = 'all';
    const SYNC_CUSTOMERS = 'customers';
    const SYNC_SALES_PERSONS = 'salesPersons';
    const SYNC_WAREHOUSES = 'warehouses';
    const SYNC_PRODUCTS = 'products';
    const SYNC_ORDERS = 'orders';

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

        $this->info("Syncing $type...");

        if ($type === self::SYNC_ALL) {
            $this->syncAll();
        } else {
            $this->syncType($type, $params);
        }

        $this->info('Synchronization completed.');
    }

    protected function syncAll()
    {
        $syncCases = [
            self::SYNC_CUSTOMERS,
            self::SYNC_SALES_PERSONS,
            self::SYNC_WAREHOUSES,
            self::SYNC_PRODUCTS,
            self::SYNC_ORDERS
        ];

        foreach ($syncCases as $case) {
            $this->info("Start Syncing $case...");
            $config = ($case === self::SYNC_ORDERS) ? $this->sap->build($case, $params) : $this->sap->build($case);
            $this->sap->sync($config);
        }
    }

    protected function syncType($type, $params)
    {
        $this->info("Start Syncing $type...");
        $config = ($type === self::SYNC_ORDERS) ? $this->sap->build($type, $params) : $this->sap->build($type);
        $this->sap->sync($config);
    }
}

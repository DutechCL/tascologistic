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
    protected $signature = 'sap:sync {type} {--docDate=}';
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

        $syncCases = [
            'customers'    => Customer::SYNC_INFO,
            'salesPersons' => SalesPerson::SYNC_INFO,
            'warehouses'   => Warehouse::SYNC_INFO,
            'products'     => Product::SYNC_INFO,
            'orders'       => Order::SYNC_INFO,
        ];

        $this->info("Syncing $type...");

        if ($type === 'all') {
            foreach ($syncCases as $case => $info) {
                $this->sap->sync($info);
            }
        } else {
            $this->sap->sync($syncCases[$type]);
        }

        $this->info('Synchronization completed.');
    }
}
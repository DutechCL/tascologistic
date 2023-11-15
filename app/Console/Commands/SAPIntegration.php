<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use App\Models\Warehouse;
use App\Models\SalesPerson;
use App\Services\SAP\SyncService as SAP;
use Illuminate\Console\Command;

class SAPIntegration extends Command
{
    protected $signature = 'sap:sync {type} {--docDate=}';
    protected $description = 'Synchronize SAP data';
    protected $syncService;

    // public function __construct(SyncService $syncService)
    // {
    //     parent::__construct();
    //     $this->syncService = $syncService;
    // }

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
                SAP::sync($info);
            }
        } else {
            SAP::sync($syncCases[$type]);
        }

        

        $this->info('Synchronization completed.');
    }
}
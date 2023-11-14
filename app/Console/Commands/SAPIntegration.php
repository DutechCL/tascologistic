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
    protected $syncService;

    public function __construct(SyncService $syncService)
    {
        parent::__construct();
        $this->syncService = $syncService;
    }

    public function handle()
    {
        $type = $this->argument('type');
        $dateTo = $this->option('docDate') ?? null;

        $this->info("Syncing $type...");

        switch ($type) {
            case 'customers':
                $this->syncService->syncData('business_partners.get', Customer::class);
                break;
            case 'salesPersons':
                $this->syncService->syncData('sales_persons.get', SalesPerson::class);
                break;
            case 'warehouses':
                $this->syncService->syncData('warehouses.get', Warehouse::class);
                break;
            case 'products':
                $this->syncService->syncData('products.get', Product::class);
                break;
            case 'orders':
                $this->syncService->syncOrders($dateTo);
                break;
            case 'all':
                $this->syncService->syncData('business_partners.get', Customer::class);
                $this->syncService->syncData('sales_persons.get', SalesPerson::class);
                $this->syncService->syncData('warehouses.get', Warehouse::class);
                $this->syncService->syncData('products.get', Product::class);
                $this->syncService->syncOrders('2022-11-10'); // Asumiendo que no es necesario especificar la fecha para órdenes
                break;
            default:
                $this->error('Invalid data type specified.');
                break;
        }

        $this->info('Synchronization completed.');
    }
}
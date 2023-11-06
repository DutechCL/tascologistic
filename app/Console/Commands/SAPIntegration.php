<?php

namespace App\Console\Commands;

use App\Services\SAP\SAPService;
use Illuminate\Console\Command;

class SAPIntegration extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sap:get-orders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(SAPService $sapService)
    {
        $this->info('Testing SAP integration to get orders...');

        // Llama al método getOrders de SAPService
        $customer = $sapService->getBusinessPartners();

        // Imprime o maneja la respuesta según tus necesidades
        $this->info('Orders from SAP:');
        dd($customer);
        // $this->table(['OrderID', 'CustomerID', 'TotalAmount'], $orders);

        $this->info('Test completed.');
    }
}

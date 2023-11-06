<?php

namespace App\Console\Commands;

use App\Models\Customer;
use Illuminate\Console\Command;
use App\Services\SAP\SAPService;
use Illuminate\Support\Facades\Schema;

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
        $this->info('Testing SAP integration to get business partners...');

        $fields = ['CardCode', 'CardName', 'Address', 'FederalTaxID', 'EmailAddress', 'CreditLimit', 'MaxCommitment'];

        // Tamaño del lote
        $batchSize = 20;

        // Iniciar desde el primer registro
        $skip = 0;
        // Customer::truncate();
        do {
            // Obtener los registros de la página actual
            $response = $sapService->getBusinessPartners($fields, $skip);

            // Verificar si hay registros en la respuesta
            if (!empty($response['value'])) {
                // Procesar los registros del lote actual
                $this->processBatch($response['value'], $fields);
                
                // Actualizar el valor de $skip para la próxima iteración
                $skip += $batchSize;
            } else {
                // Salir del bucle si no hay más registros
                break;
            }

        } while (isset($response['odata.nextLink']));

        $this->info('Test completed.');
    }

    // Método para procesar un lote y almacenarlo en la base de datos
    private function processBatch($batch, $fields)
    {
        // Puedes almacenar los registros en la base de datos aquí
        // Por ejemplo, puedes utilizar Eloquent para crear modelos y almacenarlos en la base de datos
        foreach ($batch as $record) {
            // Verificar si $record es un array antes de acceder a sus índices
            echo "Procesando registro {$record['CardCode']}...\n";
            $dataToInsert = array_intersect_key($record, array_flip($fields));
            if (is_array($record)) {
                if (isset($record['CardCode']) || isset($record['CardCode'])){
                    Customer::updateOrCreate(
                        ['CardCode' => $record['CardCode']],
                        $dataToInsert
                    );
                }
            }
        }
    }



}
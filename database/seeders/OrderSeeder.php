<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\Order;
use App\Models\Customer;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
       // Ruta al archivo CSV
       $csvFile = database_path('seeders/data/orders.csv');

       // Lee el archivo CSV
       $csvData = array_map('str_getcsv', file($csvFile));

       // Obtén el índice de las columnas del CSV
       $headers = array_shift($csvData);
       
       $columnIndex = array_flip($headers);

       foreach ($csvData as $row) {
            $rowData = [];
            foreach ($headers as $index => $header) {
                if($header != 'customer_id'){
                    $rowData[$header] = $row[$index];
                }else{
                    $customer = Customer::where('CardCode', $row[$index])->first();
                    $rowData[$header] = $customer->id;
                }
            }
            $columnNames = Schema::getColumnListing('orders'); // Obtiene los nombres de columna de la tabla

            $dataToInsert = array_intersect_key($rowData, array_flip($columnNames));

            Order::updateOrCreate(
                ['DocNum' => $rowData['DocNum']],
                [
                    "DocEntry" => intval($rowData['DocEntry']),
                    "DocNum" => intval($rowData['DocNum']),
                    "DocDate" => Carbon::parse($rowData['DocDate'])->format('Y-m-d'),
                    "customer_id" => intval($rowData['customer_id']),
                    "DocTotal" => floatval($rowData['DocTotal']),
                    "Comments" => $rowData['Comments'],
                    "SalesPersonCode" => $rowData['SalesPersonCode'],
                    "U_SBO_FormaEntrega" => $rowData['U_SBO_FormaEntrega']
                ]
            );
        }
    }
}

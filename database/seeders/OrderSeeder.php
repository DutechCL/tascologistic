<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\Order;
use App\Models\Customer;
use App\Models\SalesPerson;
use Illuminate\Support\Str;
use App\Models\MethodShipping;
use Illuminate\Database\Seeder;
use App\Services\ProcessService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OrderSeeder extends Seeder
{
    protected $processService;

    public function __construct(ProcessService $processService)
    {
        $this->processService = $processService;
    }
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
                if($header != 'customer_id' && $header != 'U_SBO_FormaEntrega' && $header != 'SalesPersonCode'){
                    $rowData[$header] = $row[$index];
                }else if($header == 'customer_id'){
                    $customer = Customer::where('CardCode', $row[$index])->first();
                    $rowData[$header] = $customer->id;
                }else if($header == 'U_SBO_FormaEntrega'){
                    $methodShipping = MethodShipping::where('name', $row[$index])->first();
                    $rowData['method_shipping_id'] = $methodShipping->id ?? 1;
                    $rowData[$header] = $row[$index];
                }else if($header == 'SalesPersonCode'){
                    $SalesEmployee = SalesPerson::where('SalesEmployeeCode', $row[$index])->first();
                    $rowData['SalesEmployeeName'] = $SalesEmployee->SalesEmployeeName;
                    
                    $rowData[$header] = $row[$index];
                }
            }
            if($rowData['DocNum']){
               $order = Order::updateOrCreate(
                        ['DocNum' => $rowData['DocNum']],
                        [
                            "DocEntry" => intval($rowData['DocEntry']),
                            "DocNum" => intval($rowData['DocNum']),
                            "DocDate" => Carbon::parse($rowData['DocDate'])->format('Y-m-d'),
                            "DocTime" => Carbon::now()->format('h:i'),
                            "method_shipping_id" => intval($rowData['method_shipping_id']),
                            "order_status_id" => 2,
                            "customer_id" => intval($rowData['customer_id']),
                            "DocTotal" => floatval($rowData['DocTotal']),
                            "Comments" => $rowData['Comments'],
                            "SalesPersonCode" => $rowData['SalesPersonCode'],
                            "U_SBO_FormaEntrega" => $rowData['U_SBO_FormaEntrega'],
                            "is_approved" => false,
                            "SalesEmployeeName" => $rowData['SalesEmployeeName'],
                        ]
                    );
            }
        }
    }
}

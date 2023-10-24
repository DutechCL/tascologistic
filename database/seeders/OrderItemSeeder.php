<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use App\Models\OrderItem;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
       // Ruta al archivo CSV
       $csvFile = database_path('seeders/data/order_items.csv');

       // Lee el archivo CSV
       $csvData = array_map('str_getcsv', file($csvFile));

       // Obtén el índice de las columnas del CSV
       $headers = array_shift($csvData);
       
       $columnIndex = array_flip($headers);

       foreach ($csvData as $row) {
            $rowData = [];
            foreach ($headers as $index => $header) {
                $key = str_replace('DocumentLines__', '', $header);
                if($key != 'ItemCode' && $key != 'order_docnum')
                {
                    $rowData[$key] = $row[$index];
                }else if($key == 'ItemCode')
                {
                    $product = Product::where('ItemCode', $row[$index])->first();
                    $rowData['product_id'] = $product->id;
                    $rowData['ItemCode'] = $row[$index];
                }else if($key == 'order_docnum')
                {
                    $order = Order::where('DocNum', intval($row[$index]))->first();
                    if($order){
                        $rowData['order_id'] = $order->id;
                    }
                }
            }
            $columnNames = Schema::getColumnListing('order_items');
            $dataToInsert = array_intersect_key($rowData, array_flip($columnNames));

            OrderItem::create(
                $dataToInsert
            );
        }
    }
}

<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
       // Ruta al archivo CSV
       $csvFile = database_path('seeders/data/products.csv');

       // Lee el archivo CSV
       $csvData = array_map('str_getcsv', file($csvFile));

       // Obtén el índice de las columnas del CSV
       $headers = array_shift($csvData);
       
       $columnIndex = array_flip($headers);

       foreach ($csvData as $row) {
            $rowData = [];
            foreach ($headers as $index => $header) {
                $key = str_replace('DocumentLines__', '', $header);
                $rowData[$key] = $row[$index];
            }
            $columnNames = Schema::getColumnListing('products'); // Obtiene los nombres de columna de la tabla

            $dataToInsert = array_intersect_key($rowData, array_flip($columnNames));
            
            Product::updateOrCreate(
                ['ItemCode' => $rowData['ItemCode']],
                $dataToInsert
            );
        }
    }
}

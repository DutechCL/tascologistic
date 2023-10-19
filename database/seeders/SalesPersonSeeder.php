<?php

namespace Database\Seeders;

use App\Models\SalesPerson;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SalesPersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
       // Ruta al archivo CSV
       $csvFile = database_path('seeders/data/sales-person.csv');

       // Lee el archivo CSV
       $csvData = array_map('str_getcsv', file($csvFile));

       // Obtén el índice de las columnas del CSV
       $headers = array_shift($csvData);
       
       $columnIndex = array_flip($headers);

       foreach ($csvData as $row) {
            $rowData = [];
            foreach ($headers as $index => $header) {
                $rowData[$header] = $row[$index];
            }
            $columnNames = Schema::getColumnListing('sales_persons'); // Obtiene los nombres de columna de la tabla

            $dataToInsert = array_intersect_key($rowData, array_flip($columnNames));

            SalesPerson::updateOrCreate(
                ['SalesEmployeeCode' => $rowData['SalesEmployeeCode']],
                [
                    'SalesEmployeeCode' => $rowData['SalesEmployeeCode'],
                    'SalesEmployeeName' => ucwords($rowData['SalesEmployeeName']),
                    'CommissionForSalesEmployee' => $rowData['CommissionForSalesEmployee'],
                    'CommissionGroup' => $rowData['CommissionGroup'],
                    'Locked' => $rowData['Locked'],
                    'EmployeeID' => $rowData['EmployeeID'] == 'null' ?? null,
                    'Active' => $rowData['Active'] == 'tYES' ? 1 : 0,
                    'Telephone' => $rowData['Telephone'],
                    'Mobile' => $rowData['Mobile'],
                    'Email' => $rowData['Email'],
                ]
            );
        }
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class WarehousesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('warehouses')->delete();
        
        \DB::table('warehouses')->insert(array (
            0 => 
            array (
                'AllowUseTax' => 'tNO',
                'City' => 'Santiago',
                'created_at' => '2023-10-17 13:11:54',
                'id' => 5,
                'State' => '13',
                'Street' => 'Vicuña Mackena',
                'StreetNo' => 1325,
                'updated_at' => '2023-10-17 13:11:54',
                'WarehouseCode' => 'BVM',
                'WarehouseCodeEncrey' => 'QlZN',
                'WarehouseName' => 'Bodega Vicuña Mackenna',
            ),
            1 => 
            array (
                'AllowUseTax' => 'tNO',
                'City' => 'Santiago',
                'created_at' => '2023-10-17 13:11:54',
                'id' => 6,
                'State' => '13',
                'Street' => 'Victoria',
                'StreetNo' => 37,
                'updated_at' => '2023-10-17 13:11:54',
                'WarehouseCode' => 'BV37',
                'WarehouseCodeEncrey' => 'QlYzNw==',
                'WarehouseName' => 'Bodega Victoria',
            ),
            2 => 
            array (
                'AllowUseTax' => 'tNO',
                'City' => 'Santiago',
                'created_at' => '2023-10-17 13:11:54',
                'id' => 7,
                'State' => '13',
                'Street' => 'Santa Elena',
                'StreetNo' => 1402,
                'updated_at' => '2023-10-17 13:11:54',
                'WarehouseCode' => 'BSE',
                'WarehouseCodeEncrey' => 'QlNF',
                'WarehouseName' => 'Bodega Santa Elena',
            ),
        ));
        
        
    }
}
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
                'id' => 1,
                'created_at' => '2023-11-15 13:45:52',
                'updated_at' => '2023-11-15 13:45:52',
                'WarehouseCode' => '01',
                'WarehouseName' => 'Almacén general',
                'Street' => NULL,
                'StreetNo' => NULL,
                'AllowUseTax' => 'tNO',
                'State' => NULL,
                'City' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'created_at' => '2023-11-15 13:45:52',
                'updated_at' => '2023-11-15 13:45:52',
                'WarehouseCode' => 'BDEF',
                'WarehouseName' => 'Productos con defecto',
                'Street' => NULL,
                'StreetNo' => NULL,
                'AllowUseTax' => 'tNO',
                'State' => '',
                'City' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'created_at' => '2023-11-15 13:45:52',
                'updated_at' => '2023-11-15 13:45:52',
                'WarehouseCode' => 'BJQ',
                'WarehouseName' => 'Bodega Jorge Quintanilla',
                'Street' => NULL,
                'StreetNo' => NULL,
                'AllowUseTax' => 'tNO',
                'State' => '',
                'City' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'created_at' => '2023-11-15 13:45:52',
                'updated_at' => '2023-11-15 13:45:52',
                'WarehouseCode' => 'BSDV',
                'WarehouseName' => 'Sala de Ventas Vicuña',
                'Street' => NULL,
                'StreetNo' => NULL,
                'AllowUseTax' => 'tNO',
                'State' => '',
                'City' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'created_at' => '2023-11-15 13:45:52',
                'updated_at' => '2023-11-15 13:45:52',
                'WarehouseCode' => 'BTRA',
                'WarehouseName' => 'Bodega Transito',
                'Street' => NULL,
                'StreetNo' => NULL,
                'AllowUseTax' => 'tNO',
                'State' => '',
                'City' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'created_at' => '2023-11-15 13:45:52',
                'updated_at' => '2023-11-15 13:45:52',
                'WarehouseCode' => 'BVM',
                'WarehouseName' => 'Bodega Vicuña Mackenna',
                'Street' => 'Vicuña Mackena',
                'StreetNo' => 1325,
                'AllowUseTax' => 'tNO',
                'State' => '13',
                'City' => 'Santiago',
            ),
            6 => 
            array (
                'id' => 7,
                'created_at' => '2023-11-15 13:45:52',
                'updated_at' => '2023-11-15 13:45:52',
                'WarehouseCode' => 'BV37',
                'WarehouseName' => 'Bodega Victoria',
                'Street' => 'Victoria',
                'StreetNo' => 37,
                'AllowUseTax' => 'tNO',
                'State' => '13',
                'City' => 'Santiago',
            ),
            7 => 
            array (
                'id' => 8,
                'created_at' => '2023-11-15 13:45:52',
                'updated_at' => '2023-11-15 13:45:52',
                'WarehouseCode' => 'BSE',
                'WarehouseName' => 'Bodega Santa Elena',
                'Street' => 'Santa Elena',
                'StreetNo' => 1402,
                'AllowUseTax' => 'tNO',
                'State' => '13',
                'City' => 'Santiago',
            ),
            8 => 
            array (
                'id' => 9,
                'created_at' => '2023-11-15 13:45:52',
                'updated_at' => '2023-11-15 13:45:52',
                'WarehouseCode' => 'BS/M',
                'WarehouseName' => 'Traslado sin Movimiento',
                'Street' => 'Vicuna Mackenna',
                'StreetNo' => 1325,
                'AllowUseTax' => 'tNO',
                'State' => '13',
                'City' => 'Santiago',
            ),
            9 => 
            array (
                'id' => 10,
                'created_at' => '2023-11-15 13:45:52',
                'updated_at' => '2023-11-15 13:45:52',
                'WarehouseCode' => 'BSDV37',
                'WarehouseName' => 'Sala de Ventas Victoria',
                'Street' => NULL,
                'StreetNo' => NULL,
                'AllowUseTax' => 'tNO',
                'State' => '',
                'City' => NULL,
            ),
        ));
        
        
    }
}
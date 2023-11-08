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
                'created_at' => '2023-11-08 01:47:56',
                'updated_at' => '2023-11-08 01:47:56',
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
                'created_at' => '2023-11-08 01:47:56',
                'updated_at' => '2023-11-08 01:47:56',
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
                'created_at' => '2023-11-08 01:47:56',
                'updated_at' => '2023-11-08 01:47:56',
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
                'created_at' => '2023-11-08 01:47:56',
                'updated_at' => '2023-11-08 01:47:56',
                'WarehouseCode' => 'BSDV',
                'WarehouseName' => 'Sala de Ventas',
                'Street' => NULL,
                'StreetNo' => NULL,
                'AllowUseTax' => 'tNO',
                'State' => '',
                'City' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'created_at' => '2023-11-08 01:47:56',
                'updated_at' => '2023-11-08 01:47:56',
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
                'created_at' => '2023-11-08 01:47:56',
                'updated_at' => '2023-11-08 01:47:56',
                'WarehouseCode' => 'BV37',
                'WarehouseName' => 'Bodega Victoria',
                'Street' => 'Victoria',
                'StreetNo' => 37,
                'AllowUseTax' => 'tNO',
                'State' => '13',
                'City' => 'Santiago',
            ),
            6 => 
            array (
                'id' => 7,
                'created_at' => '2023-11-08 01:47:56',
                'updated_at' => '2023-11-08 01:47:56',
                'WarehouseCode' => 'BVM',
                'WarehouseName' => 'Bodega Vicuña Mackenna',
                'Street' => 'Vicuña Mackena',
                'StreetNo' => 1325,
                'AllowUseTax' => 'tNO',
                'State' => '13',
                'City' => 'Santiago',
            ),
            7 => 
            array (
                'id' => 8,
                'created_at' => '2023-11-08 01:47:56',
                'updated_at' => '2023-11-08 01:47:56',
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
                'created_at' => '2023-11-08 01:47:56',
                'updated_at' => '2023-11-08 01:47:56',
                'WarehouseCode' => 'BS/M',
                'WarehouseName' => 'Traslado sin Movimiento',
                'Street' => 'Vicuna Mackenna',
                'StreetNo' => 1325,
                'AllowUseTax' => 'tNO',
                'State' => '13',
                'City' => 'Santiago',
            ),
        ));
        
        
    }
}
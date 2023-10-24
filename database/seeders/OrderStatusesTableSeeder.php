<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class OrderStatusesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('order_statuses')->delete();
        
        \DB::table('order_statuses')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'En espera',
                'description' => 'Estado inicial del proceso',
                'color' => '#ffe6c0',
                'created_at' => '2023-08-29 19:31:20',
                'updated_at' => '2023-09-27 16:54:56',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'En pickeo',
                'description' => 'Estado posterior a la aprobacion de la orden',
                'color' => '#a9b7fe',
                'created_at' => '2023-08-29 19:31:20',
                'updated_at' => '2023-10-03 00:36:47',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'En revisión',
                'description' => 'Estado posterior a la aprobacion de la orden por parte del picker',
                'color' => '#d5ebf8',
                'created_at' => '2023-08-29 19:31:20',
                'updated_at' => '2023-09-27 16:56:56',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Rechazada',
                'description' => 'Regresa a revision por CDA dado algun problema',
                'color' => '#ff9494',
                'created_at' => '2023-08-29 19:31:20',
                'updated_at' => '2023-09-27 16:58:14',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Revisado',
                'description' => 'Aprovado por picker y revisor',
                'color' => '#d4ffc0',
                'created_at' => '2023-08-29 19:31:20',
                'updated_at' => '2023-09-27 16:56:30',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Facturado',
                'description' => 'Facturadi de forma exitosa',
                'color' => '#52c5ff',
                'created_at' => '2023-10-24 22:41:39',
                'updated_at' => '2023-10-24 22:41:39',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Pickeado',
                'description' => 'Pickeado de forma exitosa',
                'color' => '#daff94',
                'created_at' => '2023-10-24 22:42:44',
                'updated_at' => '2023-10-24 22:42:44',
            ),
        ));
        
        
    }
}
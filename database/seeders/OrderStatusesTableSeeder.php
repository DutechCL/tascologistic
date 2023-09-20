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
                'color' => '#3B82F6',
                'created_at' => '2023-08-29 19:31:20',
                'description' => 'Estado inicial del proceso',
                'id' => 1,
                'name' => 'En espera',
                'updated_at' => '2023-08-29 19:31:20',
            ),
            1 => 
            array (
                'color' => '#FFE6C0',
                'created_at' => '2023-08-29 19:31:20',
                'description' => 'Estado posterior a la aprobacion de la orden',
                'id' => 2,
                'name' => 'En pickeo',
                'updated_at' => '2023-08-29 19:31:20',
            ),
            2 => 
            array (
                'color' => '#FFE6C0',
                'created_at' => '2023-08-29 19:31:20',
                'description' => 'Estado posterior a la aprobacion de la orden por parte del picker',
                'id' => 3,
                'name' => 'En revisión',
                'updated_at' => '2023-08-29 19:31:20',
            ),
            3 => 
            array (
                'color' => '#FFE6C0',
                'created_at' => '2023-08-29 19:31:20',
                'description' => 'Regresa a revision por CDA dado algun problema',
                'id' => 4,
                'name' => 'Rechazada',
                'updated_at' => '2023-08-29 19:31:20',
            ),
            4 => 
            array (
                'color' => '#FFE6C0',
                'created_at' => '2023-08-29 19:31:20',
                'description' => 'Aprovado por picker y revisor',
                'id' => 5,
                'name' => 'Revisado',
                'updated_at' => '2023-08-29 19:31:20',
            ),
        ));
        
        
    }
}
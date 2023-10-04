<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProblemsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('problems')->delete();
        
        \DB::table('problems')->insert(array (
            0 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-04 22:00:48',
                'description' => 'Cliente agrega más productos o cantidades',
                'id' => 2,
                'title' => 'Cliente agrega más productos o cantidades',
                'type' => 'cda',
                'updated_at' => '2023-10-03 13:15:46',
            ),
            1 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-04 22:01:10',
                'description' => 'Error productos ingresados',
                'id' => 3,
                'title' => 'Error productos ingresados',
                'type' => 'cda',
                'updated_at' => '2023-10-03 13:15:34',
            ),
            2 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-04 22:01:33',
                'description' => 'Error forma de entrega',
                'id' => 4,
                'title' => 'Error forma de entrega',
                'type' => 'cda',
                'updated_at' => '2023-10-03 13:15:25',
            ),
            3 => 
            array (
                'active' => 1,
                'created_at' => '2023-10-03 13:14:47',
                'description' => 'Error razón social',
                'id' => 6,
                'title' => 'Error razón social',
                'type' => 'cda',
                'updated_at' => '2023-10-03 13:14:47',
            ),
            4 => 
            array (
                'active' => 1,
                'created_at' => '2023-10-03 13:15:05',
                'description' => 'Error stock disponible',
                'id' => 7,
                'title' => 'Error stock disponible',
                'type' => 'cda',
                'updated_at' => '2023-10-03 13:15:05',
            ),
            5 => 
            array (
                'active' => 1,
                'created_at' => '2023-10-03 13:16:27',
                'description' => 'Otro problema CDA',
                'id' => 8,
                'title' => 'Otro',
                'type' => 'cda',
                'updated_at' => '2023-10-03 13:27:56',
            ),
            6 => 
            array (
                'active' => 1,
                'created_at' => '2023-10-03 13:17:11',
                'description' => 'No existe color',
                'id' => 9,
                'title' => 'No existe color',
                'type' => 'picker-revisor',
                'updated_at' => '2023-10-03 13:17:11',
            ),
            7 => 
            array (
                'active' => 1,
                'created_at' => '2023-10-03 13:17:31',
                'description' => 'Producto en mal estado',
                'id' => 10,
                'title' => 'Producto en mal estado',
                'type' => 'picker-revisor',
                'updated_at' => '2023-10-03 13:17:31',
            ),
            8 => 
            array (
                'active' => 1,
                'created_at' => '2023-10-03 13:20:38',
                'description' => 'Sin stock',
                'id' => 11,
                'title' => 'Sin stock',
                'type' => 'picker-revisor',
                'updated_at' => '2023-10-03 13:20:38',
            ),
            9 => 
            array (
                'active' => 1,
                'created_at' => '2023-10-03 13:21:08',
                'description' => 'Otro problema  Picker / Revisor',
                'id' => 12,
                'title' => 'Otro',
                'type' => 'picker-revisor',
                'updated_at' => '2023-10-03 13:23:38',
            ),
        ));
        
        
    }
}
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
                'created_at' => '2023-08-30 19:23:01',
                'description' => 'no tiene stock el producto',
                'id' => 1,
                'title' => 'Sin Stock',
                'type' => 'Picker-revisor',
                'updated_at' => '2023-09-04 22:01:58',
            ),
            1 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-04 22:00:48',
                'description' => 'Cliente agrega más productos o cantidades',
                'id' => 2,
                'title' => 'Cliente agrega más productos o cantidades',
                'type' => 'Picker-revisor',
                'updated_at' => '2023-09-04 22:00:48',
            ),
            2 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-04 22:01:10',
                'description' => 'Error productos ingresados',
                'id' => 3,
                'title' => 'Error productos ingresados',
                'type' => 'Picker-revisor',
                'updated_at' => '2023-09-04 22:01:10',
            ),
            3 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-04 22:01:33',
                'description' => 'Error forma de entrega',
                'id' => 4,
                'title' => 'Error forma de entrega',
                'type' => 'Picker-revisor',
                'updated_at' => '2023-09-04 22:01:33',
            ),
            4 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-04 22:01:49',
                'description' => 'Otros',
                'id' => 5,
                'title' => 'Otros',
                'type' => 'Picker-revisor',
                'updated_at' => '2023-09-04 22:01:49',
            ),
        ));
        
        
    }
}
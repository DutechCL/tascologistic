<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MethodShippingsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('method_shippings')->delete();
        
        \DB::table('method_shippings')->insert(array (
            0 => 
            array (
                'created_at' => '2023-08-04 20:19:55',
                'description' => 'Cliente aqui',
                'id' => 1,
                'name' => 'Cliente aqui',
                'updated_at' => '2023-08-04 20:19:55',
            ),
            1 => 
            array (
                'created_at' => '2023-08-04 20:19:55',
                'description' => 'Cliente retira',
                'id' => 2,
                'name' => 'Retira',
                'updated_at' => '2023-08-04 20:19:55',
            ),
            2 => 
            array (
                'created_at' => '2023-08-04 20:19:55',
                'description' => 'Cliente despacho',
                'id' => 3,
                'name' => 'Despacho',
                'updated_at' => '2023-08-04 20:19:55',
            ),
            3 => 
            array (
                'created_at' => '2023-11-15 18:57:38',
                'description' => 'Cliente Retira Samex',
                'id' => 4,
                'name' => 'Retira Samex',
                'updated_at' => '2023-11-15 18:57:38',
            ),
        ));
        
        
    }
}
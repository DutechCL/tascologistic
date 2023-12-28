<?php

namespace Database\Seeders;

use App\Models\MethodShipping;
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
                'id' => MethodShipping::METHOD_SHIPPING_HERE,
                'name' => 'Cliente aqui',
                'updated_at' => '2023-08-04 20:19:55',
            ),
            1 => 
            array (
                'created_at' => '2023-08-04 20:19:55',
                'description' => 'Cliente retira',
                'id' => MethodShipping::METHOD_SHIPPING_PICKUP,
                'name' => 'Retira',
                'updated_at' => '2023-08-04 20:19:55',
            ),
            2 => 
            array (
                'created_at' => '2023-08-04 20:19:55',
                'description' => 'Cliente despacho',
                'id' => MethodShipping::METHOD_SHIPPING_DELIVERY,
                'name' => 'Despacho',
                'updated_at' => '2023-08-04 20:19:55',
            ),
            3 => 
            array (
                'created_at' => '2023-11-15 18:57:38',
                'description' => 'Cliente Retira Samex',
                'id' => MethodShipping::METHOD_SHIPPING_PICKUP_SAMEX,
                'name' => 'Retira Samex',
                'updated_at' => '2023-11-15 18:57:38',
            ),
        ));
    }
}
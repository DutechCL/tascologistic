<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserWarehouseTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('user_warehouse')->delete();
        
        \DB::table('user_warehouse')->insert(array (
            0 => 
            array (
                'created_at' => '2023-10-17 15:54:29',
                'id' => 1,
                'updated_at' => '2023-10-17 15:54:29',
                'user_id' => 1,
                'warehouse_id' => 5,
            ),
            1 => 
            array (
                'created_at' => '2023-10-17 15:54:29',
                'id' => 2,
                'updated_at' => '2023-10-17 15:54:29',
                'user_id' => 1,
                'warehouse_id' => 6,
            ),
            2 => 
            array (
                'created_at' => '2023-10-17 15:54:29',
                'id' => 3,
                'updated_at' => '2023-10-17 15:54:29',
                'user_id' => 1,
                'warehouse_id' => 7,
            ),
        ));
        
        
    }
}
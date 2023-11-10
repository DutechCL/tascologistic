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
                'id' => 2,
                'user_id' => 1,
                'warehouse_id' => 6,
                'created_at' => '2023-10-17 15:54:29',
                'updated_at' => '2023-10-17 15:54:29',
            ),
            1 => 
            array (
                'id' => 3,
                'user_id' => 1,
                'warehouse_id' => 7,
                'created_at' => '2023-10-17 15:54:29',
                'updated_at' => '2023-10-17 15:54:29',
            ),
            2 => 
            array (
                'id' => 4,
                'user_id' => 5,
                'warehouse_id' => 6,
                'created_at' => '2023-11-10 13:27:53',
                'updated_at' => '2023-11-10 13:27:53',
            ),
            3 => 
            array (
                'id' => 5,
                'user_id' => 5,
                'warehouse_id' => 7,
                'created_at' => '2023-11-10 13:27:53',
                'updated_at' => '2023-11-10 13:27:53',
            ),
            4 => 
            array (
                'id' => 6,
                'user_id' => 4,
                'warehouse_id' => 6,
                'created_at' => '2023-11-10 13:28:12',
                'updated_at' => '2023-11-10 13:28:12',
            ),
            5 => 
            array (
                'id' => 7,
                'user_id' => 4,
                'warehouse_id' => 7,
                'created_at' => '2023-11-10 13:28:12',
                'updated_at' => '2023-11-10 13:28:12',
            ),
        ));
        
        
    }
}
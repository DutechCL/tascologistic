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
                'id' => 1,
                'user_id' => 1,
                'warehouse_id' => 6,
                'created_at' => '2023-11-13 14:52:50',
                'updated_at' => '2023-11-13 14:52:50',
            ),
            1 => 
            array (
                'id' => 2,
                'user_id' => 1,
                'warehouse_id' => 7,
                'created_at' => '2023-11-13 14:52:50',
                'updated_at' => '2023-11-13 14:52:50',
            ),
            2 => 
            array (
                'id' => 3,
                'user_id' => 1,
                'warehouse_id' => 8,
                'created_at' => '2023-11-13 14:52:50',
                'updated_at' => '2023-11-13 14:52:50',
            ),
            3 => 
            array (
                'id' => 7,
                'user_id' => 5,
                'warehouse_id' => 6,
                'created_at' => '2023-11-13 14:53:27',
                'updated_at' => '2023-11-13 14:53:27',
            ),
            4 => 
            array (
                'id' => 8,
                'user_id' => 5,
                'warehouse_id' => 7,
                'created_at' => '2023-11-13 14:53:27',
                'updated_at' => '2023-11-13 14:53:27',
            ),
            5 => 
            array (
                'id' => 9,
                'user_id' => 5,
                'warehouse_id' => 8,
                'created_at' => '2023-11-13 14:53:27',
                'updated_at' => '2023-11-13 14:53:27',
            ),
            6 => 
            array (
                'id' => 10,
                'user_id' => 4,
                'warehouse_id' => 6,
                'created_at' => '2023-11-13 14:53:50',
                'updated_at' => '2023-11-13 14:53:50',
            ),
            7 => 
            array (
                'id' => 11,
                'user_id' => 4,
                'warehouse_id' => 7,
                'created_at' => '2023-11-13 14:53:50',
                'updated_at' => '2023-11-13 14:53:50',
            ),
            8 => 
            array (
                'id' => 12,
                'user_id' => 4,
                'warehouse_id' => 8,
                'created_at' => '2023-11-13 14:53:50',
                'updated_at' => '2023-11-13 14:53:50',
            ),
        ));
        
        
    }
}
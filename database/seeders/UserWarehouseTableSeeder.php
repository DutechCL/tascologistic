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
                'user_id' => 6,
                'warehouse_id' => 6,
                'created_at' => '2023-11-20 19:18:35',
                'updated_at' => '2023-11-20 19:18:35',
            ),
            1 => 
            array (
                'id' => 2,
                'user_id' => 6,
                'warehouse_id' => 7,
                'created_at' => '2023-11-20 19:18:35',
                'updated_at' => '2023-11-20 19:18:35',
            ),
            2 => 
            array (
                'id' => 3,
                'user_id' => 6,
                'warehouse_id' => 8,
                'created_at' => '2023-11-20 19:18:35',
                'updated_at' => '2023-11-20 19:18:35',
            ),
            3 => 
            array (
                'id' => 4,
                'user_id' => 1,
                'warehouse_id' => 6,
                'created_at' => '2023-11-20 19:19:57',
                'updated_at' => '2023-11-20 19:19:57',
            ),
            4 => 
            array (
                'id' => 5,
                'user_id' => 1,
                'warehouse_id' => 7,
                'created_at' => '2023-11-20 19:19:57',
                'updated_at' => '2023-11-20 19:19:57',
            ),
            5 => 
            array (
                'id' => 6,
                'user_id' => 7,
                'warehouse_id' => 6,
                'created_at' => '2023-11-20 20:50:50',
                'updated_at' => '2023-11-20 20:50:50',
            ),
            6 => 
            array (
                'id' => 7,
                'user_id' => 7,
                'warehouse_id' => 7,
                'created_at' => '2023-11-20 20:50:50',
                'updated_at' => '2023-11-20 20:50:50',
            ),
            7 => 
            array (
                'id' => 8,
                'user_id' => 7,
                'warehouse_id' => 8,
                'created_at' => '2023-11-20 20:50:50',
                'updated_at' => '2023-11-20 20:50:50',
            ),
            8 => 
            array (
                'id' => 9,
                'user_id' => 8,
                'warehouse_id' => 6,
                'created_at' => '2023-11-23 17:46:36',
                'updated_at' => '2023-11-23 17:46:36',
            ),
            9 => 
            array (
                'id' => 10,
                'user_id' => 8,
                'warehouse_id' => 7,
                'created_at' => '2023-11-23 17:46:36',
                'updated_at' => '2023-11-23 17:46:36',
            ),
            10 => 
            array (
                'id' => 11,
                'user_id' => 8,
                'warehouse_id' => 8,
                'created_at' => '2023-11-23 17:46:36',
                'updated_at' => '2023-11-23 17:46:36',
            ),
            11 => 
            array (
                'id' => 12,
                'user_id' => 9,
                'warehouse_id' => 6,
                'created_at' => '2023-11-23 17:47:52',
                'updated_at' => '2023-11-23 17:47:52',
            ),
            12 => 
            array (
                'id' => 13,
                'user_id' => 9,
                'warehouse_id' => 7,
                'created_at' => '2023-11-23 17:47:52',
                'updated_at' => '2023-11-23 17:47:52',
            ),
            13 => 
            array (
                'id' => 14,
                'user_id' => 9,
                'warehouse_id' => 8,
                'created_at' => '2023-11-23 17:47:52',
                'updated_at' => '2023-11-23 17:47:52',
            ),
            14 => 
            array (
                'id' => 15,
                'user_id' => 10,
                'warehouse_id' => 6,
                'created_at' => '2023-11-24 12:06:58',
                'updated_at' => '2023-11-24 12:06:58',
            ),
            15 => 
            array (
                'id' => 16,
                'user_id' => 10,
                'warehouse_id' => 7,
                'created_at' => '2023-11-24 12:06:58',
                'updated_at' => '2023-11-24 12:06:58',
            ),
            16 => 
            array (
                'id' => 17,
                'user_id' => 10,
                'warehouse_id' => 8,
                'created_at' => '2023-11-24 12:06:58',
                'updated_at' => '2023-11-24 12:06:58',
            ),
            17 => 
            array (
                'id' => 18,
                'user_id' => 11,
                'warehouse_id' => 7,
                'created_at' => '2023-11-24 12:07:46',
                'updated_at' => '2023-11-24 12:07:46',
            ),
            18 => 
            array (
                'id' => 19,
                'user_id' => 11,
                'warehouse_id' => 8,
                'created_at' => '2023-11-24 12:07:46',
                'updated_at' => '2023-11-24 12:07:46',
            ),
            19 => 
            array (
                'id' => 20,
                'user_id' => 12,
                'warehouse_id' => 6,
                'created_at' => '2023-11-24 12:14:58',
                'updated_at' => '2023-11-24 12:14:58',
            ),
            20 => 
            array (
                'id' => 21,
                'user_id' => 13,
                'warehouse_id' => 6,
                'created_at' => '2023-11-24 12:53:47',
                'updated_at' => '2023-11-24 12:53:47',
            ),
            21 => 
            array (
                'id' => 22,
                'user_id' => 13,
                'warehouse_id' => 7,
                'created_at' => '2023-11-24 12:53:47',
                'updated_at' => '2023-11-24 12:53:47',
            ),
            22 => 
            array (
                'id' => 23,
                'user_id' => 13,
                'warehouse_id' => 8,
                'created_at' => '2023-11-24 12:53:47',
                'updated_at' => '2023-11-24 12:53:47',
            ),
            23 => 
            array (
                'id' => 24,
                'user_id' => 14,
                'warehouse_id' => 6,
                'created_at' => '2023-11-24 13:12:18',
                'updated_at' => '2023-11-24 13:12:18',
            ),
            24 => 
            array (
                'id' => 25,
                'user_id' => 14,
                'warehouse_id' => 7,
                'created_at' => '2023-11-24 13:12:18',
                'updated_at' => '2023-11-24 13:12:18',
            ),
            25 => 
            array (
                'id' => 26,
                'user_id' => 14,
                'warehouse_id' => 8,
                'created_at' => '2023-11-24 13:12:18',
                'updated_at' => '2023-11-24 13:12:18',
            ),
            26 => 
            array (
                'id' => 27,
                'user_id' => 15,
                'warehouse_id' => 8,
                'created_at' => '2023-11-24 13:16:37',
                'updated_at' => '2023-11-24 13:16:37',
            ),
        ));
        
        
    }
}
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Super',
                'email' => 'super@dutech.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$bPxgTM0pc1F5tsEZdgcQ6elOIVIc2Xm1eBrGk4N5th/9ED3XngwU6',
                'remember_token' => NULL,
                'created_at' => '2023-07-10 17:29:44',
                'updated_at' => '2023-09-26 20:25:57',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => NULL,
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            1 => 
            array (
                'id' => 3,
                'name' => 'Armando Torres',
                'email' => 'cda@dutech.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$CN4IsvWlNPpa/FrzB4COEOnhXEhm/R65BgFwK/iEc.a1TFGZKdDhm',
                'remember_token' => NULL,
                'created_at' => '2023-09-26 17:16:18',
                'updated_at' => '2023-09-26 17:21:33',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => NULL,
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            2 => 
            array (
                'id' => 4,
                'name' => 'Miguel Cabrera',
                'email' => 'picker@dutech.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$XUEFUg3Ogaob/Ile2dpF7.IpoBOBsdgwFyrdr6gz.Y7E/cq.AfRS6',
                'remember_token' => NULL,
                'created_at' => '2023-09-26 17:17:50',
                'updated_at' => '2023-09-26 17:20:28',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => NULL,
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            3 => 
            array (
                'id' => 5,
                'name' => 'Juan toro',
                'email' => 'revisor@dutech.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$H8wzWP4HzW0YGkkTX/iUEuYFbtY2gHxGPlobiDm9fNVXN17z8/xXG',
                'remember_token' => NULL,
                'created_at' => '2023-09-26 17:18:40',
                'updated_at' => '2023-09-26 17:19:59',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => NULL,
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            4 => 
            array (
                'id' => 6,
                'name' => 'Pedro Perez',
                'email' => 'administracion@dutech.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$L/qQVSZwFy7vsygXS/eOj.85WNLOuryzAW3R4xI4qJfOoKzQ0.f/K',
                'remember_token' => NULL,
                'created_at' => '2023-09-26 17:19:18',
                'updated_at' => '2023-09-26 17:19:18',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => NULL,
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
        ));
        
        
    }
}
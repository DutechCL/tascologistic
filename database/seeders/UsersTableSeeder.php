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
                'branch' => NULL,
                'created_at' => '2023-07-10 17:29:44',
                'defaults' => NULL,
                'department' => NULL,
                'email' => 'super@dutech.cl',
                'email_verified_at' => NULL,
                'id' => 1,
                'internal_key' => NULL,
                'mobile_phone_number' => NULL,
                'name' => 'Administrador del sistema',
                'password' => '$2y$10$bPxgTM0pc1F5tsEZdgcQ6elOIVIc2Xm1eBrGk4N5th/9ED3XngwU6',
                'remember_token' => NULL,
                'updated_at' => '2023-10-17 14:01:21',
                'user_code' => NULL,
            ),
            1 => 
            array (
                'branch' => NULL,
                'created_at' => '2023-09-26 17:16:18',
                'defaults' => NULL,
                'department' => NULL,
                'email' => 'cda@dutech.cl',
                'email_verified_at' => NULL,
                'id' => 3,
                'internal_key' => NULL,
                'mobile_phone_number' => NULL,
                'name' => 'Armando Torres',
                'password' => '$2y$10$CN4IsvWlNPpa/FrzB4COEOnhXEhm/R65BgFwK/iEc.a1TFGZKdDhm',
                'remember_token' => NULL,
                'updated_at' => '2023-09-26 17:21:33',
                'user_code' => NULL,
            ),
            2 => 
            array (
                'branch' => NULL,
                'created_at' => '2023-09-26 17:17:50',
                'defaults' => NULL,
                'department' => NULL,
                'email' => 'picker@dutech.cl',
                'email_verified_at' => NULL,
                'id' => 4,
                'internal_key' => NULL,
                'mobile_phone_number' => NULL,
                'name' => 'Miguel Cabrera',
                'password' => '$2y$10$XUEFUg3Ogaob/Ile2dpF7.IpoBOBsdgwFyrdr6gz.Y7E/cq.AfRS6',
                'remember_token' => NULL,
                'updated_at' => '2023-09-26 17:20:28',
                'user_code' => NULL,
            ),
            3 => 
            array (
                'branch' => NULL,
                'created_at' => '2023-09-26 17:18:40',
                'defaults' => NULL,
                'department' => NULL,
                'email' => 'revisor@dutech.cl',
                'email_verified_at' => NULL,
                'id' => 5,
                'internal_key' => NULL,
                'mobile_phone_number' => NULL,
                'name' => 'Juan toro',
                'password' => '$2y$10$H8wzWP4HzW0YGkkTX/iUEuYFbtY2gHxGPlobiDm9fNVXN17z8/xXG',
                'remember_token' => NULL,
                'updated_at' => '2023-09-26 17:19:59',
                'user_code' => NULL,
            ),
            4 => 
            array (
                'branch' => NULL,
                'created_at' => '2023-09-26 17:19:18',
                'defaults' => NULL,
                'department' => NULL,
                'email' => 'administracion@dutech.cl',
                'email_verified_at' => NULL,
                'id' => 6,
                'internal_key' => NULL,
                'mobile_phone_number' => NULL,
                'name' => 'Pedro Perez',
                'password' => '$2y$10$L/qQVSZwFy7vsygXS/eOj.85WNLOuryzAW3R4xI4qJfOoKzQ0.f/K',
                'remember_token' => NULL,
                'updated_at' => '2023-09-26 17:19:18',
                'user_code' => NULL,
            ),
        ));
        
        
    }
}
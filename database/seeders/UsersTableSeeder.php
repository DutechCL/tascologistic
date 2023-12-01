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
                'name' => 'Administrador del sistema',
                'email' => 'super@dutech.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$bPxgTM0pc1F5tsEZdgcQ6elOIVIc2Xm1eBrGk4N5th/9ED3XngwU6',
                'remember_token' => NULL,
                'created_at' => '2023-07-10 17:29:44',
                'updated_at' => '2023-10-17 14:01:21',
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
            5 => 
            array (
                'id' => 7,
                'name' => 'Javier Bobadilla',
                'email' => 'javier@tascochile.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$CwNggph27JV59ODbEstkl.U570uSt57e6NedZUOBnvghAFHFRGaju',
                'remember_token' => NULL,
                'created_at' => '2023-11-20 20:50:10',
                'updated_at' => '2023-11-20 20:50:10',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => '956448149',
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            6 => 
            array (
                'id' => 8,
                'name' => 'Yocelin Salinas',
                'email' => 'ysalinas@tascochile.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$zEvbLaJq3RFcePVQLn8/xeLd.OHnucZk0RtxcuMCsjNHYD0xL8/4e',
                'remember_token' => NULL,
                'created_at' => '2023-11-23 17:46:36',
                'updated_at' => '2023-11-23 17:46:36',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => '+56975216056',
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            7 => 
            array (
                'id' => 9,
                'name' => 'Sofia Lagos',
                'email' => 'pagos@tascochile.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$jgG7hR3mUzwq2GY/Qil91ud5gLEyjnZPjZNrYc33w5tzC8Z2HlIq2',
                'remember_token' => NULL,
                'created_at' => '2023-11-23 17:47:52',
                'updated_at' => '2023-11-23 17:47:52',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => '+56952360210',
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            8 => 
            array (
                'id' => 10,
                'name' => 'Alessandra Guercio',
                'email' => 'cda@tascochile.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$F41OlvBLPOyl8rdPTweROeItcu5629DjvLHkzK317quCM5gX54rlm',
                'remember_token' => NULL,
                'created_at' => '2023-11-24 12:06:58',
                'updated_at' => '2023-11-24 12:06:58',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => NULL,
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            9 => 
            array (
                'id' => 11,
                'name' => 'Cristián Córdova',
                'email' => 'bodegavictoria@tascochile.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$pGDeDK08YdtMUCxcMZN2l.xvmobz2QgiGC4SXrnrmUdUwRjhCUNmy',
                'remember_token' => 'JjwbHdjPAg1n2TEUkmFblKb7EtI9ltxs9kaafPEctQmuVdF8hGHlJKnepWss',
                'created_at' => '2023-11-24 12:07:46',
                'updated_at' => '2023-11-24 12:07:46',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => NULL,
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            10 => 
            array (
                'id' => 12,
                'name' => 'Picker 1 BVM',
                'email' => 'inventarios@tascochile.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$oxlwUrJ6.d7f6MMTLDTQ8u1wxJu99xyr003VEVWMJKQ3XPcqkFgIm',
                'remember_token' => 'T44KOPMHOptYlQVDbbd9KBvkZoUdw1cYQ2b3BMw6nM9eKcKre7QBODSuS9ep',
                'created_at' => '2023-11-24 12:14:58',
                'updated_at' => '2023-11-24 12:14:58',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => NULL,
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            11 => 
            array (
                'id' => 13,
                'name' => 'Gonzalo Fuentes',
                'email' => 'gonzalo@tascochile.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$KMYijJy9EEYus2z2e4kC1ecAv0QPQ4PbR0QQQZfshIqQ.Jm0lQEWa',
                'remember_token' => NULL,
                'created_at' => '2023-11-24 12:53:47',
                'updated_at' => '2023-11-24 12:53:47',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => NULL,
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            12 => 
            array (
                'id' => 14,
                'name' => 'Francisco Chacón',
                'email' => 'bodegacentral@tascochile.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$cZoDT4DckmguARuqHQB/SefYIIVFjmjaniq1sriDQiCO5waa38yh2',
                'remember_token' => NULL,
                'created_at' => '2023-11-24 13:12:18',
                'updated_at' => '2023-11-24 13:12:18',
                'internal_key' => NULL,
                'user_code' => NULL,
                'mobile_phone_number' => NULL,
                'defaults' => NULL,
                'branch' => NULL,
                'department' => NULL,
            ),
            13 => 
            array (
                'id' => 15,
                'name' => 'Félix Bastías',
                'email' => 'bse@tascochile.cl',
                'email_verified_at' => NULL,
                'password' => '$2y$10$RIAr3VSh7yOTGMnST2OcgO9PumxSjPyPhQXs7xsZ8iNROy/3.Zdym',
                'remember_token' => NULL,
                'created_at' => '2023-11-24 13:16:37',
                'updated_at' => '2023-11-24 13:16:37',
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
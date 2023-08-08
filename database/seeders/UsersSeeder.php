<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
     /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        if (!DB::table('users')->where('email', 'super@twgroup.cl')->exists()) {
        DB::table('users')->insert(array(
        0 =>
                array(
                    'name' => 'Super',
                    'email' => 'super@twgroup.cl',
                    'password' => '$2y$10$/EQ6IgGZCqJRAyS2MqQ3Pu0O4Vyx6OjdQkguFP/q36/Y3fxzY45nS',
                    'created_at' => '2023-07-10 17:29:44',
                    'updated_at' => '2022-09-13 17:29:44',
                    'email_verified_at' => NULL,
                    'id' => 1,
                ),
            ));
        }
    }
}

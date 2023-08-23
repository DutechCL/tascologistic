<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        if (!DB::table('roles')->where('name', 'admin')->exists()) {
            DB::table('roles')->insert(array(
                0 =>
                array(
                    'name' => 'admin',
                    'guard_name' => 'admin',
                    'updated_at' => '2022-09-13 17:29:44',
                    'created_at' => '2023-07-10 17:29:44',
                ),
            ));
        }
    }
}

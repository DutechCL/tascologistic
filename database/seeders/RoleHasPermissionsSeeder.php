<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleHasPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('role_has_permissions')->insert(array(
            0 =>
            array(
                'permission_id' => 1,
                'role_id' => 1
            ),
           1 =>
            array(
                'permission_id' => 2,
                'role_id' => 1
            ),
            2 =>
            array(
                'permission_id' => 3,
                'role_id' => 1
            ),
            3 =>
            array(
                'permission_id' => 4,
                'role_id' => 1
            ),
        ));
    }
}
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
        DB::table('users')->delete();

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

        DB::table('permissions')->insert(array(
            0 =>
            array(
                'name' => 'menu-item.index',
                'description' => 'show',
                'url' => '/admin/menu-item',
                'guard_name' => 'menu-item',
                'slug' => 'menu-item',
                'updated_at' => '2022-09-13 17:29:44',
                'created_at' => '2023-07-10 17:29:44',
            ),
        ));

        DB::table('roles')->insert(array(
            0 =>
            array(
                'name' => 'admin',
                'guard_name' => 'admin',
                'updated_at' => '2022-09-13 17:29:44',
                'created_at' => '2023-07-10 17:29:44',
            ),
        ));

        DB::table('role_has_permissions')->insert(array(
            0 =>
            array(
                'permission_id' => 1,
                'role_id' => 1
            ),
        ));

        
        DB::table('model_has_roles')->insert(array(
            0 =>
            array(
                'role_id' => 1,
                'model_type' => 'App\Models\User',
                'model_id' => 1

            ),
        ));
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $permissions = array(
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
            1 =>
            array(
                'name' => 'role.index',
                'description' => 'show',
                'url' => '/admin/role',
                'guard_name' => 'role',
                'slug' => 'role',
                'updated_at' => '2022-09-13 17:29:44',
                'created_at' => '2023-07-10 17:29:44',
            ),
            2 =>
            array(
                'name' => 'permissions.index',
                'description' => 'show',
                'url' => '/admin/permissions',
                'guard_name' => 'permissions',
                'slug' => 'permissions',
                'updated_at' => '2022-09-13 17:29:44',
                'created_at' => '2023-07-10 17:29:44',
            ),
            3 =>
            array(
                'name' => 'user.index',
                'description' => 'show',
                'url' => '/admin/user',
                'guard_name' => 'user',
                'slug' => 'user',
                'updated_at' => '2022-09-13 17:29:44',
                'created_at' => '2023-07-10 17:29:44',
            ),
        );

        $permissionsToInsert = array_filter($permissions, function ($permission) {
            return !DB::table('permissions')->where('name', $permission['name'])->exists();
        });

        DB::table('permissions')->insert($permissionsToInsert);
    }
}

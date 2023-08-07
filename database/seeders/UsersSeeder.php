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
// Check if the user with the given email exists before inserting
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

// Array of permissions to insert
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

// Filter out existing permissions by checking if the 'name' already exists
$permissionsToInsert = array_filter($permissions, function ($permission) {
    return !DB::table('permissions')->where('name', $permission['name'])->exists();
});

// Insert the filtered permissions
DB::table('permissions')->insert($permissionsToInsert);

// Check if the role with the given name exists before inserting
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

DB::table('model_has_roles')->insert(array(
    0 =>
    array(
        'role_id' => 1,
        'model_type' => 'App\Models\User',
        'model_id' => 1
    ),
));

// Array of menu items to insert
$menuItems = array(
    0 =>
    array(
        'name' => 'menu',
        'link' => '/admin/menu-item',
        'icon' => 'fas fa-align-center',
        'order' => '0',
        'created_at' => '2023-08-04 20:19:55',
        'updated_at' => '2023-08-04 20:19:55',
        'permission_id' => 1,
    ),
           1 =>
            array(
                'name'                  =>'rol',
                'link'                  =>'/admin/role',
                'icon'                  =>'fas fa-align-center',
                'order'                 =>'0',
                'created_at'            =>'2023-08-04 20:19:55',
                'updated_at'            =>'2023-08-04 20:19:55',
                'permission_id'         =>1,
            ),
            2 =>
            array(
                'name'                  =>'permisos',
                'link'                  =>'/admin/permissions',
                'icon'                  =>'fas fa-align-center',
                'order'                 =>'0',
                'created_at'            =>'2023-08-04 20:19:55',
                'updated_at'            =>'2023-08-04 20:19:55',
                'permission_id'         =>1,
            ),
            3 =>
            array(
                'name'                  =>'user',
                'link'                  =>'/admin/user',
                'icon'                  =>'fas fa-align-center',
                'order'                 =>'0',
                'created_at'            =>'2023-08-04 20:19:55',
                'updated_at'            =>'2023-08-04 20:19:55',
                'permission_id'         =>1,
            ),
        );

        // Filter out existing menu items by checking if the 'name' already exists
        $menuItemsToInsert = array_filter($menuItems, function ($menuItem) {
            return !DB::table('menu_items')->where('name', $menuItem['name'])->exists();
        });

        // Insert the filtered menu items
        DB::table('menu_items')->insert($menuItemsToInsert);

    }
}

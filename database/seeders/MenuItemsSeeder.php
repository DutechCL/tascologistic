<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenuItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
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

            $menuItemsToInsert = array_filter($menuItems, function ($menuItem) {
                return !DB::table('menu_items')->where('name', $menuItem['name'])->exists();
            });

            DB::table('menu_items')->insert($menuItemsToInsert);
    }
}

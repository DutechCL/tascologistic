<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MenuItemsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('menu_items')->delete();
        
        \DB::table('menu_items')->insert(array (
            0 => 
            array (
                'created_at' => '2023-08-04 20:19:55',
                'deleted_at' => NULL,
                'depth' => 1,
                'icon' => 'fas fa-list',
                'id' => 1,
                'is_external' => 0,
                'lft' => 2,
                'link' => '/admin/menu-item',
                'name' => 'Menu',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => 6,
                'permission_id' => 1,
                'rgt' => 3,
                'type' => NULL,
                'updated_at' => '2023-08-21 20:33:35',
            ),
            1 => 
            array (
                'created_at' => '2023-08-04 20:19:55',
                'deleted_at' => NULL,
                'depth' => 2,
                'icon' => 'fas fa-user-cog',
                'id' => 2,
                'is_external' => 0,
                'lft' => 7,
                'link' => '/admin/role',
                'name' => 'Roles',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => 5,
                'permission_id' => 2,
                'rgt' => 8,
                'type' => NULL,
                'updated_at' => '2023-08-21 20:26:00',
            ),
            2 => 
            array (
                'created_at' => '2023-08-04 20:19:55',
                'deleted_at' => NULL,
                'depth' => 2,
                'icon' => 'fas fa-user-check',
                'id' => 3,
                'is_external' => 0,
                'lft' => 9,
                'link' => '/admin/permissions',
                'name' => 'Permisos',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => 5,
                'permission_id' => 3,
                'rgt' => 10,
                'type' => NULL,
                'updated_at' => '2023-08-21 20:26:00',
            ),
            3 => 
            array (
                'created_at' => '2023-08-04 20:19:55',
                'deleted_at' => NULL,
                'depth' => 2,
                'icon' => 'fas fa-user',
                'id' => 4,
                'is_external' => 0,
                'lft' => 5,
                'link' => '/admin/user',
                'name' => 'Usuarios',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => 5,
                'permission_id' => 4,
                'rgt' => 6,
                'type' => NULL,
                'updated_at' => '2023-08-21 20:26:00',
            ),
            4 => 
            array (
                'created_at' => '2023-08-21 16:04:33',
                'deleted_at' => NULL,
                'depth' => 1,
                'icon' => 'fas fa-user-alt',
                'id' => 5,
                'is_external' => 0,
                'lft' => 4,
                'link' => NULL,
                'name' => 'Usuarios',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => NULL,
                'permission_id' => NULL,
                'rgt' => 11,
                'type' => NULL,
                'updated_at' => '2023-08-22 21:19:56',
            ),
            5 => 
            array (
                'created_at' => '2023-08-21 19:40:35',
                'deleted_at' => NULL,
                'depth' => 1,
                'icon' => 'fas fa-cog',
                'id' => 6,
                'is_external' => 0,
                'lft' => 12,
                'link' => NULL,
                'name' => 'Configuraciones',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => NULL,
                'permission_id' => NULL,
                'rgt' => 13,
                'type' => NULL,
                'updated_at' => '2023-08-21 20:30:05',
            ),
            6 => 
            array (
                'created_at' => '2023-08-21 20:27:03',
                'deleted_at' => NULL,
                'depth' => NULL,
                'icon' => 'fas fa-home',
                'id' => 22,
                'is_external' => 0,
                'lft' => NULL,
                'link' => '/admin/dashboard',
                'name' => 'Panel',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => NULL,
                'permission_id' => NULL,
                'rgt' => NULL,
                'type' => NULL,
                'updated_at' => '2023-08-22 16:07:38',
            ),
            7 => 
            array (
                'created_at' => '2023-08-21 20:34:28',
                'deleted_at' => NULL,
                'depth' => NULL,
                'icon' => 'fas fa-warehouse',
                'id' => 23,
                'is_external' => 0,
                'lft' => NULL,
                'link' => '/admin/management',
                'name' => 'Bodegas / Salas',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => 26,
                'permission_id' => NULL,
                'rgt' => NULL,
                'type' => NULL,
                'updated_at' => '2023-08-22 21:19:24',
            ),
            8 => 
            array (
                'created_at' => '2023-08-22 20:55:12',
                'deleted_at' => NULL,
                'depth' => NULL,
                'icon' => 'fas fa-list',
                'id' => 24,
                'is_external' => 0,
                'lft' => NULL,
                'link' => '/app/autorizador/notas',
                'name' => 'CDA',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => 26,
                'permission_id' => NULL,
                'rgt' => NULL,
                'type' => NULL,
                'updated_at' => '2023-09-13 19:15:36',
            ),
            9 => 
            array (
                'created_at' => '2023-08-22 20:57:28',
                'deleted_at' => NULL,
                'depth' => NULL,
                'icon' => 'fas fa-money-bill-wave-alt',
                'id' => 25,
                'is_external' => 1,
                'lft' => NULL,
                'link' => '/app/pagos/pendientes',
                'name' => 'Pagos Penitentes',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => 26,
                'permission_id' => NULL,
                'rgt' => NULL,
                'type' => NULL,
                'updated_at' => '2023-09-13 19:16:47',
            ),
            10 => 
            array (
                'created_at' => '2023-08-22 20:59:47',
                'deleted_at' => NULL,
                'depth' => NULL,
                'icon' => 'fab fa-readme',
                'id' => 26,
                'is_external' => 0,
                'lft' => NULL,
                'link' => NULL,
                'name' => 'Administración',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => NULL,
                'permission_id' => NULL,
                'rgt' => NULL,
                'type' => NULL,
                'updated_at' => '2023-08-22 20:59:47',
            ),
            11 => 
            array (
                'created_at' => '2023-09-05 20:17:54',
                'deleted_at' => NULL,
                'depth' => NULL,
                'icon' => 'fas fa-chart-line',
                'id' => 27,
                'is_external' => 1,
                'lft' => NULL,
                'link' => '/app/facturador/despacho-pedidos',
                'name' => 'Facturador Despacho',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => 26,
                'permission_id' => NULL,
                'rgt' => NULL,
                'type' => NULL,
                'updated_at' => '2023-09-13 19:16:17',
            ),
            12 => 
            array (
                'created_at' => '2023-09-05 20:19:15',
                'deleted_at' => NULL,
                'depth' => NULL,
                'icon' => 'fas fa-chart-line',
                'id' => 28,
                'is_external' => 0,
                'lft' => NULL,
                'link' => '/app/facturador/retira-aqui',
                'name' => 'Facturador Retiro/Aqui',
                'order' => 0,
                'page_id' => NULL,
                'parent_id' => 26,
                'permission_id' => NULL,
                'rgt' => NULL,
                'type' => NULL,
                'updated_at' => '2023-09-13 19:15:10',
            ),
        ));
        
        
    }
}
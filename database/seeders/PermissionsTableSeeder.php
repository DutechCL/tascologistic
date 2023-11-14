<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('permissions')->delete();
        
        \DB::table('permissions')->insert(array (
            0 => 
            array (
                'id' => 5,
                'name' => 'Estados de la orden.read',
                'description' => 'Estados de la orden',
                'url' => '/admin/order-status',
                'slug' => 'Estados de la orden',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:35:10',
            ),
            1 => 
            array (
                'id' => 6,
                'name' => 'Problemas.read',
                'description' => 'Crear probelmas',
                'url' => '/admin/problem',
                'slug' => 'Problemas',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:35:00',
            ),
            2 => 
            array (
                'id' => 7,
                'name' => 'CDA.read',
                'description' => 'CDA autorizador',
                'url' => '/app/autorizador/notas',
                'slug' => 'CDA',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:34:50',
            ),
            3 => 
            array (
                'id' => 8,
                'name' => 'Bodegas - Salas.read',
                'description' => 'Bodegas',
                'url' => '/admin/management',
                'slug' => 'Bodegas - Salas',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:34:21',
            ),
            4 => 
            array (
                'id' => 9,
                'name' => 'Pagos Pendientes.read',
                'description' => 'Lista de pagos pendientes',
                'url' => '/app/pagos/pendientes',
                'slug' => 'Pagos Pendientes',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:33:51',
            ),
            5 => 
            array (
                'id' => 10,
                'name' => 'Facturador Despacho.read',
                'description' => 'Apartado de facturación despacho',
                'url' => '/app/facturador/despacho-pedidos',
                'slug' => 'Facturador Despacho',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:33:35',
            ),
            6 => 
            array (
                'id' => 11,
                'name' => 'Facturador Retiro-Aqui.read',
                'description' => 'Apartado de facturación  Retiro / Aquí',
                'url' => '/app/facturador/retira-aqui',
                'slug' => 'Facturador Retiro-Aqui',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:33:19',
            ),
            7 => 
            array (
                'id' => 12,
                'name' => 'Administración.read',
                'description' => 'Gestion logistica de la plataforma',
                'url' => '/admin/management',
                'slug' => 'Administración',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:32:36',
            ),
            8 => 
            array (
                'id' => 13,
                'name' => 'Permisos.read',
                'description' => 'Creer y actualizar permisos',
                'url' => '/admin/permissions',
                'slug' => 'Permisos',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:32:15',
            ),
            9 => 
            array (
                'id' => 14,
                'name' => 'Manu.read',
                'description' => 'Crear o actualizar nuevas opciones del menu',
                'url' => '/admin/menu-item',
                'slug' => 'Manu',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:31:43',
            ),
            10 => 
            array (
                'id' => 15,
                'name' => 'Usuarios.read',
                'description' => 'Gestionar usuarios y asignar roles',
                'url' => '/admin/user',
                'slug' => 'Usuarios',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:31:22',
            ),
            11 => 
            array (
                'id' => 16,
                'name' => 'Roles.read',
                'description' => 'Crear Roles y asignar permisos',
                'url' => '/admin/role',
                'slug' => 'Roles',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:31:00',
            ),
            12 => 
            array (
                'id' => 17,
                'name' => 'Clientes.read',
                'description' => 'Ver lista de clientes',
                'url' => '/admin/customer',
                'slug' => 'Clientes',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-27 18:30:40',
            ),
            13 => 
            array (
                'id' => 18,
                'name' => 'Bodegas.read',
                'description' => 'Bodega de productos',
                'url' => '/admin/warehouse',
                'slug' => 'Bodegas',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            14 => 
            array (
                'id' => 19,
                'name' => 'Ajustes.read',
                'description' => 'Leer',
                'url' => '/admin/setting/create',
                'slug' => 'Ajustes',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-11-10 18:07:53',
            ),
            15 => 
            array (
                'id' => 20,
                'name' => 'Log Ordenes.read',
                'description' => 'ver estado de sincronizacion de ordenes',
                'url' => '/admin/log-order',
                'slug' => 'Log Ordenes',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            16 => 
            array (
                'id' => 21,
                'name' => 'Productos.read',
                'description' => 'ver lista de productos y sincronizar con SAP',
                'url' => '/admin/product',
                'slug' => 'Productos',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-11-14 15:24:34',
            ),
            17 => 
            array (
                'id' => 22,
                'name' => 'Vendedores.read',
                'description' => 'ver lista de vendedores  y sincronizar con SAP',
                'url' => '/admin/sales-person',
                'slug' => 'Vendedores',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}
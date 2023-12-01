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
                'created_at' => NULL,
                'description' => 'Estados de la orden',
                'guard_name' => 'web',
                'id' => 5,
                'name' => 'Estados de la orden.read',
                'slug' => 'Estados de la orden',
                'updated_at' => '2023-09-27 18:35:10',
                'url' => '/admin/order-status',
            ),
            1 => 
            array (
                'created_at' => NULL,
                'description' => 'Crear probelmas',
                'guard_name' => 'web',
                'id' => 6,
                'name' => 'Problemas.read',
                'slug' => 'Problemas',
                'updated_at' => '2023-09-27 18:35:00',
                'url' => '/admin/problem',
            ),
            2 => 
            array (
                'created_at' => NULL,
                'description' => 'CDA autorizador',
                'guard_name' => 'web',
                'id' => 7,
                'name' => 'CDA.read',
                'slug' => 'CDA',
                'updated_at' => '2023-09-27 18:34:50',
                'url' => '/app/autorizador/notas',
            ),
            3 => 
            array (
                'created_at' => NULL,
                'description' => 'Bodegas',
                'guard_name' => 'web',
                'id' => 8,
                'name' => 'Bodegas - Salas.read',
                'slug' => 'Bodegas - Salas',
                'updated_at' => '2023-09-27 18:34:21',
                'url' => '/admin/management',
            ),
            4 => 
            array (
                'created_at' => NULL,
                'description' => 'Lista de pagos pendientes',
                'guard_name' => 'web',
                'id' => 9,
                'name' => 'Pagos Pendientes.read',
                'slug' => 'Pagos Pendientes',
                'updated_at' => '2023-09-27 18:33:51',
                'url' => '/app/pagos/pendientes',
            ),
            5 => 
            array (
                'created_at' => NULL,
                'description' => 'Apartado de facturación despacho',
                'guard_name' => 'web',
                'id' => 10,
                'name' => 'Facturador Despacho.read',
                'slug' => 'Facturador Despacho',
                'updated_at' => '2023-09-27 18:33:35',
                'url' => '/app/facturador/despacho-pedidos',
            ),
            6 => 
            array (
                'created_at' => NULL,
                'description' => 'Apartado de facturación  Retiro / Aquí',
                'guard_name' => 'web',
                'id' => 11,
                'name' => 'Facturador Retiro-Aqui.read',
                'slug' => 'Facturador Retiro-Aqui',
                'updated_at' => '2023-09-27 18:33:19',
                'url' => '/app/facturador/retira-aqui',
            ),
            7 => 
            array (
                'created_at' => NULL,
                'description' => 'Gestion logistica de la plataforma',
                'guard_name' => 'web',
                'id' => 12,
                'name' => 'Administración.read',
                'slug' => 'Administración',
                'updated_at' => '2023-09-27 18:32:36',
                'url' => '/admin/management',
            ),
            8 => 
            array (
                'created_at' => NULL,
                'description' => 'Creer y actualizar permisos',
                'guard_name' => 'web',
                'id' => 13,
                'name' => 'Permisos.read',
                'slug' => 'Permisos',
                'updated_at' => '2023-09-27 18:32:15',
                'url' => '/admin/permissions',
            ),
            9 => 
            array (
                'created_at' => NULL,
                'description' => 'Crear o actualizar nuevas opciones del menu',
                'guard_name' => 'web',
                'id' => 14,
                'name' => 'Manu.read',
                'slug' => 'Manu',
                'updated_at' => '2023-09-27 18:31:43',
                'url' => '/admin/menu-item',
            ),
            10 => 
            array (
                'created_at' => NULL,
                'description' => 'Gestionar usuarios y asignar roles',
                'guard_name' => 'web',
                'id' => 15,
                'name' => 'Usuarios.read',
                'slug' => 'Usuarios',
                'updated_at' => '2023-09-27 18:31:22',
                'url' => '/admin/user',
            ),
            11 => 
            array (
                'created_at' => NULL,
                'description' => 'Crear Roles y asignar permisos',
                'guard_name' => 'web',
                'id' => 16,
                'name' => 'Roles.read',
                'slug' => 'Roles',
                'updated_at' => '2023-09-27 18:31:00',
                'url' => '/admin/role',
            ),
            12 => 
            array (
                'created_at' => NULL,
                'description' => 'Ver lista de clientes',
                'guard_name' => 'web',
                'id' => 17,
                'name' => 'Clientes.read',
                'slug' => 'Clientes',
                'updated_at' => '2023-09-27 18:30:40',
                'url' => '/admin/customer',
            ),
            13 => 
            array (
                'created_at' => NULL,
                'description' => 'Bodega de productos',
                'guard_name' => 'web',
                'id' => 18,
                'name' => 'Bodegas.read',
                'slug' => 'Bodegas',
                'updated_at' => NULL,
                'url' => '/admin/warehouse',
            ),
            14 => 
            array (
                'created_at' => NULL,
                'description' => 'Leer',
                'guard_name' => 'web',
                'id' => 19,
                'name' => 'Ajustes.read',
                'slug' => 'Ajustes',
                'updated_at' => '2023-11-10 18:07:53',
                'url' => '/admin/setting/create',
            ),
            15 => 
            array (
                'created_at' => NULL,
                'description' => 'ver estado de sincronizacion de ordenes',
                'guard_name' => 'web',
                'id' => 20,
                'name' => 'Log Ordenes.read',
                'slug' => 'Log Ordenes',
                'updated_at' => NULL,
                'url' => '/admin/log-order',
            ),
            16 => 
            array (
                'created_at' => NULL,
                'description' => 'ver lista de productos y sincronizar con SAP',
                'guard_name' => 'web',
                'id' => 21,
                'name' => 'Productos.read',
                'slug' => 'Productos',
                'updated_at' => '2023-11-14 15:24:34',
                'url' => '/admin/product',
            ),
            17 => 
            array (
                'created_at' => NULL,
                'description' => 'ver lista de vendedores  y sincronizar con SAP',
                'guard_name' => 'web',
                'id' => 22,
                'name' => 'Vendedores.read',
                'slug' => 'Vendedores',
                'updated_at' => NULL,
                'url' => '/admin/sales-person',
            ),
            18 => 
            array (
                'created_at' => NULL,
                'description' => 'agregar nuevos métodos de envió',
                'guard_name' => 'web',
                'id' => 23,
                'name' => 'metodos de envio.read',
                'slug' => 'metodos de envio',
                'updated_at' => NULL,
                'url' => '/admin/method-shipping',
            ),
            19 => 
            array (
                'created_at' => NULL,
                'description' => 'Ver lista de chat',
                'guard_name' => 'web',
                'id' => 26,
                'name' => 'Chat.read',
                'slug' => 'Chat',
                'updated_at' => '2023-11-23 14:24:13',
                'url' => '/app/chat/list-chats',
            ),
            20 => 
            array (
                'created_at' => NULL,
                'description' => 'bandeja de mensajes',
                'guard_name' => 'web',
                'id' => 27,
                'name' => 'Chat.show',
                'slug' => 'Chat',
                'updated_at' => '2023-11-23 14:24:23',
                'url' => '/app/chat/show-chat',
            ),
        ));
        
        
    }
}
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
                'description' => 'Leer',
                'url' => '/admin/order-status',
                'slug' => 'Estados de la orden',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 6,
                'name' => 'Problemas.read',
                'description' => 'Leer',
                'url' => '/admin/problem',
                'slug' => 'Problemas',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 7,
                'name' => 'CDA.read',
                'description' => 'Leer',
                'url' => '/app/autorizador/notas',
                'slug' => 'CDA',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 8,
                'name' => 'Bodegas - Salas.read',
                'description' => 'Leer',
                'url' => '/admin/management',
                'slug' => 'Bodegas - Salas',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-26 17:11:25',
            ),
            4 => 
            array (
                'id' => 9,
                'name' => 'Pagos Penitentes.read',
                'description' => 'Leer',
                'url' => '/app/pagos/pendientes',
                'slug' => 'Pagos Penitentes',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 10,
                'name' => 'Facturador Despacho.read',
                'description' => 'Leer',
                'url' => '/app/facturador/despacho-pedidos',
                'slug' => 'Facturador Despacho',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 11,
                'name' => 'Facturador Retiro-Aqui.read',
                'description' => 'Leer',
                'url' => '/app/facturador/retira-aqui',
                'slug' => 'Facturador Retiro-Aqui',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => '2023-09-26 17:12:36',
            ),
            7 => 
            array (
                'id' => 12,
                'name' => 'Administración.read',
                'description' => 'Leer',
                'url' => '/admin/management',
                'slug' => 'Administración',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            8 => 
            array (
                'id' => 13,
                'name' => 'Permisos.read',
                'description' => 'Leer',
                'url' => '/admin/permissions',
                'slug' => 'Permisos',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            9 => 
            array (
                'id' => 14,
                'name' => 'Manu.read',
                'description' => 'Leer',
                'url' => '/admin/menu-item',
                'slug' => 'Manu',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            10 => 
            array (
                'id' => 15,
                'name' => 'Usuarios.read',
                'description' => 'Leer',
                'url' => '/admin/user',
                'slug' => 'Usuarios',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            11 => 
            array (
                'id' => 16,
                'name' => 'Roles.read',
                'description' => 'Leer',
                'url' => '/admin/role',
                'slug' => 'Roles',
                'guard_name' => 'web',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}
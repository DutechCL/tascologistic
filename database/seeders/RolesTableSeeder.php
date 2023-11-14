<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('roles')->delete();
        
        \DB::table('roles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Administrador del sistema',
                'guard_name' => 'admin',
                'created_at' => '2023-07-10 17:29:44',
                'updated_at' => '2023-09-26 17:07:35',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Autorizador CDA',
                'guard_name' => 'cda',
                'created_at' => '2023-07-10 17:29:44',
                'updated_at' => '2023-11-14 15:20:21',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Encargado de Revisión o Pickeo',
                'guard_name' => 'revisor-picker',
                'created_at' => '2023-07-10 17:29:44',
                'updated_at' => '2023-09-26 17:03:40',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Encargado de Facturación y Pagos',
                'guard_name' => 'bills-payments',
                'created_at' => '2023-07-10 17:29:44',
                'updated_at' => '2023-09-26 17:03:40',
            ),
        ));
        
        
    }
}
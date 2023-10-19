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
                'created_at' => '2023-07-10 17:29:44',
                'guard_name' => 'admin',
                'id' => 1,
                'name' => 'Administrador del sistema',
                'updated_at' => '2023-09-26 17:07:35',
            ),
            1 => 
            array (
                'created_at' => '2023-07-10 17:29:44',
                'guard_name' => 'cda',
                'id' => 2,
                'name' => 'CDA',
                'updated_at' => '2023-09-26 17:06:58',
            ),
            2 => 
            array (
                'created_at' => '2023-07-10 17:29:44',
                'guard_name' => 'revisor-picker',
                'id' => 3,
                'name' => 'Encargado de Revisión o Pickeo',
                'updated_at' => '2023-09-26 17:03:40',
            ),
            3 => 
            array (
                'created_at' => '2023-07-10 17:29:44',
                'guard_name' => 'bills-payments',
                'id' => 4,
                'name' => 'Encargado de Facturación y Pagos',
                'updated_at' => '2023-09-26 17:03:40',
            ),
        ));
        
        
    }
}
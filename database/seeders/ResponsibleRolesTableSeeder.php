<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ResponsibleRolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('responsible_roles')->delete();
        
        \DB::table('responsible_roles')->insert(array (
            0 => 
            array (
                'created_at' => '2023-08-29 15:32:41',
                'description' => 'Picker',
                'id' => 1,
                'name' => 'Picker',
                'slug' => 'picker',
                'updated_at' => '2023-08-29 15:32:41',
            ),
            1 => 
            array (
                'created_at' => '2023-08-29 15:32:41',
                'description' => 'Revisor',
                'id' => 2,
                'name' => 'Revisor',
                'slug' => 'revisor',
                'updated_at' => '2023-08-29 15:32:41',
            ),
            2 => 
            array (
                'created_at' => '2023-08-29 15:32:41',
                'description' => 'Autorizador',
                'id' => 3,
                'name' => 'Autorizador',
                'slug' => 'autorizador',
                'updated_at' => '2023-08-29 15:32:41',
            ),
            3 => 
            array (
                'created_at' => '2023-08-29 15:32:41',
                'description' => 'Preparador',
                'id' => 4,
                'name' => 'Preparador',
                'slug' => 'preparador',
                'updated_at' => '2023-08-29 15:32:41',
            ),
        ));
        
        
    }
}
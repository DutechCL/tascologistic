<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('settings')->delete();
        
        \DB::table('settings')->insert(array (
            0 => 
            array (
                'id' => 1,
                'key' => '_traker_update_interval',
                'label' => 'intervalo de actualización de traker',
                'value' => NULL,
                'section' => NULL,
                'modules_json' => NULL,
                'created_at' => '2023-10-24 02:09:14',
                'updated_at' => '2023-10-24 02:09:14',
            ),
            1 => 
            array (
                'id' => 2,
                'key' => '_admin_email',
                'label' => 'correo electrónico de administración',
                'value' => NULL,
                'section' => NULL,
                'modules_json' => NULL,
                'created_at' => '2023-10-24 02:11:24',
                'updated_at' => '2023-10-24 02:11:24',
            ),
        ));
        
        
    }
}
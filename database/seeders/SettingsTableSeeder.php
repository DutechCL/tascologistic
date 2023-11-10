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
                'active' => 1,
                'class' => 'col-md-6 pt-4',
                'created_at' => '2023-10-24 02:09:14',
                'description' => NULL,
                'id' => 1,
                'key' => '_traker_update_interval',
                'label' => 'Intervalo de actualización de traker',
                'section' => 'general',
                'type' => 'text',
                'updated_at' => '2023-11-10 19:33:00',
                'value' => '15',
            ),
            1 => 
            array (
                'active' => 1,
                'class' => 'col-md-6 pt-4',
                'created_at' => '2023-10-24 02:11:24',
                'description' => NULL,
                'id' => 2,
                'key' => '_admin_email',
                'label' => 'Correo electrónico de administración',
                'section' => 'general',
                'type' => 'text',
                'updated_at' => '2023-11-10 19:33:00',
                'value' => 'super@dutech.cl',
            ),
            2 => 
            array (
                'active' => 1,
                'class' => 'col-md-6 pt-4',
                'created_at' => '2023-11-10 14:47:13',
                'description' => NULL,
                'id' => 3,
                'key' => '_sap_company_db',
                'label' => 'Base de datos SAP',
                'section' => 'integrations_sap',
                'type' => 'text',
                'updated_at' => '2023-11-10 19:33:00',
                'value' => 'SBO_TASCO_PROD',
            ),
            3 => 
            array (
                'active' => 1,
                'class' => 'col-md-6 pt-4',
                'created_at' => '2023-11-10 14:47:48',
                'description' => NULL,
                'id' => 4,
                'key' => '_sap_username',
                'label' => 'Nombre de usuario SAP',
                'section' => 'integrations_sap',
                'type' => 'text',
                'updated_at' => '2023-11-10 19:33:00',
                'value' => 'INT',
            ),
            4 => 
            array (
                'active' => 1,
                'class' => 'col-md-6 pt-4',
                'created_at' => '2023-11-10 14:48:11',
                'description' => NULL,
                'id' => 5,
                'key' => '_sap_password',
                'label' => 'Clave de usuario SAP',
                'section' => 'integrations_sap',
                'type' => 'password',
                'updated_at' => '2023-11-10 19:33:00',
                'value' => 'Gonza123.',
            ),
            5 => 
            array (
                'active' => 1,
                'class' => 'col-md-6 pt-4',
                'created_at' => '2023-11-10 14:53:38',
                'description' => NULL,
                'id' => 6,
                'key' => '_sap_url_api',
                'label' => 'Url API de SAP',
                'section' => 'integrations_sap',
                'type' => 'text',
                'updated_at' => '2023-11-10 19:33:00',
                'value' => 'https://sbo-tasco.cloudseidor.com:50000/b1s/v1',
            ),
            6 => 
            array (
                'active' => 1,
                'class' => 'col-md-6 pt-4',
                'created_at' => '2023-11-10 14:57:07',
                'description' => NULL,
                'id' => 7,
                'key' => '_sap_dev_mode',
                'label' => 'Modo desarrollo SAP',
                'section' => 'integrations_sap',
                'type' => 'switch',
                'updated_at' => '2023-11-10 19:33:00',
                'value' => '1',
            ),
        ));
        
        
    }
}
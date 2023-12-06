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
                'label' => 'Intervalo de actualización de traker',
                'value' => '15',
                'type' => 'text',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'general',
                'description' => NULL,
                'created_at' => '2023-10-24 02:09:14',
                'updated_at' => '2023-12-05 21:42:59',
            ),
            1 => 
            array (
                'id' => 2,
                'key' => '_admin_email',
                'label' => 'Correo electrónico de administración',
                'value' => 'super@dutech.cl',
                'type' => 'text',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'general',
                'description' => NULL,
                'created_at' => '2023-10-24 02:11:24',
                'updated_at' => '2023-12-05 21:42:59',
            ),
            2 => 
            array (
                'id' => 3,
                'key' => '_sap_company_db',
                'label' => 'Base de datos SAP',
                'value' => 'SBO_TASCO_PROD',
                'type' => 'text',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'integrations_sap',
                'description' => NULL,
                'created_at' => '2023-11-10 14:47:13',
                'updated_at' => '2023-12-05 21:42:59',
            ),
            3 => 
            array (
                'id' => 4,
                'key' => '_sap_username',
                'label' => 'Nombre de usuario SAP',
                'value' => 'INT',
                'type' => 'text',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'integrations_sap',
                'description' => NULL,
                'created_at' => '2023-11-10 14:47:48',
                'updated_at' => '2023-12-05 21:42:59',
            ),
            4 => 
            array (
                'id' => 5,
                'key' => '_sap_password',
                'label' => 'Clave de usuario SAP',
                'value' => 'Gonza123.',
                'type' => 'password',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'integrations_sap',
                'description' => NULL,
                'created_at' => '2023-11-10 14:48:11',
                'updated_at' => '2023-11-10 19:33:00',
            ),
            5 => 
            array (
                'id' => 6,
                'key' => '_sap_url_api',
                'label' => 'Url API SAP',
                'value' => 'https://sbo-tasco.cloudseidor.com:50000/b1s/v1',
                'type' => 'text',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'integrations_sap',
                'description' => NULL,
                'created_at' => '2023-11-10 14:53:38',
                'updated_at' => '2023-12-05 21:42:59',
            ),
            6 => 
            array (
                'id' => 7,
                'key' => '_sap_interval_sync',
            'label' => 'Intervalo de sincronización de ordenes con SAP (en minutos)',
                'value' => '5',
                'type' => 'number',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'integrations_sap',
                'description' => NULL,
                'created_at' => '2023-11-10 14:57:07',
                'updated_at' => '2023-12-05 21:42:59',
            ),
            7 => 
            array (
                'id' => 8,
                'key' => '_sap_dev_mode',
                'label' => 'Modo desarrollo SAP',
                'value' => '0',
                'type' => 'switch',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'integrations_sap',
                'description' => NULL,
                'created_at' => '2023-11-10 14:57:07',
                'updated_at' => '2023-12-05 21:42:59',
            ),
            8 => 
            array (
                'id' => 10,
                'key' => '_biller_company_db',
            'label' => 'Base de datos Facturador (prod = 1, dev = 0)',
                'value' => '1',
                'type' => 'text',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'integrations_biller',
                'description' => NULL,
                'created_at' => '2023-11-10 14:47:13',
                'updated_at' => '2023-12-05 21:42:59',
            ),
            9 => 
            array (
                'id' => 11,
                'key' => '_biller_username',
                'label' => 'Nombre de usuario Facturador',
                'value' => 'INT',
                'type' => 'text',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'integrations_biller',
                'description' => NULL,
                'created_at' => '2023-11-10 14:47:48',
                'updated_at' => '2023-12-05 21:42:59',
            ),
            10 => 
            array (
                'id' => 12,
                'key' => '_biller_password',
                'label' => 'Clave de usuario Facturador',
                'value' => 'Gonza123.',
                'type' => 'password',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'integrations_biller',
                'description' => NULL,
                'created_at' => '2023-11-10 14:48:11',
                'updated_at' => '2023-12-05 21:42:59',
            ),
            11 => 
            array (
                'id' => 13,
                'key' => '_biller_url_api',
                'label' => 'Url API Facturador',
                'value' => 'https://sbo-tasco.cloudseidor.com:4300/sap/sbotascodesa/Integracion/Main.xsjs',
                'type' => 'text',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'integrations_biller',
                'description' => NULL,
                'created_at' => '2023-11-10 14:53:38',
                'updated_at' => '2023-12-05 21:42:59',
            ),
            12 => 
            array (
                'id' => 14,
                'key' => '_biller_dev_mode',
                'label' => 'Modo desarrollo Facturador',
                'value' => '1',
                'type' => 'switch',
                'class' => 'col-md-6 pt-4',
                'active' => 1,
                'section' => 'integrations_biller',
                'description' => NULL,
                'created_at' => '2023-11-10 14:57:07',
                'updated_at' => '2023-12-05 21:42:59',
            ),
        ));
        
        
    }
}
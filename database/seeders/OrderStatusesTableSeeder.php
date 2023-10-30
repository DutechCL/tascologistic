<?php

namespace Database\Seeders;

use App\Models\OrderStatus;
use Illuminate\Database\Seeder;

class OrderStatusesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        \DB::table('order_statuses')->delete();
        
        \DB::table('order_statuses')->insert(array (
            0 => 
            array (
                'id' => OrderStatus::STATUS_ON_HOLD,
                'name' => 'En espera',
                'description' => 'Estado inicial del proceso',
                'color' => '#ffe6c0',
                'created_at' => '2023-08-29 19:31:20',
                'updated_at' => '2023-09-27 16:54:56',
            ),
            1 => 
            array (
                'id' => OrderStatus::STATUS_ON_PICKER,
                'name' => 'En preparación',
                'description' => 'Cunado la orden esta siendo revisada por el picker',
                'color' => '#a9b7fe',
                'created_at' => '2023-08-29 19:31:20',
                'updated_at' => '2023-10-03 00:36:47',
            ),
            2 => 
            array (
                'id' => OrderStatus::STATUS_PICKED,
                'name' => 'Preparado',
                'description' => 'Cunado la orden esta esta aprobada por el picker',
                'color' => '#a9b7fe',
                'created_at' => '2023-08-29 19:31:20',
                'updated_at' => '2023-10-03 00:36:47',
            ),
            3 => 
            array (
                'id' => OrderStatus::STATUS_ON_REVIEWER,
                'name' => 'En revisión',
                'description' => 'Cunado la orden esta siendo revisada por el revisor',
                'color' => '#d5ebf8',
                'created_at' => '2023-08-29 19:31:20',
                'updated_at' => '2023-09-27 16:56:56',
            ),
            4 => 
            array (
                'id' => OrderStatus::STATUS_REVIEWED,
                'name' => 'Revisado',
                'description' => 'Cunado la orden esta aprobada por el revisor',
                'color' => '#d5ebf8',
                'created_at' => '2023-08-29 19:31:20',
                'updated_at' => '2023-09-27 16:56:56',
            ),
            5 => 
            array (
                'id' => OrderStatus::STATUS_BILLED,
                'name' => 'Facturado',
                'description' => 'Cunado la orden esta facturada correctamnet',
                'color' => '#52c5ff',
                'created_at' => '2023-10-24 22:41:39',
                'updated_at' => '2023-10-24 22:41:39',
            ),
            6 => 
            array (
                'id' => OrderStatus::STATUS_PAYMENT,
                'name' => 'Pagado',
                'description' => 'Cunado la orden esta pagada correctamnet',
                'color' => '#52c5ff',
                'created_at' => '2023-10-24 22:41:39',
                'updated_at' => '2023-10-24 22:41:39',
            ),
            7 => 
            array (
                'id' => OrderStatus::STATUS_REJECTED,
                'name' => 'Rechazada',
                'description' => 'Cuando la orden presenta algun problema',
                'color' => '#ff9494',
                'created_at' => '2023-08-29 19:31:20',
                'updated_at' => '2023-09-27 16:58:14',
            ),
        ));
        
        
    }
}
<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\Process;
use Illuminate\Database\Seeder;

class ProcessesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        \DB::table('processes')->delete();
        
        \DB::table('processes')->insert(array (
            0 => 
            array (
                'id' => Process::PROCESS_ID_CDA,
                'nombre' => 'CDA',
                'descripcion' => 'Autorizar ordenes retiro y despacho y revisión ordenes rechazadas',
                'slug' => Process::PROCESS_SLUG_CDA,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            1 =>
            array (
                'id' => Process::PROCESS_ID_PICKER,
                'nombre' => 'Pickeo',
                'descripcion' => 'Revisar desatlles de las ordenes como productos, cantidades, etc.',
                'slug' => Process::PROCESS_SLUG_PICKER,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            2 =>
            array (
                'id' => Process::PROCESS_ID_REVIEWER,
                'nombre' => 'Revisión',
                'descripcion' => 'Revisar desatlles de las ordenes como productos, cantidades, etc.',
                'slug' => Process::PROCESS_SLUG_REVIEWER,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            3 =>
            array (
                'id' => Process::PROCESS_ID_BILLS,
                'nombre' => 'Fracturación',
                'descripcion' => 'Generar facturas para ordenes retira y aqui, para despacho genera guia y factura.',
                'slug' => Process::PROCESS_SLUG_BILLS,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            4 =>
            array (
                'id' => Process::PROCESS_ID_PAYMENT,
                'nombre' => 'Pagos',
                'descripcion' => 'Generar reporte de pago para ordenes retira, aqui y  despacho',
                'slug' => Process::PROCESS_SLUG_PAYMENT,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            )
        ));
    }
}
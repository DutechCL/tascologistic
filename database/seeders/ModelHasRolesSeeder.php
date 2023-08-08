<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModelHasRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('model_has_roles')->insert(array(
            0 =>
            array(
                'role_id' => 1,
                'model_type' => 'App\Models\User',
                'model_id' => 1
            ),
        ));
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RoleHasPermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('role_has_permissions')->delete();
        
        \DB::table('role_has_permissions')->insert(array (
            0 => 
            array (
                'permission_id' => 5,
                'role_id' => 1,
            ),
            1 => 
            array (
                'permission_id' => 6,
                'role_id' => 1,
            ),
            2 => 
            array (
                'permission_id' => 7,
                'role_id' => 1,
            ),
            3 => 
            array (
                'permission_id' => 8,
                'role_id' => 1,
            ),
            4 => 
            array (
                'permission_id' => 9,
                'role_id' => 1,
            ),
            5 => 
            array (
                'permission_id' => 10,
                'role_id' => 1,
            ),
            6 => 
            array (
                'permission_id' => 11,
                'role_id' => 1,
            ),
            7 => 
            array (
                'permission_id' => 12,
                'role_id' => 1,
            ),
            8 => 
            array (
                'permission_id' => 13,
                'role_id' => 1,
            ),
            9 => 
            array (
                'permission_id' => 14,
                'role_id' => 1,
            ),
            10 => 
            array (
                'permission_id' => 15,
                'role_id' => 1,
            ),
            11 => 
            array (
                'permission_id' => 16,
                'role_id' => 1,
            ),
            12 => 
            array (
                'permission_id' => 17,
                'role_id' => 1,
            ),
            13 => 
            array (
                'permission_id' => 18,
                'role_id' => 1,
            ),
            14 => 
            array (
                'permission_id' => 19,
                'role_id' => 1,
            ),
            15 => 
            array (
                'permission_id' => 20,
                'role_id' => 1,
            ),
            16 => 
            array (
                'permission_id' => 21,
                'role_id' => 1,
            ),
            17 => 
            array (
                'permission_id' => 22,
                'role_id' => 1,
            ),
            18 => 
            array (
                'permission_id' => 23,
                'role_id' => 1,
            ),
            19 => 
            array (
                'permission_id' => 26,
                'role_id' => 1,
            ),
            20 => 
            array (
                'permission_id' => 27,
                'role_id' => 1,
            ),
            21 => 
            array (
                'permission_id' => 28,
                'role_id' => 1,
            ),
            22 => 
            array (
                'permission_id' => 7,
                'role_id' => 2,
            ),
            23 => 
            array (
                'permission_id' => 8,
                'role_id' => 2,
            ),
            24 => 
            array (
                'permission_id' => 9,
                'role_id' => 2,
            ),
            25 => 
            array (
                'permission_id' => 10,
                'role_id' => 2,
            ),
            26 => 
            array (
                'permission_id' => 11,
                'role_id' => 2,
            ),
            27 => 
            array (
                'permission_id' => 12,
                'role_id' => 2,
            ),
            28 => 
            array (
                'permission_id' => 17,
                'role_id' => 2,
            ),
            29 => 
            array (
                'permission_id' => 18,
                'role_id' => 2,
            ),
            30 => 
            array (
                'permission_id' => 20,
                'role_id' => 2,
            ),
            31 => 
            array (
                'permission_id' => 21,
                'role_id' => 2,
            ),
            32 => 
            array (
                'permission_id' => 22,
                'role_id' => 2,
            ),
            33 => 
            array (
                'permission_id' => 23,
                'role_id' => 2,
            ),
            34 => 
            array (
                'permission_id' => 26,
                'role_id' => 2,
            ),
            35 => 
            array (
                'permission_id' => 27,
                'role_id' => 2,
            ),
            36 => 
            array (
                'permission_id' => 28,
                'role_id' => 2,
            ),
            37 => 
            array (
                'permission_id' => 8,
                'role_id' => 3,
            ),
            38 => 
            array (
                'permission_id' => 12,
                'role_id' => 3,
            ),
            39 => 
            array (
                'permission_id' => 26,
                'role_id' => 3,
            ),
            40 => 
            array (
                'permission_id' => 27,
                'role_id' => 3,
            ),
            41 => 
            array (
                'permission_id' => 9,
                'role_id' => 4,
            ),
            42 => 
            array (
                'permission_id' => 10,
                'role_id' => 4,
            ),
            43 => 
            array (
                'permission_id' => 11,
                'role_id' => 4,
            ),
            44 => 
            array (
                'permission_id' => 12,
                'role_id' => 4,
            ),
            45 => 
            array (
                'permission_id' => 26,
                'role_id' => 4,
            ),
            46 => 
            array (
                'permission_id' => 27,
                'role_id' => 4,
            ),
            47 => 
            array (
                'permission_id' => 10,
                'role_id' => 6,
            ),
            48 => 
            array (
                'permission_id' => 26,
                'role_id' => 6,
            ),
            49 => 
            array (
                'permission_id' => 27,
                'role_id' => 6,
            ),
            50 => 
            array (
                'permission_id' => 28,
                'role_id' => 6,
            ),
        ));
        
        
    }
}
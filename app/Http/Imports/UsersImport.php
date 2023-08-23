<?php
namespace App\Http\Imports;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Str;

class UsersImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {
        $email = isset($row['email']) && $row['email'] !== 'null' ? $row['email'] : Str::slug($row['username'], '.') . '@tascologistic.cl';

        // Verificar si ya existe un usuario con el mismo correo electrónico o nombre de usuario
        $existingUser = User::where('email', $email)
            ->orWhere('name', $row['username'])
            ->first();

        if ($existingUser) {
            // Si ya existe un usuario con el mismo correo electrónico o nombre de usuario, no crear un nuevo usuario.
            return null;
        }
        return new User([
            'name' => $row['username'],
            'email' => $email,
            'password' => bcrypt('123456'),
            'internal_key'=> (int) $row['internalkey'],
            'user_code'  => $row['usercode'],
            'mobile_phone_number'  => $row['mobilephonenumber'],
            'defaults'  => $row['defaults'],
            'branch'  => $row['branch'],
            'department'=> $row['department'],
        ]);
    }

    public function batchSize(): int
    {
        return 1000; // Número de registros a insertar por cada bloque (batch)
    }
}

<?php

namespace App\Models;

use App\Models\User;
use App\Models\ResponsibleRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RoleAssignments extends Model
{
    use HasFactory;

    public $fillable = [
        'order_id',
        'user_id',
        'responsible_role_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class); // Asumiendo que la relación es una relación "belongsTo" con el modelo User
    }

    public function responsibleRole()
    {
        return $this->belongsTo(ResponsibleRoles::class); // Asumiendo que la relación es una relación "belongsTo" con el modelo ResponsibleRoles
    }
}

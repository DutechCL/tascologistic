<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResponsibleRoles extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ]; // Campos permitidos para llenado masivo
}

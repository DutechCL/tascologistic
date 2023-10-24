<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasRoles;
    use CrudTrait;
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'internal_key',
        'user_code'  ,
        'mobile_phone_number'  ,
        'defaults'  ,
        'branch'  ,
        'department',
    ];

    protected $appends = ['role_slug', 'role_name'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function userRoles()
    {
        return $this->belongsToMany(Role::class, 'model_has_roles', 'model_id', 'role_id');
    }
    
    public function ordenesResponsible()
    {
        return $this->belongsToMany(Order::class, 'orden_responsibles');
    }
    
    public function warehouses()
    {
        return $this->belongsToMany(Warehouse::class, 'user_warehouse')->withTimestamps();
    }
    
    public function allowedWarehouses()
    {
        return $this->warehouses()->select('warehouses.WareHouseCode')->pluck('warehouses.WareHouseCode');;
    }
    

    public function getRoleSlugAttribute()
    {
        return $this->userRoles->first()->guard_name ?? null;
    }

    public function getRoleNameAttribute()
    {
        return $this->userRoles->first()->name ?? null;
    }
}

<?php

namespace App\Models;

use App\Models\SalesPerson;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Chat\Message;
use Laravel\Sanctum\HasApiTokens;
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
        'SalesEmployeeCode'
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

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->hash = md5(uniqid());
            // $model->code = User::query()->orderBy('id', 'desc')->first()?->code + 1;
        });
    }


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

    public function salesPersons()
    {
        return $this->belongsTo(SalesPerson::class, 'sales_person_id')->addSelect(['sales_persons.*'])->where('Active', 1);
    }
    
    public function chats()
    {
        return $this->belongsToMany(Chat::class, 'chat_user_mapping', 'user_id', 'chat_id');
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
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

<?php

namespace App\Models;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Setting extends Model
{
    use HasFactory, CrudTrait;

    /*
    |--------------------------------------------------------------------------
    | GLOBAL VARIABLES
    |--------------------------------------------------------------------------
    */

    protected $table = 'settings';
    // protected $primaryKey = 'id';
    // public $timestamps = false;
    protected $guarded = ['id'];
    // protected $fillable = [];
    // protected $hidden = [];
    // protected $dates = [];
    protected $casts = [
        'modules_json' => 'array',
    ];

    /*
    |-------------------------------------------------------->------------------
    | FUNCTIONS
    |--------------------------------------------------------------------------
    */
    public static function get($key)
    {
        $value = Setting::where('key', $key)->first()->value;

        if (strpos($key, 'password') !== false) {
            $value = Crypt::decrypt($value);
        }

        return $value ?? null;
    }
    
    public static function set($key, $value)
    {
        if (strpos($key, 'password') !== false) {
            $value = Crypt::encrypt($value);
        }

        return self::where('key', $key)->update(['value' => $value]);
    }


    /*
    |--------------------------------------------------------------------------
    | RELATIONS
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | SCOPES
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | ACCESSORS
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | MUTATORS
    |--------------------------------------------------------------------------
    */
}

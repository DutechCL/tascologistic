<?php

namespace App\Models;

use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LogOrder extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = [
        'DocNum',
        'process',
        'message',
        'isSynced',
    ];

    
    public static function error($process, $DocNum, $message)
    {
        self::log($process, $DocNum, $message, false);
    }

    public static function success($process, $DocNum)
    {
        self::log($process, $DocNum, 'success');
    }

    public static function log($process, $DocNum, $message, $isSynced = true)
    {
        try {

            self::create([
                'process' => $process,
                'DocNum' => $DocNum,
                'message' => $message,
                'isSynced' => $isSynced,
            ]);

        } catch (\Exception $e) {

            Log::error($e->getMessage());

        }

    }
    

}

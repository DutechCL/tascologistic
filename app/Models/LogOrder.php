<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    
    public function error($process, $DocNum, $message)
    {
        $this->log($process, $DocNum, $message, false);
    }

    public function success($process, $DocNum)
    {
        $this->log($process, $DocNum, 'success');
    }

    public function log($process, $DocNum, $message, $isSynced = true)
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

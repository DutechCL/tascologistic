<?php

namespace App\Models;

use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
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

    /**
     * Get the user's full name.
     *
     * @return Attribute
     */
    protected function time(): Attribute
    {
        return Attribute::make(
            get: fn($value, $attributes) => (new \DateTime($attributes['created_at']))->format('H:i:s')
        );
    }

    
    public static function error($process, $DocNum, $message)
    {
        return self::log($process, $DocNum, $message, false);
    }

    public static function success($process, $DocNum)
    {
        return self::log($process, $DocNum, 'success');
    }

    public static function log($process, $DocNum, $message, $isSynced = true)
    {
        try {

            $where = [
                'process' => $process, 
                'DocNum' => $DocNum
            ];
            $data = [
                'process' => $process,
                'DocNum' => $DocNum,
                'message' => $message,
                'isSynced' => $isSynced,
            ];
                
            return self::updateOrCreate($where, $data);


        } catch (\Exception $e) {

            Log::error($e->getMessage());

        }

    }

    public static function countOrdersError()
    {
        return self::where('isSynced', false)->count();
    }

    public static function existOrdersError()
    {
        return self::countOrdersError() > 0;
    } 

    public static function buildParamsOrdersError()
    {
        $orderError = self::where('isSynced', false)->get()->pluck('DocNum');
        $params = [];
        foreach ($orderError as $key => $value) {
            $params[] = [
                'field'    => 'DocNum',
                'operator' => 'eq', // greater than or equal
                'value'    => $value,
            ];
        }
        return $params;
    }
    

}

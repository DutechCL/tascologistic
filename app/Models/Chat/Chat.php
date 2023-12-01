<?php

namespace App\Models\Chat;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Order;
use App\Models\Chat\Message;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Chat extends Model
{
    use HasFactory;

    const STATUS_OPEN = 'open';
    const STATUS_CLOSE = 'close';

    public $timestamps = true;

    public function users()
    {
        return $this->belongsToMany(User::class,  'chat_user_mapping', 'chat_id', 'user_id');
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    protected function resolvedDate(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => !is_null($attributes['resolved_at']) 
                ? (new \DateTime($attributes['resolved_at']))->format('Y/m/d') 
                : null,
        );
    }

    protected function resolvedTime(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => !is_null($attributes['resolved_at']) 
                ? (new \DateTime($attributes['resolved_at']))->format('H:i:s') 
                : null,
        );
    }

    protected function timeResolved(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => !is_null($attributes['resolved_at'])
                ? Carbon::parse($attributes['created_at'])->diffForHumans($attributes['resolved_at'], true) 
                : null,
        );
    }
}

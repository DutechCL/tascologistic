<?php

namespace App\Models\Chat;

use App\Models\User;
use App\Models\Order;
use App\Models\Chat\Message;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Chat extends Model
{
    const STATUS_OPEN = 'open';
    const STATUS_CLOSE = 'close';

    use HasFactory;

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
}

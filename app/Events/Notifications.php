<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class Notifications implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;
    public $chat;
    public $currentUser;
  
    public function __construct($user, $chat, $currentUser)
    {
        $this->user = $user;
        $this->chat = $chat->load('order');
        $this->currentUser = $currentUser;
    }
  
    public function broadcastOn(): Channel
    {
        return new PrivateChannel('notification.'.$this->user->id);
    }
  
    public function broadcastAs()
    {
        return 'notification.sent';
    }
}

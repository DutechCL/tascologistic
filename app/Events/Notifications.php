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
  
    public function __construct($user)
    {
        $this->user = $user;
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

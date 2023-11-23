<?php

namespace App\Http\Controllers\Chat;

use App\Models\Order;
use App\Events\MessageSent;
use App\Models\Chat\Message;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;

class ChatController extends Controller
{
    public function sendMessage(Request $request)
    {
        $user = auth()->user(); // Puedes personalizar esto según tus necesidades
        
        $message = $request->input('message');

        $objMessage = Message::create([
            'user_id' => $user->id,
            'message' => $message,
            'is_received' => false
        ]);
        $objMessage->load('user');

        event(new MessageSent($objMessage));

        return $this->success($objMessage);
    }

    public function getMessages()
    {
        $result = Message::with('user')->get();

        return $this->success($result);
    }

    public function getUser()
    {
        $user = auth()->user(); // Puedes personalizar esto según tus necesidades

        return $this->success($user);
    }

    public function getOrder($id)
    {
        $order = Order::getOrder($id);

        return $this->success(new OrderResource($order));
    }


}

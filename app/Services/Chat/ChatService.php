<?php

namespace App\Services\Chat;

use App\Models\Order;
use App\Models\Chat\Chat;
use App\Events\MessageSent;
use App\Models\Chat\Message;



class ChatService
{

    public function createChatForOrder($order)
    {
        $chat = new Chat();
        $chat->order_id = $order->id;
        $chat->status = Chat::STATUS_OPEN;
        $chat->subject = 'Error al procesar la orden';
        $chat->save();

        $chat->refresh();

        foreach ($order->responsibles as $responsible) {
            $chat->users()->attach($responsible->id);
        }

        $chat_id = $chat->id;
        $message = $this->generateMessage($order);

        $message = $this->createMessage($chat_id, $message);

        $order->has_problems = true;
        $order->save();

        event(new MessageSent($message));
    }

    public function sendMessage($request)
    {
        $message = $request->input('message');
        $chatId = $request->input('chat_id');

        $message = $this->createMessage($chatId, $message);

        event(new MessageSent($message));

        return $message;
    }

    public function createMessage($chatId, $message)
    {
        $user = auth()->user();

        $objMessage = Message::create([
            'chat_id' => $chatId,
            'user_id' => $user->id,
            'message' => $message,
            'is_received' => false
        ]);

        $objMessage->load('user');

        return $objMessage;
    }

    public function listMessage(Order $order)
    {
        $chats = Chat::with([
            'messages' => function ($query) {
                $query->with('user');
            }]
        )->where('order_id', $order->id)->first();
        
        return $chats;
    }



    public function generateMessage($order)
    {
        $order->refresh();
        $message = '';
        foreach ($order->orderItems as $orderItem) {
            if ($orderItem->problems->count() > 0) {
                $message .= "<strong> El producto: {$orderItem->product->ItemName}  SKU: {$orderItem->product->ItemCode} </strong>  <br>";
                foreach ($orderItem->problems as $problem) {
                    $message .= "Problema: {$problem->problem->title} <br>";
                    if ($problem->other) {
                        $message .= "Otro: {$problem->other} <br>";
                    }
                }
                $message .= "<br>";
            }
        }

        if ($order->problems->count() > 0) {
            $message = "<strong> La orden {$order->DocNum} tiene problemas generales: </strong> <br>";
            foreach ($order->problems as $problem) {
                $message .= "Problema: {$problem->problem->title} <br>";
                if ($problem->other) {
                    $message .= "Otro: {$problem->other} <br>";
                }
            }
        }

        return $message;
    }


}
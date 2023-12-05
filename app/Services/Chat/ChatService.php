<?php

namespace App\Services\Chat;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Order;
use App\Models\Chat\Chat;
use App\Events\MessageSent;
use App\Models\SalesPerson;
use App\Models\Chat\Message;
use App\Events\Notifications;
use App\Services\SAP\SyncService;
use Illuminate\Support\Facades\Mail;
use App\Http\Resources\OrderResource;
use App\Mail\Order\OrderProblemAlert;
use App\Notifications\Order\OrderProblemNotification;



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

        $usersChat = $this->assingChatUsers($chat, $order);

        $currentUser = auth()->user();
        foreach ($usersChat as $user) {
            event(new Notifications($user, $chat, $currentUser));
        }
        
        $this->createMessage(
            $chat->id, 
            $this->generateMessage($order)
        );

        $order->has_problems = true;
        $order->save();

        return $chat;
    }

    public function sendMessage($request)
    {
        // dd($request->all(), $request->headers->all());
        $message = $request->input('message');
        $chatId = $request->input('chat_id');

        $message = $this->createMessage($chatId, $message);

        event(new MessageSent($message));

        return $message;
    }

    public function createMessage($chatId, $message)
    {
        $user = auth()->user();

        // $user = User::find(1);

        $objMessage = Message::create([
            'chat_id' => $chatId,
            'user_id' => $user->id,
            'message' => $message,
            'is_received' => false
        ]);

        $objMessage->load('user');

        return $objMessage;
    }

    public function listChatsByUser($execute = true)
    {
        $userId = auth()->user()->id;
    
        $query = Chat::query();
    
        $query->whereHas('users', function ($query) use ($userId) {

            $query->where('user_id', $userId);

        })->with(['order' => function ($query) {

            $query->withOrderDetails();

        }]);
    
        if ($execute) {
            
            $chats = $query->where('status', Chat::STATUS_OPEN)->get();

            $chats = $chats->map(function ($chat) {
                return [
                    'chat' => $chat,   // Puedes ajustar esto según tu necesidad
                    'order' => new OrderResource($chat->order),
                ];
            });

            return $chats;
        }
    
        return $query;
    }

    public function listChatsHistory()
    {
        $query = $this->listChatsByUser(false)->where('status', Chat::STATUS_CLOSE);

        $chats = $query->get();

        $chats = $chats->map(function ($chat) {
            return [
                'chat' => $chat,   // Puedes ajustar esto según tu necesidad
                'order' => new OrderResource($chat->order),
            ];
        });

        return $chats;
    }

    public function showChat($id)
    {
        $chat = Chat::with([
            'messages' => function ($query) {
                $query->with('user');
            },
            'order' => function ($query) {
                $query->withOrderDetails();
            }
        ])->where('id', $id)->first();
    
        $formattedChat = new \stdClass();
        $formattedChat->id = $chat->id;
        $formattedChat->order_id = $chat->order_id;
        $formattedChat->subject = $chat->subject;
        $formattedChat->status = $chat->status;
        $formattedChat->messages = $chat->messages; 
        $formattedChat->order = new OrderResource($chat->order);
    
        return $formattedChat;
    }

    public function listMessage($chatId)
    {
        $chats = Chat::with([
            'messages' => function ($query) {
                $query->with('user');
            }]
        )->where('id', $chatId)->first();
        
        return $chats;
    }

    public function assingChatUsers($chat, $order)
    {
        $salesPerson = SalesPerson::where('SalesEmployeeCode', $order->SalesPersonCode)->first();
        $user = User::where('sales_person_id', $salesPerson->id)->first();

        if($user){
            $user->notify(new OrderProblemNotification($chat));
            $chat->users()->attach($user->id);
        }
        
        foreach ($order->responsibles as $responsible) {
            $chat->users()->attach($responsible->id);
        }


        return $chat->users;
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

    public function resolveOrder($id)
    {
        $chat = Chat::find($id);
        $order = Order::find($chat->order_id);

        $chat->status = Chat::STATUS_CLOSE;
        $chat->resolved_at = Carbon::now();
        $chat->save();

        $params = [
            [
                'field'    => 'DocNum',
                'operator' => 'eq', // greater than or equal
                'value'    => $order->DocNum,
            ]
        ];

        $sap = new SyncService;

        $config = $sap->buildConfig('orders', $params);
        $this->sap->sync($config);
        
        $order->has_problems = false;
        $order->is_resolved = true;
        $order->save();


        return $order;
    }

    public function export($status)
    {
        return Chat::with([
            'order' => function ($query) {
                $query->withOrderDetails();
            },
            'users'
        ])->where('status', $status)->get();
    }
}
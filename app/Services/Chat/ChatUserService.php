<?php

namespace App\Services\Chat;

use App\Models\User;
use App\Models\Order;
use App\Models\Chat\Chat;
use App\Models\SalesPerson;
use App\Http\Resources\OrderResource;
use App\Notifications\Order\OrderProblemNotification;

class ChatUserService
{
    /**
     * Crea un chat asociado a una orden y notifica a los usuarios relevantes.
     *
     * @param Chat $chat el chat actual.
     * @param Order $order La orden para la cual se crea el chat.
     * @return Chat El chat creado.
     */
    public function assingChatUsers(Chat $chat, Order $order)
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

    public function listChatsByUser($execute = true)
    {
        $userId = auth()->user()->id;
    
        $query = Chat::query();
    
        $query->whereHas('users', function ($query) use ($userId) {

            $query->where('user_id', $userId);

        })->with(['order' => function ($query) {

            $query->withOrderDetails();

        }]);

        $query->orderBy('updated_at', 'DESC');
    
        if ($execute) {
            
            $chats = $query->where('status', Chat::STATUS_OPEN)->paginate(20);

            $chats = $chats->data->map(function ($chat) {
                return [
                    'chat' => $chat,   // Puedes ajustar esto según tu necesidad
                    'order' => new OrderResource($chat->order),
                ];
            });

            return $chats;
        }
    
        return $query;
    }

}
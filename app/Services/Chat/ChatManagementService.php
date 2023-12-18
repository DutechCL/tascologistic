<?php

namespace App\Services\Chat;

use Carbon\Carbon;
use App\Models\Order;
use App\Models\Chat\Chat;
use App\Events\Notifications;
use App\Services\SAP\SyncService;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\OrderResource;
use App\Services\Chat\MessageService;
use App\Services\Chat\ChatUserService;

class ChatManagementService
{
    /**
     * Lista el historial de chats cerrados del usuario autenticado.
     *
     * Este método recupera y devuelve una colección de chats con estado cerrado que están asociados
     * al usuario autenticado, incluyendo detalles de la orden correspondiente a cada chat.
     *
     * @return array Una colección de chats con sus órdenes asociadas.
     */
    public function listChatsHistory()
    {
        try {
            $query = (new ChatUserService)->listChatsByUser(false)->where('status', Chat::STATUS_CLOSE);

            $chats = $query->get();

            return $chats->map(function ($chat) {
                return [
                    'chat' => $chat,
                    'order' => new OrderResource($chat->order),
                ];
            });
        } catch (\Exception $e) {
            Log::error("Error al listar historial de chats: " . $e->getMessage());
            return collect(); // Retornar colección vacía en caso de error
        }
    }

    /**
     * Muestra los detalles de un chat específico, incluyendo mensajes y orden asociada.
     *
     * Este método recupera un chat por su ID, incluyendo los mensajes asociados y los detalles
     * de la orden relacionada. Si el chat no se encuentra, se devuelve un objeto vacío.
     *
     * @param int $id ID del chat a mostrar.
     * @return \stdClass Detalles del chat, o un objeto vacío si no se encuentra.
     */
    public function showChat($id)
    {
        try {
            $chat = Chat::with(['messages' => function ($query) {
                    $query->with('user');
                }, 'order' => function ($query) {
                    $query->withOrderDetails();
                }])
                ->where('id', $id)
                ->first();

            if (!$chat) {
                throw new \Exception("Chat no encontrado.");
            }

            $formattedChat = new \stdClass();
            $formattedChat->id = $chat->id;
            $formattedChat->order_id = $chat->order_id;
            $formattedChat->subject = $chat->subject;
            $formattedChat->status = $chat->status;
            $formattedChat->messages = $chat->messages; 
            $formattedChat->order = new OrderResource($chat->order);

            return $formattedChat;
        } catch (\Exception $e) {
            Log::error("Error al mostrar chat: " . $e->getMessage());
            return new \stdClass(); // Retornar objeto vacío en caso de error
        }
    }


    /**
     * Crea un chat asociado a una orden y notifica a los usuarios relevantes.
     *
     * @param Order $order La orden para la cual se crea el chat.
     * @return Chat El chat creado.
     */
    public function createChatForOrder($order)
    {
        try {
            if (!$order) {
                throw new \Exception("Orden no encontrada.");
            }
    
            $chat = new Chat();
            $chat->order_id = $order->id;
            $chat->status = Chat::STATUS_OPEN;
            $chat->subject = 'Error al procesar la orden';
            $chat->save();
    
            $usersChat = (new ChatUserService)->assingChatUsers($chat, $order);
            $currentUser = auth()->user();
            foreach ($usersChat as $user) {
                event(new Notifications($user, $chat, $currentUser));
            }

            $message = new MessageService();
            dd($message->buildMessage($order));
            $result = $message->create($chat->id, $message->buildMessage($order));

            $order->has_problems = true;
            $order->save();
    
            return $chat;
        } catch (\Exception $e) {
            Log::error("Error al crear chat para la orden: " . $e->getMessage());
            return null;
        }
    }

    /**
     * Resuelve una orden asociada a un chat y sincroniza los cambios con SAP.
     *
     * Este método cierra el chat asociado a la orden indicada, actualiza el estado de la orden
     * a resuelta y sincroniza los cambios con SAP. Se validan la existencia del chat y de la orden,
     * y se capturan posibles errores durante el proceso.
     *
     * @param int $id ID del chat asociado a la orden que se resolverá.
     * @return Order|null La orden actualizada o null en caso de error.
     */
    public function resolveChatAndOrder($id)
    {
        try {
            $chat = Chat::find($id);
            if (!$chat) {
                throw new \Exception("Chat no encontrado.");
            }

            $order = Order::find($chat->order_id);
            if (!$order) {
                throw new \Exception("Orden no encontrada.");
            }

            $chat->status = Chat::STATUS_CLOSE;
            $chat->resolved_at = Carbon::now();
            $chat->save();

            $params = [['field' => 'DocNum', 'operator' => 'eq', 'value' => $order->DocNum]];

            $sap = new SyncService();

            $config = $sap->buildConfig('orders', $params);
            $sap->sync($config);

            $order->has_problems = false;
            $order->is_resolved = true;
            $order->save();

            return $order;
        } catch (\Exception $e) {
            Log::error("Error al resolver la orden: " . $e->getMessage());
            return null;
        }
    }

    /**
     * Exporta los chats basándose en su estado.
     *
     * Este método recupera y devuelve todos los chats que coinciden con el estado especificado.
     * Incluye detalles de la orden asociada y los usuarios vinculados a cada chat.
     *
     * @param string $status Estado de los chats a exportar.
     * @return \Illuminate\Database\Eloquent\Collection|Chat[] Colección de chats.
     */
    public function export($status)
    {
        try {
            return Chat::with([
                'order' => function ($query) {
                    $query->withOrderDetails();
                },
                'users'
            ])->where('status', $status)->get();
        } catch (\Exception $e) {
            Log::error("Error al exportar chats con estado '{$status}': " . $e->getMessage());
            return collect();
        }
    }
}
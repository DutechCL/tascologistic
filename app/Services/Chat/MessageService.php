<?php

namespace App\Services\Chat;

use Carbon\Carbon;
use App\Models\Product;
use App\Models\Chat\Chat;
use App\Events\MessageSent;
use App\Models\Chat\Message;
use Illuminate\Support\Facades\Log;

class MessageService
{    
    /**
     * Recupera un chat específico junto con sus mensajes y la información de los usuarios que los enviaron.
     *
     * Este método busca un chat por su ID y carga todos los mensajes asociados a ese chat.
     * Además, incluye los detalles de los usuarios que han enviado cada mensaje. Esto es útil para 
     * obtener una vista completa de la conversación en un chat específico, incluyendo quién envió
     * cada mensaje y el contenido de los mismos.
     *
     * @param int $chatId El ID del chat para el cual se recuperarán los mensajes.
     * @return Chat|null El chat con sus mensajes y usuarios correspondientes, o null si no se encuentra.
     */
    public function list($chatId)
    {
        $chats = Chat::with([
            'messages' => function ($query) {
                $query->with('user');
            }]
        )->where('id', $chatId)->first();
        
        return $chats;
    }
    
    /**
     * Envía un mensaje a un chat específico.
     *
     * Este método maneja la lógica para enviar un mensaje dentro de un chat. Primero, valida
     * que tanto el mensaje como el ID del chat estén presentes en la solicitud. Luego, busca el
     * chat correspondiente y verifica su existencia. Una vez encontrado el chat, actualiza su
     * fecha de última modificación y guarda el mensaje. Finalmente, emite un evento para notificar
     * que se ha enviado un nuevo mensaje.
     *
     * @param mixed $request Datos de la solicitud, que deben incluir el 'message' y el 'chat_id'.
     * @return Message|null El objeto mensaje creado o null si ocurre un error.
     * @throws \InvalidArgumentException Si falta el mensaje o el ID del chat en la solicitud.
     * @throws \Exception Si el chat especificado no se encuentra.
     */
    public function sendMessage($request)
    {
        try {
            $messageText = $request->input('message');
            $chatId = $request->input('chat_id');
            if (!$messageText || !$chatId) {
                throw new \InvalidArgumentException("Mensaje o ID del chat no proporcionados.");
            }
    
            $chat = Chat::find($chatId);
            if (!$chat) {
                throw new \Exception("Chat no encontrado.");
            }
    
            $chat->updated_at = Carbon::now();
            $chat->save();
    
            $message = $this->create($chatId, $messageText);
    
            event(new MessageSent($message));
    
            return $message;
        } catch (\InvalidArgumentException $e) {
            Log::error("Error al enviar mensaje: " . $e->getMessage());
            return null;
        } catch (\Exception $e) {
            Log::error("Error al enviar mensaje: " . $e->getMessage());
            return null;
        }
    }
    
    /**
     * Crea un nuevo mensaje en un chat específico.
     *
     * Este método se encarga de crear un mensaje en la base de datos asociado a un chat y a un usuario. 
     * Primero obtiene el usuario autenticado y luego crea el mensaje utilizando los datos proporcionados, 
     * incluyendo el ID del chat y el texto del mensaje. El mensaje se marca inicialmente como no recibido ('is_received' = false).
     * Después de crear el mensaje, se carga la relación con el usuario para obtener información adicional del remitente.
     *
     * @param int $chatId El ID del chat en el que se crea el mensaje.
     * @param string $message El texto del mensaje a crear.
     * @return Message El objeto mensaje recién creado, incluyendo información del usuario remitente.
     */
    public function create($chatId, $message)
    {
        try {
            $user = auth()->user();
    
            // Validar si el usuario está autenticado
            if (!$user) {
                throw new \Exception("Usuario no autenticado.");
            }
    
            $objMessage = Message::create([
                'chat_id' => $chatId,
                'user_id' => $user->id,
                'message' => $message,
                'is_received' => false
            ]);
    
            $objMessage->load('user');
    
            return $objMessage;
        } catch (\Exception $e) {
            // Aquí puedes manejar la excepción como prefieras, por ejemplo, registrarla en un log
            Log::error("Error al crear mensaje: " . $e->getMessage());
            // Opcionalmente, podrías retornar null o un mensaje de error
            return null;
        }
    }

    /**
     * Construye un mensaje detallado sobre los problemas de una orden específica.
     *
     * Este método genera un mensaje en formato HTML que describe los problemas asociados
     * con cada artículo de una orden, así como los problemas generales de la orden. Para cada
     * artículo con problemas, se incluye el nombre del producto, el código SKU y una lista de
     * problemas asociados. Si hay problemas generales en la orden, también se incluyen en el mensaje.
     *
     * El mensaje está diseñado para proporcionar una visión clara y completa de todos los problemas
     * encontrados en una orden, facilitando su revisión y posterior manejo.
     *
     * @param Order $order La orden para la cual se construirá el mensaje.
     * @return string Mensaje en formato HTML que detalla los problemas de la orden.
     */
    public function buildMessage($order)
    {
        $order->refresh();
    
        switch ($order->report_user_responsible) {
            case 'biller':
                return $this->buildBillerMessage($order);
            case 'cda':
                return $this->buildCdaMessage($order);
            case 'picker':
            case 'reviewer':
                return $this->buildPickerAndReviewMessage($order);
        }
    }

    protected function buildPickerAndReviewMessage($order)
    {
        $message = '';
        foreach ($order->orderItems as $orderItem) {
            if ($orderItem->problems->count() > 0) {
                $message .= "<strong>El producto: {$orderItem->product->ItemName} SKU: {$orderItem->product->ItemCode}</strong><br>";
                $message .= $this->getProblemsMessages($orderItem->problems);
                $message .= "<br>";
            }
        }
        return $message;
    }

    protected function buildCdaMessage($order)
    {
        $message = "<strong>La orden {$order->DocNum} tiene problemas generales:</strong><br>";
        $message .= $this->getProblemsMessages($order->problems);
        return $message;
    }

    protected function buildBillerMessage($order)
    {
        $message = "<strong>La orden {$order->DocNum} tiene problemas en facturación:</strong><br>";
        $message .= $this->getBillingErrorMessage($order);
    
        if ($product = $this->getProblematicProduct($order)) {
            $message .= "Producto con problemas: <br>Item: {$product->ItemName} <br> SKU: {$product->ItemCode}<br>";
        }
    
        return $message;
    }
    
    protected function getBillingErrorMessage($order)
    {
        if (!$order->bill->Error) {
            return 'Problema: <br> Información no disponible<br><br>';
        }
    
        $httpException = json_decode($order->bill->Error)->httpException;
        return "Problema: <br> {$httpException->message}<br><br>";
    }
    
    protected function getProblematicProduct($order)
    {
        if (!$order->bill->Error) {
            return null;
        }
    
        $httpException = json_decode($order->bill->Error)->httpException;
    
        if (isset($httpException->errorItem)) {
            return Product::where('ItemCode', $httpException->errorItem->ItemCode)->first();
        }
    
        return null;
    }
    


    protected function getProblemsMessages($problems)
    {
        $problemMessages = '';
        foreach ($problems as $problem) {
            $problemMessages .= "Problema: {$problem->problem->title}<br>";
            if ($problem->other) {
                $problemMessages .= "Otro: {$problem->other}<br>";
            }
        }
        return $problemMessages;
    }

}
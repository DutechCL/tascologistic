<?php

namespace App\Http\Controllers\Chat;

use App\Models\Order;
use App\Events\MessageSent;
use App\Models\Chat\Message;
use Illuminate\Http\Request;
use App\Services\OrderService;
use App\Services\Chat\ChatService;
use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;

class ChatController extends Controller
{
    protected OrderService $orderService;
    protected ChatService $chatService;

    public function __construct(OrderService $orderService, ChatService $chatService)
    {
        $this->orderService = $orderService;
        $this->chatService = $chatService;
    }

    public function sendMessage(Request $request)
    {
        $objMessage = $this->chatService->sendMessage($request);

        return $this->success($objMessage);
    }

    public function getMessages($chatId)
    {
        $result = $this->chatService->listMessage($chatId);

        return $this->success($result);
    }

    public function getUser()
    {
        $user = auth()->user();

        return $this->success($user);
    }

    public function showChat($id)
    {
        $order = $this->chatService->showChat($id);

        return $this->success($order);
    }

    public function getOrders()
    {
        $chat = $this->chatService->listChatsByUser();

        return $this->success($chat);
    }

    public function getResolve()
    {
        $chat = $this->chatService->listChatsHistory();

        return $this->success($chat);
    }

    public function resolveOrder($id)
    {
        $order = $this->chatService->resolveOrder($id);

        return $this->success($order);
    }

}

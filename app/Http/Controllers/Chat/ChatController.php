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

    public function getMessages($orderId)
    {
        $result = $this->chatService->listMessage(Order::find($orderId));

        return $this->success($result);
    }

    public function getUser()
    {
        $user = auth()->user();

        return $this->success($user);
    }

    public function getOrder($id)
    {
        $order = Order::getOrder($id);

        return $this->success(new OrderResource($order));
    }

    public function getOrders()
    {
        $orders = $this->orderService->listOrdersProblems();

        return $this->success(OrderResource::collection($orders)->resolve());
    }


}

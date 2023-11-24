<?php

namespace App\Http\Controllers\Chat;

use App\Models\Order;
use App\Events\MessageSent;
use App\Models\Chat\Message;
use Illuminate\Http\Request;
use App\Services\OrderService;
use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;

class ChatController extends Controller
{
    protected OrderService $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function sendMessage(Request $request)
    {
        $user = auth()->user();
        
        $message = $request->input('message');

        $objMessage = Message::create([
            'chat_id' => 1,
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

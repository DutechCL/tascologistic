<?php

namespace App\Http\Controllers\Chat;


use App\Models\Chat\Chat;
use Illuminate\Http\Request;
use App\Http\Exports\ChatExport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use App\Services\Chat\MessageService;
use App\Services\Chat\ChatUserService;
use App\Services\Chat\ChatManagementService;

class ChatController extends Controller
{


    public function __construct(
        protected ChatManagementService $chatManagementService,
        protected ChatUserService $chatUserService,
        protected MessageService $messageService,
    ){}

    public function sendMessage(Request $request)
    {
        try {
            $objMessage = $this->messageService->sendMessage($request);
            return $this->success(
                $objMessage
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function getMessages($chatId)
    {
        try {
            $result = $this->messageService->list($chatId);
            return $this->success(
                $result
            );

        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function getUser()
    {
        try {
            $user = auth()->user();
            return $this->success([
                'user' => $user,
                'csrf' => csrf_token(),
            ]);
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function showChat($id)
    {
        try {
            $order = $this->chatManagementService->showChat($id);
            return $this->success(
                $order
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }

    }

    public function getChats()
    {
        try {
            $chat = $this->chatUserService->listChatsByUser();

            return $this->success(
                $chat
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function getResolve()
    {
        try {
            $chat = $this->chatManagementService->listChatsHistory();
            return $this->success(
                $chat
            );
        }catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function resolveChatAndOrder($id)
    {
        try {
            $order = $this->chatManagementService->resolveChatAndOrder($id);
            return $this->success(
                $order
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

    public function export($status)
    {
        try {
            $name = $status == Chat::STATUS_OPEN ? 'Abiertos' : 'Cerrados';

            $chats = $this->chatManagementService->export($status);
    
            return Excel::download(new ChatExport($chats, $status), "Chat {$name}.xlsx");
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }

}

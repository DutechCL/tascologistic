<?php

namespace App\Notifications\Order;

use App\Models\Order;
use App\Models\Chat\Chat;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class OrderProblemNotification extends Notification
{
    use Queueable;

    public Chat $chat;

    /**
     * Create a new notification instance.
     */
    public function __construct( Chat $chat)
    {
        $this->chat = $chat->load([
            'order' => function ($query) {
                $query->withOrderDetails()->with('problems.problem');
            }
        ]);
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->subject("Inconveniente con la nota de venta N° {$this->chat->order->DocNum}")
                    ->markdown('mail.sales_persons.order_problem_alert', [
                        'chat' => $this->chat,
                        'notifiable' => $notifiable
                    ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            
        ];
    }
}

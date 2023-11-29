<?php

use App\Models\User;
use App\Models\Chat\Chat;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('notification.{id}', function (User $user, int $id) {
    return true;
});


Broadcast::channel('chat.{id}', function (User $user, int $id) {
    return in_array($user->id, Chat::find($id)->users->pluck('id')->toArray());
});

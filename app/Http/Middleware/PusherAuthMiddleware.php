<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class PusherAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        $hash = $request->header('User-hash');
        $code = $request->header('User-code');

        if (!$hash || !$code) {
            abort(403, 'Unauthorized.');
        }

        $user = User::where('hash', $hash)->where('code', $code)->first();

        if (!$user) {
            abort(403, 'Unauthorized.');
        }

        Auth::loginUsingId($user->id);

        return $next($request);
    }
}

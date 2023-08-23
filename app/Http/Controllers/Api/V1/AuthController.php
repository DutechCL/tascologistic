<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function getTokenFromWeb(Request $request)
    {
        $token = Auth::user()->createToken('auth_token');

        $redirectTo = $request->headers->get('referer');

        return view('getToken', ['token' => $token->plainTextToken, 'redirectTo' => $redirectTo]);
    }
}

<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (! Auth::attempt( $credentials )) {
            return response()->json([
                'status' => false,
                'message' => __('auth.failed'),
            ], 401);
        }

        $token = $request->user()->createToken('auth_token');

        return response()->json([
            'status' => true,
            'token' => $token->plainTextToken,
            'csrfToken' => csrf_token(),
        ]);
    }

    public function getTokenFromWeb(Request $request)
    {
        if (Auth::check()) {
            $user = Auth::user();
            $token = $user->createToken('auth_token');
    
            return response()->json([
                'token' => $token->plainTextToken,
                'csrf' => csrf_token(),
            ]);
        }
    
        return response()->json([
            'error' => 'User not authenticated.',
        ], 401);
    }
}

<?php
namespace App\Exceptions;

use Exception;

class OrderNotFoundException extends Exception
{
    public function render($request)
    {
        return response()->json([
            'status' => 'error',
            'message' => 'Orden no encontrada'
        ], 404);
    }
}
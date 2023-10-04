<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Problem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProblemsController extends Controller
{
    public function index(Request $request)
    {
        $problems = Problem::where('type', $request->type)
            ->where('active', 1)
            ->orderBy('created_at', 'ASC')
            ->get();
        // Devolver los datos como respuesta JSON
        return response()->json($problems);
    }
}

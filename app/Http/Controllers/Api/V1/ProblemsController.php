<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Problem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProblemsController extends Controller
{
    public function index(Request $request)
    {
        $problems = Problem::all();

        // Devolver los datos como respuesta JSON
        return response()->json($problems);
    }
}

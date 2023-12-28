<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Controller;

class PermissionController extends Controller
{
    public function permission(Request $request): JsonResponse
    {
        $slug = $request->route('slug');
        $permission = DB::table('permissions')
                                ->where('slug',  $slug )
                                ->get();
        return response()->json($permission);
    }

    public function getUrl(Request $request): JsonResponse
    {
        $id = $request->route('id');
        $permission = DB::table('permissions')
                                ->where('id',  $id )
                                ->get();
        return response()->json($permission);
    }

}

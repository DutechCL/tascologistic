<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Controller;
use App\Models\Permission;
use Exception;

class PermissionController extends Controller
{
    public function permission(Request $request): JsonResponse
    {
        $permissions = Permission::all();
        $form = backpack_form_input();
        $permission = DB::table('permissions')
                                ->where('slug', $form['view'])
                                ->get();
        return response()->json($permission);
    }

}

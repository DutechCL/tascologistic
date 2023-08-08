<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\PermissionController;
use App\Http\Controllers\Api\V1\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(
    function () {
        Route::get('permission/{slug}', [PermissionController::class, 'permission']);
        Route::get('permission/url/{id}', [PermissionController::class, 'getUrl']);
        Route::post('user/import', [UserController::class, 'import'])->name('admin.user.import');
        Route::get('user/export', [UserController::class, 'export'])->name('admin.user.export');


    }
);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

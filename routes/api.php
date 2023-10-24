<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\OrderController;
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\CustomerController;
use App\Http\Controllers\Api\V1\ProblemsController;
use App\Http\Controllers\Api\V1\OrderItemsController;
use App\Http\Controllers\Api\V1\PermissionController;
use App\Http\Controllers\Admin\MenuItemCrudController;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;


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

    //mejorar seguridad de los endpoint
    function () {
        Route::get('permission/{slug}', [PermissionController::class, 'permission']);
        Route::get('permission/url/{id}', [PermissionController::class, 'getUrl']);
        Route::post('user/import', [UserController::class, 'import'])->name('admin.user.import');
        Route::get('user/export', [UserController::class, 'export'])->name('admin.user.export');
        Route::get('/get-token', [AuthController::class, 'getTokenFromWeb']);
        Route::post('/login', [AuthController::class, 'login']);

        // Route::middleware(['auth:sanctum'])->group(function () {
            Route::apiResource('customers', CustomerController::class);
            // Route::apiResource('orders', OrderController::class);
            Route::apiResource('products', ProductController::class);
            Route::apiResource('order-items', OrderItemsController::class);
            Route::put('order/{id}/assign/responsible', [OrderController::class, 'assingResponsible']);
            Route::get('orders/available/cda', [OrderController::class, 'getOrdersCda']);
            Route::get('orders/available/picker-reviewer/{wareHouseCode}', [OrderController::class, 'getOrdersPickerAndReviewer']);
            Route::get('orders/bill/pickup-here', [OrderController::class, 'getOrdersBillPickupAndHere']);
            Route::get('orders/bill/delivery', [OrderController::class, 'getOrdersBilldelivery']);
            Route::post('orders/by-method-shipping', [OrderController::class, 'getOrdersByMethodShipping']);
            Route::post('orders/authorizer/action', [OrderController::class, 'processOrderAction']);
            Route::post('orders/authorizer/observation', [OrderController::class, 'addObservation']);
            Route::post('order/proccess', [OrderController::class, 'processOrderPickerAndReviewer']);
            Route::post('orders/by-params', [OrderController::class, 'getOrdersByParams']);
            Route::post('problems', [ProblemsController::class, 'index']);
            Route::get('menu-items', [MenuItemCrudController::class, 'getMenuItems']);
        // });
        //problems
    }
);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('web')->get('/sanctum/csrf-cookie', CsrfCookieController::class . '@show');

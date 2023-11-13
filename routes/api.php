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

        // URL'S GENERALES
        Route::middleware(['auth:sanctum'])->group(function () {
            Route::get('menu-items', [MenuItemCrudController::class, 'getMenuItems']);
            Route::post('problems', [ProblemsController::class, 'index']);
        });
        
        //URL'S ORDENES CDA
        Route::middleware(['auth:sanctum'])->prefix('orders/cda')->group(function () {
            Route::get('/', [OrderController::class, 'getOrdersCdaToManager']);
            Route::get('/manage', [OrderController::class, 'getOrdersCdaManage']);
            Route::post('process-order', [OrderController::class, 'processOrderCda']);
            Route::post('observation', [OrderController::class, 'addObservation']);
        });
        
        //URL'S ORDENES PICKER-REVIEWER
        Route::middleware(['auth:sanctum'])->prefix('orders/picker-reviewer')->group(function () {
            Route::get('{wareHouseCode}', [OrderController::class, 'getOrdersPickerAndReviewer']);
            Route::post('process-order', [OrderController::class, 'processOrderPickerReviewer']);
            Route::put('{id}/assign/responsible', [OrderController::class, 'assingResponsible']);
        });
        
        //URL'S ORDENES BILLS
        Route::middleware(['auth:sanctum'])->prefix('orders/bills')->group(function () {
            Route::get('pickup-here', [OrderController::class, 'getOrdersBillPickupAndHere']);
            Route::get('delivery', [OrderController::class, 'getOrdersBilldelivery']);
            Route::get('generate/document/{document}/order/{id}', [OrderController::class, 'generateDocument']);
        });

        //URL'S ORDENES PAGO
        Route::middleware(['auth:sanctum'])->prefix('orders/payment')->group(function () {
            Route::get('/', [OrderController::class, 'getOrdersPayment']);
        });

        // ORDENES TRAKER
        Route::middleware(['auth:sanctum'])->prefix('orders/tracker')->group(function () {
            Route::get('/{type}', [OrderController::class, 'getOrdersTracker']);
        });

        //URL'S ORDENES
        Route::middleware(['auth:sanctum'])->prefix('orders')->group(function () {
            Route::post('/search', [OrderController::class, 'searchOrders']);
        });
    }
);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('web')->get('/sanctum/csrf-cookie', CsrfCookieController::class . '@show');

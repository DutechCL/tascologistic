<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Chat\ChatController;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\SAP\SapSyncController;
use App\Http\Controllers\Api\V1\OrderController;
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\CustomerController;
use App\Http\Controllers\Api\V1\ProblemsController;
use App\Http\Controllers\Api\V1\CustomersController;
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
            Route::post('sap/sync', [SapSyncController::class, 'sync'])->name('admin.sap.sync');
        });

        //URL'S CUSTOMERS
        Route::middleware(['auth:sanctum'])->prefix('customers')->group(function () {
            Route::get('/', [CustomersController::class, 'getCustomers']);
            Route::post('search', [CustomersController::class, 'searchCustomers']);
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
            Route::get('{wareHouseCode}/{methodShipping}', [OrderController::class, 'getOrdersPickerAndReviewer']);
            Route::post('process-order', [OrderController::class, 'processOrderPickerReviewer']);
        });
        
        //URL'S ORDENES BILLS
        Route::middleware(['auth:sanctum'])->prefix('orders/bills')->group(function () {
            Route::get('pickup-here', [OrderController::class, 'getOrdersBillPickupAndHere']);
            Route::get('delivery', [OrderController::class, 'getOrdersBilldelivery']);
            Route::post('process-order', [OrderController::class, 'processOrderBiller']);
            Route::post('process-order/return', [OrderController::class, 'returnProcessOrderBiller']);
            Route::get('manage/{methodShipping}', [OrderController::class, 'getOrdersBillManage']);
        });

        //URL'S ORDENES DISPATCHER
        Route::middleware(['auth:sanctum'])->prefix('orders/dispatch')->group(function () {
            Route::get('/', [OrderController::class, 'getOrdersDispatch']);
            Route::get('manage', [OrderController::class, 'getOrdersDispatchManage']);
            Route::get('export', [OrderController::class, 'exportDispatch']);
            Route::post('mark-as-exported', [OrderController::class, 'markAsExported']);
            Route::get('warehouses', [OrderController::class, 'getWarehouses']);
        });

        //URL'S ORDENES PAGO
        Route::middleware(['auth:sanctum'])->prefix('orders/payment')->group(function () {
            Route::get('/', [OrderController::class, 'getOrdersPayment']);
            Route::post('process-payment', [OrderController::class, 'processPayment']);
        });

        // ORDENES TRAKER
        Route::middleware(['auth:sanctum'])->prefix('orders/tracker')->group(function () {
            Route::get('/{type}', [OrderController::class, 'getOrdersTracker']);
        });

        //URL'S ORDENES
        Route::middleware(['auth:sanctum'])->prefix('orders')->group(function () {
            Route::post('search', [OrderController::class, 'searchOrders']);
            Route::put('assign/responsible', [OrderController::class, 'assignResponsible']);
        });

        //URL'S CHAT 
        Route::middleware(['auth:sanctum'])->prefix('chat')->group(function () {
            Route::post('send-message', [ChatController::class, 'sendMessage']);
            Route::get('get-message/{id}', [ChatController::class, 'getMessages']);
            Route::get('get-user', [ChatController::class, 'getUser']);
            Route::get('get-orders', [ChatController::class, 'getChats']);
            Route::get('get-resolve', [ChatController::class, 'getResolve']);
            Route::get('show/{id}', [ChatController::class, 'showChat']);
            Route::get('resolve/{id}', [ChatController::class, 'resolveChatAndOrder']);
        });
    }
);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware('auth:sanctum')->get('/sanctum/csrf-cookie', CsrfCookieontroller::class . '@showe');

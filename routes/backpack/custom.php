<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ManagementController;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\SAP\SapSyncController;
use App\Http\Controllers\Admin\CustomerCrudController;

// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix'     => config('backpack.base.route_prefix', 'admin'),
    'middleware' => array_merge(
        (array) config('backpack.base.web_middleware', 'web'),
        (array) config('backpack.base.middleware_key', 'admin')
    ),
    'namespace'  => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    //optener el token de sesion en la aplicacion vue
    Route::get('auth/get-token', [AuthController::class, 'getTokenFromWeb'])->name('auth.get-token-from-web');

    Route::crud('user', 'UserCrudController');
    Route::crud('role', 'RoleCrudController');
    Route::crud('permissions', 'PermissionsCrudController');
    Route::crud('menu-item', 'MenuItemCrudController');
    Route::get('/management', [ManagementController::class, 'index'])->name('management.index');
    Route::crud('order-status', 'OrderStatusCrudController');
    Route::crud('problem', 'ProblemCrudController');
    Route::crud('customer', 'CustomerCrudController');
    Route::crud('warehouse', 'WarehouseCrudController');
    Route::crud('setting', 'SettingCrudController');
    Route::crud('log-order', 'LogOrderCrudController');
    Route::crud('product', 'ProductCrudController');
    Route::crud('sales-person', 'SalesPersonCrudController');
    Route::crud('method-shipping', 'MethodShippingCrudController');
}); // this should be the absolute last line of this file
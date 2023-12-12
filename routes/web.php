<?php

use App\Models\Order;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Chat\ChatController;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Admin\UserCrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanel;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return redirect()->route('backpack.dashboard');
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/app/{any}', function () {
        return File::get(public_path('app/index.html'));
    })->where('any', '.*');
});

Route::get('/test', function () {

    return 2 +1;
    // $allowedWarehouses = auth()->user()->allowedWarehouses();
    // dd(Order::byWarehouse($allowedWarehouses)->get());
    // return Order::byWarehouse()->get();
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('chat/export/{status}' , [ChatController::class, 'export']);
});

<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
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

Route::middleware(['auth'])->group(function () {
    Route::get('/app/{any}', function () {
        return File::get(public_path('app/index.html'));
    })->where('any', '.*');
});

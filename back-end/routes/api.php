<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/burgers', [ProductController::class, 'burgers']);
Route::get('/beverages', [ProductController::class, 'beverages']);
Route::get('/combo', [ProductController::class, 'combo']);
Route::post('place', [OrderController::class, 'store']);
Route::post('yawa', [OrderController::class, 'index']);
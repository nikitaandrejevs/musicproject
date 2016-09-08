<?php

use App\Http\Controllers\AudioController;
use Illuminate\Http\Request;

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

Route::get('/sounds/{title}', 'AudioController@getSound');
Route::get('/sounds', 'AudioController@getSimpleSounds');
Route::get('/sound', 'AudioController@getRandomSound');
Route::get('/sound/{note}', 'AudioController@checkNote');


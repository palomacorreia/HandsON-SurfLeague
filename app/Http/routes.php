<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::resource("/api/heroes", "HeroesController");
Route::resource("/api/surfistas", "SurfistaController");
Route::resource("/api/baterias", "BateriaController");
Route::any( '{none_api}', function ( $page ) {
    return view("main");
} )->where('none_api', '(.*)');
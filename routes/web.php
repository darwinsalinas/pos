<?php
Route::get('/', function () {
    return view('welcome');
});
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::apiResource('ambitos-impuestos', 'AmbitoImpuestoController', [
    'parameters' => [
        'ambitos-impuestos' => 'model'
    ]
]);

Route::apiResource('calculos-impuestos', 'CalculoImpuestoController', [
    'parameters' => [
        'calculos-impuestos' => 'model'
    ]
]);

Route::apiResource('impuestos', 'ImpuestoController', [
    'parameters' => [
        'impuestos' => 'model'
    ]
]);

Route::apiResource('productos', 'ProductoController', [
    'parameters' => [
        'producto' => 'model'
    ]
]);

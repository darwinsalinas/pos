<?php
Route::get('inventarios', function () {
    return view('inventario');
});
Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index')->name('home');
Auth::routes();
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

Route::apiResource('notificaciones', 'NotificaionesController', [
    'parameters' => [
        'notificaciones' => 'model'
    ]
]);

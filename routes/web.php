<?php
use App\Exports\ProductosExport;
use Maatwebsite\Excel\Facades\Excel;

Route::get('inventarios', function () {
    return view('inventario');
});
Route::get('/', 'HomeController@index');
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::apiResource('ambitos-impuestos', 'AmbitoImpuestoController', [
    'parameters' => [
        'ambitos-impuestos' => 'model'
    ]
]);

Route::apiResource('tipos-productos', 'TipoProductoController', [
    'parameters' => [
        'tipos-productos' => 'model'
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

Route::get('excel', function () {
    return Excel::download(new ProductosExport, 'productos.xlsx');
});

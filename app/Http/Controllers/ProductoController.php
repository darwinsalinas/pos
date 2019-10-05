<?php

namespace App\Http\Controllers;

use App\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $nombreProducto = $request->get('nombre', false);
        $disponible = $request->get('disponible', true);
        $costo = $request->get('costo', false);
        $precio = $request->get('precio', false);
        $tipo = $request->get('tipo', 'Consumible');
        $operadorPrecio = $request->get('operador_precio', '=');
        // dd($operadorPrecio);
        $tipoId = $request->get('tipo_id', 1);
        $rs = Producto::with([
            'tipoProducto',
            'categoriaProducto',
            'impuestos'
        ])
        ->where('nombre', 'like', '%'. $nombreProducto . '%')
        ->where('disponible', $disponible)
        ->when($costo, function ($query) use ($costo) {
            $query->where('costo', $costo);
        })
        ->where('precio_venta', $operadorPrecio, $precio)
        // ->whereHas('tipoProducto', function ($query) use ($tipo) {
        //     $query->where('nombre', $tipo);
        // })
        ->where('tipo_producto_id', $tipoId)
        //->toSql();
        ->paginate();

        // dd($rs);

        return response()->json([
            'data' => $rs
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre' => 'required|string',
            'disponible' => 'required|boolean',
            'costo' => 'required|numeric',
            'precio_venta' => 'required|numeric',
            'tipo_producto_id' => 'required|integer',
            'categoria_producto_id' => 'required|integer'
        ]);

        $model = Producto::create($data);

        return response()->json([
            'message' => 'success'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function show(Producto $producto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function edit(Producto $producto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Producto $producto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Producto $producto)
    {
        //
    }
}

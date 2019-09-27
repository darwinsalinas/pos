<?php

namespace App\Http\Controllers;

use App\Impuesto;
use App\Notifications\ImpuestoCreado;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class ImpuestoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rs = Impuesto::query()
            ->with([
                'ambito',
                'calculo'
            ])
            ->get();
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
            'ambito_impuesto_id' => 'required|integer',
            'calculo_impuesto_id' => 'required|integer',
            'importe' => 'required|numeric',
            'etiqueta' => 'required|string'
        ]);
        $model = Impuesto::create($data);

        if ($model) {
            $user = auth()->user();
            Notification::send($user, new ImpuestoCreado($model));
        }


        return response()->json([
            'data' => $model
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Impuesto  $impuesto
     * @return \Illuminate\Http\Response
     */
    public function show(Impuesto $model)
    {
        $model->load([
            'ambito',
            'calculo'
        ]);

        return response()->json([
            'data' => $model,
            'message' => 'success'
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Impuesto  $impuesto
     * @return \Illuminate\Http\Response
     */
    public function edit(Impuesto $impuesto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Impuesto  $impuesto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Impuesto $model)
    {
        $data = $request->validate([
            'nombre' => 'required|string',
            'ambito_impuesto_id' => 'required|integer',
            'calculo_impuesto_id' => 'required|integer',
            'importe' => 'required|numeric',
            'etiqueta' => 'required|string'
        ]);

        $model->update($data);

        return response()->json([
            'data' => $model,
            'message' => 'success'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Impuesto  $impuesto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Impuesto $model)
    {
        $model->delete();

        return response()->json([
            'message' => 'success'
        ], 200);
    }
}

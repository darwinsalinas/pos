<?php

namespace App\Http\Controllers;

use App\AmbitoImpuesto;
use Illuminate\Http\Request;

class AmbitoImpuestoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rs = AmbitoImpuesto::query()->get();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AmbitoImpuesto  $ambitoImpuesto
     * @return \Illuminate\Http\Response
     */
    public function show(AmbitoImpuesto $ambitoImpuesto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AmbitoImpuesto  $ambitoImpuesto
     * @return \Illuminate\Http\Response
     */
    public function edit(AmbitoImpuesto $ambitoImpuesto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AmbitoImpuesto  $ambitoImpuesto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AmbitoImpuesto $ambitoImpuesto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AmbitoImpuesto  $ambitoImpuesto
     * @return \Illuminate\Http\Response
     */
    public function destroy(AmbitoImpuesto $ambitoImpuesto)
    {
        //
    }
}

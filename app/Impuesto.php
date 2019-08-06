<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Impuesto extends Model
{
    protected $fillable = [
        'nombre',
        'ambito_impuesto_id',
        'calculo_impuesto_id',
        'importe',
        'etiqueta'
    ];

    public function ambito()
    {
        return $this->belongsTo(AmbitoImpuesto::class, 'ambito_impuesto_id');
    }

    public function calculo()
    {
        return $this->belongsTo(CalculoImpuesto::class, 'calculo_impuesto_id');
    }
}

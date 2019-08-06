<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Impuesto extends Model
{
    public function ambito()
    {
        return $this->belongsTo(AmbitoImpuesto::class, 'ambito_impuesto_id');
    }

    public function calculo()
    {
        return $this->belongsTo(CalculoImpuesto::class, 'calculo_impuesto_id');
    }
}

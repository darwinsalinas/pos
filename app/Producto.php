<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $guarded = [];

    public function tipoProducto()
    {
        return $this->belongsTo(TipoProducto::class);
    }

    public function categoriaProducto()
    {
        return $this->belongsTo(CategoriaProducto::class);
    }

    public function impuestos()
    {
        return $this->belongsToMany(Impuesto::class, 'productos_impuestos', 'producto_id', 'impuesto_id');
    }
}

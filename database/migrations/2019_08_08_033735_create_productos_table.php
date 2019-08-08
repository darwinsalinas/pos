<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->boolean('disponible');
            $table->double('costo');
            $table->double('precio_venta');
            $table->unsignedBigInteger('tipo_producto_id');
            $table->unsignedBigInteger('categoria_producto_id');
            $table->timestamps();

            $table->foreign('tipo_producto_id')->references('id')->on('tipos_productos');
            $table->foreign('categoria_producto_id')->references('id')->on('categorias_productos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImpuestosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('impuestos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->unsignedBigInteger('ambito_impuesto_id');
            $table->unsignedBigInteger('calculo_impuesto_id');
            $table->double('importe');
            $table->string('etiqueta');
            $table->timestamps();

            $table->foreign('ambito_impuesto_id')->references('id')->on('ambitos_impuestos');
            $table->foreign('calculo_impuesto_id')->references('id')->on('calculos_impuestos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('impuestos');
    }
}

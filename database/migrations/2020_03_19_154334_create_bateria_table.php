<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBateriaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Bateria', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('Surfista1')->unsigned()->nullable();
            $table->foreign('Surfista1')->references('numero')->on('Surfista');
            $table->integer('Surfista2')->unsigned()->nullable();
            $table->foreign('Surfista2')->references('numero')->on('Surfista');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Bateria');
    }
}

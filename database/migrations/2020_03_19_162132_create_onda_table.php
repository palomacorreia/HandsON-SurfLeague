<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOndaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('onda', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('Bateria')->unsigned()->nullable();
            $table->foreign('Bateria')->references('id')->on('Bateria');
            $table->integer('Surfista')->unsigned()->nullable();
            $table->foreign('Surfista')->references('numero')->on('Surfista');
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
        Schema::dropIfExists('onda');
    }
}

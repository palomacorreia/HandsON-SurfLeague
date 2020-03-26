<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Onda extends Model
{
    protected $table ='onda';

    protected $filable = ['id' ,'Bateria','Surfista','created_at','updated_at'];
    protected $guarded = ['id', 'created_at', 'updated_at'];
}

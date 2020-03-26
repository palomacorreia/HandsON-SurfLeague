<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bateria extends Model
{
    protected $table ='bateria';

    protected $filable = ['id' ,'Surfista1','Surfista2','created_at','updated_at'];
    protected $guarded = ['id', 'created_at', 'updated_at'];
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Nota extends Model
{
    protected $table ='nota';

    protected $filable = ['id' ,'notaParcial1','notaParcial2','notaParcial3','created_at','updated_at'];
    protected $guarded = ['id', 'created_at', 'updated_at'];
}
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Surfista extends Model
{
    protected $table ='surfista';
    protected $primaryKey = 'numero';
    protected $filable = ['numero' ,'nome','pais','created_at','updated_at'];
    protected $guarded = ['numero', 'created_at', 'updated_at'];

}

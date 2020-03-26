<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class OndaController extends Controller
{
    //
    public function notas()
    {
        return $this->hasMany('App/Nota');
    }
}

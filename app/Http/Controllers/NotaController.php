<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class NotaController extends Controller
{
    public function post()
    {
        return $this->belongsTo('App\Onda');
    }
}

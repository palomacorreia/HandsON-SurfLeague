<?php

namespace App\Http\Controllers;

use App\Bateria;
use Illuminate\Http\Request;


class BateriaController extends Controller
{
    public function index()
    {
        return response(Bateria::all()->toJson());

    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request  $request)
    {
        return response(Bateria::create($request->all())->toJson());

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $numero
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        return response(Bateria::findOrFail($id)->toJson());
    }
//
//    public function onda()
//    {
//        return $this->hasMany('App/Onda');
//    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Surfista;

class SurfistaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        return response(Surfista::all()->toJson());

    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request  $request)
    {
        return response(Surfista::create($request->all())->toJson());

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $numero
     * @return \Illuminate\Http\Response
     */

    public function show($numero)
    {
        return response(Surfista::findOrFail($numero)->toJson());
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $numero
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $numero)
    {

        return response(Surfista::find($numero)->save($request->all()));

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $numero
     * @return \Illuminate\Http\Response
     */
    public function destroy($numero)
    {
        return response(Surfista::whereId($numero)->delete());
    }
    public function onda()
    {
        return $this->hasMany('App/Onda');
    }

    public function bateria()
    {
        return $this->hasMany('App/Bateria');
    }
}

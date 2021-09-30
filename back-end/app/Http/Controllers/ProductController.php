<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Burgers;
use App\Models\Beverages;
use App\Models\Combo;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function burgers()
    {
        return Burgers::all();
    }
    public function beverages()
    {
        return Beverages::all();
    }
    public function combo()
    {
        return Combo::all();
    }
}

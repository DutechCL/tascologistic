<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManagementController extends Controller
{
    //!Listo
    public function index()
    {
        return view('admin.management.index');
    }

}

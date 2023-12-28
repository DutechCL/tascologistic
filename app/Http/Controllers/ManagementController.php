<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManagementController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        return view('admin.management.index', compact('user'));
    }

}

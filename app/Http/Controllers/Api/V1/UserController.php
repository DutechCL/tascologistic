<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Http\Imports\UsersImport;
use App\Http\Exports\UsersExport;

use Maatwebsite\Excel\Facades\Excel;


class UserController extends Controller
{
    public function import(Request $request)
    {

        $request->validate([
            'excel_file' => 'required|mimes:xls,xlsx'
        ]);

        $file = $request->file('excel_file');
        
        $import = new UsersImport();
        $importResult = Excel::import($import, request()->file('excel_file'));

        return redirect()->back()->with('success', 'Usuarios importados exitosamente.');
    }

    public function export()
    {
        return Excel::download(new UsersExport(), 'Usuarios.xlsx');
    }
}

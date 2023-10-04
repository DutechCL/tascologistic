<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Controller;
use Exception;
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
        $fields = ['name', 'email','user_code','mobile_phone_number'];
        return Excel::download(new UsersExport($fields), 'users.xlsx');
    }
}

<?php
namespace App\Http\Exports;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class UsersExport implements FromView, WithTitle, ShouldAutoSize
{
    protected $fields;

    public function __construct()
    {

    }

    public function title(): string
    {
        return key(['users ']);
    }

    public function view(): View
    {
        return view('admin.exports.user.index', [
            'users' => User::get(),
            'date' => Carbon::now(),
        ]);
    }
}

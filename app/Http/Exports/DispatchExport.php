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

class DispatchExport implements FromView, WithTitle, ShouldAutoSize
{
    public function __construct(
        protected $orders
    )
    {}

    public function title(): string
    {
        return key(['orders']);
    }

    public function view(): View
    {
        return view('admin.exports.order.distpatch.index', [
            'orders' => $this->orders,
        ]);
    }
}

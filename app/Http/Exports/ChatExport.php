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

class ChatExport implements FromView, WithTitle, ShouldAutoSize
{
    protected $chats;
    protected $status;

    public function __construct($chats, $status)
    {
        $this->chats = $chats;
        $this->status = $status;
    }

    public function title(): string
    {
        return key(['chats']);
    }

    public function view(): View
    {
        return view('admin.exports.chat.index', [
            'status' => $this->status,
            'chats' => $this->chats,
            'date' => Carbon::now(),
        ]);
    }
}

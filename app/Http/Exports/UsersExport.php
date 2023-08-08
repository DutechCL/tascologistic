<?php
namespace App\Http\Exports;

use App\Models\User;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class UsersExport implements FromCollection, WithHeadings
{
    protected $fields;

    public function __construct(array $fields)
    {
        $this->fields = $fields;
    }

    public function collection(): Collection
    {
        return User::select($this->fields)->get();
    }

    public function headings(): array
    {
        return $this->fields;
    }
}
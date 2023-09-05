<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Problem extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'type',
        'active',
    ];

    public function orderItemProblems()
    {
        return $this->hasMany(OrderItemProblem::class, 'problem_id');
    }

}

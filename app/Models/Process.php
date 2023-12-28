<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Process extends Model
{
    use HasFactory;

    const PROCESS_ID_CDA      = 1;
    const PROCESS_ID_PICKER   = 2;
    const PROCESS_ID_REVIEWER = 3;
    const PROCESS_ID_BILLS    = 4;
    const PROCESS_ID_PAYMENT  = 5;
    const PROCESS_ID_DISPATCH = 6;

    const PROCESS_SLUG_CDA      = 'cda';
    const PROCESS_SLUG_PICKER   = 'picker';
    const PROCESS_SLUG_REVIEWER = 'reviewer';
    const PROCESS_SLUG_BILLS    = 'bills';
    const PROCESS_SLUG_PAYMENT  = 'payment';
    const PROCESS_SLUG_DISPATCH = 'dispatch';
}

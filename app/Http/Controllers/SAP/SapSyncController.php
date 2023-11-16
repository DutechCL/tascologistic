<?php

namespace App\Http\Controllers\SAP;

use Illuminate\Http\Request;
use App\Services\SAP\SyncService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class SapSyncController extends Controller
{
    protected $sap;
    public function __construct( SyncService $sap )
    {
        $this->sap = $sap;
    }

    /**
     * Sync SAP data
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function sync( Request $request ) : JsonResponse
    {
        try {

            $this->validate($request, [
                'case' => 'required|string',
            ]);

            $config = $this->sap->build($request->case);

            $response = $this->sap->sync($config);

            return response()->json([
                'status' => 'success', 
                'message' => "$response registros sincronizados"
            ], JsonResponse::HTTP_OK);

        } catch (\Exception $e) {

            \Log::error($e->getMessage());

            return response()->json([
                'status' => 'error', 
                'message' => 'error'
            ], JsonResponse::HTTP_BAD_REQUEST);
        }
    }

}

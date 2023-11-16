<?php

namespace App\Http\Controllers\SAP;

use App\Models\LogOrder;
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
            
            $params = [];
            $case = $request->case;

            if( $request->case == 'sync_error'){
                $params = LogOrder::buildParamsOrdersError();
                $case = 'orders';
            }
            
            $config = $this->sap->buildConfig($case, $params);
            
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

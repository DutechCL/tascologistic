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
    public function __construct( 
        protected SyncService $sap 
    ){}

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
            $operator = 'and';

            if( $request->case == 'sync_error'){
                $params = LogOrder::buildParamsOrdersError();
                $case = 'orders';
                $operator = 'or';
            }
            
            $config = $this->sap->buildConfig($case, $params, $operator);
            
            $response = $this->sap->sync($config);

            return $this->success(
                [],
                "$response registros sincronizados"
            );

        } catch (\Exception $e) {

            Log::error($e->getMessage());

            return $this->buildResponseErrorFromException($e);
        }
    }

}

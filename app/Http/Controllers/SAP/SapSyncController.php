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
    protected $syncService;
    public function __construct( SyncService $syncService )
    {
        $this->syncService = $syncService;
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
                'endpoint' => 'required|string',
                'model' => 'required|string',
            ]);

            $response = ($request->endpoint != 'orders.get') 
                ? $this->syncService->syncData($request->endpoint, $request->model)
                : $this->syncService->syncOrders();

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

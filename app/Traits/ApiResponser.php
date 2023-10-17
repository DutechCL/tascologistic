<?php

namespace App\Traits;

/*
|--------------------------------------------------------------------------
| Api Responser Trait
|--------------------------------------------------------------------------
|
| This trait will be used for any response we sent to clients.
|
*/

use App\Exceptions\AsufinBaseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

trait ApiResponser
{
    /**
     * @param array $data
     * @param string|null $message
     * @param int $code
     * @return JsonResponse
     */
    protected function success(array $data, string $message = null, int $code = 200): JsonResponse
    {
        return response()->json([
            'status' => 'Success',
            'message' => $message,
            'data' => $data
        ], $code);
    }

    /**
     * @param string|null $message
     * @param int|null $applicationCode
     * @param int $code
     * @param $data
     * @return JsonResponse
     */
    protected function error(string $message = null, int $applicationCode = null, int $code = 400, $data = null): JsonResponse
    {
        return response()->json([
            'status' => 'error',
            'message' => $message,
            'application_code' => $applicationCode,
            'data' => $data
        ], $code);
    }

    /**
     * @param \Throwable $exception
     * @return JsonResponse
     */
    protected function buildResponseErrorFromException(\Throwable $exception)
    {
        return response()->json([
            'status' => 'error',
            'message' => $exception->getMessage(),
            'application_code' => $exception instanceof AsufinBaseException ? $exception->getApplicationCode() : 'unknown',
            'data' => config('app.env') == 'local' ? $this->buildResponseDataFromException($exception) : []
        ], Response::HTTP_BAD_REQUEST);
    }

    /**
     * @param \Throwable $e
     * @return array
     */
    protected function buildResponseDataFromException(\Throwable $e)
    {
        return [
            'Class' => get_class($e),
            'Message' => $e->getMessage(),
            'Code' => $e->getCode(),
            'File' => $e->getFile(),
            'Line' => $e->getLine(),
            'Previous' => $e->getPrevious(),
            'Trace' => $e->getTrace(),
        ];
    }
}
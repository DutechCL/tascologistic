<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Customer\CustomerService;

class CustomersController extends Controller
{
    public function __construct(
        protected CustomerService $customerService,
    ){}

    public function getCustomers(){
        try {
            $customers = $this->customerService->listCustomers();
            return $this->success(
                $customers
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }

    }

    public function searchCustomers(Request $request)
    {
        try {
            $customers = $this->customerService->searchCustomers($request);
            return $this->success(
                $customers
            );
        } catch (\Exception $exception) {
            return $this->buildResponseErrorFromException($exception);
        }
    }
}

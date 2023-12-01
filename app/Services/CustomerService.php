<?php

namespace App\Services;

use App\Models\User;
use App\Models\Order;
use App\Models\Process;
use App\Models\Product;
use App\Models\Customer;
use App\Models\LogOrder;
use App\Models\Chat\Chat;
use App\Events\MessageSent;
use App\Models\OrderStatus;
use App\Models\SalesPerson;
use App\Models\Chat\Message;
use App\Models\OrderProblem;
use Illuminate\Http\Request;
use App\Models\MethodShipping;
use App\Models\OrderItemProblem;
use App\Services\Chat\ChatService;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\OrderResource;
use Illuminate\Support\Facades\Schema;
use App\Models\CustomerContactEmployee;

class CustomerService
{
    public function syncCustomerWithAddress(array $where, array $data)
    {
        $addresses = $data['BPAddresses'];
        $contactEmployees = $data['ContactEmployees'];
        unset($data['BPAddresses']);
        unset($data['ContactEmployees']);

        // DB::beginTransaction();

        try {
            $customer = Customer::updateOrCreate($where, $data);

            $this->syncAddress($customer, $addresses);
            $this->syncContactEmployees($customer, $contactEmployees);

            // DB::commit();

            return $customer;
        } catch (\Exception $e) {
            // DB::rollBack();
            \Log::error($e->getMessage());
            return null;
        }
    }

    private function syncAddress(Customer $customer, array $addresses)
    {
        try {
            foreach ($addresses as $address) {
                $this->syncSingleAddress($customer, $address);
            }
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            throw $e;
        }
    }

    private function syncSingleAddress(Customer $customer, array $address)
    {
        if (count($address) == 0) dd($address);

        try {
            $columnNames = Schema::getColumnListing('customer_addresses');
            $dataToInsert = array_intersect_key($address, array_flip($columnNames));

            $customer->addresses()->create($dataToInsert);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            throw $e;
        }
    }

    private function syncContactEmployees(Customer $customer, array $contactEmployees)
    {
        if (count($contactEmployees) == 0) return;

        try {
            foreach ($contactEmployees as $contactEmployee) {
                $this->syncSingleContactEmployee($customer, $contactEmployee);
            }
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            throw $e;
        }
    }

    private function syncSingleContactEmployee(Customer $customer, array $contactEmployee)
    {

        try {
            $columnNames = Schema::getColumnListing('customer_contact_employees');
            $dataToInsert = array_intersect_key($contactEmployee, array_flip($columnNames));

            $customer->contactEmployees()->create($dataToInsert);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            throw $e;
        }
    }
}

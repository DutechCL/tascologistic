<?php

namespace App\Services\Customer;

use App\Models\Customer;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;

class CustomerService
{
    /**
     * Sincroniza un cliente con su dirección y contactos.
     *
     * @param array $where Condiciones para buscar o crear el cliente.
     * @param array $data Datos del cliente, incluyendo direcciones y contactos.
     * @return Customer|null El cliente sincronizado o null en caso de error.
     */
    public function syncCustomerWithAddress(array $where, array $data)
    {
        $addresses = $data['BPAddresses'] ?? [];
        $contactEmployees = $data['ContactEmployees'] ?? [];
        unset($data['BPAddresses'], $data['ContactEmployees']);

        try {
            $customer = Customer::updateOrCreate($where, $data);
            
            if (!empty($addresses)) {
                $this->syncAddress($customer, $addresses);
            }
            if (!empty($contactEmployees)) {
                $this->syncContactEmployees($customer, $contactEmployees);
            }

            return $customer;
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return null;
        }
    }

    /**
     * Sincroniza las direcciones de un cliente.
     *
     * @param Customer $customer Cliente al que se le asignarán las direcciones.
     * @param array $addresses Direcciones a sincronizar.
     */
    private function syncAddress(Customer $customer, array $addresses)
    {
        foreach ($addresses as $address) {
            $this->syncSingleAddress($customer, $address);
        }
    }

    /**
     * Sincroniza una dirección individual de un cliente.
     *
     * @param Customer $customer Cliente al que se le asignará la dirección.
     * @param array $address Datos de la dirección.
     */
    private function syncSingleAddress(Customer $customer, array $address)
    {
        $columnNames = Schema::getColumnListing('customer_addresses');
        $dataToInsert = array_intersect_key($address, array_flip($columnNames));
        $customer->addresses()->create($dataToInsert);
    }

    /**
     * Sincroniza los contactos de un cliente.
     *
     * @param Customer $customer Cliente al que se le asignarán los contactos.
     * @param array $contactEmployees Contactos a sincronizar.
     */
    private function syncContactEmployees(Customer $customer, array $contactEmployees)
    {
        foreach ($contactEmployees as $contactEmployee) {
            $this->syncSingleContactEmployee($customer, $contactEmployee);
        }
    }

    /**
     * Sincroniza un contacto individual de un cliente.
     *
     * @param Customer $customer Cliente al que se le asignará el contacto.
     * @param array $contactEmployee Datos del contacto.
     */
    private function syncSingleContactEmployee(Customer $customer, array $contactEmployee)
    {
        $columnNames = Schema::getColumnListing('customer_contact_employees');
        $dataToInsert = array_intersect_key($contactEmployee, array_flip($columnNames));
        $customer->contactEmployees()->create($dataToInsert);
    }
}

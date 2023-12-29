<?php

namespace App\Services\Order;

use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use App\Models\LogOrder;
use App\Models\SalesPerson;
use Illuminate\Support\Str;
use App\Models\MethodShipping;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;

class OrderSynchronizationService
{
    const SYNC_MASSIVE = 'Sincronizacion masiva';

    /**
     * Sincroniza una orden con sus ítems, actualizando o creando la orden y sus ítems asociados en la base de datos.
     *
     * @param array $where Condiciones para buscar o crear la orden.
     * @param array $orderData Datos de la orden, incluyendo los ítems de la orden.
     * @return Order|null Retorna la orden sincronizada o null en caso de error.
     */
    public function syncOrderWithItems(array $where, array $orderData)
    {
        $items = $orderData['DocumentLines'];
        unset($orderData['DocumentLines']);

        $customer = Customer::where('CardCode', $orderData['CardCode'])->first();
        $methodShipping = MethodShipping::where('slug', Str::slug($orderData['U_SBO_FormaEntrega'], '-'))->first();
        $salesPerson = SalesPerson::where('SalesEmployeeCode', $orderData['SalesPersonCode'])->first();

        $data = array_merge($orderData, [
            'customer_id' => optional($customer)->id,
            'method_shipping_id' => optional($methodShipping)->id,
            'SalesEmployeeName' => optional($salesPerson)->SalesEmployeeName,
        ]);

        DB::beginTransaction();

        try {
            $order = Order::updateOrCreate($where, $data);
            $this->syncOrderItems($order, $items, $data['DocNum']);
            LogOrder::success(self::SYNC_MASSIVE, $data['DocNum']);
            DB::commit();

            return $order;
        } catch (\Exception $e) {
            DB::rollBack();
            LogOrder::error(self::SYNC_MASSIVE, $data['DocNum'], $e->getMessage());
            Log::error($e->getMessage());
            return null;
        }
    }

    /**
     * Sincroniza los ítems de una orden, creando o actualizando cada ítem en la base de datos.
     *
     * @param Order $order La orden a la que pertenecen los ítems.
     * @param array $orderItemsData Datos de los ítems a sincronizar.
     * @param string $docNum Número de documento de la orden para registro de logs.
     * @throws \Exception Si ocurre un error durante la sincronización de algún ítem.
     */
    private function syncOrderItems(Order $order, array $orderItemsData, $docNum)
    {
        foreach ($orderItemsData as $orderItemData) {
            $this->syncSingleOrderItem($order, $orderItemData, $docNum);
        }
    }

    /**
     * Sincroniza un solo ítem de una orden, creando o actualizando el ítem en la base de datos.
     *
     * @param Order $order La orden a la que pertenece el ítem.
     * @param array $orderItemData Datos del ítem a sincronizar.
     * @param string $docNum Número de documento de la orden para registro de logs.
     * @throws \Exception Si el producto asociado al ítem no se encuentra o si ocurre un error al crear el ítem.
     */
    private function syncSingleOrderItem(Order $order, array $orderItemData, $docNum)
    {
        $product = Product::where('ItemCode', $orderItemData['ItemCode'])->first();

        if (!$product) {
            $errorMessage = "Producto no encontrado para ItemCode: {$orderItemData['ItemCode']} en nota de venta $docNum";
            LogOrder::error(self::SYNC_MASSIVE, $docNum, $errorMessage);
            Log::error($errorMessage);
            throw new \Exception($errorMessage);
        }

        $columnNames = Schema::getColumnListing('order_items');
        $dataToInsert = array_intersect_key($orderItemData, array_flip($columnNames));
        $data = array_merge($dataToInsert, ['product_id' => $product->id]);

        try {
            $order->orderItems()->create($data);
        } catch (\Exception $e) {
            $errorMessage = "Error al crear producto para ItemCode: {$orderItemData['ItemCode']}. Error: {$e->getMessage()}";
            LogOrder::error(self::SYNC_MASSIVE, $docNum, $errorMessage);
            Log::error($errorMessage);
            throw $e;
        }
    }

}

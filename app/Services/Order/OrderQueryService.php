<?php

namespace App\Services\Order;

use App\Models\Order;
use App\Models\Process;
use App\Models\OrderItem;
use App\Models\Warehouse;
use App\Models\OrderStatus;
use Illuminate\Http\Request;
use App\Models\MethodShipping;
use App\Services\Order\OrderValidationService;

class OrderQueryService
{
    const PAGE_SIZE = 20;

    protected OrderValidationService $orderValidationService;

    public function __construct( OrderValidationService $orderValidationService )
    {
        $this->orderValidationService = $orderValidationService;
    }

    /**
     * Lista las órdenes que aún no han sido gestionadas para el proceso CDA.
     * Permite ejecutar la consulta o simplemente prepararla dependiendo del parámetro.
     *
     * @param bool $execute Define si se debe ejecutar la consulta (true) o solo prepararla (false).
     * @return mixed Si $execute es true, retorna un paginado de órdenes; si es false, retorna el objeto de consulta.
     */

    public function listOrdersCdaToManage(bool $execute = true)
    {
        $query = Order::withOrderDetails()
                    ->where('process_id', Process::PROCESS_ID_CDA)
                    ->where('is_managed', false)
                    ->orderByDesc('DocDate')
                    ->orderByDesc('DocTime');

        return $execute ? $query->paginate(self::PAGE_SIZE) : $query;
    }

    /**
     * Lista las órdenes que ya han sido gestionadas para el proceso CDA.
     * Este método también permite ejecutar o preparar la consulta.
     *
     * @param bool $execute Si se debe ejecutar la consulta o solo prepararla.
     * @return mixed Retorna un paginado de órdenes si se ejecuta, o el objeto de consulta si no.
     */

    public function listOrdersCdaManage(bool $execute = true)
    {
        $query = Order::withOrderDetails()
                    ->where('is_managed', true)
                    ->orderBy('updated_at', 'ASC');

        return $execute ? $query->paginate(self::PAGE_SIZE) : $query;
    }

    /**
     * Lista las órdenes que tienen problemas reportados.
     * Permite tanto preparar la consulta como ejecutarla, basado en el parámetro.
     *
     * @param bool $execute Controla si se ejecuta la consulta (true) o solo se prepara (false).
     * @return mixed Retorna un paginado de órdenes con problemas si se ejecuta, o el objeto de consulta si no.
     */
    public function listOrdersProblems(bool $execute = true)
    {
        $query = Order::withOrderDetails()
                    ->where('has_problems', true)
                    ->orderByDesc('DocDate')
                    ->orderByDesc('DocTime');

        return $execute ? $query->paginate(self::PAGE_SIZE) : $query;
    }

    /**
     * Lista las órdenes asignadas a los procesos de selección o revisión en una bodega específica.
     * Valida si el usuario tiene permisos para acceder a la bodega especificada.
     *
     * @param string $wareHouseCode Código de la bodega para filtrar las órdenes.
     * @param bool $execute Indica si se ejecuta la consulta o solo se prepara.
     * @return mixed Lista paginada de órdenes o el objeto de consulta.
     * @throws \Exception Si el usuario no tiene permisos para la bodega.
     */
    public function listOrdersPickerReviewer($wareHouseCode, bool $execute = true)
    {
        if (!$this->orderValidationService->isValidWarehouseForUser($wareHouseCode)) {
            throw new \Exception('No tiene permisos para acceder a esta bodega');
        }

        $query = Order::byWarehouse([$wareHouseCode])
                    ->withOrderDetails()
                    ->whereIn('process_id', [Process::PROCESS_ID_PICKER, Process::PROCESS_ID_REVIEWER])
                    ->orderByDesc('updated_at')
                    ->orderByDesc('DocDate');

        return $execute ? $query->paginate(self::PAGE_SIZE) : $query;
    }

    /**
     * Lista las órdenes asociadas al proceso de facturación, filtradas por el tipo de envío.
     *
     * @param string|null $type Tipo de método de envío para filtrar las órdenes.
     * @param bool $execute Indica si se ejecuta la consulta o solo se prepara.
     * @return mixed Lista paginada de órdenes o el objeto de consulta.
     */
    public function listOrdersBills($type = null, bool $execute = true)
    {
        $condition = $type === MethodShipping::METHOD_SHIPPING_HERE ? '!=' : '=';

        $query = Order::withOrderDetails()
                    ->where('process_id', Process::PROCESS_ID_BILLS)
                    ->where('method_shipping_id', $condition, MethodShipping::METHOD_SHIPPING_DELIVERY)
                    ->orderByDesc('DocDate');

        return $execute ? $query->paginate(self::PAGE_SIZE) : $query;
    }

    public function listOrderBillManage($methodShipping, bool $execute = true)
    {
        $param = $methodShipping === 'here' ? 1 : 0;

        $query = Order::withOrderDetails()
                ->with('bill')
                ->where('is_managed_in_billing', true);

        return $execute ? $query->paginate(self::PAGE_SIZE) : $query;
    }

    /**
     * Lista las órdenes asociadas al proceso de despacho, filtradas por el tipo de envío y status.
     *
     * @param bool $execute Indica si se ejecuta la consulta o solo se prepara.
     * @return mixed Lista paginada de órdenes o el objeto de consulta.
     */
    public function listOrdersDispatch(bool $execute = true, bool $isDispatched = false)
    {
        $query = Order::withOrderDetails()
                    ->where('process_id', Process::PROCESS_ID_CDA)
                    ->where('method_shipping_id', MethodShipping::METHOD_SHIPPING_DELIVERY)
                    ->where('is_dispatched', $isDispatched)
                    ->orderByDesc('DocDate');

        return $execute ? $query->paginate(self::PAGE_SIZE * 5) : $query;
    }


    public function listOrdersDispatchManage(bool $execute = true)
    {
        $executeQuery = false;
        $isDispatched = true;

        $query = $this->listOrdersDispatch($executeQuery, $isDispatched);

        return $execute ? $query->paginate(self::PAGE_SIZE) : $query;
    }

    /**
     * Lista las órdenes asociadas al proceso de pago.
     *
     * @param bool $execute Indica si se ejecuta la consulta o solo se prepara.
     * @return mixed Lista paginada de órdenes o el objeto de consulta.
     */
    public function listOrdersPayment(bool $execute = true)
    {
        $query = Order::withOrderDetails()
                    ->where('process_id', Process::PROCESS_ID_PAYMENT)
                    ->orderByDesc('DocDate');

        return $execute ? $query->paginate(self::PAGE_SIZE) : $query;
    }

    /**
     * Lista las órdenes para seguimiento, filtradas por el tipo especificado y excluyendo las rechazadas.
     *
     * @param string $type Tipo de filtro para las órdenes (por ejemplo, 'warehouse').
     * @param bool $execute Indica si se ejecuta la consulta o solo se prepara.
     * @return mixed Lista paginada de órdenes o el objeto de consulta.
     */
    public function listOrdersTracker($type, bool $execute = true)
    {
        $condition = $type === 'warehouse' ? '!=' : '=';

        $query = Order::withOrderDetails()
                    ->where('order_status_id', '!=', OrderStatus::STATUS_REJECTED)
                    ->orderByDesc('updated_at')
                    ->where('method_shipping_id', $condition, MethodShipping::METHOD_SHIPPING_HERE);

        return $execute ? $query->paginate(self::PAGE_SIZE) : $query;
    }

    public function listWarehouses()
    {
        return OrderItem::select('WarehouseCode')
                ->groupBy('WarehouseCode')
                ->get();
    }

    /**
     * Busca órdenes según los criterios especificados en la solicitud.
     *
     * @param Request $request Objeto de solicitud que contiene los criterios de búsqueda.
     * @return mixed Lista paginada de órdenes que coinciden con los criterios de búsqueda.
     */
    public function searchOrders(Request $request)
    {
        $type = $request->type;
        $search = $request->search;
        
        $query = $this->getQueryBasedOnType($type, $request);

        $query->where(function($query) use ($search) {
            $query->where('DocNum', 'LIKE', "%$search%")
                ->orWhereHas('customer', function ($query) use ($search) {
                    $query->where('CardName', 'LIKE', "%$search%")
                            ->orWhere('CardCode', 'LIKE', "%$search%");
                });
        });
        
        return $query->paginate(self::PAGE_SIZE);
    }

    /**
     * Helper method to get the query based on the type from the request.
     *
     * @param string $type Tipo de consulta a realizar.
     * @param Request $request Objeto de solicitud.
     * @return Builder Objeto de consulta para el tipo especificado.
     */
    private function getQueryBasedOnType($type, $request)
    {
        switch ($type) {
            case 'cda:true':
                return $this->listOrdersCdaToManage(false);
            case 'cda:false':
                return $this->listOrdersCdaManage(false);
            case 'picker-reviewer':
                return $this->listOrdersPickerReviewer($request->warehouses, false);
            case 'bills':
                return $this->listOrdersBills($request->methodShipping, false);
            case 'payment':
                return $this->listOrdersPayment(false);
            case 'dispatch:true':
                return $this->listOrdersDispatch(false);
            case 'dispatch:false':
                return $this->listOrdersDispatchManage(false);
            default:
                throw new \InvalidArgumentException("Tipo de búsqueda no válido: $type");
        }
    }

}

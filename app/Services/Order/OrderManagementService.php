<?php

namespace App\Services\Order;

use App\Models\Order;
use App\Models\Chat\Chat;
use App\Models\OrderStatus;
use App\Models\OrderProblem;
use Illuminate\Http\Request;
use App\Models\OrderItemProblem;
use App\Services\Chat\ChatManagementService;
use App\Http\Resources\OrderResource;
use App\Services\Biller\BillerService;

class OrderManagementService
{

    protected OrderQueryService $orderQueryService;

    const ACTION_APPROVE = 'approve';
    const ACTION_REJECT  = 'reject';
    const SYNC_MASSIVE = 'Sincronizacion masiva';

    public function __construct(OrderQueryService $orderQueryService)
    {
        $this->orderQueryService = $orderQueryService;
    }

    /**
     * Procesa una orden en el contexto del proceso CDA, actualizando su estado y manejando la aprobación o rechazo.
     *
     * @param Request $request Datos de la solicitud que incluyen el ID de la orden y la acción a realizar.
     * @return object Objeto con el mensaje de resultado, la lista actualizada de órdenes y el chat resultante.
     */
    public function processOrderCda(Request $request)
    {
        $order = Order::getOrder($request->orderId);
        $order->assignResponsible($request->responsible);

        $result = null;
        switch ($request->action) {
            case self::ACTION_APPROVE:
                $order->order_status_id = OrderStatus::STATUS_ON_PICKER;
                break;
            case self::ACTION_REJECT:
                $result = $this->rejectOrder($request);
                break;
        }

        $order->is_managed = true;
        $order->save();
        
        return (object) [
            'message' => 'Orden actualizada correctamente',
            'orders' => $this->orderQueryService->listOrdersCdaToManage(),
            'chat' => $result
        ];
    }

    /**
     * Procesa una orden en los procesos de selección o revisión, actualizando su estado según la acción.
     *
     * @param Request $request Datos de la solicitud incluyendo el ID de la orden y la acción a realizar.
     * @return object Objeto con el mensaje de resultado y los detalles de la orden actualizada.
     */
    public function processOrderPickerReviewer(Request $request)
    {
        $order = Order::getOrder($request->orderId);

        switch ($request->action) {
            case self::ACTION_APPROVE:
                $order->order_status_id = $order->order_status_id === OrderStatus::STATUS_ON_PICKER 
                                        ? OrderStatus::STATUS_PICKED 
                                        : OrderStatus::STATUS_REVIEWED;
                break;
            case self::ACTION_REJECT:
                $this->rejectOrder($request);
                break;
        }

        $order->save();
        $order->refresh();

        return (object) [
            'message' => 'Orden actualizada correctamente',
            'order' => new OrderResource($order),
        ];
    }

   /**
     * Procesa una orden para la generación de documentos de facturación, utilizando el servicio de facturación.
     *
     * @param Request $request Datos de la solicitud incluyendo la información de la orden.
     * @return object Objeto con el mensaje de resultado y los detalles de la orden, o un mensaje de error.
     */
    public function processOrderBiller(Request $request)
    {
        $order = $this->getOrderAndAssignResponsible($request);
        $order->update(['is_managed_in_billing' => true]);

        $response = $this->generateBillerDocument($order);
        $this->createBillForOrder($order, $response);

        if ($this->isSuccessfullyConnection($response)) {
            if($response['IndicadorFinanciero'] !== '52') {
                $this->updateOrderStatusToBilled($order);
            }

            $status   = 'success';
            $message = 'Documento generada correctamente';
        } else {
            $status   = 'error';
            $message = 'Error al generar el documento';
            $error = json_decode($response['Error']);
            if (!$error['error']['systemError']) {
                $this->rejectOrder($request);
            }else{
                $this->getOrderAndAssignResponsible($request);
                $order->update(['is_managed_in_billing' => false]);
            }
        }
        return (object) [
            'status' => $status,
            'message' => $message,
            'order' => new OrderResource($order),
        ];
    }

    public function returnProcessOrderBiller($request)
    {
        $order = Order::getOrder($request->order['id']);
        $order->update([
            'is_managed_in_billing' => false,
            'order_status_id' => OrderStatus::STATUS_REVIEWED,
        ]);

        if (isset($request->order['indicador'])) {
            $order->bills()
                  ->where('IndicadorFinanciero', $request->order['indicador'])
                  ->delete();
        }

        $order->refresh();

        return new OrderResource($order);
    }

    protected function getOrderAndAssignResponsible(Request $request)
    {
        $orderId = $request->orderId ?? $request->order['id'];
        $order = Order::getOrder($orderId);
        $order->assignResponsible($request->responsible);
        return $order;
    }

    protected function generateBillerDocument($order)
    {
        $billerService = new BillerService();
        $data = $billerService->buildData($order);
        return $billerService->generateDocument($data);
    }

    protected function isSuccessfullyConnection($response)
    {
        return array_key_exists('Creado', $response);
    }

    protected function createBillForOrder($order, $response)
    {
        if(empty($response) || !isset($response['Creado'])) {
            return;
        }
        $docEntry = $response['DocEntry'] != '' ? intval($response['DocEntry']) : null;

        return $order->bills()->updateOrCreate(
            [
                'DocEntry' => $docEntry,
            ],
            [
            'user_id' => auth()->user()->id,
            'Creado' => $response['Creado'],
            'Facturado' => $response['Facturado'],
            'Error' => $response['Error'],
            'Folio' => $response['Folio'],
            'FebosID' => $response['FebosID'],
            'DocEntry' => $docEntry,
            'IndicadorFinanciero' => $response['IndicadorFinanciero'],
            'LinkPDF' => $response['LocalLinkPDF'] ?? $response['LinkPDF'],
        ]);
    }

    protected function updateOrderStatusToBilled($order)
    {
        $order->update([
            'order_status_id' => OrderStatus::STATUS_BILLED,
        ]);
    }

    public function assingResponsibleReport($request)
    {
        $user = auth()->user();
        $orderId = $request->orderId ?? $request->order['id'];
        $order = Order::getOrder($orderId);

        $order->report_user_id = $user->id;
        $order->report_user_responsibles = $request->responsible;
        $order->report_user_name = $user->name;
        $order->save();
        $order->refresh();

        return $order;
    }

    /**
     * Rechaza una orden, actualizando su estado y asignando problemas relacionados si los hay.
     *
     * @param Request $request Datos de la solicitud con detalles para el rechazo de la orden.
     * @param int|null $orderId ID opcional de la orden a rechazar, si no se pasa en la solicitud.
     * @return Chat Retorna un chat asociado a la orden si es necesario.
     */
    public function rejectOrder(Request $request)
    {

        $order = $this->getOrderAndAssignResponsible($request);

        $order->update([
            'order_status_id' => OrderStatus::STATUS_REJECTED,
        ]);

        switch ($request->responsible):
            case 'cda':
                $this->assingProbelmsOrder($order, $request);
                break;
            case 'picker':
            case 'reviewer':
                $this->assingProbelmsOrderItems($order, $request);
                break;
        endswitch;


        return (new ChatManagementService)->createChatForOrder($order);
    }

    /**
     * Asigna un responsable a una orden y actualiza su estado si es necesario.
     * Los roles 'picker' y 'reviewer' cambian el estado de la orden, mientras que
     * 'cda', 'biller', 'payment', y 'dispatch' solo asignan el responsable.
     *
     * @param Request $request Datos de la solicitud con el ID de la orden y el responsable asignado.
     * @return object Objeto con mensaje de resultado y detalles de la orden actualizada.
     * @throws \Exception Si se encuentra una advertencia durante la asignación del responsable.
     */
    public function assignResponsible(Request $request)
    {
        $order = Order::getOrder($request->orderId);

        // Asignar el estado de la orden solo para 'picker' y 'reviewer'
        if ($request->responsible === 'picker') {
            $order->order_status_id = OrderStatus::STATUS_ON_PICKER;
        } elseif ($request->responsible === 'reviewer') {
            $order->order_status_id = OrderStatus::STATUS_ON_REVIEWER;
        }

        // Asignar responsable para todos los roles
        $result = $order->assignResponsible($request->responsible);
        $order->updated_at = now();
        $order->save();
        $order->refresh();

        if ($result->status === 'warning') {
            throw new \Exception($result->message);
        }

        return (object) [
            'message' => $result->message,
            'order' => new OrderResource($order),
        ];
    }


    /**
     * Asigna problemas reportados a una orden específica.
     *
     * @param Order $order La orden a la que se asignarán los problemas.
     * @param Request $request Datos de la solicitud con los problemas a asignar.
     */
    public function assingProbelmsOrder(Order $order, Request $request)
    {
        if (count($request->problems) > 0) {
            foreach ($request->problems as $problem) {
                OrderProblem::updateOrCreate(
                    [
                        'order_id' => $order->id,
                        'problem_id' => $problem['id'],
                    ],
                    [
                        'order_id' => $order->id,
                        'problem_id' => $problem['id'],
                        'other' => $problem['title'] === 'Otro' ? $request->other : null,
                    ]
                );
            }
        }
    }

    /**
     * Asigna problemas a los ítems específicos de una orden.
     *
     * @param Order $order La orden a la que se asignarán los problemas de ítems.
     * @param Request $request Datos de la solicitud con los problemas de ítems a asignar.
     */
    public function assingProbelmsOrderItems(Order $order, Request $request)
    {
        if (count($request->orderItemsProblem) > 0) {
            foreach ($request->orderItemsProblem as $itemProblem) {
                foreach ($itemProblem['problems'] as $problem) {
                    OrderItemProblem::updateOrCreate(
                        [
                            'order_item_id' => $itemProblem['id'],
                            'problem_id' => $problem['id'],
                        ],
                        [
                            'order_item_id' => $itemProblem['id'],
                            'problem_id' => $problem['id'],
                            'other' => $problem['title'] === 'Otro' ? $itemProblem['other'] : null,
                        ]
                    );
                }
            }
        }
    }

    /**
     * Agrega una observación a una orden.
     *
     * @param Request $request Datos de la solicitud con el ID de la orden y la observación a agregar.
     * @return object Objeto con mensaje de confirmación y detalles de la orden actualizada.
     */
    public function addObservation(Request $request)
    {
        $order = Order::getOrder($request->orderId);
        $order->observation = $request->observation;
        $order->save();

        return (object) [
            'message' => 'Observación agregada correctamente',
            'order' => new OrderResource($order),
        ];
    }

}

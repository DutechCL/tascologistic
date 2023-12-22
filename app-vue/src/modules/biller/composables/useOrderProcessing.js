import { ref } from 'vue';
import { useOrdersBills } from '../../../stores/orders/ordersBills.js';
import { ToastMixin } from '../../../Utils/ToastMixin.js';
import { ConfirmMixin } from '../../../Utils/ConfirmMixin';

export function useOrderProcessing() {
    
    const orderStore = useOrdersBills();
    const orders = ref([]);
    const { showToast } = ToastMixin.setup();
    const { showConfirm } = ConfirmMixin.setup();
    const visible = ref(false);
    const search = (data) => {
        orders.value = data.orders;
    }

    const actionMethod = (data) => {

        switch (data.method) {
        case 'showDetailOrder':
            orderStore.showDetailOrder(data.order);
            break;
        case 'showDetailBill':
            orderStore.showDetailBiller(data.order);
            break;
        case 'processOrderBiller':
            processOrderBiller(data);
            break;
        case 'returnProcessOrderBiller':
            returnProcessOrderBiller(data);
        }
    }

    const updateOrders = async (type) => {
        if (type === 'delivery') {
            await orderStore.getOrdersBillDelivery();
        } else  {
            await orderStore.getOrdersBillPickupAndHere();
        }

        showToast({
            status: 'success',
            message: 'Ordenes actualizadas',
            time: 3000
        });
    }

    const goBack = () => {
        if (orders.value.length === 0) {
            window.location.href = '/admin/dashboard/'
        }
    }

    const returnProcessOrderBiller = async (value) => {
        try {
            let result = await showConfirm();

            if (result) {
                await orderStore.returnProcessOrderBiller(value).then((data) => {
                    if (data.status === 'success') {
                        orders.value = orders.value.filter(o => o.id != data.data.id);
                        showToast({
                            status: 'success',
                            message: data.message,
                        });
                        updateOrders();
                    } 
                })
            } else {
                showToast({
                    status: 'info',
                    message: 'Proceso cancelado',
                });
            }
        } catch (error) {
            showToast({
                status: 'error',
                message: error.response.data.message,
            });
        }
    };

    const processOrderBiller = async (value) => {
        try {
            let result = await showConfirm();

            if (result) {
                orderStore.orderProcessingStatus[value.order.id] = {
                    inProcess: true,
                    status: 'Procesando...',
                    severity: 'info',
                    icon: 'pi pi-spin pi-spinner',
                };

                await orderStore.processOrderBiller(value).then((response) => {

                    if (response.status === 'success') {
                        orderStore.orderProcessingStatus[value.order.id] = {
                            inProcess: true,
                            status: 'Documento Emitido',
                            severity: 'success',
                            icon: 'pi pi-check',
                            order: response.data,
                        };

                        showToast({
                            status: 'success',
                            message: response.message,
                        });
                    }

                })
            } else {
                showToast({
                    status: 'info',
                    message: 'Proceso cancelado',
                });
            }
        } catch (error) {
            orderStore.orderProcessingStatus[value.order.id] = {
                inProcess: true,
                status: 'Error al emitir el documento',
                severity: 'danger',
                icon: 'pi pi-times',
                order: error.response.data.data,
            };
            if(error.response.status == 401){
                orders.value.filter(o => o.id !== error.response.data.data.id);
            }

            showToast({
                status: 'error',
                message: error.response.data.message,
            });

        }
    };

    const visibleDetailsMethod = (value) => {
        visible.value = value.visibleDetails;
    };

    return {
        orders,
        updateOrders,
        visible,
        visibleDetailsMethod,
        actionMethod,
        goBack,
        search,
        orderStore,
    };
}

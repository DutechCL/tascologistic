// Utilidades
function classifyOrders(orders) {
    const METHOD_SHIPPING_HERE = 1;
    const METHOD_SHIPPING_PICKUP = 2;
    const METHOD_SHIPPING_DELIVERY = 3;

    return {
        ordersHere: classifyByMethodShipping(orders, METHOD_SHIPPING_HERE),
        ordersPickup: classifyByMethodShipping(orders, METHOD_SHIPPING_PICKUP),
        ordersDelivery: classifyByMethodShipping(orders, METHOD_SHIPPING_DELIVERY)
    };
}

function classifyByMethodShipping(orders, methodShippingId) {
    return orders
        .filter(order => order.MethodShippingId === methodShippingId)
        .sort((a, b) => new Date(b.updateApp) - new Date(a.updateApp));
}

// Store de Pinia
import { defineStore } from 'pinia';
import { postWithToken, getWithToken, putWithToken } from "./ApiService.js";

export const useOrders = defineStore('orders', {
    state: () => ({ 
        listOrders: [],
        listOrdersHere: [],
        listOrdersPickup: [],   
        listOrdersDelivery: [],
        wareHouseCode: '', 
        visibleReport: false,         
    }),
    getters: {
        orders: (state) => state.listOrders,
        ordersHere: (state) => state.listOrdersHere,
        ordersPickup: (state) => state.listOrdersPickup,
        ordersDelivery: (state) => state.listOrdersDelivery,
    },
    actions: {
        async getOrdersCdaToManager() {
            return await getWithToken('api/v1/orders/cda');
        },

        async getOrdersCdaManage() {
            return await getWithToken('api/v1/orders/cda/manage');
        },

        async getOrdersPickerAndReviewer() {
            let response = await getWithToken(`api/v1/orders/picker-reviewer/${this.wareHouseCode}`);
            this.listOrders = response.data;
            const classify = classifyOrders(this.listOrders);
            this.listOrdersHere = classify.ordersHere;
            this.listOrdersPickup = classify.ordersPickup;
            this.listOrdersDelivery = classify.ordersDelivery;
            return response.data;
        },

        async getOrdersByMethodShipping(method_shipping_ids) {
            const body = {
                method_shipping_ids: method_shipping_ids
            };
            return await postWithToken('api/v1/orders/by-method-shipping', body);
        },

        async getOrdersBillPickupAndHere() {
            return  await getWithToken(`api/v1/orders/bills/pickup-here`);
        },

        async getOrdersBillDelivery() {
            return await getWithToken(`api/v1/orders/bills/delivery`);
        },

        async getOrderspayment() {
            return await getWithToken(`api/v1/orders/payment`);
        },

        async processOrderCda(body) {
            return await postWithToken('api/v1/orders/cda/process-order', body);
        },

        async addObservation(body) {
            const response = await postWithToken('api/v1/orders/authorizer/observation', body);
            if (response.status === 'success') {
                this.updateOrderListByMethodShipping(response.order);
            }
            return response;
        },

        async assingResponsible(data) {
            const response = await putWithToken(`api/v1/orders/picker-reviewer/${data.id}/assign/responsible`, data);
            if (response.status === 'success' || response.status === 'warning') {
                this.updateOrderListByMethodShipping(response.order);
            }
            return response;
        },

        async issueInvoiceOrReceipt(body){
            return await postWithToken('api/v1/orders/bill/invoice-or-receipt', body);
        },

        updateOrderListByMethodShipping(order) {
            let updatedOrderIndex;
            switch (order.MethodShippingId) {
                case 1:
                    updatedOrderIndex = this.listOrdersHere.findIndex(o => o.id === order.id);
                    this.listOrdersHere[updatedOrderIndex] = order;
                    break;
                case 2:
                    updatedOrderIndex = this.listOrdersPickup.findIndex(o => o.id === order.id);
                    this.listOrdersPickup[updatedOrderIndex] = order;
                    break;
                case 3:
                    updatedOrderIndex = this.listOrdersDelivery.findIndex(o => o.id === order.id);
                    this.listOrdersDelivery[updatedOrderIndex] = order;
                    break;
            }
            updatedOrderIndex = this.listOrders.findIndex(o => o.id === order.id)
            this.listOrders[updatedOrderIndex] = order;
        },
    }
});

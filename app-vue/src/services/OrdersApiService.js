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

function classifyByMethodShipping(orders, method_shipping_id) {
    return orders
        .filter(order => order.method_shipping_id === method_shipping_id)
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

        async getOrdersBillPickupAndHere() {
            return  await getWithToken(`api/v1/orders/bills/pickup-here`);
        },

        async getOrdersBillDelivery() {
            return await getWithToken(`api/v1/orders/bills/delivery`);
        },

        async getOrdersPayment() {
            return await getWithToken(`api/v1/orders/payment`);
        },

        async processOrderCda(body) {
            return await postWithToken('api/v1/orders/cda/process-order', body);
        },

        async processOrderPickerReviewer(body) {
            return await postWithToken('api/v1/orders/picker-reviewer/process-order', body);
        },

        async getOrdersPickerAndReviewer(wareHouseCode) {
            return await getWithToken(`api/v1/orders/picker-reviewer/${wareHouseCode}`);
        },
        async addObservation(body) {
            return await postWithToken('api/v1/orders/authorizer/observation', body);

        },

        async assingResponsible(data) {
            return await putWithToken(`api/v1/orders/picker-reviewer/${data.id}/assign/responsible`, data);
        },

        async generateDocument(body){
            return await getWithToken(`api/v1/orders/bills/generate/document/${body.document}/order/${body.order.id}`);
        },

        async getOrdersByMethodShipping(method_shipping_ids) {
            const body = {
                method_shipping_ids: method_shipping_ids
            };
            return await postWithToken('api/v1/orders/by-method-shipping', body);
        },

        updateOrderListByMethodShipping(order) {
            let updatedOrderIndex;
            switch (order.method_shipping_id) {
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

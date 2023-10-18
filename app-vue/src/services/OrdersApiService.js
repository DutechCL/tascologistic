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
    }),
    getters: {
        orders: (state) => state.listOrders,
        ordersHere: (state) => state.listOrdersHere,
        ordersPickup: (state) => state.listOrdersPickup,
        ordersDelivery: (state) => state.listOrdersDelivery,
    },
    actions: {
        async getOrdersCda() {
            let response = await getWithToken('api/v1/orders/available/cda');
            this.listOrders = response.data;
            return response.data;
        },

        async getOrdersPickerAndReviewer() {
            let response = await getWithToken('api/v1/orders/available/picker-reviewer');
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
            let response = await getWithToken(`api/v1/orders/bill/pickup-here`);
            this.listOrders = response.data;
            return response.data;
        },

        async getOrdersBillDelivery() {
            let response = await getWithToken(`api/v1/orders/bill/delivery`);
            this.listOrders = response.data;
            return response.data;
        },

        async processOrderAction(body) {
            const response = await postWithToken('api/v1/orders/authorizer/action', body);
            if (response.status === 'success') {
                this.updateOrderListByMethodShipping(response.order);
            }
            return response;
        },

        async addObservation(body) {
            const response = await postWithToken('api/v1/orders/authorizer/observation', body);
            if (response.status === 'success') {
                this.updateOrderListByMethodShipping(response.order);
            }
            return response;
        },

        async assingResponsible(body, orderId) {
            const response = await putWithToken(`api/v1/order/${orderId}/assign/responsible`, body);
            if (response.status === 'success' || response.status === 'warning') {
                this.updateOrderListByMethodShipping(response.order);
            }
            return response;
        },

        updateOrderListByMethodShipping(order) {
            // console.log(order)
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

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
    }
});

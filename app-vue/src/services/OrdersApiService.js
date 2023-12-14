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

        async getOrdersDispatch() {
            return await getWithToken(`api/v1/orders/dispatch`);
        },

        async processOrderCda(body) {
            return await postWithToken('api/v1/orders/cda/process-order', body);
        },

        async processOrderPickerReviewer(body) {
            return await postWithToken('api/v1/orders/picker-reviewer/process-order', body);
        },

        async processOrderBiller(body){
            return await postWithToken(`api/v1/orders/bills/process-order`, body);
        },

        async getOrdersPickerAndReviewer(wareHouseCode) {
            return await getWithToken(`api/v1/orders/picker-reviewer/${wareHouseCode}`);
        },
        async addObservation(body) {
            return await postWithToken('api/v1/orders/authorizer/observation', body);
        },

        async assignResponsible(data) {
            return await putWithToken(`api/v1/orders/assign/responsible`, data);
        },

        async getOrdersTracker(type) {
            return await getWithToken(`api/v1/orders/tracker/${type}`);
        },

        async searchOrders(body) {
            return await postWithToken(`api/v1/orders/search/`, body);
        },

        async getCustomers(body) {
            return await getWithToken(`api/v1/customers/`);
        },

        async searchCustomers(body) {
            return await postWithToken(`api/v1/customers/search/`, body);
        },
    }
});

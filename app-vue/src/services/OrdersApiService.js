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

        async getOrdersBillManage(methodShipping) {
            return await getWithToken(`api/v1/orders/bills/manage/${methodShipping}`);
        },

        async getOrdersPayment() {
            return await getWithToken(`api/v1/orders/payment`);
        },

        async getOrdersDispatch() {
            return await getWithToken(`api/v1/orders/dispatch`);
        },

        async getOrdersDispatchManage() {
            return await getWithToken(`api/v1/orders/dispatch/manage`);
        },

        async getWarehouses() {
            return await getWithToken(`api/v1/orders/dispatch/warehouses`);
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

        async returnProcessOrderBiller(body) {
            return await postWithToken(`api/v1/orders/bills/process-order/return`, body);
        },

        async getOrdersPickerAndReviewer(wareHouseCode, type) {
            return await getWithToken(`api/v1/orders/picker-reviewer/${wareHouseCode}/${type}`);
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

        async exportOrdersDispatch(body) {
            return await postWithToken(`api/v1/orders/dispatch/export`, body);
        },

        async markAsExported(body) {
            return await postWithToken(`api/v1/orders/dispatch/mark-as-exported`, body);
        }
    }
});

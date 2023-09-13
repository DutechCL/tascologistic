
import { defineStore } from 'pinia';
import { postWithToken, getWithToken, putWithToken } from "./ApiService.js";

export const useOrders = defineStore('orders', {
    state: () => ({ 
        listOrders: null,              
    }),
    getters: {
      orders: (state) => state.listOrders,
    },
    actions: {
        async getOrders () 
        {
            let response = await getWithToken('api/v1/orders')
            return response.data
        },

        async getOrdersByMethodShipping (method_shipping_ids)
        {
            const body = {
                method_shipping_ids: method_shipping_ids
            }
            return await postWithToken('api/v1/orders/by-method-shipping', body)
        },

        async getProcessedOrders () 
        {   
            let response = await getWithToken('api/v1/orders/authorizer/list')
            return response.data
        },

        async getOrdersByParams (body)
        {
            let response = await postWithToken(`api/v1/orders/by-params`, body)
            return response.data
        },

        async showOrder (order_id) 
        {
            return await getWithToken(`api/v1/orders/${order_id}`)
        },

        async postActionOrder (order_id, action) 
        {
            const body = {
                order_id: order_id,
                action: action,
                responsible: 'autorizador'
            }
            return await postWithToken('api/v1/orders/authorizer/action', body)
        },

        async processOrderPickerAndReviewer (body) 
        {
            return await postWithToken('api/v1/order/proccess', body)
        },

        async updateOrder (order_id, body) 
        {
            return await putWithToken(`api/v1/orders/${order_id}`, body)
        },

      }
});



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
        async getOrdersCda () 
        {
            let response = await getWithToken('api/v1/orders/available/cda')
            this.listOrders  = response.data;
            return response.data
        },

        async getOrdersPickerAndReviewer () 
        {   
            let response = await getWithToken('api/v1/orders/available/picker-reviewer')
            return response.data
        },
        
        async getOrdersByMethodShipping (method_shipping_ids)
        {
            const body = {
                method_shipping_ids: method_shipping_ids
            }
            return await postWithToken('api/v1/orders/by-method-shipping', body)
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

        async postActionOrder (order_id, action, problems = null, other = null) 
        {
            const body = {
                order_id: order_id,
                action: action,
                responsible: 'autorizador',
                problems: problems,
                other: other
            }
            let response =  await postWithToken('api/v1/orders/authorizer/action', body)
            if (response.status === 'success') {
                const updatedOrderIndex = this.listOrders.findIndex(order => order.id === order_id);
                this.listOrders[updatedOrderIndex] = response.order
                // this.listOrders[updatedOrderIndex].updated_at = ???
            }
            return response;
        },

        async processOrderPickerAndReviewer (body) 
        {
            return await postWithToken('api/v1/order/proccess', body)
        },

        async update (order_id, body) 
        {
            let response = await putWithToken(`api/v1/orders/${order_id}`, body)
            return response;
        },

      }
});


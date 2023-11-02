import { defineStore } from 'pinia';
import { useOrders } from '../../services/OrdersApiService.js';

const orderService = useOrders();

export const useOrdersPayment = defineStore('ordersPayment', {
  state: () => ({ 
      ordersPaymentsPending: [],
      order: [],
      showDialog: false,        
  }),
  getters: {
    getOrdersPaymentsPending(state){
      console.log(state.ordersPaymentsPending)
      return state.ordersPaymentsPending
    },
  },
  actions: {
    async getOrdersPayment() {
      let response = await orderService.getOrdersPayment();
      this.ordersPaymentsPending = response.data;
    },
  }
})

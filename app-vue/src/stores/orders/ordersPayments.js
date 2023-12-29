import { defineStore } from 'pinia';
import { useOrders } from '../../services/OrdersApiService.js';

const orderService = useOrders();

export const useOrdersPayment = defineStore('ordersPayment', {
  state: () => ({ 
      ordersPaymentsPending: [],
      order: [],
      showDialog: false,
      customers: [],   
      customer: null,     
  }),
  getters: {
    getOrdersPaymentsPending(state){
      return state.ordersPaymentsPending
    },
  },
  actions: {
    async getOrdersPayment() {
      let response = await orderService.getOrdersPayment();
      this.ordersPaymentsPending = response.data;
      return this.ordersPaymentsPending;
    },

    async getCustomers(body) {
      let response = await orderService.getCustomers(body);
      this.customers = response.data.data;
      return this.customers;
    },

    async searchCustomers(body) {
      let response = await orderService.searchCustomers(body);
      this.customers = response.data;
      return this.customers;
    },

    async assignResponsible(orderId) {
      const body = {
        orderId: orderId,
        responsible: 'payment'
      }
      return await orderService.assignResponsible(body);
    }
  }
})

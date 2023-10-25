import { defineStore } from 'pinia';
import { useOrders } from '../../services/OrdersApiService.js';

const orderService = useOrders();

export const useOrdersPayment = defineStore('ordersPayment', {
  state: () => ({ 
      listOrders: [],
      order: [],
      visibleDialog: false,        
  }),
  getters: {
    orders: (state) => state.listOrders,
  },
  actions: {
    async getOrderspayment() {
      let response = await orderService.getOrderspayment();
      this.listOrders = response.data;
    },
  }
})

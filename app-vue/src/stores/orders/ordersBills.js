import { defineStore } from 'pinia';
import { useOrders } from '../../services/OrdersApiService.js';

const orderService = useOrders();

export const useOrdersBills = defineStore('ordersBills', {
  state: () => ({ 
      listOrders: [],
      order: [],
      visibleDialog: false,        
  }),
  getters: {
    orders: (state) => state.listOrders,
  },
  actions: {
    async getOrdersBillPickupAndHere() {
      let response = await orderService.getOrdersBillPickupAndHere();
      this.listOrders = response.data;
    },

    async getOrdersBillDelivery() {
      let response = await orderService.getOrdersBillDelivery();
      this.listOrders = response.data;
    },

    async issueInvoiceOrReceipt(body){
      let response = await orderService.issueInvoiceOrReceipt(body);
    },

    showDetailOrder(orders){
      this.order = orders;
      this.visibleDialog = true;
    } 
  }
})

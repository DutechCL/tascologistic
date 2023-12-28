import { defineStore } from 'pinia';
import { useOrders } from '../../services/OrdersApiService.js';
import constants from '../../constants/constants.js';

const orderService = useOrders();

export const useOrdersBills = defineStore('ordersBills', {
  state: () => ({ 
      listOrders: [],
      order: [],
      visibleDialog: false,      
      orderProcessingStatus: {},
      bill: {},
      visibleBill: false,
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

    async getOrdersBillManage(methodShipping){
      let response = await orderService.getOrdersBillManage(methodShipping);
      return response.data;
    },

    async processOrderBiller(body){
      let response = await orderService.processOrderBiller(body);

      if(response.data.order_status_id === constants.ORDER_STATUS_BILLED){
        this.listOrders = this.listOrders.filter(o => o.id !== response.data.id);
      }else{
        this.listOrders = this.listOrders.map(o => {
          if(o.id === response.data.id){
            return response.data;
          }
          return o;
        });
      }

      return response;
    },

    async returnProcessOrderBiller(body){
      return await orderService.returnProcessOrderBiller(body);
    },

    showDetailOrder(orders){
      this.order = orders;
      this.visibleDialog = true;
    },

    showDetailBiller(order){
      this.bill = order.bill;
      this.visibleBill = true;
    }
  }
})

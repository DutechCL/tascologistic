import { defineStore } from 'pinia';
import { useOrders } from '../../services/OrdersApiService.js';
import constants from '@/constants/constants.js';

const orderService = useOrders();

export const useOrdersCda = defineStore('ordersCda', {
  state: () => ({ 
      listOrders: [],
      listOrdersManage: [],
      order: [],  
      showDialog: false,
      typeDialog: '',
      currentOrder: {
        orderId: null,
        action: '',
        responsible: constants.RESPONSIBLE_CDA,
        problems: '',
        anotherProblem: ''
      }
  }),
  getters: {
    orders: (state) => state.listOrders,
  },
  actions: {
    async getOrdersCdaToManager() {
      let response = await orderService.getOrdersCdaToManager();
      this.listOrders = response.data;
    },

    async getOrdersCdaManage() {
      let response = await orderService.getOrdersCdaManage();
      this.listOrdersManage = response.data;
    },

    async processOrderCda(){
      let response = await orderService.processOrderCda(this.currentOrder);

      if (response.status === 'success') {

        this.listOrders = this.listOrders.filter(orden => orden.id !== response.order.id);
        this.listOrdersManage.push(response.order);
      }

      return response;
    },
  }
})

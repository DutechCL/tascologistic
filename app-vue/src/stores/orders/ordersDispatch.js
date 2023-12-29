import { defineStore } from 'pinia';
import { useOrders } from '../../services/OrdersApiService.js';
import constants from '@/constants/constants';

const orderService = useOrders();

export const useOrdersDispatch = defineStore('ordersDispatch', {
  state: () => ({ 
        listOrders: [],
        isDataLoaded: false,
        showDetailOrder: false,
        showDialogProblem: false,
        showDialog: false,
        orderItem: {},
        currentOrder: {},
        isProblemMapped: [],
        isCompleteMapped: [],
        setOrderItemsProblems: new Set(),
        orderItemsProblems: [],
        order: [],
        type: '',
        listOrdersSelected: [],
  }),
  getters: {
        orders: (state) => state.listOrders,
  },
  actions: {
    async getOrdersDispatch() {
        let response = await orderService.getOrdersDispatch();
        this.isDataLoaded = true;
        return response.data;
    },

    async getOrdersDispatchManage() {
      let response = await orderService.getOrdersDispatchManage();
      this.isDataLoaded = true;
      return response.data;
    },

    async getWarehouses() {
      return await orderService.getWarehouses();
    },
    async assignResponsible() {
      const body = {
        orderId: this.currentOrder.id,
        responsible: this.currentOrder.responsible
      }
      return await orderService.assignResponsible(body);
    },
    async exportOrdersDispatch(body) {
      return orderService.exportOrdersDispatch(body);
    },

    async markAsExported(ids) {
      let body = {
        ids: ids,
      }
      return orderService.markAsExported(body);
    }
  }
})

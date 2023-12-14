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
        orderItem: {},
        currentOrder: {},
        isProblemMapped: [],
        isCompleteMapped: [],
        setOrderItemsProblems: new Set(),
        orderItemsProblems: [],
        order: [],
        type: '',
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
  }
})

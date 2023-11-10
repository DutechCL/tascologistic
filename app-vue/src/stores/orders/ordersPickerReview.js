function classifyByMethodShipping(orders, method_shipping_id) {
    return orders
        .filter(order => order.method_shipping_id === method_shipping_id)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
}

import { defineStore } from 'pinia';
import { useOrders } from '../../services/OrdersApiService.js';

const METHOD_SHIPPING_HERE = 1;
const METHOD_SHIPPING_PICKUP = 2;
const METHOD_SHIPPING_DELIVERY = 3;

const orderService = useOrders();

export const useOrdersPickerReview = defineStore('ordersPickerReview', {
  state: () => ({ 
        listOrders: [],
        listOrdersHere: [],
        listOrdersPickupDelivery: [], 
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
    async getOrdersPickerAndReviewer() {
        let response = await orderService.getOrdersPickerAndReviewer(this.wareHouseCode);
        this.classifyOrders(response.data);
        this.isDataLoaded = true;
    },
    async assingResponsible() {
        let data = {
            orderId: this.currentOrder.id,
            responsible: this.currentOrder.responsible
        }
        const response = await orderService.assingResponsible(data);
        this.updateListOrders(response.data);
        return response;
    },

    async processOrderAction(body) {
        const response = await orderService.processOrderPickerReviewer(body);
        this.updateListOrders(response.data);
        return response;
    },
    classifyOrders(orders){  
        this.listOrders = orders;
        this.listOrdersHere = classifyByMethodShipping(orders, METHOD_SHIPPING_HERE);
        this.listOrdersPickupDelivery = [
            ...classifyByMethodShipping(orders, METHOD_SHIPPING_PICKUP), 
            ...classifyByMethodShipping(orders, METHOD_SHIPPING_DELIVERY)
        ];
    },
    updateListOrders(order){
        const orderIndex = this.listOrders.findIndex(item => item.id === order.id);

        if (orderIndex !== -1) {
            // La orden ya está en la lista, actualiza el elemento existente
            this.listOrders = this.listOrders.map(item => (item.id === order.id ? order : item));
        } else {
            // La orden no está en la lista, agrégala al principio
            this.listOrders = [order, ...this.listOrders];
        }
        this.classifyOrders(this.listOrders);
    },
  }
})

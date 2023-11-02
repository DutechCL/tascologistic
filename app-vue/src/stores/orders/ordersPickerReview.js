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
            id: this.currentOrder.id,
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
        this.listOrders = this.listOrders.map(item => {
            if(item.id === order.id){
                return order
            }
            return item
        })
        this.classifyOrders(this.listOrders);
    },
  }
})

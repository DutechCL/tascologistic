function classifyByMethodShipping(orders, methodShippingId) {
    return orders
        .filter(order => order.MethodShippingId === methodShippingId)
        .sort((a, b) => new Date(b.updateApp) - new Date(a.updateApp));
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
        listOrdersPickupReview: [], 
        order: [],
        orderItem: [],
        orderItemsProblems: [],
        visibleDialog: false,  
        showDetailsOrder: false, 
        showReportProblem: false, 
        wareHouseCode: '',    
        responsible: '',
  }),
  getters: {
        orders: (state) => state.listOrders,
  },
  actions: {
    async getOrdersPickerAndReviewer() {
        let response = await orderService.getOrdersPickerAndReviewer(this.wareHouseCode);
        this.classifyOrders(response.data);
    },
    async assingResponsible() {
        let data = {
            id: this.order.id,
            responsible: this.responsible
        }
        const response = await orderService.assingResponsible(data);
        this.updateListOrders(response.order);
    },
    classifyOrders(orders){  
        this.listOrders = orders;
        this.listOrdersHere = classifyByMethodShipping(orders, METHOD_SHIPPING_HERE);
        this.listOrdersPickupReview = [
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

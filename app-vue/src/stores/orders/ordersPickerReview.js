function classifyByMethodShipping(orders, method_shipping_id) {
    return orders
        .filter(order => order.method_shipping_id === method_shipping_id)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
}

import { defineStore } from 'pinia';
import { useOrders } from '../../services/OrdersApiService.js';
import constants from '@/constants/constants';

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
    async getOrdersPickerAndReviewer(type) {
        let response = await orderService.getOrdersPickerAndReviewer(this.wareHouseCode, type);
        // this.classifyOrders(response.data);
        this.isDataLoaded = true;
        return response.data;
    },
    async assignResponsible() {
        let data = {
            orderId: this.currentOrder.id,
            responsible: this.currentOrder.responsible
        }
        return await orderService.assignResponsible(data);
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

        if([constants.ORDER_STATUS_REVIEWED, constants.ORDER_STATUS_REJECTED].includes(order.order_status_id)){
            this.listOrders = this.listOrders.filter(o => o.id !== order.id);
        }else{
            this.listOrders = this.listOrders.map(o => {
                if(o.id === order.id){
                    return order;
                }
                return o;
            });
        }
        this.classifyOrders(this.listOrders);
    },
  }
})

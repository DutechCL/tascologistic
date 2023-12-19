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

    showDetailOrder(orders){
      this.order = orders;
      this.visibleDialog = true;
    },

    showDetailBiller(order){
      // this.bill = {
      //   Creado: 1,
      //   DocEntry: 13633,
      //   Error: "",
      //   Facturado: 1,
      //   FebosID: "7f386c5320eae240f92aabb2c5e3ca9df970",
      //   Folio: "185",
      //   IndicadorFinanciero: "33",
      //   LinkPDF: "https://tasco.dutech.cl/storage/pdf/biller/E76520280-9_33_185.3.pdf",
      //   created_at: "2023-12-19T16:39:06.000000Z",
      //   id: 6,
      //   order_id: 3264,
      //   updated_at: "2023-12-19T16:39:06.000000Z",
      //   user_id: 1,
      // };
      this.bill = order.bill;
      this.visibleBill = true;
    }
  }
})

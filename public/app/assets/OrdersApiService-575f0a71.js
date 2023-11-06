import{I as n}from"./index-781ac360.js";import{g as i,p as t,a as p}from"./ApiService-47635b29.js";function o(e){return{ordersHere:d(e,1),ordersPickup:d(e,2),ordersDelivery:d(e,3)}}function d(e,s){return e.filter(r=>r.method_shipping_id===s).sort((r,a)=>new Date(a.updateApp)-new Date(r.updateApp))}const h=n("orders",{state:()=>({listOrders:[],listOrdersHere:[],listOrdersPickup:[],listOrdersDelivery:[],wareHouseCode:"",visibleReport:!1}),getters:{orders:e=>e.listOrders,ordersHere:e=>e.listOrdersHere,ordersPickup:e=>e.listOrdersPickup,ordersDelivery:e=>e.listOrdersDelivery},actions:{async getOrdersCdaToManager(){let e=await i("api/v1/orders/available/cda");return this.listOrders=e.data,e.data},async getOrdersPickerAndReviewer(){let e=await i(`api/v1/orders/available/picker-reviewer/${this.wareHouseCode}`);this.listOrders=e.data;const s=o(this.listOrders);return this.listOrdersHere=s.ordersHere,this.listOrdersPickup=s.ordersPickup,this.listOrdersDelivery=s.ordersDelivery,e.data},async getOrdersByMethodShipping(e){return await t("api/v1/orders/by-method-shipping",{method_shipping_ids:e})},async getOrdersBillPickupAndHere(){return await i("api/v1/orders/bill/pickup-here")},async getOrdersBillDelivery(){return await i("api/v1/orders/bill/delivery")},async getOrderspayment(){return await i("api/v1/orders/payment")},async processOrderAction(e){const s=await t("api/v1/orders/authorizer/action",e);return s.status==="success"&&this.updateOrderListByMethodShipping(s.order),s},async addObservation(e){const s=await t("api/v1/orders/authorizer/observation",e);return s.status==="success"&&this.updateOrderListByMethodShipping(s.order),s},async assingResponsible(e){const s=await p(`api/v1/order/${e.id}/assign/responsible`,e);return(s.status==="success"||s.status==="warning")&&this.updateOrderListByMethodShipping(s.order),s},updateOrderListByMethodShipping(e){let s;switch(e.method_shipping_id){case 1:s=this.listOrdersHere.findIndex(r=>r.id===e.id),this.listOrdersHere[s]=e;break;case 2:s=this.listOrdersPickup.findIndex(r=>r.id===e.id),this.listOrdersPickup[s]=e;break;case 3:s=this.listOrdersDelivery.findIndex(r=>r.id===e.id),this.listOrdersDelivery[s]=e;break}s=this.listOrders.findIndex(r=>r.id===e.id),this.listOrders[s]=e}}});export{h as u};

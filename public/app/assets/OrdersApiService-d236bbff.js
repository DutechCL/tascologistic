import{y as a}from"./index-c8a3eb99.js";import{g as e,p as s,a as i}from"./ApiService-2a401837.js";const n=a("orders",{state:()=>({listOrders:[],listOrdersHere:[],listOrdersPickup:[],listOrdersDelivery:[],wareHouseCode:"",visibleReport:!1}),getters:{orders:r=>r.listOrders,ordersHere:r=>r.listOrdersHere,ordersPickup:r=>r.listOrdersPickup,ordersDelivery:r=>r.listOrdersDelivery},actions:{async getOrdersCdaToManager(){return await e("api/v1/orders/cda")},async getOrdersCdaManage(){return await e("api/v1/orders/cda/manage")},async getOrdersBillPickupAndHere(){return await e("api/v1/orders/bills/pickup-here")},async getOrdersBillDelivery(){return await e("api/v1/orders/bills/delivery")},async getOrdersPayment(){return await e("api/v1/orders/payment")},async processOrderCda(r){return await s("api/v1/orders/cda/process-order",r)},async processOrderPickerReviewer(r){return await s("api/v1/orders/picker-reviewer/process-order",r)},async getOrdersPickerAndReviewer(r){return await e(`api/v1/orders/picker-reviewer/${r}`)},async addObservation(r){return await s("api/v1/orders/authorizer/observation",r)},async assingResponsible(r){return await i(`api/v1/orders/picker-reviewer/${r.id}/assign/responsible`,r)},async generateDocument(r){return await e(`api/v1/orders/bills/generate/document/${r.document}/order/${r.order.id}`)},async getOrdersTracker(r){return await e(`api/v1/orders/tracker/${r}`)},async searchOrders(r){return await s("api/v1/orders/search/",r)}}});export{n as u};

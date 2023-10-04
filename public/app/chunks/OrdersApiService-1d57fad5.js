import{a2 as o,K as p}from"../entry/index-2642604b.js";const n="/",i={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}};async function a(e){return(await o.get(`${n}${e}`,i)).data}async function s(e,r){return(await o.post(`${n}${e}`,r,i)).data}async function d(e,r){return(await o.put(`${n}${e}`,r,i)).data}const y=p("orders",{state:()=>({listOrders:null}),getters:{orders:e=>e.listOrders},actions:{async getOrders(){return(await a("api/v1/orders")).data},async getOrdersByMethodShipping(e){return await s("api/v1/orders/by-method-shipping",{method_shipping_ids:e})},async getProcessedOrders(){return(await a("api/v1/orders/authorizer/list")).data},async getOrdersByParams(e){return(await s("api/v1/orders/by-params",e)).data},async showOrder(e){return await a(`api/v1/orders/${e}`)},async postActionOrder(e,r,t=null){return await s("api/v1/orders/authorizer/action",{order_id:e,action:r,responsible:"autorizador",problems:t})},async processOrderPickerAndReviewer(e){return await s("api/v1/order/proccess",e)},async updateOrder(e,r){return await d(`api/v1/orders/${e}`,r)}}});export{s as p,y as u};

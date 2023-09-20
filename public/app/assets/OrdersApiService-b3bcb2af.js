import{I as a,C as p}from"./index-23413f13.js";const o="/",n={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}};async function t(e){return(await a.get(`${o}${e}`,n)).data}async function s(e,r){return(await a.post(`${o}${e}`,r,n)).data}async function d(e,r){return(await a.put(`${o}${e}`,r,n)).data}const u=p("orders",{state:()=>({listOrders:null}),getters:{orders:e=>e.listOrders},actions:{async getOrders(){return(await t("api/v1/orders")).data},async getOrdersByMethodShipping(e){return await s("api/v1/orders/by-method-shipping",{method_shipping_ids:e})},async getProcessedOrders(){return(await t("api/v1/orders/authorizer/list")).data},async getOrdersByParams(e){return(await s("api/v1/orders/by-params",e)).data},async showOrder(e){return await t(`api/v1/orders/${e}`)},async postActionOrder(e,r){return await s("api/v1/orders/authorizer/action",{order_id:e,action:r,responsible:"autorizador"})},async processOrderPickerAndReviewer(e){return await s("api/v1/order/proccess",e)},async updateOrder(e,r){return await d(`api/v1/orders/${e}`,r)}}});export{t as g,u};
import{a6 as n,Y as l}from"../entry/index-89c52dfa.js";const i="http://tasco.test/",d={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}};async function o(e){return(await n.get(`${i}${e}`,d)).data}async function t(e,s){return(await n.post(`${i}${e}`,s,d)).data}async function y(e,s){return(await n.put(`${i}${e}`,s,d)).data}const g=l("orders",{state:()=>({listOrders:null}),getters:{orders:e=>e.listOrders},actions:{async getOrders(){let e=await o("api/v1/orders");return this.listOrders=e.data,e.data},async getOrdersByMethodShipping(e){return await t("api/v1/orders/by-method-shipping",{method_shipping_ids:e})},async getProcessedOrders(){return(await o("api/v1/orders/authorizer/list")).data},async getOrdersByParams(e){return(await t("api/v1/orders/by-params",e)).data},async showOrder(e){return await o(`api/v1/orders/${e}`)},async postActionOrder(e,s,r=null,p=null){let a=await t("api/v1/orders/authorizer/action",{order_id:e,action:s,responsible:"autorizador",problems:r,other:p});if(a.status==="success"){const c=this.listOrders.findIndex(u=>u.id===e);this.listOrders[c]=a.order}return a},async processOrderPickerAndReviewer(e){return await t("api/v1/order/proccess",e)},async update(e,s){return await y(`api/v1/orders/${e}`,s)}}});export{t as p,g as u};

import{a4 as d,I as c}from"./index-db7dbef3.js";const n="/",o={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}};async function t(e){return(await d.get(`${n}${e}`,o)).data}async function i(e,s){return(await d.post(`${n}${e}`,s,o)).data}async function l(e,s){return(await d.put(`${n}${e}`,s,o)).data}function u(e){return{ordersHere:a(e,1),ordersPickup:a(e,2),ordersDelivery:a(e,3)}}function a(e,s){return e.filter(r=>r.MethodShippingId===s).sort((r,p)=>new Date(p.updateApp)-new Date(r.updateApp))}const O=c("orders",{state:()=>({listOrders:[],listOrdersHere:[],listOrdersPickup:[],listOrdersDelivery:[]}),getters:{orders:e=>e.listOrders,ordersHere:e=>e.listOrdersHere,ordersPickup:e=>e.listOrdersPickup,ordersDelivery:e=>e.listOrdersDelivery},actions:{async getOrdersCda(){let e=await t("api/v1/orders/available/cda");return this.listOrders=e.data,e.data},async getOrdersPickerAndReviewer(){let e=await t("api/v1/orders/available/picker-reviewer");this.listOrders=e.data;const s=u(this.listOrders);return this.listOrdersHere=s.ordersHere,this.listOrdersPickup=s.ordersPickup,this.listOrdersDelivery=s.ordersDelivery,e.data},async getOrdersByMethodShipping(e){return await i("api/v1/orders/by-method-shipping",{method_shipping_ids:e})},async getOrdersBillPickupAndHere(){let e=await t("api/v1/orders/bill/pickup-here");return this.listOrders=e.data,e.data},async getOrdersBillDelivery(){let e=await t("api/v1/orders/bill/delivery");return this.listOrders=e.data,e.data},async processOrderAction(e){const s=await i("api/v1/orders/authorizer/action",e);return s.status==="success"&&this.updateOrderListByMethodShipping(s.order),s},async addObservation(e){const s=await i("api/v1/orders/authorizer/observation",e);return s.status==="success"&&this.updateOrderListByMethodShipping(s.order),s},async assingResponsible(e,s){const r=await l(`api/v1/order/${s}/assign/responsible`,e);return(r.status==="success"||r.status==="warning")&&this.updateOrderListByMethodShipping(r.order),r},updateOrderListByMethodShipping(e){let s;switch(e.MethodShippingId){case 1:s=this.listOrdersHere.findIndex(r=>r.id===e.id),this.listOrdersHere[s]=e;break;case 2:s=this.listOrdersPickup.findIndex(r=>r.id===e.id),this.listOrdersPickup[s]=e;break;case 3:s=this.listOrdersDelivery.findIndex(r=>r.id===e.id),this.listOrdersDelivery[s]=e;break}s=this.listOrders.findIndex(r=>r.id===e.id),this.listOrders[s]=e}}});export{i as p,O as u};

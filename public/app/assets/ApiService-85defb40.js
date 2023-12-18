<<<<<<<< HEAD:public/app/assets/ApiService-c2258a17.js
import{ae as s}from"./index-1730fa93.js";const n="/",r={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}},o=s.create(r);async function c(t){return(await o.get(`${n}${t}`)).data}async function i(t,e){return(await o.post(`${n}${t}`,e)).data}async function u(t,e){return(await o.put(`${n}${t}`,e)).data}export{u as a,c as g,i as p};
========
import{ae as s}from"./index-0e0dd738.js";const n="/",r={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}},o=s.create(r);async function c(t){return(await o.get(`${n}${t}`)).data}async function i(t,e){return(await o.post(`${n}${t}`,e)).data}async function u(t,e){return(await o.put(`${n}${t}`,e)).data}export{u as a,c as g,i as p};
>>>>>>>> 41f29b9 (Fix bug in DispatchOrders.vue and update):public/app/assets/ApiService-85defb40.js

import{ae as s}from"./index-986f90dd.js";const n="/",r={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}},o=s.create(r);async function c(t){return(await o.get(`${n}${t}`)).data}async function i(t,e){return(await o.post(`${n}${t}`,e)).data}async function u(t,e){return(await o.put(`${n}${t}`,e)).data}export{u as a,c as g,i as p};

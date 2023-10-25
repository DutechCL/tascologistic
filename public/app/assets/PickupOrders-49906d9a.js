import{e as c,l as O,k as g,o as n,c as d,h as r,i as k,a as o,u as t,m as w,v as u,F as B,s as D,z as C}from"./index-8e0c7bd6.js";import{u as R,_ as M,a as N,b as P}from"./DataTableOrders-bb5d9f4e.js";import{T as V,C as A}from"./FilterMultiSelect-3e198985.js";import"./tag.esm-c6c9dd2e.js";import"./index.esm-f7ab9adb.js";import"./OrdersApiService-266e296e.js";import"./ApiService-d8c97efe.js";import"./index.esm-c512cc47.js";import"./index.esm-163459a4.js";const I={class:"px-8"},T={class:"flex justify-between"},$=r("i",{class:"pi pi-refresh"},null,-1),F=[$],j={key:1,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},z=r("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No hay ordenes actualmente en este proceso ",-1),W={__name:"PickupOrders",setup(H){const{showToast:l}=V.setup(),{showConfirm:m}=A.setup(),e=R(),i=c([]),p=c([{active:"true",method:"issueInvoiceOrReceipt",label:"Factura / Boleta"}]),_=async()=>{await e.getOrdersBillPickupAndHere(),l({status:"success",message:"Ordenes actualizadas",time:3e3})};O(()=>e.listOrders,s=>{i.value=e.listOrders});const v=s=>{i.value=s.orders},f=s=>{switch(s.action){case"showDetailOrder":e.showDetailOrder(s.order);break;case"issueInvoiceOrReceipt":h(s.order);break}},h=async s=>{await m()?e.issueInvoiceOrReceipt(s):l({status:"info",message:"Proceso cancelado"})},b=s=>{e.visibleDialog=s.visibleDetails};g(async()=>{await e.getOrdersBillPickupAndHere(),i.value=e.listOrders});const y=()=>{i.value.length===0&&(window.location.href="/admin/dashboard/")};return(s,a)=>(n(),d(B,null,[r("div",I,[r("div",T,[r("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"},[k(" Retira / Aquí "),r("a",{style:{cursor:"pointer"},onClick:_},F)]),o(M,{orders:t(e).listOrders,onSearch:v},null,8,["orders"])]),o(N,{orders:i.value,actions:p.value,onAction:f},null,8,["orders","actions"]),t(e).visibleDialog?(n(),w(P,{key:0,visible:t(e).visibleDialog,"onUpdate:visible":a[0]||(a[0]=x=>t(e).visibleDialog=x),orderDetails:t(e).order,onVisible:b},null,8,["visible","orderDetails"])):u("",!0),i.value.length===0?(n(),d("div",j,[z,o(t(D),{label:"Regresar",severity:"primary",outlined:"",onClick:y,class:"ml-3 !py-1.5"})])):u("",!0)]),o(t(C))],64))}};export{W as default};

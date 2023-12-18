import{s as o,a as c,b as f}from"./tag.esm-5432cb61.js";import{u as _}from"./OrdersApiService-6350dc48.js";import{e as b,f as y,g as v,o as C,c as N,a as t,w as n,u as r,h as x,i as S,t as D,j as O,n as F}from"./index-986f90dd.js";import"./index.esm-9554e198.js";import"./ApiService-f68c23fd.js";const T={class:"px-8"},k=x("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"}," Retiro / Despacho ",-1),z={__name:"OrderTracking",setup(w){const u=_(),i=b([]),l=async()=>{let e=await u.getOrdersTracker("warehouse");i.value=e.data};y(()=>{l();const e=setInterval(l,15e3);v(()=>{clearInterval(e)})});const m=e=>`p-tag-${e}`;function h(e){const s=p(e);return(.299*s.r+.587*s.g+.114*s.b)/255>.5?"#000000":"#FFFFFF"}function p(e){const s=parseInt(e.substring(1),16),a=s>>16&255,d=s>>8&255,g=s&255;return{r:a,g:d,b:g}}return(e,s)=>(C(),N("div",T,[k,t(r(f),{value:i.value,tableStyle:"min-width: 50rem"},{default:n(()=>[t(r(o),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:n(a=>[S(" N° "+D(a.data.DocNum),1)]),_:1}),t(r(o),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),t(r(o),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),t(r(o),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),t(r(o),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:n(a=>[t(r(c),{icon:"pi pi-home",value:a.data.MethodShippingName,class:O([m(1),"tag-font-method tag-radius"])},null,8,["value","class"])]),_:1}),t(r(o),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:n(a=>[t(r(c),{icon:"pi pi-circle-fill",value:a.data.OrderStatusName,style:F({backgroundColor:a.data.OrderStatusColor,color:h(a.data.OrderStatusColor)}),class:"tag-font-status tag-radius"},null,8,["value","style"])]),_:1})]),_:1},8,["value"])]))}};export{z as default};

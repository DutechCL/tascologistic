import{s as o,a as f,b as p}from"./tag.esm-675a7bdc.js";import{u as _}from"./OrdersApiService-b914a6f7.js";import{e as b,f as g,g as y,o as v,c as x,a as t,w as n,u as r,h as C,i as D,t as N,n as S}from"./index-d74ac022.js";const F={class:"px-8"},T=C("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"}," Revise su orden aquí ",-1),B=1,k={__name:"OrderTable",setup(I){const i=_(),l=b([]),c=async()=>{l.value=await i.getOrdersByMethodShipping([B])};g(()=>{c();const s=setInterval(c,15e3);y(()=>{clearInterval(s)})});function u(s){const e=m(s);return(.299*e.r+.587*e.g+.114*e.b)/255>.5?"#000000":"#FFFFFF"}function m(s){const e=parseInt(s.substring(1),16),a=e>>16&255,d=e>>8&255,h=e&255;return{r:a,g:d,b:h}}return(s,e)=>(v(),x("div",F,[T,t(r(p),{value:l.value,tableStyle:"min-width: 50rem"},{default:n(()=>[t(r(o),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:n(a=>[D(" N° "+N(a.data.DocNum),1)]),_:1}),t(r(o),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),t(r(o),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),t(r(o),{headerClass:"!bg-primary-900",field:"customer.CardName",header:"Cliente"}),t(r(o),{headerClass:"!bg-primary-900",field:"order_status",header:"Estado"},{body:n(a=>[t(r(f),{icon:"pi pi-circle-fill",value:a.data.order_status.name,style:S({backgroundColor:a.data.order_status.color,color:u(a.data.order_status.color)}),class:"tag-font-status tag-radius"},null,8,["value","style"])]),_:1})]),_:1},8,["value"])]))}};export{k as default};

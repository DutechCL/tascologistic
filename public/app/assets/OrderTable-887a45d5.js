import{s as o,a as p,b as f}from"./tag.esm-5432cb61.js";import{u as b}from"./OrdersApiService-6350dc48.js";import{e as g,f as _,g as y,o as C,c as v,a as t,w as n,u as s,h as x,i as N,t as S,n as D}from"./index-986f90dd.js";import"./index.esm-9554e198.js";import"./ApiService-f68c23fd.js";const F={class:"px-8"},O=x("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"}," Revise su orden aquí ",-1),E={__name:"OrderTable",setup(T){const c=b(),l=g([]),d=async()=>{let e=await c.getOrdersTracker("salesroom");l.value=e.data};_(()=>{d();const e=setInterval(d,15e3);y(()=>{clearInterval(e)})});function u(e){const a=m(e);return(.299*a.r+.587*a.g+.114*a.b)/255>.5?"#000000":"#FFFFFF"}function m(e){const a=parseInt(e.substring(1),16),r=a>>16&255,i=a>>8&255,h=a&255;return{r,g:i,b:h}}return(e,a)=>(C(),v("div",F,[O,t(s(f),{value:l.value,tableStyle:"min-width: 50rem"},{default:n(()=>[t(s(o),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:n(r=>[N(" N° "+S(r.data.DocNum),1)]),_:1}),t(s(o),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),t(s(o),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),t(s(o),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),t(s(o),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:n(r=>[t(s(p),{icon:"pi pi-circle-fill",value:r.data.OrderStatusName,style:D({backgroundColor:r.data.OrderStatusColor,color:u(r.data.OrderStatusColor)}),class:"tag-font-status tag-radius"},null,8,["value","style"])]),_:1})]),_:1},8,["value"])]))}};export{E as default};
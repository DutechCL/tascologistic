import{s,a as l,b as m}from"./tag.esm-9796c648.js";import{u as p}from"./OrdersApiService-17f1ef64.js";import{b as u,e as _,o as h,c as g,a as e,w as r,u as a,f,g as y,t as b,n}from"./index-0a3410cf.js";const v={class:"px-8"},S=f("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"}," Retiro / Despacho ",-1),C=2,D=3,E={__name:"OrderTracking",setup(x){const c=p(),o=u([]);_(async()=>{o.value=await c.getOrdersByMethodShipping([C,D])});const d=i=>`p-tag-${i}`;return(i,T)=>(h(),g("div",v,[S,e(a(m),{value:o.value,tableStyle:"min-width: 50rem"},{default:r(()=>[e(a(s),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:r(t=>[y(" N° "+b(t.data.DocNum),1)]),_:1}),e(a(s),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),e(a(s),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),e(a(s),{headerClass:"!bg-primary-900",field:"customer.CardName",header:"Cliente"}),e(a(s),{headerClass:"!bg-primary-900",field:"method_shipping",header:"Método entrega"},{body:r(t=>[e(a(l),{icon:"pi pi-home",value:t.data.method_shipping.name,class:n([d(1),"tag-font-method tag-radius"])},null,8,["value","class"])]),_:1}),e(a(s),{headerClass:"!bg-primary-900",field:"order_status",header:"Estado"},{body:r(t=>[e(a(l),{icon:"pi pi-circle-fill",value:t.data.order_status.name,class:n([d(t.data.order_status.id),"tag-font-status tag-radius"])},null,8,["value","class"])]),_:1})]),_:1},8,["value"])]))}};export{E as default};

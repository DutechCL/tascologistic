import{s as r,a as c,b as n}from"./tag.esm-38c551de.js";import{u}from"./OrdersApiService-bc8c2b4e.js";import{b as m,e as p,o as _,c as h,a as e,w as t,u as a,f,g as b,t as g,n as y}from"./index-6674dcb2.js";const v={class:"px-8"},C=f("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"}," Revise su orden aquí ",-1),x=1,B={__name:"OrderTable",setup(N){const i=u(),o=m([]);p(async()=>{o.value=await i.getOrdersByMethodShipping([x])});const l=d=>`p-tag-${d}`;return(d,S)=>(_(),h("div",v,[C,e(a(n),{value:o.value,tableStyle:"min-width: 50rem"},{default:t(()=>[e(a(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:t(s=>[b(" N° "+g(s.data.DocNum),1)]),_:1}),e(a(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),e(a(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),e(a(r),{headerClass:"!bg-primary-900",field:"customer.CardName",header:"Cliente"}),e(a(r),{headerClass:"!bg-primary-900",field:"order_status",header:"Estado"},{body:t(s=>[e(a(c),{icon:"pi pi-circle-fill",value:s.data.order_status.name,class:y([l(s.data.order_status.id),"tag-font-status tag-radius"])},null,8,["value","class"])]),_:1})]),_:1},8,["value"])]))}};export{B as default};

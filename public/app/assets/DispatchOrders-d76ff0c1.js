import{s as o,a as g,b as _}from"./tag.esm-98ef6331.js";import{b as n,h as V,o as f,c as C,f as d,a,u as s,w as r,i as D,q as w,g as h,t as y,s as c}from"./index-d251e1c2.js";import{s as u}from"./treeselect.esm-5cb19e0a.js";import{_ as N,a as k}from"./DialogDetail-148d83d8.js";import{u as x}from"./OrdersApiService-d684f396.js";import"./index.esm-b411beb4.js";const M={class:"px-8"},$={class:"flex justify-between"},B=d("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"}," Despacho ",-1),S={class:"flex"},O={class:"card flex justify-content-center"},j={class:"card flex justify-content-center"},U={class:"card flex justify-content-center mr-20"},z={__name:"DispatchOrders",setup(F){const b=x(),i=n(!1),m=n([]),p=n([]);V(async()=>{let l={ordersStatusId:[5],methodShippingId:[3]};m.value=await b.getOrdersByParams(l)});const v=l=>{p.value=l,i.value=!0};return(l,t)=>(f(),C("div",M,[d("div",$,[B,a(k)]),d("div",S,[d("div",O,[a(s(u),{modelValue:l.selectedValue,"onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedValue=e),options:l.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),d("div",j,[a(s(u),{modelValue:l.selectedValue,"onUpdate:modelValue":t[1]||(t[1]=e=>l.selectedValue=e),options:l.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),d("div",U,[a(s(u),{modelValue:l.selectedValue,"onUpdate:modelValue":t[2]||(t[2]=e=>l.selectedValue=e),options:l.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),a(s(_),{tableStyle:"min-width: 50rem",filters:"filters",value:m.value,paginator:"",rows:10,dataKey:"id",filterDisplay:"row",loading:l.loading},{default:r(()=>[a(s(o),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:r(e=>[h(" N° "+y(e.data.DocNum),1)]),_:1}),a(s(o),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(s(o),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(s(o),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:r(e=>[h(" $ "+y(e.data.DocTotal),1)]),_:1}),a(s(o),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:r(e=>[a(s(g),{icon:e.data.icon,value:e.data.MethodShippingName,class:"p-tag-1 tag-font-method tag-radius"},null,8,["icon","value"])]),_:1}),a(s(o),{headerClass:"!bg-primary-900",field:"note",header:"Detalles"},{body:r(e=>[a(s(c),{icon:"pi pi-eye",onClick:T=>v(e.data),class:"!text-primary-900",label:"Ver detalles",link:""},null,8,["onClick"])]),_:1}),a(s(o),{headerClass:"!bg-primary-900",field:"client",header:"Emitir"},{body:r(e=>[a(s(c),{label:"Guía",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""}),a(s(c),{label:"Factura / Boleta",severity:"secondary",outlined:"",disabled:!0,class:"ml-3 !py-1.5"})]),_:1})]),_:1},8,["value","loading"]),i.value?(f(),D(N,{key:0,visible:i.value,"onUpdate:visible":t[3]||(t[3]=e=>i.value=e),orderDetails:p.value},null,8,["visible","orderDetails"])):w("",!0)]))}};export{z as default};

import{s as r,a as b,b as v}from"./tag.esm-8dcda605.js";import{b as l,h as g,o as p,c as C,f,a as e,w as s,u as t,i as D,p as x,g as m,t as u,s as y}from"./index-e0c14e34.js";import{_ as N,a as k}from"./DialogDetail-98e8f4c6.js";import{u as w}from"./OrdersApiService-8bceebda.js";const B={class:"px-8"},S={class:"flex justify-between"},$=f("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"}," Retira / Aquí ",-1),F={__name:"PickupOrders",setup(M){const h=w(),o=l(!1),d=l([]),n=l([]);g(async()=>{let i={ordersStatusId:[5],methodShippingId:[1,2]};d.value=await h.getOrdersByParams(i)});const _=i=>{n.value=i,o.value=!0};return(i,c)=>(p(),C("div",B,[f("div",S,[$,e(k)]),e(t(v),{tableStyle:"min-width: 50rem",filters:"filters",value:d.value,paginator:"",rows:10,dataKey:"id",filterDisplay:"row",loading:i.loading},{default:s(()=>[e(t(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:s(a=>[m(" N° "+u(a.data.DocNum),1)]),_:1}),e(t(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),e(t(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),e(t(r),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:s(a=>[m(" $ "+u(a.data.DocTotal),1)]),_:1}),e(t(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:s(a=>[e(t(b),{icon:a.data.icon,value:a.data.MethodShippingName,class:"p-tag-1 tag-font-method tag-radius"},null,8,["icon","value"])]),_:1}),e(t(r),{headerClass:"!bg-primary-900",field:"note",header:"Detalles"},{body:s(a=>[e(t(y),{icon:"pi pi-eye",onClick:O=>_(a.data),class:"!text-primary-900",label:"Ver detalles",link:""},null,8,["onClick"])]),_:1}),e(t(r),{headerClass:"!bg-primary-900",field:"client",header:"Emitir"},{body:s(a=>[e(t(y),{label:"Factura / Boleta",class:"!py-1.5 !border-primary-900 !text-primary-900",severity:"primary",outlined:""})]),_:1})]),_:1},8,["value","loading"]),o.value?(p(),D(N,{key:0,visible:o.value,"onUpdate:visible":c[0]||(c[0]=a=>o.value=a),orderDetails:n.value},null,8,["visible","orderDetails"])):x("",!0)]))}};export{F as default};

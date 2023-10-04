import{s as o,c as D,a as w,b as x}from"./tag.esm-ad7f4c80.js";import{e as m,k as C,o as c,c as p,h as r,a,u as t,w as i,l as k,x as y,i as N,t as M,s as u}from"./index-5214fa03.js";import{s as h}from"./treeselect.esm-ee0d6085.js";import{_ as S,a as B}from"./DialogDetail-391f6bcc.js";import{u as U}from"./OrdersApiService-3379c027.js";import"./index.esm-196f3641.js";const $={class:"px-8"},j={class:"flex justify-between"},O=r("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"}," Despacho ",-1),F={key:0},T={class:"flex"},I={class:"card flex justify-content-center"},E={class:"card flex justify-content-center"},G={class:"card flex justify-content-center mr-20"},K={key:1,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},R=r("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No hay ordenes actualmente en este proceso ",-1),Q={__name:"DispatchOrders",setup(q){const b=U(),d=m(!1),n=m([]),f=m([]),g=()=>{n.value.length===0&&(window.location.href="/admin/dashboard/")},_=l=>{d.value=l.visibleDetails};C(async()=>{let l={ordersStatusId:[5],methodShippingId:[3]};n.value=await b.getOrdersByParams(l)});const V=l=>{f.value=l,d.value=!0};return(l,s)=>(c(),p("div",$,[r("div",j,[O,a(B)]),n.value.length>0?(c(),p("div",F,[r("div",T,[r("div",I,[a(t(h),{modelValue:l.selectedValue,"onUpdate:modelValue":s[0]||(s[0]=e=>l.selectedValue=e),options:l.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",E,[a(t(h),{modelValue:l.selectedValue,"onUpdate:modelValue":s[1]||(s[1]=e=>l.selectedValue=e),options:l.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",G,[a(t(h),{modelValue:l.selectedValue,"onUpdate:modelValue":s[2]||(s[2]=e=>l.selectedValue=e),options:l.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),a(t(x),{tableStyle:"min-width: 50rem",filters:"filters",value:n.value,paginator:"",rows:10,dataKey:"id",filterDisplay:"row",loading:l.loading},{default:i(()=>[a(t(o),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:i(e=>[N(" N° "+M(e.data.DocNum),1)]),_:1}),a(t(o),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(t(o),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(t(o),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:i(e=>[a(t(D),{modelValue:e.data.DocTotal,"onUpdate:modelValue":v=>e.data.DocTotal=v,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(t(o),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:i(e=>[a(t(w),{icon:e.data.icon,value:e.data.MethodShippingName,class:"p-tag-1 tag-font-method tag-radius"},null,8,["icon","value"])]),_:1}),a(t(o),{headerClass:"!bg-primary-900",field:"note",header:"Detalles"},{body:i(e=>[a(t(u),{icon:"pi pi-eye",onClick:v=>V(e.data),class:"!text-primary-900",label:"Ver detalles",link:""},null,8,["onClick"])]),_:1}),a(t(o),{headerClass:"!bg-primary-900",field:"client",header:"Emitir"},{body:i(e=>[a(t(u),{label:"Guía",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""}),a(t(u),{label:"Factura / Boleta",severity:"secondary",outlined:"",disabled:!0,class:"ml-3 !py-1.5"})]),_:1})]),_:1},8,["value","loading"]),d.value?(c(),k(S,{key:0,visible:d.value,"onUpdate:visible":s[3]||(s[3]=e=>d.value=e),orderDetails:f.value,onVisible:_},null,8,["visible","orderDetails"])):y("",!0)])):y("",!0),n.value.length===0?(c(),p("div",K,[R,a(t(u),{label:"Regresar",severity:"primary",outlined:"",onClick:g,class:"ml-3 !py-1.5"})])):y("",!0)]))}};export{Q as default};

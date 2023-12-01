import{e as u,v as O,q as D,o as c,c as m,h as r,i as k,a as i,u as t,k as w,p,F as B,s as E,x as N}from"./index-2feed758.js";import{T as P,c as d,_ as C}from"./ToastMixin-edcab21d.js";import{u as M,_ as S,a as T}from"./DataTableOrders-6182954f.js";import{C as I}from"./ConfirmMixin-320e94ce.js";import"./tag.esm-b997f336.js";import"./index.esm-03d4dc30.js";import"./OrdersApiService-130e669e.js";import"./ApiService-fce4b3d9.js";import"./FilterMultiSelect-2d6dc966.js";import"./index.esm-03011766.js";import"./index-dd28ee9b.js";const V={class:"px-8"},H={class:"flex justify-between"},R=r("i",{class:"pi pi-refresh"},null,-1),A=[R],$={key:1,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},F=r("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No hay ordenes actualmente en este proceso ",-1),Z={__name:"PickupOrders",setup(L){const{showToast:n}=P.setup(),{showConfirm:_}=I.setup(),e=M(),o=u([]),h=u([{active:"true",method:"generateDocument",document:d.DOCUMENT_TYPE_INVOICE,label:"Factura / Boleta"}]),f=async()=>{await e.getOrdersBillPickupAndHere(),n({status:"success",message:"Ordenes actualizadas",time:3e3})};O(()=>e.listOrders,s=>{o.value=e.listOrders});const v=s=>{o.value=s.orders},g=s=>{switch(s.method){case"showDetailOrder":e.showDetailOrder(s.order);break;case"generateDocument":b(s);break}},b=async s=>{if(await _()){let a=await e.generateDocument(s);n({status:a.status,message:a.message})}else n({status:"info",message:"Proceso cancelado"})},y=s=>{e.visibleDialog=s.visibleDetails};D(async()=>{await e.getOrdersBillPickupAndHere(),o.value=e.listOrders});const x=()=>{o.value.length===0&&(window.location.href="/admin/dashboard/")};return(s,l)=>(c(),m(B,null,[r("div",V,[r("div",H,[r("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"},[k(" Retira / Aquí "),r("a",{style:{cursor:"pointer"},onClick:f},A)]),i(C,{type:t(d).RESPONSIBLE_BILLER,methodShipping:t(d).METHOD_SHIPPING_HERE,orders:t(e).listOrders,onSearch:v},null,8,["type","methodShipping","orders"])]),i(S,{orders:o.value,actions:h.value,onAction:g},null,8,["orders","actions"]),t(e).visibleDialog?(c(),w(T,{key:0,visible:t(e).visibleDialog,"onUpdate:visible":l[0]||(l[0]=a=>t(e).visibleDialog=a),orderDetails:t(e).order,onVisible:y},null,8,["visible","orderDetails"])):p("",!0),o.value.length===0?(c(),m("div",$,[F,i(t(E),{label:"Regresar",severity:"primary",outlined:"",onClick:x,class:"ml-3 !py-1.5"})])):p("",!0)]),i(t(N))],64))}};export{Z as default};

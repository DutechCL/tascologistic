import{s as D,a as O}from"./tabpanel.esm-bbfdd051.js";import{T as L,c as N,_ as R}from"./ToastMixin-88a10aaa.js";import{s as _,a as T,b as V}from"./tag.esm-ae73d4fe.js";import{e as g,q as k,v as S,r as P,o as n,c as m,a as e,w as l,u as a,p as c,k as f,i as I,t as H,h as i,s as $,F as b,x as B}from"./index-cf47c3bf.js";import{u as w}from"./chat-c8ebc217.js";import{C as j}from"./ConfirmMixin-c8614706.js";import"./ordersCda-8ec34bb4.js";import"./index.esm-52fcaaa8.js";import"./OrdersApiService-f25edcb0.js";import"./ApiService-d823d219.js";const A={key:0,class:"chat-active"},z=i("i",{style:{"font-size":"30px"},class:"pi pi-eye text-primary-900"},null,-1),F={class:"flex gap-2"},E={__name:"DataTableListOrders",props:{data:Array},setup(v){const p=v,{showToast:r}=L.setup(),{showConfirm:t}=j.setup(),d=w(),o=g([]);k(()=>{o.value=p.data}),S(()=>p.data,h=>{o.value=h});const y=h=>{switch(h){case N.METHOD_SHIPPING_PICKUP_ID:return"pi pi-home";case N.METHOD_SHIPPING_DELIVERY_ID:return"pi pi-truck";default:return"pi pi-shopping-cart"}},x=async h=>{if(await t())try{let u=await d.resolveOrder(h);u.status==="success"&&(r({status:u.status,message:"Orden resuelta"}),o.value=o.value.filter(C=>C.chat.id!==h),d.getResolve())}catch(u){u.response&&r({status:u.response.data.status,message:u.response.data.message})}else r({status:"info",message:"Proceso cancelado"})};return(h,M)=>{const u=P("router-link"),C=P("Toast");return n(),m(b,null,[e(a(V),{tableStyle:"min-width: 50rem",value:o.value,rowsPerPageOptions:[5,10,20,50],rows:5,onPage:h.getData,paginator:"",dataKey:"id",filterDisplay:"row",paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} a {last} de {totalRecords}"},{default:l(()=>[e(a(_),{headerClass:"!bg-primary-900",field:"DocNum",header:""},{body:l(s=>[s.data.chat.status==="open"?(n(),m("div",A)):c("",!0),s.data.chat.status==="close"?(n(),f(u,{key:1,to:{name:"show-chat",params:{id:s.data.chat.id}},class:""},{default:l(()=>[z]),_:2},1032,["to"])):c("",!0)]),_:1}),e(a(_),{headerClass:"!bg-primary-900",sortable:"",field:"DocNum",header:"Nota de venta"},{body:l(s=>[I(" N° "+H(s.data.order.DocNum),1)]),_:1}),e(a(_),{headerClass:"!bg-primary-900",sortable:"",field:"order.Customer.CardName",header:"Cliente",style:{"max-width":"300px"}}),e(a(_),{headerClass:"!bg-primary-900",sortable:"",field:"order.Customer.CardCode",header:"Rut",style:{"max-width":"300px"}}),e(a(_),{headerClass:"!bg-primary-900",sortable:"",field:"order.MethodShippingName",header:"Método entrega"},{body:l(s=>[e(a(T),{Tag:"",icon:y(s.data.order.method_shipping_id),value:s.data.order.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["icon","value"])]),_:1}),e(a(_),{headerClass:"!bg-primary-900",sortable:"",field:"order.MethodShippingName",header:"Desde"},{body:l(s=>[e(a(T),{value:s.data.order.report_user_responsibles==="cda"?"CDA":"Bodega",class:"p-tag-1 tag-font-method tag-radius"},null,8,["value"])]),_:1}),e(a(_),{headerClass:"!bg-primary-900",sortable:"",field:"order.SalesEmployeeName",header:"Vendedor"}),e(a(_),{headerClass:"!bg-primary-900",sortable:"",field:"order.report_user_name",header:"Informador"}),e(a(_),{headerClass:"!bg-primary-900",field:"note",header:""},{body:l(s=>[i("div",F,[s.data.chat.status==="open"?(n(),f(u,{key:0,to:{name:"show-chat",params:{id:s.data.chat.id}},class:"!border-primary-900 !text-primary-900 btn-custom-table"},{default:l(()=>[I("Revisar")]),_:2},1032,["to"])):c("",!0),s.data.chat.status==="open"?(n(),f(a($),{key:1,onClick:pe=>x(s.data.chat.id),class:"!p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900 btn-custom-table",label:"Resuelto"},null,8,["onClick"])):c("",!0)])]),_:1})]),_:1},8,["value","onPage"]),e(C)],64)}}};const G={class:"flex justify-between"},K={class:"flex mb-5 mt-10",style:{height:"50px"}},U=i("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Incidencias en notas de venta ",-1),q={key:0,class:"text-center",style:{color:"#259bd7"}},Y=i("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},null,-1),J=[Y],Q={key:2,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},W=i("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No se han encontrado ordenes ",-1),X=[W],Z={__name:"ChatActive",setup(v,{emit:p}){const r=w(),t=g([]),d=g(!0);return k(async()=>{await r.getOrders().then(o=>{t.value=o,d.value=!1})}),(o,y)=>(n(),m(b,null,[i("div",G,[i("div",K,[U,e(a($),{label:"Descargar",icon:"pi pi-download",class:"ml-5 !p-button p-component !bg-primary-900 !py-1 !border-primary-900 !text-white btn-custom",onClick:y[0]||(y[0]=x=>p("exportChat",{type:"open"}))})]),e(R,{type:o.typeSearch,data:t.value},null,8,["type","data"])]),d.value?(n(),m("div",q,J)):c("",!0),t.value.length>0?(n(),f(E,{key:1,data:t.value},null,8,["data"])):c("",!0),t.value.length===0?(n(),m("div",Q,X)):c("",!0)],64))}};const ee={class:"flex justify-between"},te={class:"flex mb-5 mt-10",style:{height:"50px"}},ae=i("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Histórico ",-1),se={key:0,class:"text-center",style:{color:"#259bd7"}},re=i("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},null,-1),oe=[re],ne={key:2,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},ie=i("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No se han encontrado ordenes ",-1),le=[ie],de={__name:"ChatHistory",setup(v,{emit:p}){const r=w(),t=g([]),d=g(!1);return k(async()=>{await r.getResolve().then(o=>{t.value=o,d.value=!0})}),S(()=>r.resolve,()=>{t.value=r.resolve}),(o,y)=>(n(),m(b,null,[i("div",ee,[i("div",null,[i("div",te,[ae,e(a($),{label:"Descargar",icon:"pi pi-download",class:"ml-5 !p-button p-component !bg-primary-900 !py-1 !border-primary-900 !text-white btn-custom",onClick:y[0]||(y[0]=x=>p("exportChat",{type:"close"}))})])]),e(R,{type:o.typeSearch,orders:o.orders},null,8,["type","orders"])]),d.value?c("",!0):(n(),m("div",se,oe)),t.value.length>0?(n(),f(E,{key:1,data:t.value},null,8,["data"])):c("",!0),t.value.length===0?(n(),m("div",ne,le)):c("",!0)],64))}};const ce={class:"px-3"},Ce={__name:"ListChats",setup(v){L.setup();const p=r=>{const t=document.createElement("a");t.href=`/chat/export/${r.type}`,document.body.appendChild(t),t.click()};return(r,t)=>(n(),m(b,null,[i("div",ce,[e(a(O),{modelValue:r.selectedTab,"onUpdate:modelValue":t[0]||(t[0]=d=>r.selectedTab=d)},{default:l(()=>[e(a(D),{header:"Incidencias en notas de venta"},{default:l(()=>[e(Z,{onExportChat:p})]),_:1}),e(a(D),{header:"Históricos"},{default:l(()=>[e(de,{onExportChat:p})]),_:1})]),_:1},8,["modelValue"])]),e(a(B))],64))}};export{Ce as default};

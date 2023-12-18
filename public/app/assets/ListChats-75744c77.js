import{s as D,a as V}from"./tabpanel.esm-920f0cf3.js";import{T as L,C as H,c as N,_ as R}from"./ConfirmMixin-65895b19.js";import{s as m,a as T,b as O}from"./tag.esm-e52f1ac9.js";import{e as g,q as k,v as S,r as P,o as n,c as h,a as e,w as l,u as a,p as c,k as f,i as I,t as A,h as i,s as w,F as b,x as B}from"./index-0e0dd738.js";import{u as $}from"./chat-91332b04.js";import"./ordersCda-6a189675.js";import"./index.esm-65dfac2c.js";import"./OrdersApiService-dbc137f4.js";import"./ApiService-85defb40.js";import"./_commonjsHelpers-725317a4.js";const j={key:0,class:"chat-active"},z=i("i",{style:{"font-size":"30px"},class:"pi pi-eye text-primary-900"},null,-1),F={class:"flex gap-2"},E={__name:"DataTableListOrders",props:{data:Array},setup(v){const p=v,{showToast:o}=L.setup(),{showConfirm:t}=H.setup(),d=$(),r=g([]);k(()=>{r.value=p.data}),S(()=>p.data,_=>{r.value=_});const y=_=>{switch(_){case N.METHOD_SHIPPING_PICKUP_ID:return"pi pi-home";case N.METHOD_SHIPPING_DELIVERY_ID:return"pi pi-truck";default:return"pi pi-shopping-cart"}},x=async _=>{if(await t())try{let u=await d.resolveChatAndOrder(_);u.status==="success"&&(o({status:u.status,message:"Orden resuelta"}),r.value=r.value.filter(C=>C.chat.id!==_),d.getResolve())}catch(u){u.response&&o({status:u.response.data.status,message:u.response.data.message})}else o({status:"info",message:"Proceso cancelado"})};return(_,M)=>{const u=P("router-link"),C=P("Toast");return n(),h(b,null,[e(a(O),{tableStyle:"min-width: 50rem",value:r.value,rowsPerPageOptions:[5,10,20,50],rows:5,onPage:_.getData,paginator:"",dataKey:"id",filterDisplay:"row",paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} a {last} de {totalRecords}"},{default:l(()=>[e(a(m),{headerClass:"!bg-primary-900",field:"DocNum",header:"",style:{width:"50px !important","min-width":"50px !important","max-width":"50px !important"}},{body:l(s=>[s.data.chat.status==="open"?(n(),h("div",j)):c("",!0),s.data.chat.status==="close"?(n(),f(u,{key:1,to:{name:"show-chat",params:{id:s.data.chat.id}},class:""},{default:l(()=>[z]),_:2},1032,["to"])):c("",!0)]),_:1}),e(a(m),{headerClass:"!bg-primary-900",sortable:"",class:"font-14",field:"DocNum",header:"Nota de venta"},{body:l(s=>[I(" N° "+A(s.data.order.DocNum),1)]),_:1}),e(a(m),{headerClass:"!bg-primary-900",sortable:"",class:"font-14",field:"order.Customer.CardName",header:"Cliente",style:{"max-width":"300px"}}),e(a(m),{headerClass:"!bg-primary-900",sortable:"",class:"font-14",field:"order.Customer.CardCode",header:"Rut",style:{"max-width":"300px"}}),e(a(m),{headerClass:"!bg-primary-900",sortable:"",class:"font-14",field:"order.MethodShippingName",header:"Método entrega"},{body:l(s=>[e(a(T),{Tag:"",icon:y(s.data.order.method_shipping_id),value:s.data.order.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["icon","value"])]),_:1}),e(a(m),{headerClass:"!bg-primary-900",sortable:"",class:"font-14",field:"order.MethodShippingName",header:"Desde"},{body:l(s=>[e(a(T),{value:s.data.order.report_problem_location,class:"p-tag-1 tag-font-method tag-radius"},null,8,["value"])]),_:1}),e(a(m),{headerClass:"!bg-primary-900",sortable:"",class:"font-14",field:"order.SalesEmployeeName",header:"Vendedor"}),e(a(m),{headerClass:"!bg-primary-900",sortable:"",class:"font-14",field:"order.report_user_name",header:"Informador"}),e(a(m),{headerClass:"!bg-primary-900",class:"font-14",field:"note",header:""},{body:l(s=>[i("div",F,[s.data.chat.status==="open"?(n(),f(u,{key:0,to:{name:"show-chat",params:{id:s.data.chat.id}},style:{"padding-top":"12px"},class:"!border-primary-900 !text-primary-900 btn-custom-table"},{default:l(()=>[I("Revisar")]),_:2},1032,["to"])):c("",!0),s.data.chat.status==="open"?(n(),f(a(w),{key:1,onClick:pe=>x(s.data.chat.id),class:"!text-primary-900 btn-custom-table",label:"Resuelto"},null,8,["onClick"])):c("",!0)])]),_:1})]),_:1},8,["value","onPage"]),e(C)],64)}}};const G={class:"flex justify-between"},K={class:"flex mb-5 mt-10",style:{height:"50px"}},U=i("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Incidencias en notas de venta ",-1),q={key:0,class:"text-center",style:{color:"#259bd7"}},Y=i("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},null,-1),J=[Y],Q={key:2,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},W=i("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No se han encontrado ordenes ",-1),X=[W],Z={__name:"ChatActive",setup(v,{emit:p}){const o=$(),t=g([]),d=g(!0);return k(async()=>{await o.getChats().then(r=>{t.value=r,d.value=!1})}),(r,y)=>(n(),h(b,null,[i("div",G,[i("div",K,[U,e(a(w),{label:"Descargar",icon:"pi pi-file-export",class:"ml-5 !p-button p-component !bg-primary-900 !py-1 !border-primary-900 !text-white btn-custom",onClick:y[0]||(y[0]=x=>p("exportChat",{type:"open"}))})]),e(R,{type:r.typeSearch,data:t.value},null,8,["type","data"])]),d.value?(n(),h("div",q,J)):c("",!0),t.value.length>0?(n(),f(E,{key:1,data:t.value},null,8,["data"])):c("",!0),t.value.length===0?(n(),h("div",Q,X)):c("",!0)],64))}};const ee={class:"flex justify-between"},te={class:"flex mb-5 mt-10",style:{height:"50px"}},ae=i("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Histórico ",-1),se={key:0,class:"text-center",style:{color:"#259bd7"}},oe=i("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},null,-1),re=[oe],ne={key:2,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},ie=i("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No se han encontrado ordenes ",-1),le=[ie],de={__name:"ChatHistory",setup(v,{emit:p}){const o=$(),t=g([]),d=g(!1);return k(async()=>{await o.getResolve().then(r=>{t.value=r,d.value=!0})}),S(()=>o.resolve,()=>{t.value=o.resolve}),(r,y)=>(n(),h(b,null,[i("div",ee,[i("div",null,[i("div",te,[ae,e(a(w),{label:"Descargar",icon:"pi pi-file-export",class:"ml-5 !p-button p-component !bg-primary-900 !py-1 !border-primary-900 !text-white btn-custom",onClick:y[0]||(y[0]=x=>p("exportChat",{type:"close"}))})])]),e(R,{type:r.typeSearch,orders:r.orders},null,8,["type","orders"])]),d.value?c("",!0):(n(),h("div",se,re)),t.value.length>0?(n(),f(E,{key:1,data:t.value},null,8,["data"])):c("",!0),t.value.length===0?(n(),h("div",ne,le)):c("",!0)],64))}};const ce={class:"px-3"},Ce={__name:"ListChats",setup(v){L.setup();const p=o=>{const t=document.createElement("a");t.href=`/chat/export/${o.type}`,document.body.appendChild(t),t.click()};return(o,t)=>(n(),h(b,null,[i("div",ce,[e(a(V),{modelValue:o.selectedTab,"onUpdate:modelValue":t[0]||(t[0]=d=>o.selectedTab=d)},{default:l(()=>[e(a(D),{header:"Incidencias en notas de venta"},{default:l(()=>[e(Z,{onExportChat:p})]),_:1}),e(a(D),{header:"Históricos"},{default:l(()=>[e(de,{onExportChat:p})]),_:1})]),_:1},8,["modelValue"])]),e(a(B))],64))}};export{Ce as default};
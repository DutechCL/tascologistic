import{s as B,a as K}from"./tabpanel.esm-df1db4f2.js";import{c as h,T as G,C as q,_ as Q}from"./ConfirmMixin-9fbefe8d.js";import{e as p,o as n,k as b,w as _,h as r,i as S,t as w,u as e,a as o,c as D,F as E,l as V,s as I,m as U,p as v,q as j,v as T,f as Y,r as W,x as J}from"./index-852ef975.js";import{a as R,b as A,s as g}from"./tag.esm-ecc1724b.js";import{u as H}from"./ordersCda-1de5171e.js";import{u as X,s as Z}from"./ProblemsApiService-29b18bec.js";import{_ as ee}from"./FilterMultiSelect-b252984c.js";import"./index.esm-e809303e.js";import"./OrdersApiService-53733010.js";import"./ApiService-1a814c3e.js";import"./_commonjsHelpers-725317a4.js";import"./index.esm-52d65e91.js";import"./index-dd28ee9b.js";const te=r("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[r("i",{class:"pi pi-eye !text-xl"}),S(" Ver Documentos ")],-1),re={class:"flex align-center mb-2"},ae={class:"text-primary-900"},se=r("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),oe={class:"mt-5"},le=r("p",null," 2 archivos adjuntos ",-1),ne={class:"flex"},ie={class:"mt-2 mr-5 relative",width:"200",height:"180"},de=["src"],ue={class:"bg-gray-100"},ce=r("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}},null,-1),pe={class:"font-normal text-sm"},me=["href"],_e={__name:"DialogDetail",setup(x){const d=H(),t=p([{name:"Documento 1",url:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf"},{name:"Documento 2",url:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf"}]);return(c,l)=>(n(),b(e(U),{modal:"",header:" ",style:{width:"70vw"},maximizable:""},{default:_(()=>[r("div",null,[te,r("div",re,[r("p",ae,[se,S(w(e(d).order.DocNum),1)]),o(e(R),{icon:"pi pi-shopping-bag",value:e(d).order.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),o(e(R),{icon:"pi pi-user",value:e(d).order.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]),r("div",oe,[le,r("div",ne,[(n(!0),D(E,null,V(t.value,a=>(n(),D("div",ie,[r("embed",{class:"w-full",src:a.url,type:"application/pdf"},null,8,de),r("div",ue,[ce,r("span",pe,w(a.name),1)]),r("a",{class:"mask-pdf",href:a.url,target:"_blank"},null,8,me)]))),256))])])]),o(e(I),{label:"Cerrar",onClick:l[0]||(l[0]=a=>e(d).showDialog=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},be=r("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[r("i",{class:"pi pi-eye !text-xl"}),S(" Ver observaciones ")],-1),ge={class:"flex align-center mb-2"},he={class:"text-primary-900"},ve=r("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),fe=["innerHTML"],ye={class:"mt-5"},Pe=r("strong",null,"NOTA:",-1),Oe=r("br",null,null,-1),De=["innerHTML"],Ce={__name:"DialogDetailObservation",setup(x){const d=H(),t=l=>new DOMParser().parseFromString(l,"text/html").body.innerText,c=l=>l.replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(l,a)=>(n(),b(e(U),{modal:"",header:" ",style:{width:"70vw"},maximizable:""},{default:_(()=>{var m,f;return[r("div",null,[be,r("div",ge,[r("p",he,[ve,S(w(e(d).order.DocNum),1)]),o(e(R),{icon:"pi pi-shopping-cart",value:e(d).order.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),o(e(R),{icon:"pi pi-user",value:e(d).order.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),e(d).order.HasProblems?v("",!0):(n(),b(e(A),{key:0,tableStyle:"min-width: 50rem",filters:"filters",value:e(d).order.OrderItems,paginator:"",rows:10,rowsPerPageOptions:[5,10,20,50],paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} a {last} de {totalRecords}"},{default:_(()=>[o(e(g),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:_(i=>[r("p",null,w(i.data.Quantity)+" "+w(i.data.Quantity>1?"Unidades":"Unidad"),1)]),_:1}),o(e(g),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),o(e(g),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),o(e(g),{headerClass:"!bg-primary-900",field:"Problems",header:"Problema"},{body:_(i=>[(n(!0),D(E,null,V(i.data.Problems,(O,C)=>(n(),D("p",{class:"mt-2 mr-3 tag-radius tag-rounded-blue tag-font-method",key:C},w(t(O.ProblemName)),1))),128))]),_:1})]),_:1},8,["value"])),r("div",null,[(m=e(d).order)!=null&&m.HasProblems?(n(),b(e(A),{key:0,tableStyle:"min-width: 50rem",filters:"filters",value:(f=e(d).order)==null?void 0:f.Problems},{default:_(()=>[o(e(g),{headerClass:"!bg-primary-900",field:"ProblemName",header:"Probelma"},{body:_(i=>[r("p",null,w(i.data.ProblemName),1)]),_:1}),o(e(g),{headerClass:"!bg-primary-900",field:"Other",header:"Descripcion"},{body:_(i=>[r("p",{innerHTML:i.data.Other},null,8,fe)]),_:1})]),_:1},8,["value"])):v("",!0)]),r("div",ye,[Pe,S(),Oe,S(),r("span",{innerHTML:c(e(d).order.Comments)},null,8,De)])]),o(e(I),{label:"Cerrar",onClick:a[0]||(a[0]=i=>e(d).showDialog=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]}),_:1}))}},xe=r("h1",{class:"mb-3 mt-3 text-primary-900 font-inter font-semibold text-xl"},[r("i",{class:"pi pi-info-circle !text-xl rotate-180"}),S(" Reportar problema ")],-1),Ne=r("p",{class:"mb-3"},"Por favor indique uno o más problemas detectados",-1),Me={key:0,class:"mt-4"},ke=r("p",{class:"mb-3"},"Por favor indique el problema detectado",-1),$e={__name:"DialogReportProblem",props:{order:Object,product:Object,typeProblems:String,problemsProduct:Object},setup(x,{emit:d}){const t=x,c=X(),l=H(),a=p([]),m=p([]),f=p(!1),i=p(null),O=p(null),C=p(!1),y=p(!1),k=p(!1),u=p([]);j(async()=>{await c.getProblems(t.typeProblems),a.value=c.problems});const s=()=>{l.buttomReport=!0,C.value=!1,m.value=[],i.value=""};T(()=>t.order,P=>{u.value=P,t.typeProblems==h.RESPONSIBLE_CDA&&(m.value=[])});const $=()=>{l.buttomReport=!0,t.typeProblems==h.RESPONSIBLE_CDA&&(l.currentOrder.action="reject",l.currentOrder.orderId=t.order.id,l.currentOrder.problems=m.value,l.currentOrder.other=i.value,d("processOrder"))};T(()=>t.problemsProduct,P=>{P!=null&&(m.value=[...P],k.value=P.length>0,P.map(M=>{M.title==="Otro"&&(i.value=M.other,C.value=!!N(i.value).trim())}))}),T(m,P=>{f.value=P.some(M=>M.title==="Otro"),l.buttomReport=P.length===0||f.value&&!C.value,t.typeProblems===h.RESPONSIBLE_PICKER_REVIEWER&&(O.value=t.product,y.value||(O.value.problems=P))}),T(i,()=>{f.value?(C.value=!!N(i.value).trim(),l.buttomReport=!C.value):l.buttomReport=!1});const N=P=>new DOMParser().parseFromString(P,"text/html").body.innerText;return(P,M)=>(n(),b(e(U),{modal:"",header:" ",style:{width:"70vw"},"onUpdate:visible":s},{default:_(()=>[r("div",null,[xe,Ne,o(e(A),{selection:m.value,"onUpdate:selection":M[0]||(M[0]=L=>m.value=L),value:a.value,dataKey:"id"},{default:_(()=>[o(e(g),{headerClass:"!bg-primary-900",header:"Seleccionar",selectionMode:"multiple"}),o(e(g),{headerClass:"!bg-primary-900",field:"title",header:"Problema detectado"})]),_:1},8,["selection","value"]),f.value?(n(),D("div",Me,[ke,o(e(Z),{class:"custom-editor",modelValue:i.value,"onUpdate:modelValue":M[1]||(M[1]=L=>i.value=L),editorStyle:"height: 80px"},null,8,["modelValue"])])):v("",!0)]),r("div",null,[o(e(I),{label:"Reportar",disabled:e(l).buttomReport,onClick:$,class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"},null,8,["disabled"])])]),_:1}))}},we={key:0,class:"pb-10"},Se={class:"mb-4 text-primary-900 font-inter font-semibold text-xl"},Te={class:"flex"},F={__name:"DataTableOrdersCda",props:{title:String,type:String,orders:Array,toManage:Boolean,totalOrders:Number},setup(x,{emit:d}){const t=x,c=H(),l=p(t.orders),a=p({here:[{label:"Ver observación",value:"observation"}],"pickup-delivery":[{label:"Ver documentos",value:"detail"}]}),m=p({here:[{label:"Informado",value:h.ACTION_INFO}],"pickup-delivery":[{label:"Rechazar",value:"reportProblem"},{label:"Autorizar",value:h.ACTION_APPROVE}]}),f=p(["DocNum","Customer","DocTotal","DocTime","DocDate"]);T(()=>t.orders,()=>{l.value=t.orders});const i=y=>{console.log(y)},O=(y,k)=>{if([h.ACTION_INFO,h.ACTION_APPROVE].includes(y)){c.currentOrder.orderId=k.id,c.currentOrder.action=y,d("processOrder");return}c.order=k,c.showDialog=!0,c.typeDialog=y},C=y=>{l.value=y.orders};return(y,k)=>l.value.length>0?(n(),D("div",we,[r("div",null,[r("h2",Se,w(t.title),1)]),r("div",Te,[o(ee,{allOrders:t.orders,typeOrders:t.type,filters:f.value,onFilter:C},null,8,["allOrders","typeOrders","filters"])]),o(e(A),{value:l.value,rowsPerPageOptions:[5,10,20,50],rows:5,onPage:i,paginator:"",dataKey:"id",filterDisplay:"row",paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} a {last} de {totalRecords}"},{default:_(()=>[o(e(g),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta",sortable:""},{body:_(u=>[S(" N° "+w(u.data.DocNum),1)]),_:1}),o(e(g),{headerClass:"!bg-primary-900",sortable:"",field:"DocDate",header:"Fecha"}),o(e(g),{headerClass:"!bg-primary-900",sortable:"",field:"DocTime",header:"Hora"}),o(e(g),{headerClass:"!bg-primary-900",sortable:"",field:"Customer.CardName",header:"Cliente"}),o(e(g),{headerClass:"!bg-primary-900",sortable:"",field:"DocTotal",header:"Monto total"}),o(e(g),{headerClass:"!bg-primary-900",sortable:"",field:"MethodShippingName",header:"Método entrega"},{body:_(u=>[t.type==e(h).METHOD_SHIPPING_HERE?(n(),b(e(R),{key:0,Tag:"",icon:"pi pi-shopping-cart",value:u.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])):v("",!0),t.type==e(h).METHOD_SHIPPING_PICKUP_AND_DELIVERY?(n(),b(e(R),{key:1,Tag:"",icon:u.data.method_shipping_id===e(h).METHOD_SHIPPING_PICKUP_ID?"pi pi-home":"pi pi-truck",value:u.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["icon","value"])):v("",!0)]),_:1}),o(e(g),{headerClass:"!bg-primary-900",field:"note",header:"Documentos"},{body:_(u=>[(n(!0),D(E,null,V(a.value[t.type],s=>(n(),b(e(I),{icon:"pi pi-eye",onClick:$=>O(s.value,u.data),class:"!font-normal !text-primary-900",label:s.label,link:""},null,8,["onClick","label"]))),256))]),_:1}),t.toManage?v("",!0):(n(),b(e(g),{key:0,headerClass:"!bg-primary-900",field:"note",header:"Observación"},{body:_(u=>[u.data.HasProblems?(n(),b(e(I),{key:0,icon:"pi pi-eye",onClick:s=>O("observation",u.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])):v("",!0)]),_:1})),t.toManage?(n(),b(e(g),{key:1,headerClass:"!bg-primary-900",field:"note",header:""},{body:_(u=>[(n(!0),D(E,null,V(m.value[t.type],s=>(n(),b(e(I),{label:s.label,onClick:$=>O(s.value,u.data),class:"!py-1.5 mr-3 !border-primary-900 !text-primary-900",outlined:""},null,8,["label","onClick"]))),256))]),_:1})):v("",!0)]),_:1},8,["value"])])):v("",!0)}};const Ie={class:"flex justify-between"},Ee=r("i",{class:"pi pi-refresh"},null,-1),Re=[Ee],He={key:4,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},Le=r("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No se han encontrado ordenes ",-1),Ve=[Le],z={__name:"ToManage",props:{toManage:Boolean,orders:Array},setup(x,{emit:d}){const t=x,{showToast:c}=G.setup(),{showConfirm:l}=q.setup(),a=H(),m=p([]),f=p([]),i=p(h.RESPONSIBLE_CDA+":"+t.toManage),O=async()=>{d("updateOrders")};Y(async()=>{y(t.orders)});const C=u=>{y(u.orders)};T(()=>t.orders,()=>{y(t.orders)});const y=u=>{m.value=u.filter(s=>s.method_shipping_id===h.METHOD_SHIPPING_HERE_ID).sort((s,$)=>new Date($.updated_at)-new Date(s.updated_at)),f.value=u.filter(s=>s.method_shipping_id!==h.METHOD_SHIPPING_HERE_ID).sort((s,$)=>new Date($.updated_at)-new Date(s.updated_at))},k=async()=>{if(a.buttomReport=!0,await l())try{let s=await a.processOrderCda();s.status==="success"&&(a.showDialog=!1,c({status:s.status,message:s.message}),a.getOrdersCdaManage())}catch(s){a.buttomReport=!1,s.response&&c({status:s.response.data.status,message:s.response.data.message})}else c({status:"info",message:"Proceso cancelado"})};return(u,s)=>{const $=W("DialogaddObservation");return n(),D(E,null,[r("div",Ie,[r("div",null,[r("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"},[S(" Notas de venta "),r("a",{style:{cursor:"pointer"},onClick:O},Re)])]),o(Q,{type:i.value,orders:t.orders,onSearch:C},null,8,["type","orders"])]),o(F,{title:"Aquí",type:e(h).METHOD_SHIPPING_HERE,totalOrders:t.totalOrders,orders:m.value,toManage:x.toManage,onProcessOrder:k},null,8,["type","totalOrders","orders","toManage"]),o(F,{title:"Retiro / Despacho",type:e(h).METHOD_SHIPPING_PICKUP_AND_DELIVERY,totalOrders:t.totalOrders,orders:f.value,toManage:x.toManage,onProcessOrder:k},null,8,["type","totalOrders","orders","toManage"]),e(a).typeDialog==="detail"?(n(),b(_e,{key:0,visible:e(a).showDialog,"onUpdate:visible":s[0]||(s[0]=N=>e(a).showDialog=N),order:e(a).order},null,8,["visible","order"])):v("",!0),e(a).typeDialog==="observation"?(n(),b(Ce,{key:1,visible:e(a).showDialog,"onUpdate:visible":s[1]||(s[1]=N=>e(a).showDialog=N),order:e(a).order},null,8,["visible","order"])):v("",!0),e(a).typeDialog==="reportProblem"?(n(),b($e,{key:2,visible:e(a).showDialog,"onUpdate:visible":s[2]||(s[2]=N=>e(a).showDialog=N),typeProblems:e(h).RESPONSIBLE_CDA,order:e(a).order,onProcessOrder:k},null,8,["visible","typeProblems","order"])):v("",!0),e(a).typeDialog==="addObservation"?(n(),b($,{key:3,visible:e(a).showDialog,"onUpdate:visible":s[3]||(s[3]=N=>e(a).showDialog=N),typeProblems:e(h).RESPONSIBLE_CDA,order:e(a).order,disabled:!0},null,8,["visible","typeProblems","order"])):v("",!0),m.value.length===0&&f.value.length===0?(n(),D("div",He,Ve)):v("",!0)],64)}}};const Ae={class:"px-3"},Ue={key:0,class:"text-center",style:{color:"#259bd7"}},Be=r("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},null,-1),Fe=[Be],rt={__name:"SalesNotes",setup(x){const{showToast:d}=G.setup(),t=H(),c=p([]),l=p([]),a=p(!1);j(()=>{t.getOrdersCdaToManager().then(()=>{c.value=t.listOrders}),t.getOrdersCdaManage().then(()=>{l.value=t.listOrdersManage}),a.value=!0});const m=()=>{t.getOrdersCdaToManager().then(()=>{c.value=t.listOrders}),t.getOrdersCdaManage().then(()=>{l.value=t.listOrdersManage}),d({status:"success",title:"Ordenes actualizadas",message:"Las ordenes se han actualizado correctamente"})};return T(()=>[t.listOrders,t.listOrdersManage],()=>{c.value=t.listOrders,l.value=t.listOrdersManage}),(f,i)=>(n(),D(E,null,[r("div",Ae,[o(e(K),{modelValue:f.selectedTab,"onUpdate:modelValue":i[0]||(i[0]=O=>f.selectedTab=O)},{default:_(()=>[o(e(B),{header:"Por gestionar"},{default:_(()=>[a.value?v("",!0):(n(),D("div",Ue,Fe)),a.value?(n(),b(z,{key:1,toManage:!0,orders:c.value,onUpdateOrders:m},null,8,["orders"])):v("",!0)]),_:1}),o(e(B),{header:"Gestionadas"},{default:_(()=>[a.value?(n(),b(z,{key:0,toManage:!1,orders:l.value,onUpdateOrders:m},null,8,["orders"])):v("",!0)]),_:1})]),_:1},8,["modelValue"])]),o(e(J))],64))}};export{rt as default};

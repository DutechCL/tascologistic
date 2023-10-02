import{s as J,a as le}from"./tabpanel.esm-81542d10.js";import{b as r,h as q,o as n,i as c,w as u,f as l,g as k,t as F,a,u as e,s as w,j as X,c as A,F as B,k as te,l as oe,m as se,p as re,r as ie,q as M,v as de}from"./index-1eba0ea1.js";import{a as L,b as R,s as i,c as W}from"./tag.esm-5ce3b7ce.js";import{_ as Y,s as f}from"./multiselect.esm-b8e87e6f.js";import{u as G}from"./OrdersApiService-e9018185.js";import"./index.esm-d3d3206c.js";const ne=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),k(" Ver Documentos ")],-1),ue={class:"flex align-center mb-2"},ce={class:"text-primary-900"},me=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),pe=l("div",{class:"mt-5"},[l("p",null," 2 archivos adjuntos "),l("div",{class:"flex"},[l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])]),l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])])])],-1),Z={__name:"DialogDetail",props:{order:String},setup(N,{emit:b}){const y=N,m=()=>{b("visible",{visibleDetails:!1})},p=r([]);return q(()=>{p.value=y.order}),(v,g)=>(n(),c(e(X),{modal:"",header:" ",style:{width:"70vw"}},{default:u(()=>[l("div",null,[ne,l("div",ue,[l("p",ce,[me,k(F(p.value.DocNum),1)]),a(e(L),{icon:"pi pi-shopping-bag",value:p.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(L),{icon:"pi pi-user",value:p.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]),pe]),a(e(w),{label:"Cerrar",onClick:m,class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},ve=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),k(" Ver observaciones ")],-1),fe={class:"flex align-center mb-2"},he={class:"text-primary-900"},be=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ye={class:"mt-5"},ge=l("strong",null,"NOTA:",-1),_e=["innerHTML"],xe={__name:"DialogDetailObservation",props:{order:String},setup(N,{emit:b}){const y=N,m=r([]);q(()=>{m.value=y.order});const p=()=>{b("visible",{visibleObservation:!1})},v=g=>g.replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(g,_)=>(n(),c(e(X),{modal:"",header:" ",style:{width:"70vw"}},{default:u(()=>[l("div",null,[ve,l("div",fe,[l("p",he,[be,k(F(m.value.DocNum),1)]),a(e(L),{icon:"pi pi-shopping-cart",value:m.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(L),{icon:"pi pi-user",value:m.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),a(e(R),{tableStyle:"min-width: 50rem",filters:"filters",value:m.value.OrderItems},{default:u(()=>[a(e(i),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:u(x=>[l("p",null,F(x.data.Quantity)+" Unidad",1)]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),a(e(i),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),a(e(i),{headerClass:"!bg-primary-900",field:"Problems",header:"Problema"},{body:u(x=>[(n(!0),A(B,null,te(x.data.Problems,(C,V)=>(n(),c(e(L),{key:V,value:C.ProblemName,rounded:"",class:"mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"]),l("div",ye,[ge,k(),l("span",{innerHTML:v(m.value.Comments)},null,8,_e)])]),a(e(w),{label:"Cerrar",onClick:p,class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}};const De={class:"flex justify-between"},Ce=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta ")],-1),we={key:0},Ve=l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ",-1),Ne={class:"flex"},Se={class:"card flex justify-content-center"},Le={class:"card flex justify-content-center"},ke={class:"card flex justify-content-center"},Te={class:"card flex justify-content-center mr-5"},$e={class:"card flex justify-content-center"},Me=l("div",null,[l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),Oe={class:"flex"},Ue={class:"card flex justify-content-center"},je={class:"card flex justify-content-center"},Ie={class:"card flex justify-content-center"},Fe={class:"card flex justify-content-center mr-5"},He={class:"card flex justify-content-center"},I=1,Pe={__name:"ToManage",props:{ListOrders:Array},setup(N){const b=N,y=oe(),m=se(),p=G(),v=r(!1),g=r(!1),_=r({}),x=r(!1),C=r([]),V=r([]),T=r([]),O=r([]),U=r([]),D=s=>{g.value=s.visibleObservation},h=s=>{v.value=s.visibleDetails},d=r(b.ListOrders.filter(s=>s.MethodShippingId===I)),$=r(b.ListOrders.filter(s=>s.MethodShippingId!==I)),H=r(d.value),P=r($.value);re(C,s=>{s.length===0?($.value=b.ListOrders.filter(o=>o.MethodShippingId!==I),d.value=b.ListOrders.filter(o=>o.MethodShippingId===I)):($.value=s.filter(o=>o.MethodShippingId!==I),d.value=s.filter(o=>o.MethodShippingId===I))});const K=s=>{_.value={...s},g.value=!0,x.value=!0},ee=s=>{v.value=!0,_.value={...s},x.value=!0},z=s=>{s||(_.value={},x.value=!1)},E=r(!1),Q=async s=>{E.value=!0;try{const{first:o,rows:j}=s,t=await p.getOrders({offset:o,limit:j});d.value=[...d.value,...t]}catch(o){console.error("Error al cargar más datos",o)}finally{E.value=!1}},ae=async s=>{y.require({message:"¿Estas seguro que deseas continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",acceptLabel:"Si",rejectLabel:"No",accept:async()=>{let o=await p.postActionOrder(s.id,1);if(console.log(o),m.add({severity:o.status,summary:"",detail:o.message,life:3e3}),o.status==="success"){const j=$.value.findIndex(t=>t===s);j!==-1&&$.value.splice(j,1)}},reject:()=>{}})};return(s,o)=>{const j=ie("Toast");return n(),A(B,null,[l("div",De,[Ce,a(Y)]),d.value.length>0?(n(),A("div",we,[Ve,l("div",Ne,[l("div",Se,[(n(),c(e(f),{modelValue:C.value,"onUpdate:modelValue":o[0]||(o[0]=t=>C.value=t),options:H.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:s.DocNum},null,8,["modelValue","options"]))]),l("div",Le,[(n(),c(e(f),{modelValue:V.value,"onUpdate:modelValue":o[1]||(o[1]=t=>V.value=t),options:H.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:s.DocDate},null,8,["modelValue","options"]))]),l("div",ke,[(n(),c(e(f),{modelValue:T.value,"onUpdate:modelValue":o[2]||(o[2]=t=>T.value=t),options:H.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:s.DocTime},null,8,["modelValue","options"]))]),l("div",Te,[a(e(f),{modelValue:O.value,"onUpdate:modelValue":o[3]||(o[3]=t=>O.value=t),options:H.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",$e,[(n(),c(e(f),{modelValue:U.value,"onUpdate:modelValue":o[4]||(o[4]=t=>U.value=t),options:H.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:s.DocTotal},null,8,["modelValue","options"]))])]),a(e(R),{onOnPage:Q,class:"mb-20",value:d.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:E.value},{default:u(()=>[a(e(i),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:u(t=>[k(" N° "+F(t.data.DocNum),1)]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(i),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(i),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(i),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:u(t=>[a(e(W),{modelValue:t.data.DocTotal,"onUpdate:modelValue":S=>t.data.DocTotal=S,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:u(t=>[a(e(L),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:u(t=>[a(e(w),{icon:"pi pi-eye",onClick:S=>K(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"note",header:""},{body:u(t=>[a(e(w),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value","loading"])])):M("",!0),Me,l("div",Oe,[l("div",Ue,[(n(),c(e(f),{modelValue:C.value,"onUpdate:modelValue":o[5]||(o[5]=t=>C.value=t),options:P.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:s.DocNum},null,8,["modelValue","options"]))]),l("div",je,[(n(),c(e(f),{modelValue:V.value,"onUpdate:modelValue":o[6]||(o[6]=t=>V.value=t),options:P.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:s.DocDate},null,8,["modelValue","options"]))]),l("div",Ie,[(n(),c(e(f),{modelValue:T.value,"onUpdate:modelValue":o[7]||(o[7]=t=>T.value=t),options:P.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:s.DocTime},null,8,["modelValue","options"]))]),l("div",Fe,[a(e(f),{modelValue:O.value,"onUpdate:modelValue":o[8]||(o[8]=t=>O.value=t),options:P.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",He,[(n(),c(e(f),{modelValue:U.value,"onUpdate:modelValue":o[9]||(o[9]=t=>U.value=t),options:P.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:s.DocTotal},null,8,["modelValue","options"]))])]),a(e(R),{onOnPage:Q,value:$.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:E.value},{default:u(()=>[a(e(i),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:u(t=>[k(" N° "+F(t.data.DocNum),1)]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(i),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(i),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(i),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:u(t=>[a(e(W),{modelValue:t.data.DocTotal,"onUpdate:modelValue":S=>t.data.DocTotal=S,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:u(t=>[a(e(L),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"note",header:"Documentos"},{body:u(t=>[a(e(w),{icon:"pi pi-eye",onClick:S=>ee(t.data),class:"!font-normal !text-primary-900",label:"Ver documentos",link:""},null,8,["onClick"])]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:u(t=>[t.data.OrderStatusId==4?(n(),c(e(w),{key:0,icon:"pi pi-eye",onClick:S=>K(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])):M("",!0)]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"note",header:""},{body:u(t=>[a(e(w),{label:"Rechazar",onClick:o[10]||(o[10]=S=>s.visibleReport=!0),class:"!py-1.5 mr-3 !border-primary-900 !text-primary-900",outlined:""}),a(e(w),{label:"Autorizar",onClick:S=>ae(t.data),class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""},null,8,["onClick"])]),_:1})]),_:1},8,["value","loading"]),x.value?(n(),c(Z,{visible:v.value,"onUpdate:visible":[o[11]||(o[11]=t=>v.value=t),z],order:_.value,key:_.value.timestamp,onVisible:h},null,8,["visible","order"])):M("",!0),x.value?(n(),c(xe,{visible:g.value,"onUpdate:visible":[o[12]||(o[12]=t=>g.value=t),z],order:_.value,key:_.value.timestamp,onVisible:D},null,8,["visible","order"])):M("",!0),a(j),a(e(de))],64)}}};const Ae={class:"flex justify-between"},Ee=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta "),l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),Re={class:"flex"},qe={class:"card flex justify-content-center"},Be={class:"card flex justify-content-center"},Ge={class:"card flex justify-content-center"},Ke={class:"card flex justify-content-center mr-5"},ze={class:"card flex justify-content-center"},Qe=1,Je={__name:"Managed",props:{ListordersManager:Array},setup(N){const b=N;G();const y=r(!1),m=r({}),p=r(!1),v=r([]),g=r([]),_=r([]),x=r([]),C=r([]),V=r([]),T=r(b.ListordersManager.filter(D=>D.MethodShippingId!==Qe));v.value=T.value;const O=D=>{y.value=!0,m.value={...D},p.value=!0},U=D=>{D||(m.value={},p.value=!1)};return(D,h)=>(n(),A(B,null,[l("div",Ae,[Ee,a(Y)]),l("div",Re,[l("div",qe,[(n(),c(e(f),{modelValue:g.value,"onUpdate:modelValue":h[0]||(h[0]=d=>g.value=d),options:v.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:D.DocNum},null,8,["modelValue","options"]))]),l("div",Be,[(n(),c(e(f),{modelValue:_.value,"onUpdate:modelValue":h[1]||(h[1]=d=>_.value=d),options:v.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:D.DocDate},null,8,["modelValue","options"]))]),l("div",Ge,[(n(),c(e(f),{modelValue:x.value,"onUpdate:modelValue":h[2]||(h[2]=d=>x.value=d),options:v.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:D.DocTime},null,8,["modelValue","options"]))]),l("div",Ke,[a(e(f),{modelValue:C.value,"onUpdate:modelValue":h[3]||(h[3]=d=>C.value=d),options:v.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",ze,[(n(),c(e(f),{modelValue:V.value,"onUpdate:modelValue":h[4]||(h[4]=d=>V.value=d),options:v.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:D.DocTotal},null,8,["modelValue","options"]))])]),a(e(R),{class:"mb-20",value:T.value,tableStyle:"min-width: 50rem"},{default:u(()=>[a(e(i),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:u(d=>[k(" N° "+F(d.data.DocNum),1)]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(i),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(i),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(i),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"}),a(e(i),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:u(d=>[a(e(L),{Tag:"",icon:"pi pi-shopping-cart",value:d.data.MethodShippingName,rounded:"",class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"},null,8,["value"])]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"note",header:"Observaciones"},{body:u(d=>[a(e(w),{icon:"pi pi-eye",onClick:$=>O(d.data),class:"!font-normal !text-primary-900",label:"Ver Observaciones",link:""},null,8,["onClick"])]),_:1}),a(e(i),{headerClass:"!bg-primary-900",field:"note",header:""},{body:u(d=>[a(e(w),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value"]),p.value?(n(),c(Z,{visible:y.value,"onUpdate:visible":[h[5]||(h[5]=d=>y.value=d),U],order:m.value,key:m.value.timestamp},null,8,["visible","order"])):M("",!0)],64))}};const We={class:"px-3"},ta={__name:"SalesNotes",setup(N){const b=G(),y=r([]),m=r([]);r([]);const p=r(!1);return q(async()=>{y.value=await b.getOrders(),m.value=await b.getProcessedOrders(),p.value=!0}),(v,g)=>(n(),A("div",We,[a(e(le),null,{default:u(()=>[a(e(J),{header:"Por gestionar"},{default:u(()=>[p.value?(n(),c(Pe,{key:0,ListOrders:y.value},null,8,["ListOrders"])):M("",!0)]),_:1}),a(e(J),{header:"Gestionadas"},{default:u(()=>[p.value?(n(),c(Je,{key:0,ListordersManager:m.value},null,8,["ListordersManager"])):M("",!0)]),_:1})]),_:1})]))}};export{ta as default};

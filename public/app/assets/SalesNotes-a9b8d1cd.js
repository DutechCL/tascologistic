import{s as z,a as ee}from"./tabpanel.esm-83232ec9.js";import{b as s,h as E,o as d,i as c,w as n,f as l,g as L,t as F,a,u as e,s as C,j as J,c as H,F as R,k as ae,l as le,m as te,p as oe,r as se,q as $,v as re}from"./index-2d284960.js";import{a as S,b as A,s as r,c as Q}from"./tag.esm-bb3b60e0.js";import{_ as W,s as y}from"./multiselect.esm-24b6fabe.js";import{u as B}from"./OrdersApiService-53e84ba6.js";import"./index.esm-b416092b.js";const ie=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),L(" Ver Documentos ")],-1),de={class:"flex align-center mb-2"},ne={class:"text-primary-900"},ue=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ce=l("div",{class:"mt-5"},[l("p",null," 2 archivos adjuntos "),l("div",{class:"flex"},[l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])]),l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])])])],-1),X={__name:"DialogDetail",props:{order:String},setup(w){const b=w,m=s([]);return E(()=>{m.value=b.order}),(g,f)=>(d(),c(e(J),{modal:"",header:" ",style:{width:"70vw"}},{default:n(()=>[l("div",null,[ie,l("div",de,[l("p",ne,[ue,L(F(m.value.DocNum),1)]),a(e(S),{icon:"pi pi-shopping-bag",value:m.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(S),{icon:"pi pi-user",value:m.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]),ce]),a(e(C),{label:"Cerrar",onClick:f[0]||(f[0]=h=>g.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},me=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),L(" Ver observaciones ")],-1),pe={class:"flex align-center mb-2"},ve={class:"text-primary-900"},fe=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),he={class:"mt-5"},ye=l("strong",null,"NOTA:",-1),be=["innerHTML"],ge={__name:"DialogDetailObservation",props:{order:String},setup(w){const b=w,m=s([]);E(()=>{m.value=b.order});const g=f=>f.replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(f,h)=>(d(),c(e(J),{modal:"",header:" ",style:{width:"70vw"}},{default:n(()=>[l("div",null,[me,l("div",pe,[l("p",ve,[fe,L(F(m.value.DocNum),1)]),a(e(S),{icon:"pi pi-shopping-cart",value:m.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(S),{icon:"pi pi-user",value:m.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),a(e(A),{tableStyle:"min-width: 50rem",filters:"filters",value:m.value.OrderItems},{default:n(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:n(x=>[l("p",null,F(x.data.Quantity)+" Unidad",1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),a(e(r),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),a(e(r),{headerClass:"!bg-primary-900",field:"Problems",header:"Problema"},{body:n(x=>[(d(!0),H(R,null,ae(x.data.Problems,(_,D)=>(d(),c(e(S),{key:D,value:_.ProblemName,rounded:"",class:"mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"]),l("div",he,[ye,L(),l("span",{innerHTML:g(m.value.Comments)},null,8,be)])]),a(e(C),{label:"Cerrar",onClick:h[0]||(h[0]=x=>f.visibleObservation=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}};const xe={class:"flex justify-between"},_e=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta ")],-1),De={key:0},Ce=l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ",-1),we={class:"flex"},Ve={class:"card flex justify-content-center"},Ne={class:"card flex justify-content-center"},Se={class:"card flex justify-content-center"},Le={class:"card flex justify-content-center mr-5"},ke={class:"card flex justify-content-center"},Te=l("div",null,[l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),$e={class:"flex"},Me={class:"card flex justify-content-center"},Oe={class:"card flex justify-content-center"},Ue={class:"card flex justify-content-center"},je={class:"card flex justify-content-center mr-5"},Ie={class:"card flex justify-content-center"},I=1,Fe={__name:"ToManage",props:{ListOrders:Array},setup(w){const b=w,m=le(),g=te(),f=B(),h=s(!1),x=s(!1),_=s({}),D=s(!1),V=s([]),k=s([]),T=s([]),M=s([]),O=s([]),v=s(b.ListOrders.filter(i=>i.MethodShippingId===I)),p=s(b.ListOrders.filter(i=>i.MethodShippingId!==I)),u=s(v.value),U=s(p.value);oe(V,i=>{i.length===0?(p.value=b.ListOrders.filter(o=>o.MethodShippingId!==I),v.value=b.ListOrders.filter(o=>o.MethodShippingId===I)):(p.value=i.filter(o=>o.MethodShippingId!==I),v.value=i.filter(o=>o.MethodShippingId===I))});const q=i=>{_.value={...i},x.value=!0,D.value=!0},Y=i=>{h.value=!0,_.value={...i},D.value=!0},G=i=>{i||(_.value={},D.value=!1)},P=s(!1),K=async i=>{P.value=!0;try{const{first:o,rows:j}=i,t=await f.getOrders({offset:o,limit:j});v.value=[...v.value,...t]}catch(o){console.error("Error al cargar más datos",o)}finally{P.value=!1}},Z=async i=>{m.require({message:"¿Estas seguro que deseas continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",acceptButton:"Si",rejectButton:"No",accept:async()=>{let o=await f.postActionOrder(i.id,1);if(console.log(o),g.add({severity:o.status,summary:"",detail:o.message,life:3e3}),o.status==="success"){const j=p.value.findIndex(t=>t===i);j!==-1&&p.value.splice(j,1)}},reject:()=>{}})};return(i,o)=>{const j=se("Toast");return d(),H(R,null,[l("div",xe,[_e,a(W)]),v.value.length>0?(d(),H("div",De,[Ce,l("div",we,[l("div",Ve,[(d(),c(e(y),{modelValue:V.value,"onUpdate:modelValue":o[0]||(o[0]=t=>V.value=t),options:u.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocNum},null,8,["modelValue","options"]))]),l("div",Ne,[(d(),c(e(y),{modelValue:k.value,"onUpdate:modelValue":o[1]||(o[1]=t=>k.value=t),options:u.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocDate},null,8,["modelValue","options"]))]),l("div",Se,[(d(),c(e(y),{modelValue:T.value,"onUpdate:modelValue":o[2]||(o[2]=t=>T.value=t),options:u.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocTime},null,8,["modelValue","options"]))]),l("div",Le,[a(e(y),{modelValue:M.value,"onUpdate:modelValue":o[3]||(o[3]=t=>M.value=t),options:u.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",ke,[(d(),c(e(y),{modelValue:O.value,"onUpdate:modelValue":o[4]||(o[4]=t=>O.value=t),options:u.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{onOnPage:K,class:"mb-20",value:v.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:P.value},{default:n(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:n(t=>[L(" N° "+F(t.data.DocNum),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:n(t=>[a(e(Q),{modelValue:t.data.DocTotal,"onUpdate:modelValue":N=>t.data.DocTotal=N,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:n(t=>[a(e(S),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:n(t=>[a(e(C),{icon:"pi pi-eye",onClick:N=>q(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:n(t=>[a(e(C),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value","loading"])])):$("",!0),Te,l("div",$e,[l("div",Me,[(d(),c(e(y),{modelValue:V.value,"onUpdate:modelValue":o[5]||(o[5]=t=>V.value=t),options:U.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocNum},null,8,["modelValue","options"]))]),l("div",Oe,[(d(),c(e(y),{modelValue:k.value,"onUpdate:modelValue":o[6]||(o[6]=t=>k.value=t),options:U.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocDate},null,8,["modelValue","options"]))]),l("div",Ue,[(d(),c(e(y),{modelValue:T.value,"onUpdate:modelValue":o[7]||(o[7]=t=>T.value=t),options:U.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocTime},null,8,["modelValue","options"]))]),l("div",je,[a(e(y),{modelValue:M.value,"onUpdate:modelValue":o[8]||(o[8]=t=>M.value=t),options:U.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Ie,[(d(),c(e(y),{modelValue:O.value,"onUpdate:modelValue":o[9]||(o[9]=t=>O.value=t),options:U.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{onOnPage:K,value:p.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:P.value},{default:n(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:n(t=>[L(" N° "+F(t.data.DocNum),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:n(t=>[a(e(Q),{modelValue:t.data.DocTotal,"onUpdate:modelValue":N=>t.data.DocTotal=N,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:n(t=>[a(e(S),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:"Documentos"},{body:n(t=>[a(e(C),{icon:"pi pi-eye",onClick:N=>Y(t.data),class:"!font-normal !text-primary-900",label:"Ver documentos",link:""},null,8,["onClick"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:n(t=>[t.data.OrderStatusId==4?(d(),c(e(C),{key:0,icon:"pi pi-eye",onClick:N=>q(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])):$("",!0)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:n(t=>[a(e(C),{label:"Rechazar",onClick:o[10]||(o[10]=N=>i.visibleReport=!0),class:"!py-1.5 mr-3 !border-primary-900 !text-primary-900",outlined:""}),a(e(C),{label:"Autorizar",onClick:N=>Z(t.data),class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""},null,8,["onClick"])]),_:1})]),_:1},8,["value","loading"]),D.value?(d(),c(X,{visible:h.value,"onUpdate:visible":[o[11]||(o[11]=t=>h.value=t),G],order:_.value,key:_.value.timestamp},null,8,["visible","order"])):$("",!0),D.value?(d(),c(ge,{visible:x.value,"onUpdate:visible":[o[12]||(o[12]=t=>x.value=t),G],order:_.value,key:_.value.timestamp},null,8,["visible","order"])):$("",!0),a(j),a(e(re))],64)}}};const He={class:"flex justify-between"},Pe=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta "),l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),Ae={class:"flex"},Ee={class:"card flex justify-content-center"},Re={class:"card flex justify-content-center"},Be={class:"card flex justify-content-center"},qe={class:"card flex justify-content-center mr-5"},Ge={class:"card flex justify-content-center"},Ke=1,ze={__name:"Managed",props:{ListordersManager:Array},setup(w){const b=w;B();const m=s(!1),g=s({}),f=s(!1),h=s([]),x=s([]),_=s([]),D=s([]),V=s([]),k=s([]),T=s(b.ListordersManager.filter(v=>v.MethodShippingId!==Ke));h.value=T.value;const M=v=>{m.value=!0,g.value={...v},f.value=!0},O=v=>{v||(g.value={},f.value=!1)};return(v,p)=>(d(),H(R,null,[l("div",He,[Pe,a(W)]),l("div",Ae,[l("div",Ee,[(d(),c(e(y),{modelValue:x.value,"onUpdate:modelValue":p[0]||(p[0]=u=>x.value=u),options:h.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:v.DocNum},null,8,["modelValue","options"]))]),l("div",Re,[(d(),c(e(y),{modelValue:_.value,"onUpdate:modelValue":p[1]||(p[1]=u=>_.value=u),options:h.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:v.DocDate},null,8,["modelValue","options"]))]),l("div",Be,[(d(),c(e(y),{modelValue:D.value,"onUpdate:modelValue":p[2]||(p[2]=u=>D.value=u),options:h.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:v.DocTime},null,8,["modelValue","options"]))]),l("div",qe,[a(e(y),{modelValue:V.value,"onUpdate:modelValue":p[3]||(p[3]=u=>V.value=u),options:h.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Ge,[(d(),c(e(y),{modelValue:k.value,"onUpdate:modelValue":p[4]||(p[4]=u=>k.value=u),options:h.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:v.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{class:"mb-20",value:T.value,tableStyle:"min-width: 50rem"},{default:n(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:n(u=>[L(" N° "+F(u.data.DocNum),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"}),a(e(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:n(u=>[a(e(S),{Tag:"",icon:"pi pi-shopping-cart",value:u.data.MethodShippingName,rounded:"",class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"},null,8,["value"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:"Observaciones"},{body:n(u=>[a(e(C),{icon:"pi pi-eye",onClick:U=>M(u.data),class:"!font-normal !text-primary-900",label:"Ver Observaciones",link:""},null,8,["onClick"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:n(u=>[a(e(C),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value"]),f.value?(d(),c(X,{visible:m.value,"onUpdate:visible":[p[5]||(p[5]=u=>m.value=u),O],order:g.value,key:g.value.timestamp},null,8,["visible","order"])):$("",!0)],64))}};const Qe={class:"px-3"},aa={__name:"SalesNotes",setup(w){const b=B(),m=s([]),g=s([]);s([]);const f=s(!1);return E(async()=>{m.value=await b.getOrders(),g.value=await b.getProcessedOrders(),f.value=!0}),(h,x)=>(d(),H("div",Qe,[a(e(ee),null,{default:n(()=>[a(e(z),{header:"Por gestionar"},{default:n(()=>[f.value?(d(),c(Fe,{key:0,ListOrders:m.value},null,8,["ListOrders"])):$("",!0)]),_:1}),a(e(z),{header:"Gestionadas"},{default:n(()=>[f.value?(d(),c(ze,{key:0,ListordersManager:g.value},null,8,["ListordersManager"])):$("",!0)]),_:1})]),_:1})]))}};export{aa as default};

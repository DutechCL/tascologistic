import{s as K,a as ee}from"./tabpanel.esm-81f9c1d4.js";import{b as u,h as q,o as c,i as f,w as d,f as l,g as C,t as M,a,u as e,s as b,j as J,c as I,F as R,k as ae,l as le,m as te,p as oe,r as se,q as k,v as re}from"./index-a8d434aa.js";import{a as V,b as E,s as r,c as Q}from"./tag.esm-76b638b0.js";import{_ as W,s as y}from"./multiselect.esm-d2b25fd5.js";import{u as X}from"./OrdersApiService-0d12456d.js";import{s as U}from"./treeselect.esm-2cb6e7ef.js";import"./index.esm-17edd4d5.js";const ie=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),C(" Ver Documentos ")],-1),de={class:"flex align-center mb-2"},ne={class:"text-primary-900"},ue=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ce=l("div",{class:"mt-5"},[l("p",null," 2 archivos adjuntos "),l("div",{class:"flex"},[l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])]),l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])])])],-1),me={__name:"DialogDetail",props:{order:String},setup(_){const v=_,p=u([]);return q(()=>{p.value=v.order}),(h,s)=>(c(),f(e(J),{modal:"",header:" ",style:{width:"70vw"}},{default:d(()=>[l("div",null,[ie,l("div",de,[l("p",ne,[ue,C(M(p.value.DocNum),1)]),a(e(V),{icon:"pi pi-shopping-bag",value:p.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(V),{icon:"pi pi-user",value:p.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]),ce]),a(e(b),{label:"Cerrar",onClick:s[0]||(s[0]=m=>h.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},pe=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),C(" Ver observaciones ")],-1),fe={class:"flex align-center mb-2"},ve={class:"text-primary-900"},he=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ye={class:"mt-5"},be=l("strong",null,"NOTA:",-1),ge=["innerHTML"],_e={__name:"DialogDetailObservation",props:{order:String},setup(_){const v=_,p=u([]);q(()=>{p.value=v.order});const h=s=>s.replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(s,m)=>(c(),f(e(J),{modal:"",header:" ",style:{width:"70vw"}},{default:d(()=>[l("div",null,[pe,l("div",fe,[l("p",ve,[he,C(M(p.value.DocNum),1)]),a(e(V),{icon:"pi pi-shopping-cart",value:p.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(V),{icon:"pi pi-user",value:p.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),a(e(E),{tableStyle:"min-width: 50rem",filters:"filters",value:p.value.OrderItems},{default:d(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:d(n=>[l("p",null,M(n.data.Quantity)+" Unidad",1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),a(e(r),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),a(e(r),{headerClass:"!bg-primary-900",field:"Problems",header:"Problema"},{body:d(n=>[(c(!0),I(R,null,ae(n.data.Problems,(g,w)=>(c(),f(e(V),{key:w,value:g.ProblemName,rounded:"",class:"mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"]),l("div",ye,[be,C(),l("span",{innerHTML:h(p.value.Comments)},null,8,ge)])]),a(e(b),{label:"Cerrar",onClick:m[0]||(m[0]=n=>s.visibleObservation=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}};const xe={class:"flex justify-between"},Ve=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta ")],-1),Ce={key:0},we=l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ",-1),De={class:"flex"},Ne={class:"card flex justify-content-center"},$e={class:"card flex justify-content-center"},Se={class:"card flex justify-content-center"},ke={class:"card flex justify-content-center mr-5"},Me={class:"card flex justify-content-center"},Le=l("div",null,[l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),Te={class:"flex"},Oe={class:"card flex justify-content-center"},Ue={class:"card flex justify-content-center"},Ie={class:"card flex justify-content-center"},je={class:"card flex justify-content-center mr-5"},Pe={class:"card flex justify-content-center"},S=1,Fe={__name:"ToManage",props:{ListOrders:Array},setup(_){const v=_,p=le(),h=te(),s=X(),m=u(!1),n=u(!1),g=u({}),w=u(!1),L=u([]),j=u([]),P=u([]),F=u([]),H=u([]),D=u(v.ListOrders.filter(i=>i.MethodShippingId===S)),N=u(v.ListOrders.filter(i=>i.MethodShippingId!==S)),T=u(D.value),O=u(N.value);oe(L,i=>{i.length===0?(N.value=v.ListOrders.filter(o=>o.MethodShippingId!==S),D.value=v.ListOrders.filter(o=>o.MethodShippingId===S)):(N.value=i.filter(o=>o.MethodShippingId!==S),D.value=i.filter(o=>o.MethodShippingId===S))});const B=i=>{g.value={...i},n.value=!0,w.value=!0},Y=i=>{m.value=!0,g.value={...i},w.value=!0},z=i=>{i||(g.value={},w.value=!1)},A=u(!1),G=async i=>{A.value=!0;try{const{first:o,rows:$}=i,t=await s.getOrders({offset:o,limit:$});D.value=[...D.value,...t]}catch(o){console.error("Error al cargar más datos",o)}finally{A.value=!1}},Z=async i=>{p.require({message:"¿Estas seguro que deseas continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",accept:async()=>{let o=await s.postActionOrder(i.id,1);if(h.add({severity:o.status,summary:"",detail:o.message,life:3e3}),o.status==="success"){const $=N.value.findIndex(t=>t===i);$!==-1&&N.value.splice($,1)}},reject:()=>{}})};return(i,o)=>{const $=se("Toast");return c(),I(R,null,[l("div",xe,[Ve,a(W)]),D.value.length>0?(c(),I("div",Ce,[we,l("div",De,[l("div",Ne,[(c(),f(e(y),{modelValue:L.value,"onUpdate:modelValue":o[0]||(o[0]=t=>L.value=t),options:T.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocNum},null,8,["modelValue","options"]))]),l("div",$e,[(c(),f(e(y),{modelValue:j.value,"onUpdate:modelValue":o[1]||(o[1]=t=>j.value=t),options:T.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocDate},null,8,["modelValue","options"]))]),l("div",Se,[(c(),f(e(y),{modelValue:P.value,"onUpdate:modelValue":o[2]||(o[2]=t=>P.value=t),options:T.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocTime},null,8,["modelValue","options"]))]),l("div",ke,[a(e(y),{modelValue:F.value,"onUpdate:modelValue":o[3]||(o[3]=t=>F.value=t),options:T.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Me,[(c(),f(e(y),{modelValue:H.value,"onUpdate:modelValue":o[4]||(o[4]=t=>H.value=t),options:T.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocTotal},null,8,["modelValue","options"]))])]),a(e(E),{onOnPage:G,class:"mb-20",value:D.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:A.value},{default:d(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(t=>[C(" N° "+M(t.data.DocNum),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:d(t=>[a(e(Q),{modelValue:t.data.DocTotal,"onUpdate:modelValue":x=>t.data.DocTotal=x,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(t=>[a(e(V),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(t=>[a(e(b),{icon:"pi pi-eye",onClick:x=>B(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(t=>[a(e(b),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value","loading"])])):k("",!0),Le,l("div",Te,[l("div",Oe,[(c(),f(e(y),{modelValue:L.value,"onUpdate:modelValue":o[5]||(o[5]=t=>L.value=t),options:O.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocNum},null,8,["modelValue","options"]))]),l("div",Ue,[(c(),f(e(y),{modelValue:j.value,"onUpdate:modelValue":o[6]||(o[6]=t=>j.value=t),options:O.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocDate},null,8,["modelValue","options"]))]),l("div",Ie,[(c(),f(e(y),{modelValue:P.value,"onUpdate:modelValue":o[7]||(o[7]=t=>P.value=t),options:O.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocTime},null,8,["modelValue","options"]))]),l("div",je,[a(e(y),{modelValue:F.value,"onUpdate:modelValue":o[8]||(o[8]=t=>F.value=t),options:O.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Pe,[(c(),f(e(y),{modelValue:H.value,"onUpdate:modelValue":o[9]||(o[9]=t=>H.value=t),options:O.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:i.DocTotal},null,8,["modelValue","options"]))])]),a(e(E),{onOnPage:G,value:N.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:A.value},{default:d(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(t=>[C(" N° "+M(t.data.DocNum),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:d(t=>[a(e(Q),{modelValue:t.data.DocTotal,"onUpdate:modelValue":x=>t.data.DocTotal=x,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(t=>[a(e(V),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:"Documentos"},{body:d(t=>[a(e(b),{icon:"pi pi-eye",onClick:x=>Y(t.data),class:"!font-normal !text-primary-900",label:"Ver documentos",link:""},null,8,["onClick"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(t=>[t.data.OrderStatusId==4?(c(),f(e(b),{key:0,icon:"pi pi-eye",onClick:x=>B(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])):k("",!0)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(t=>[a(e(b),{label:"Rechazar",onClick:o[10]||(o[10]=x=>i.visibleReport=!0),class:"!py-1.5 mr-3 !border-primary-900 !text-primary-900",outlined:""}),a(e(b),{label:"Autorizar",onClick:x=>Z(t.data),class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""},null,8,["onClick"])]),_:1})]),_:1},8,["value","loading"]),w.value?(c(),f(me,{visible:m.value,"onUpdate:visible":[o[11]||(o[11]=t=>m.value=t),z],order:g.value,key:g.value.timestamp},null,8,["visible","order"])):k("",!0),w.value?(c(),f(_e,{visible:n.value,"onUpdate:visible":[o[12]||(o[12]=t=>n.value=t),z],order:g.value,key:g.value.timestamp},null,8,["visible","order"])):k("",!0),a($),a(e(re))],64)}}},He={class:"flex justify-between"},Ae=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta "),l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ")],-1),Ee={class:"flex"},qe={class:"card flex justify-content-center"},Re={class:"card flex justify-content-center"},Be={class:"card flex justify-content-center"},ze={class:"card flex justify-content-center mr-20"},Ge={class:"card flex justify-content-center"},Ke=1,Qe={__name:"Managed",props:{ListordersManager:Array},setup(_){const p=u(_.ListordersManager.filter(s=>s.MethodShippingId!==Ke));console.log(p);const h=u([{statusId:1,note:"4567892",date:"19/04/2023",hour:"10:26",client:"Daniel Ramirez Palma",status:"En espera",totalAmount:"$200",btnInfo:"Informado"},{statusId:2,note:"0998764",date:"19/04/2023",hour:"10:58",client:"Lucas Sandoval",status:"En preparación",totalAmount:"$300"}]);return(s,m)=>(c(),I(R,null,[l("div",He,[Ae,a(W)]),l("div",Ee,[l("div",qe,[a(e(U),{modelValue:s.selectedValue,"onUpdate:modelValue":m[0]||(m[0]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",Re,[a(e(U),{modelValue:s.selectedValue,"onUpdate:modelValue":m[1]||(m[1]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",Be,[a(e(U),{modelValue:s.selectedValue,"onUpdate:modelValue":m[2]||(m[2]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",ze,[a(e(U),{modelValue:s.selectedValue,"onUpdate:modelValue":m[3]||(m[3]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",Ge,[a(e(U),{modelValue:s.selectedValue,"onUpdate:modelValue":m[4]||(m[4]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Total",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),a(e(E),{class:"mb-20",value:h.value,tableStyle:"min-width: 50rem"},{default:d(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"note",header:"Nota de venta"},{body:d(n=>[C(" N° "+M(n.data.note),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"date",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"hour",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"client",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Monto total"}),a(e(r),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Método entrega"},{body:d(n=>[a(e(V),{Tag:"",icon:"pi pi-shopping-cart",value:"Aquí",rounded:"",class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"})]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(n=>[a(e(b),{icon:"pi pi-eye",class:"!font-normal !text-primary-900",label:"Ver observación",link:""})]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(n=>[a(e(b),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value"])],64))}};const Je={class:"px-3"},ta={__name:"SalesNotes",setup(_){const v=X(),p=u([]),h=u([]);u([]);const s=u(!1);return q(async()=>{p.value=await v.getOrders(),h.value=await v.getProcessedOrders(),s.value=!0}),(m,n)=>(c(),I("div",Je,[a(e(ee),null,{default:d(()=>[a(e(K),{header:"Por gestionar"},{default:d(()=>[s.value?(c(),f(Fe,{key:0,ListOrders:p.value},null,8,["ListOrders"])):k("",!0)]),_:1}),a(e(K),{header:"Gestionadas"},{default:d(()=>[s.value?(c(),f(Qe,{key:0,ListordersManager:h.value},null,8,["ListordersManager"])):k("",!0)]),_:1})]),_:1})]))}};export{ta as default};

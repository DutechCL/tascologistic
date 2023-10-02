import{s as z,a as Z}from"./tabpanel.esm-8a8c3c21.js";import{b as i,h as E,o as n,i as c,w as d,f as l,g as L,t as U,a,u as e,s as C,j as J,c as P,F as R,k as ee,l as ae,m as le,p as te,r as oe,q as O,v as se}from"./index-ac6276ef.js";import{a as S,b as A,s,c as Q}from"./tag.esm-7ca8083a.js";import{_ as W,s as h}from"./multiselect.esm-175fe060.js";import{u as q}from"./OrdersApiService-dcf93110.js";import"./index.esm-49c9530e.js";const re=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),L(" Ver Documentos ")],-1),ie={class:"flex align-center mb-2"},de={class:"text-primary-900"},ne=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ue=l("div",{class:"mt-5"},[l("p",null," 2 archivos adjuntos "),l("div",{class:"flex"},[l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])]),l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])])])],-1),ce={__name:"DialogDetail",props:{order:String},setup(w){const y=w,m=i([]);return E(()=>{m.value=y.order}),(v,p)=>(n(),c(e(J),{modal:"",header:" ",style:{width:"70vw"}},{default:d(()=>[l("div",null,[re,l("div",ie,[l("p",de,[ne,L(U(m.value.DocNum),1)]),a(e(S),{icon:"pi pi-shopping-bag",value:m.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(S),{icon:"pi pi-user",value:m.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]),ue]),a(e(C),{label:"Cerrar",onClick:p[0]||(p[0]=b=>v.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},me=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),L(" Ver observaciones ")],-1),pe={class:"flex align-center mb-2"},ve={class:"text-primary-900"},fe=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),he={class:"mt-5"},ye=l("strong",null,"NOTA:",-1),be=["innerHTML"],ge={__name:"DialogDetailObservation",props:{order:String},setup(w){const y=w,m=i([]);E(()=>{m.value=y.order});const v=p=>p.replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(p,b)=>(n(),c(e(J),{modal:"",header:" ",style:{width:"70vw"}},{default:d(()=>[l("div",null,[me,l("div",pe,[l("p",ve,[fe,L(U(m.value.DocNum),1)]),a(e(S),{icon:"pi pi-shopping-cart",value:m.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(S),{icon:"pi pi-user",value:m.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),a(e(A),{tableStyle:"min-width: 50rem",filters:"filters",value:m.value.OrderItems},{default:d(()=>[a(e(s),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:d(g=>[l("p",null,U(g.data.Quantity)+" Unidad",1)]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),a(e(s),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),a(e(s),{headerClass:"!bg-primary-900",field:"Problems",header:"Problema"},{body:d(g=>[(n(!0),P(R,null,ee(g.data.Problems,(x,D)=>(n(),c(e(S),{key:D,value:x.ProblemName,rounded:"",class:"mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"]),l("div",he,[ye,L(),l("span",{innerHTML:v(m.value.Comments)},null,8,be)])]),a(e(C),{label:"Cerrar",onClick:b[0]||(b[0]=g=>p.visibleObservation=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}};const xe={class:"flex justify-between"},_e=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta ")],-1),De={key:0},Ce=l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ",-1),we={class:"flex"},Ve={class:"card flex justify-content-center"},Ne={class:"card flex justify-content-center"},Se={class:"card flex justify-content-center"},Le={class:"card flex justify-content-center mr-5"},Te={class:"card flex justify-content-center"},$e=l("div",null,[l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),ke={class:"flex"},Me={class:"card flex justify-content-center"},Oe={class:"card flex justify-content-center"},Ue={class:"card flex justify-content-center"},je={class:"card flex justify-content-center mr-5"},Ie={class:"card flex justify-content-center"},M=1,Pe={__name:"ToManage",props:{ListOrders:Array},setup(w){const y=w,m=ae(),v=le(),p=q(),b=i(!1),g=i(!1),x=i({}),D=i(!1),V=i([]),_=i([]),f=i([]),u=i([]),F=i([]),T=i(y.ListOrders.filter(r=>r.MethodShippingId===M)),$=i(y.ListOrders.filter(r=>r.MethodShippingId!==M)),j=i(T.value),I=i($.value);te(V,r=>{r.length===0?($.value=y.ListOrders.filter(o=>o.MethodShippingId!==M),T.value=y.ListOrders.filter(o=>o.MethodShippingId===M)):($.value=r.filter(o=>o.MethodShippingId!==M),T.value=r.filter(o=>o.MethodShippingId===M))});const B=r=>{x.value={...r},g.value=!0,D.value=!0},X=r=>{b.value=!0,x.value={...r},D.value=!0},G=r=>{r||(x.value={},D.value=!1)},H=i(!1),K=async r=>{H.value=!0;try{const{first:o,rows:k}=r,t=await p.getOrders({offset:o,limit:k});T.value=[...T.value,...t]}catch(o){console.error("Error al cargar más datos",o)}finally{H.value=!1}},Y=async r=>{m.require({message:"¿Estas seguro que deseas continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",accept:async()=>{let o=await p.postActionOrder(r.id,1);if(console.log(o),v.add({severity:o.status,summary:"",detail:o.message,life:3e3}),o.status==="success"){const k=$.value.findIndex(t=>t===r);k!==-1&&$.value.splice(k,1)}},reject:()=>{}})};return(r,o)=>{const k=oe("Toast");return n(),P(R,null,[l("div",xe,[_e,a(W)]),T.value.length>0?(n(),P("div",De,[Ce,l("div",we,[l("div",Ve,[(n(),c(e(h),{modelValue:V.value,"onUpdate:modelValue":o[0]||(o[0]=t=>V.value=t),options:j.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocNum},null,8,["modelValue","options"]))]),l("div",Ne,[(n(),c(e(h),{modelValue:_.value,"onUpdate:modelValue":o[1]||(o[1]=t=>_.value=t),options:j.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocDate},null,8,["modelValue","options"]))]),l("div",Se,[(n(),c(e(h),{modelValue:f.value,"onUpdate:modelValue":o[2]||(o[2]=t=>f.value=t),options:j.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocTime},null,8,["modelValue","options"]))]),l("div",Le,[a(e(h),{modelValue:u.value,"onUpdate:modelValue":o[3]||(o[3]=t=>u.value=t),options:j.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Te,[(n(),c(e(h),{modelValue:F.value,"onUpdate:modelValue":o[4]||(o[4]=t=>F.value=t),options:j.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{onOnPage:K,class:"mb-20",value:T.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:H.value},{default:d(()=>[a(e(s),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(t=>[L(" N° "+U(t.data.DocNum),1)]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(s),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:d(t=>[a(e(Q),{modelValue:t.data.DocTotal,"onUpdate:modelValue":N=>t.data.DocTotal=N,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(t=>[a(e(S),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(t=>[a(e(C),{icon:"pi pi-eye",onClick:N=>B(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(t=>[a(e(C),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value","loading"])])):O("",!0),$e,l("div",ke,[l("div",Me,[(n(),c(e(h),{modelValue:V.value,"onUpdate:modelValue":o[5]||(o[5]=t=>V.value=t),options:I.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocNum},null,8,["modelValue","options"]))]),l("div",Oe,[(n(),c(e(h),{modelValue:_.value,"onUpdate:modelValue":o[6]||(o[6]=t=>_.value=t),options:I.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocDate},null,8,["modelValue","options"]))]),l("div",Ue,[(n(),c(e(h),{modelValue:f.value,"onUpdate:modelValue":o[7]||(o[7]=t=>f.value=t),options:I.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocTime},null,8,["modelValue","options"]))]),l("div",je,[a(e(h),{modelValue:u.value,"onUpdate:modelValue":o[8]||(o[8]=t=>u.value=t),options:I.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Ie,[(n(),c(e(h),{modelValue:F.value,"onUpdate:modelValue":o[9]||(o[9]=t=>F.value=t),options:I.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{onOnPage:K,value:$.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:H.value},{default:d(()=>[a(e(s),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(t=>[L(" N° "+U(t.data.DocNum),1)]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(s),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:d(t=>[a(e(Q),{modelValue:t.data.DocTotal,"onUpdate:modelValue":N=>t.data.DocTotal=N,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(t=>[a(e(S),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:"Documentos"},{body:d(t=>[a(e(C),{icon:"pi pi-eye",onClick:N=>X(t.data),class:"!font-normal !text-primary-900",label:"Ver documentos",link:""},null,8,["onClick"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(t=>[t.data.OrderStatusId==4?(n(),c(e(C),{key:0,icon:"pi pi-eye",onClick:N=>B(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])):O("",!0)]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(t=>[a(e(C),{label:"Rechazar",onClick:o[10]||(o[10]=N=>r.visibleReport=!0),class:"!py-1.5 mr-3 !border-primary-900 !text-primary-900",outlined:""}),a(e(C),{label:"Autorizar",onClick:N=>Y(t.data),class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""},null,8,["onClick"])]),_:1})]),_:1},8,["value","loading"]),D.value?(n(),c(ce,{visible:b.value,"onUpdate:visible":[o[11]||(o[11]=t=>b.value=t),G],order:x.value,key:x.value.timestamp},null,8,["visible","order"])):O("",!0),D.value?(n(),c(ge,{visible:g.value,"onUpdate:visible":[o[12]||(o[12]=t=>g.value=t),G],order:x.value,key:x.value.timestamp},null,8,["visible","order"])):O("",!0),a(k),a(e(se))],64)}}};const Fe={class:"flex justify-between"},He=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta "),l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),Ae={class:"flex"},Ee={class:"card flex justify-content-center"},Re={class:"card flex justify-content-center"},qe={class:"card flex justify-content-center"},Be={class:"card flex justify-content-center mr-5"},Ge={class:"card flex justify-content-center"},Ke=1,ze={__name:"Managed",props:{ListordersManager:Array},setup(w){const y=w,m=q();console.log(m.listOrders);const v=i([]),p=i([]),b=i([]),g=i([]),x=i([]),D=i([]),V=i(y.ListordersManager.filter(_=>_.MethodShippingId!==Ke));return v.value=V.value,(_,f)=>(n(),P(R,null,[l("div",Fe,[He,a(W)]),l("div",Ae,[l("div",Ee,[(n(),c(e(h),{modelValue:p.value,"onUpdate:modelValue":f[0]||(f[0]=u=>p.value=u),options:v.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:_.DocNum},null,8,["modelValue","options"]))]),l("div",Re,[(n(),c(e(h),{modelValue:b.value,"onUpdate:modelValue":f[1]||(f[1]=u=>b.value=u),options:v.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:_.DocDate},null,8,["modelValue","options"]))]),l("div",qe,[(n(),c(e(h),{modelValue:g.value,"onUpdate:modelValue":f[2]||(f[2]=u=>g.value=u),options:v.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:_.DocTime},null,8,["modelValue","options"]))]),l("div",Be,[a(e(h),{modelValue:x.value,"onUpdate:modelValue":f[3]||(f[3]=u=>x.value=u),options:v.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Ge,[(n(),c(e(h),{modelValue:D.value,"onUpdate:modelValue":f[4]||(f[4]=u=>D.value=u),options:v.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:_.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{class:"mb-20",value:V.value,tableStyle:"min-width: 50rem"},{default:d(()=>[a(e(s),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(u=>[L(" N° "+U(u.data.DocNum),1)]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(s),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"}),a(e(s),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(u=>[a(e(S),{Tag:"",icon:"pi pi-shopping-cart",value:u.data.MethodShippingName,rounded:"",class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"},null,8,["value"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(u=>[a(e(C),{icon:"pi pi-eye",class:"!font-normal !text-primary-900",label:"Ver observación",link:""})]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(u=>[a(e(C),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value"])],64))}};const Qe={class:"px-3"},aa={__name:"SalesNotes",setup(w){const y=q(),m=i([]),v=i([]);i([]);const p=i(!1);return E(async()=>{m.value=await y.getOrders(),v.value=await y.getProcessedOrders(),p.value=!0}),(b,g)=>(n(),P("div",Qe,[a(e(Z),null,{default:d(()=>[a(e(z),{header:"Por gestionar"},{default:d(()=>[p.value?(n(),c(Pe,{key:0,ListOrders:m.value},null,8,["ListOrders"])):O("",!0)]),_:1}),a(e(z),{header:"Gestionadas"},{default:d(()=>[p.value?(n(),c(ze,{key:0,ListordersManager:v.value},null,8,["ListordersManager"])):O("",!0)]),_:1})]),_:1})]))}};export{aa as default};

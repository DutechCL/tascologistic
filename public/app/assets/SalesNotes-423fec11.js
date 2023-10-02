import{s as z,a as Z}from"./tabpanel.esm-efd29990.js";import{b as i,h as E,o as n,i as m,w as d,f as l,g as S,t as O,a,u as e,s as C,j as J,c as I,F as R,k as ee,l as ae,m as le,p as te,r as oe,q as M,v as se}from"./index-0f3da4aa.js";import{a as N,b as A,s,c as Q}from"./tag.esm-3e4b9afa.js";import{_ as W,s as f}from"./multiselect.esm-9d61928c.js";import{u as q}from"./OrdersApiService-e5853d36.js";import"./index.esm-52ae0ce6.js";const re=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),S(" Ver Documentos ")],-1),ie={class:"flex align-center mb-2"},de={class:"text-primary-900"},ne=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ue=l("div",{class:"mt-5"},[l("p",null," 2 archivos adjuntos "),l("div",{class:"flex"},[l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])]),l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])])])],-1),ce={__name:"DialogDetail",props:{order:String},setup(w){const h=w,u=i([]);return E(()=>{u.value=h.order}),(_,p)=>(n(),m(e(J),{modal:"",header:" ",style:{width:"70vw"}},{default:d(()=>[l("div",null,[re,l("div",ie,[l("p",de,[ne,S(O(u.value.DocNum),1)]),a(e(N),{icon:"pi pi-shopping-bag",value:u.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(N),{icon:"pi pi-user",value:u.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]),ue]),a(e(C),{label:"Cerrar",onClick:p[0]||(p[0]=y=>_.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},me=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),S(" Ver observaciones ")],-1),pe={class:"flex align-center mb-2"},ve={class:"text-primary-900"},fe=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),he={class:"mt-5"},ye=l("strong",null,"NOTA:",-1),be=["innerHTML"],ge={__name:"DialogDetailObservation",props:{order:String},setup(w){const h=w,u=i([]);E(()=>{u.value=h.order});const _=p=>p.replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(p,y)=>(n(),m(e(J),{modal:"",header:" ",style:{width:"70vw"}},{default:d(()=>[l("div",null,[me,l("div",pe,[l("p",ve,[fe,S(O(u.value.DocNum),1)]),a(e(N),{icon:"pi pi-shopping-cart",value:u.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(N),{icon:"pi pi-user",value:u.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),a(e(A),{tableStyle:"min-width: 50rem",filters:"filters",value:u.value.OrderItems},{default:d(()=>[a(e(s),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:d(b=>[l("p",null,O(b.data.Quantity)+" Unidad",1)]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),a(e(s),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),a(e(s),{headerClass:"!bg-primary-900",field:"Problems",header:"Problema"},{body:d(b=>[(n(!0),I(R,null,ee(b.data.Problems,(g,D)=>(n(),m(e(N),{key:D,value:g.ProblemName,rounded:"",class:"mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"]),l("div",he,[ye,S(),l("span",{innerHTML:_(u.value.Comments)},null,8,be)])]),a(e(C),{label:"Cerrar",onClick:y[0]||(y[0]=b=>p.visibleObservation=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}};const xe={class:"flex justify-between"},_e=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta ")],-1),De={key:0},Ce=l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ",-1),we={class:"flex"},Ve={class:"card flex justify-content-center"},Ne={class:"card flex justify-content-center"},Se={class:"card flex justify-content-center"},Le={class:"card flex justify-content-center mr-5"},Te={class:"card flex justify-content-center"},$e=l("div",null,[l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),ke={class:"flex"},Me={class:"card flex justify-content-center"},Oe={class:"card flex justify-content-center"},Ue={class:"card flex justify-content-center"},je={class:"card flex justify-content-center mr-5"},Ie={class:"card flex justify-content-center"},k=1,Pe={__name:"ToManage",props:{ListOrders:Array},setup(w){const h=w,u=ae(),_=le(),p=q(),y=i(!1),b=i(!1),g=i({}),D=i(!1),x=i([]),v=i([]),c=i([]),P=i([]),F=i([]),L=i(h.ListOrders.filter(r=>r.MethodShippingId===k)),T=i(h.ListOrders.filter(r=>r.MethodShippingId!==k)),U=i(L.value),j=i(T.value);te(x,r=>{r.length===0?(T.value=h.ListOrders.filter(o=>o.MethodShippingId!==k),L.value=h.ListOrders.filter(o=>o.MethodShippingId===k)):(T.value=r.filter(o=>o.MethodShippingId!==k),L.value=r.filter(o=>o.MethodShippingId===k))});const B=r=>{g.value={...r},b.value=!0,D.value=!0},X=r=>{y.value=!0,g.value={...r},D.value=!0},G=r=>{r||(g.value={},D.value=!1)},H=i(!1),K=async r=>{H.value=!0;try{const{first:o,rows:$}=r,t=await p.getOrders({offset:o,limit:$});L.value=[...L.value,...t]}catch(o){console.error("Error al cargar más datos",o)}finally{H.value=!1}},Y=async r=>{u.require({message:"¿Estas seguro que deseas continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",accept:async()=>{let o=await p.postActionOrder(r.id,1);if(console.log(o),_.add({severity:o.status,summary:"",detail:o.message,life:3e3}),o.status==="success"){const $=T.value.findIndex(t=>t===r);$!==-1&&T.value.splice($,1)}},reject:()=>{}})};return(r,o)=>{const $=oe("Toast");return n(),I(R,null,[l("div",xe,[_e,a(W)]),L.value.length>0?(n(),I("div",De,[Ce,l("div",we,[l("div",Ve,[(n(),m(e(f),{modelValue:x.value,"onUpdate:modelValue":o[0]||(o[0]=t=>x.value=t),options:U.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocNum},null,8,["modelValue","options"]))]),l("div",Ne,[(n(),m(e(f),{modelValue:v.value,"onUpdate:modelValue":o[1]||(o[1]=t=>v.value=t),options:U.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocDate},null,8,["modelValue","options"]))]),l("div",Se,[(n(),m(e(f),{modelValue:c.value,"onUpdate:modelValue":o[2]||(o[2]=t=>c.value=t),options:U.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocTime},null,8,["modelValue","options"]))]),l("div",Le,[a(e(f),{modelValue:P.value,"onUpdate:modelValue":o[3]||(o[3]=t=>P.value=t),options:U.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Te,[(n(),m(e(f),{modelValue:F.value,"onUpdate:modelValue":o[4]||(o[4]=t=>F.value=t),options:U.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{onOnPage:K,class:"mb-20",value:L.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:H.value},{default:d(()=>[a(e(s),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(t=>[S(" N° "+O(t.data.DocNum),1)]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(s),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:d(t=>[a(e(Q),{modelValue:t.data.DocTotal,"onUpdate:modelValue":V=>t.data.DocTotal=V,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(t=>[a(e(N),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(t=>[a(e(C),{icon:"pi pi-eye",onClick:V=>B(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(t=>[a(e(C),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value","loading"])])):M("",!0),$e,l("div",ke,[l("div",Me,[(n(),m(e(f),{modelValue:x.value,"onUpdate:modelValue":o[5]||(o[5]=t=>x.value=t),options:j.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocNum},null,8,["modelValue","options"]))]),l("div",Oe,[(n(),m(e(f),{modelValue:v.value,"onUpdate:modelValue":o[6]||(o[6]=t=>v.value=t),options:j.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocDate},null,8,["modelValue","options"]))]),l("div",Ue,[(n(),m(e(f),{modelValue:c.value,"onUpdate:modelValue":o[7]||(o[7]=t=>c.value=t),options:j.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocTime},null,8,["modelValue","options"]))]),l("div",je,[a(e(f),{modelValue:P.value,"onUpdate:modelValue":o[8]||(o[8]=t=>P.value=t),options:j.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Ie,[(n(),m(e(f),{modelValue:F.value,"onUpdate:modelValue":o[9]||(o[9]=t=>F.value=t),options:j.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:r.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{onOnPage:K,value:T.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:H.value},{default:d(()=>[a(e(s),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(t=>[S(" N° "+O(t.data.DocNum),1)]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(s),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:d(t=>[a(e(Q),{modelValue:t.data.DocTotal,"onUpdate:modelValue":V=>t.data.DocTotal=V,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(t=>[a(e(N),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:"Documentos"},{body:d(t=>[a(e(C),{icon:"pi pi-eye",onClick:V=>X(t.data),class:"!font-normal !text-primary-900",label:"Ver documentos",link:""},null,8,["onClick"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(t=>[t.data.OrderStatusId==4?(n(),m(e(C),{key:0,icon:"pi pi-eye",onClick:V=>B(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])):M("",!0)]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(t=>[a(e(C),{label:"Rechazar",onClick:o[10]||(o[10]=V=>r.visibleReport=!0),class:"!py-1.5 mr-3 !border-primary-900 !text-primary-900",outlined:""}),a(e(C),{label:"Autorizar",onClick:V=>Y(t.data),class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""},null,8,["onClick"])]),_:1})]),_:1},8,["value","loading"]),D.value?(n(),m(ce,{visible:y.value,"onUpdate:visible":[o[11]||(o[11]=t=>y.value=t),G],order:g.value,key:g.value.timestamp},null,8,["visible","order"])):M("",!0),D.value?(n(),m(ge,{visible:b.value,"onUpdate:visible":[o[12]||(o[12]=t=>b.value=t),G],order:g.value,key:g.value.timestamp},null,8,["visible","order"])):M("",!0),a($),a(e(se))],64)}}};const Fe={class:"flex justify-between"},He=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta "),l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),Ae={class:"flex"},Ee={class:"card flex justify-content-center"},Re={class:"card flex justify-content-center"},qe={class:"card flex justify-content-center"},Be={class:"card flex justify-content-center mr-5"},Ge={class:"card flex justify-content-center"},Ke=1,ze={__name:"Managed",props:{ListordersManager:Array},setup(w){const h=w;q();const u=i([]),_=i([]),p=i([]),y=i([]),b=i([]),g=i([]),D=i(h.ListordersManager.filter(x=>x.MethodShippingId!==Ke));return u.value=D.value,(x,v)=>(n(),I(R,null,[l("div",Fe,[He,a(W)]),l("div",Ae,[l("div",Ee,[(n(),m(e(f),{modelValue:_.value,"onUpdate:modelValue":v[0]||(v[0]=c=>_.value=c),options:u.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:x.DocNum},null,8,["modelValue","options"]))]),l("div",Re,[(n(),m(e(f),{modelValue:p.value,"onUpdate:modelValue":v[1]||(v[1]=c=>p.value=c),options:u.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:x.DocDate},null,8,["modelValue","options"]))]),l("div",qe,[(n(),m(e(f),{modelValue:y.value,"onUpdate:modelValue":v[2]||(v[2]=c=>y.value=c),options:u.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:x.DocTime},null,8,["modelValue","options"]))]),l("div",Be,[a(e(f),{modelValue:b.value,"onUpdate:modelValue":v[3]||(v[3]=c=>b.value=c),options:u.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Ge,[(n(),m(e(f),{modelValue:g.value,"onUpdate:modelValue":v[4]||(v[4]=c=>g.value=c),options:u.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:x.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{class:"mb-20",value:D.value,tableStyle:"min-width: 50rem"},{default:d(()=>[a(e(s),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(c=>[S(" N° "+O(c.data.DocNum),1)]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(s),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(s),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"}),a(e(s),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(c=>[a(e(N),{Tag:"",icon:"pi pi-shopping-cart",value:c.data.MethodShippingName,rounded:"",class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"},null,8,["value"])]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(c=>[a(e(C),{icon:"pi pi-eye",class:"!font-normal !text-primary-900",label:"Ver observación",link:""})]),_:1}),a(e(s),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(c=>[a(e(C),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value"])],64))}};const Qe={class:"px-3"},aa={__name:"SalesNotes",setup(w){const h=q(),u=i([]),_=i([]);i([]);const p=i(!1);return E(async()=>{u.value=await h.getOrders(),_.value=await h.getProcessedOrders(),p.value=!0}),(y,b)=>(n(),I("div",Qe,[a(e(Z),null,{default:d(()=>[a(e(z),{header:"Por gestionar"},{default:d(()=>[p.value?(n(),m(Pe,{key:0,ListOrders:u.value},null,8,["ListOrders"])):M("",!0)]),_:1}),a(e(z),{header:"Gestionadas"},{default:d(()=>[p.value?(n(),m(ze,{key:0,ListordersManager:_.value},null,8,["ListordersManager"])):M("",!0)]),_:1})]),_:1})]))}};export{aa as default};

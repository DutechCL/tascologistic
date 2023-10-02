import{s as R,a as W}from"./tabpanel.esm-e7c319f3.js";import{b as c,h as H,o as u,i as p,w as i,f as l,g as w,t as $,a,u as e,s as y,j as z,c as L,F as P,k as X,l as Y,m as Z,p as ee,r as ae,q as T,v as le}from"./index-cbe6456f.js";import{a as C,b as A,s as r,c as B}from"./tag.esm-feee6107.js";import{_ as K,s as b}from"./multiselect.esm-0e7d333b.js";import{u as G}from"./OrdersApiService-199a590f.js";import{s as S}from"./treeselect.esm-c738326c.js";import"./index.esm-08db483d.js";const te=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),w(" Ver Documentos ")],-1),oe={class:"flex align-center mb-2"},se={class:"text-primary-900"},re=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),de=l("div",{class:"mt-5"},[l("p",null," 2 archivos adjuntos "),l("div",{class:"flex"},[l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])]),l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])])])],-1),ie={__name:"DialogDetail",props:{order:String},setup(D){const v=D,s=c([]);return H(()=>{s.value=v.order}),(m,n)=>(u(),p(e(z),{modal:"",header:" ",style:{width:"70vw"}},{default:i(()=>[l("div",null,[te,l("div",oe,[l("p",se,[re,w($(s.value.DocNum),1)]),a(e(C),{icon:"pi pi-shopping-bag",value:s.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(C),{icon:"pi pi-user",value:s.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]),de]),a(e(y),{label:"Cerrar",onClick:n[0]||(n[0]=g=>m.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},ne=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),w(" Ver observaciones ")],-1),ue={class:"flex align-center mb-2"},me={class:"text-primary-900"},ce=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),pe={class:"mt-5"},fe=l("strong",null,"NOTA:",-1),ve=["innerHTML"],he={__name:"DialogDetailObservation",props:{order:String},setup(D){const v=D,s=c([]);H(()=>{s.value=v.order});const m=n=>n.replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(n,g)=>(u(),p(e(z),{modal:"",header:" ",style:{width:"70vw"}},{default:i(()=>[l("div",null,[ne,l("div",ue,[l("p",me,[ce,w($(s.value.DocNum),1)]),a(e(C),{icon:"pi pi-shopping-cart",value:s.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(C),{icon:"pi pi-user",value:s.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),a(e(A),{tableStyle:"min-width: 50rem",filters:"filters",value:s.value.OrderItems},{default:i(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:i(x=>[l("p",null,$(x.data.Quantity)+" Unidad",1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),a(e(r),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),a(e(r),{headerClass:"!bg-primary-900",field:"Problems",header:"Problema"},{body:i(x=>[(u(!0),L(P,null,X(x.data.Problems,(_,N)=>(u(),p(e(C),{key:N,value:_.ProblemName,rounded:"",class:"mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"]),l("div",pe,[fe,w(),l("span",{innerHTML:m(s.value.Comments)},null,8,ve)])]),a(e(y),{label:"Cerrar",onClick:g[0]||(g[0]=x=>n.visibleObservation=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}};const be={class:"flex justify-between"},ye=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta ")],-1),ge={key:0},_e=l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ",-1),xe={class:"flex"},Ve={class:"card flex justify-content-center"},Ce={class:"card flex justify-content-center"},we={class:"card flex justify-content-center"},De={class:"card flex justify-content-center mr-5"},Ne={class:"card flex justify-content-center"},$e=l("div",null,[l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),ke={class:"flex"},Se={class:"card flex justify-content-center"},Te={class:"card flex justify-content-center"},Le={class:"card flex justify-content-center"},Me={class:"card flex justify-content-center mr-5"},Ue={class:"card flex justify-content-center"},F=1,Oe={__name:"ToManage",props:{ListOrders:Array},setup(D){const v=D,s=Y(),m=Z(),n=G(),g=c(!1),x=c(!1),_=c({}),N=c(!1),k=c([]),M=c([]),U=c([]),O=c([]),j=c([]),h=c([v.ListOrders.filter(d=>d.MethodShippingId===F)]),f=c([v.ListOrders.filter(d=>d.MethodShippingId!==F)]);h.value=h.value[0],f.value=f.value[0],ee(k,d=>{f.value=d.filter(o=>o.MethodShippingId!==F),h.value=ndata.filter(o=>o.MethodShippingId===F)});const q=d=>{_.value={...d},x.value=!0,N.value=!0},Q=d=>{g.value=!0,_.value={...d},N.value=!0},E=d=>{d||(_.value={},N.value=!1)},J=async d=>{s.require({message:"¿Estas seguro que deseas continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",accept:async()=>{let o=await n.postActionOrder(d.id,1);if(m.add({severity:o.status,summary:"",detail:o.message,life:3e3}),o.status==="success"){const I=f.value.findIndex(t=>t===d);I!==-1&&f.value.splice(I,1)}},reject:()=>{}})};return(d,o)=>{const I=ae("Toast");return u(),L(P,null,[l("div",be,[ye,a(K)]),h.value.length>0?(u(),L("div",ge,[_e,l("div",xe,[l("div",Ve,[(u(),p(e(b),{modelValue:k.value,"onUpdate:modelValue":o[0]||(o[0]=t=>k.value=t),options:h.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocNum},null,8,["modelValue","options"]))]),l("div",Ce,[(u(),p(e(b),{modelValue:M.value,"onUpdate:modelValue":o[1]||(o[1]=t=>M.value=t),options:h.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocDate},null,8,["modelValue","options"]))]),l("div",we,[(u(),p(e(b),{modelValue:U.value,"onUpdate:modelValue":o[2]||(o[2]=t=>U.value=t),options:h.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocTime},null,8,["modelValue","options"]))]),l("div",De,[a(e(b),{modelValue:O.value,"onUpdate:modelValue":o[3]||(o[3]=t=>O.value=t),options:h.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Ne,[(u(),p(e(b),{modelValue:j.value,"onUpdate:modelValue":o[4]||(o[4]=t=>j.value=t),options:h.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{class:"mb-20",value:h.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:d.loading},{default:i(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:i(t=>[w(" N° "+$(t.data.DocNum),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:i(t=>[a(e(B),{modelValue:t.data.DocTotal,"onUpdate:modelValue":V=>t.data.DocTotal=V,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:i(t=>[a(e(C),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:i(t=>[a(e(y),{icon:"pi pi-eye",onClick:V=>q(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:i(t=>[a(e(y),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value","loading"])])):T("",!0),$e,l("div",ke,[l("div",Se,[(u(),p(e(b),{modelValue:k.value,"onUpdate:modelValue":o[5]||(o[5]=t=>k.value=t),options:f.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocNum},null,8,["modelValue","options"]))]),l("div",Te,[(u(),p(e(b),{modelValue:M.value,"onUpdate:modelValue":o[6]||(o[6]=t=>M.value=t),options:f.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocDate},null,8,["modelValue","options"]))]),l("div",Le,[(u(),p(e(b),{modelValue:U.value,"onUpdate:modelValue":o[7]||(o[7]=t=>U.value=t),options:f.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocTime},null,8,["modelValue","options"]))]),l("div",Me,[a(e(b),{modelValue:O.value,"onUpdate:modelValue":o[8]||(o[8]=t=>O.value=t),options:f.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",Ue,[(u(),p(e(b),{modelValue:j.value,"onUpdate:modelValue":o[9]||(o[9]=t=>j.value=t),options:f.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{value:f.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:d.loading},{default:i(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:i(t=>[w(" N° "+$(t.data.DocNum),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:i(t=>[a(e(B),{modelValue:t.data.DocTotal,"onUpdate:modelValue":V=>t.data.DocTotal=V,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:i(t=>[a(e(C),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:"Documentos"},{body:i(t=>[a(e(y),{icon:"pi pi-eye",onClick:V=>Q(t.data),class:"!font-normal !text-primary-900",label:"Ver documentos",link:""},null,8,["onClick"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:i(t=>[t.data.OrderStatusId==4?(u(),p(e(y),{key:0,icon:"pi pi-eye",onClick:V=>q(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])):T("",!0)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:i(t=>[a(e(y),{label:"Rechazar",onClick:o[10]||(o[10]=V=>d.visibleReport=!0),class:"!py-1.5 mr-3 !border-primary-900 !text-primary-900",outlined:""}),a(e(y),{label:"Autorizar",onClick:V=>J(t.data),class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""},null,8,["onClick"])]),_:1})]),_:1},8,["value","loading"]),N.value?(u(),p(ie,{visible:g.value,"onUpdate:visible":[o[11]||(o[11]=t=>g.value=t),E],order:_.value,key:_.value.timestamp},null,8,["visible","order"])):T("",!0),N.value?(u(),p(he,{visible:x.value,"onUpdate:visible":[o[12]||(o[12]=t=>x.value=t),E],order:_.value,key:_.value.timestamp},null,8,["visible","order"])):T("",!0),a(I),a(e(le))],64)}}},je={class:"flex justify-between"},Ie=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta "),l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ")],-1),Fe={class:"flex"},Ae={class:"card flex justify-content-center"},He={class:"card flex justify-content-center"},Pe={class:"card flex justify-content-center"},qe={class:"card flex justify-content-center mr-20"},Ee={class:"card flex justify-content-center"},Re={__name:"Managed",setup(D){const v=c([{statusId:1,note:"4567892",date:"19/04/2023",hour:"10:26",client:"Daniel Ramirez Palma",status:"En espera",totalAmount:"$200",btnInfo:"Informado"},{statusId:2,note:"0998764",date:"19/04/2023",hour:"10:58",client:"Lucas Sandoval",status:"En preparación",totalAmount:"$300"}]);return(s,m)=>(u(),L(P,null,[l("div",je,[Ie,a(K)]),l("div",Fe,[l("div",Ae,[a(e(S),{modelValue:s.selectedValue,"onUpdate:modelValue":m[0]||(m[0]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",He,[a(e(S),{modelValue:s.selectedValue,"onUpdate:modelValue":m[1]||(m[1]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",Pe,[a(e(S),{modelValue:s.selectedValue,"onUpdate:modelValue":m[2]||(m[2]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",qe,[a(e(S),{modelValue:s.selectedValue,"onUpdate:modelValue":m[3]||(m[3]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",Ee,[a(e(S),{modelValue:s.selectedValue,"onUpdate:modelValue":m[4]||(m[4]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Total",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),a(e(A),{class:"mb-20",value:v.value,tableStyle:"min-width: 50rem"},{default:i(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"note",header:"Nota de venta"},{body:i(n=>[w(" N° "+$(n.data.note),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"date",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"hour",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"client",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Monto total"}),a(e(r),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Método entrega"},{body:i(n=>[a(e(C),{Tag:"",icon:"pi pi-shopping-cart",value:"Aquí",rounded:"",class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"})]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:i(n=>[a(e(y),{icon:"pi pi-eye",class:"!font-normal !text-primary-900",label:"Ver observación",link:""})]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:i(n=>[a(e(y),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value"])],64))}};const Be={class:"px-3"},Ye={__name:"SalesNotes",setup(D){const v=G(),s=c([]),m=c(!1);return H(async()=>{s.value=await v.getOrders(),m.value=!0}),(n,g)=>(u(),L("div",Be,[a(e(W),null,{default:i(()=>[a(e(R),{header:"Por gestionar"},{default:i(()=>[m.value?(u(),p(Oe,{key:0,ListOrders:s.value},null,8,["ListOrders"])):T("",!0)]),_:1}),a(e(R),{header:"Gestionadas"},{default:i(()=>[a(Re)]),_:1})]),_:1})]))}};export{Ye as default};

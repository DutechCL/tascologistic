import{s as B,a as Y}from"./tabpanel.esm-7f314828.js";import{b as m,h as P,o as u,i as p,w as i,f as l,g as w,t as N,a,u as e,s as y,j as K,c as L,F as q,k as Z,l as ee,m as ae,p as le,r as te,q as T,v as oe}from"./index-fe5f08c5.js";import{a as C,b as A,s as r,c as z}from"./tag.esm-1097d51e.js";import{_ as G,s as b}from"./multiselect.esm-55af8b9a.js";import{u as Q}from"./OrdersApiService-b9210526.js";import{s as S}from"./treeselect.esm-a11742d6.js";import"./index.esm-41137fc6.js";const se=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),w(" Ver Documentos ")],-1),re={class:"flex align-center mb-2"},de={class:"text-primary-900"},ie=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ne=l("div",{class:"mt-5"},[l("p",null," 2 archivos adjuntos "),l("div",{class:"flex"},[l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])]),l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])])])],-1),ue={__name:"DialogDetail",props:{order:String},setup(D){const h=D,s=m([]);return P(()=>{s.value=h.order}),(c,n)=>(u(),p(e(K),{modal:"",header:" ",style:{width:"70vw"}},{default:i(()=>[l("div",null,[se,l("div",re,[l("p",de,[ie,w(N(s.value.DocNum),1)]),a(e(C),{icon:"pi pi-shopping-bag",value:s.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(C),{icon:"pi pi-user",value:s.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]),ne]),a(e(y),{label:"Cerrar",onClick:n[0]||(n[0]=g=>c.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},ce=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),w(" Ver observaciones ")],-1),me={class:"flex align-center mb-2"},pe={class:"text-primary-900"},fe=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ve={class:"mt-5"},he=l("strong",null,"NOTA:",-1),be=["innerHTML"],ye={__name:"DialogDetailObservation",props:{order:String},setup(D){const h=D,s=m([]);P(()=>{s.value=h.order});const c=n=>n.replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(n,g)=>(u(),p(e(K),{modal:"",header:" ",style:{width:"70vw"}},{default:i(()=>[l("div",null,[ce,l("div",me,[l("p",pe,[fe,w(N(s.value.DocNum),1)]),a(e(C),{icon:"pi pi-shopping-cart",value:s.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),a(e(C),{icon:"pi pi-user",value:s.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),a(e(A),{tableStyle:"min-width: 50rem",filters:"filters",value:s.value.OrderItems},{default:i(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:i(x=>[l("p",null,N(x.data.Quantity)+" Unidad",1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),a(e(r),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),a(e(r),{headerClass:"!bg-primary-900",field:"Problems",header:"Problema"},{body:i(x=>[(u(!0),L(q,null,Z(x.data.Problems,(_,H)=>(u(),p(e(C),{key:H,value:_.ProblemName,rounded:"",class:"mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"]),l("div",ve,[he,w(),l("span",{innerHTML:c(s.value.Comments)},null,8,be)])]),a(e(y),{label:"Cerrar",onClick:g[0]||(g[0]=x=>n.visibleObservation=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}};const ge={class:"flex justify-between"},_e=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta ")],-1),xe={key:0},Ve=l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ",-1),Ce={class:"flex"},we={class:"card flex justify-content-center"},De={class:"card flex justify-content-center"},Ne={class:"card flex justify-content-center"},$e={class:"card flex justify-content-center mr-5"},ke={class:"card flex justify-content-center"},Se=l("div",null,[l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),Te={class:"flex"},Le={class:"card flex justify-content-center"},Me={class:"card flex justify-content-center"},Ue={class:"card flex justify-content-center"},Oe={class:"card flex justify-content-center mr-5"},je={class:"card flex justify-content-center"},F=1,Ie={__name:"ToManage",props:{ListOrders:Array},setup(D){const h=D,s=ee(),c=ae(),n=Q(),g=m(!1),x=m(!1),_=m({}),H=m([]),J=m([]),$=m(!1),k=m([]),M=m([]),U=m([]),O=m([]),j=m([]),v=m([h.ListOrders.filter(d=>d.MethodShippingId===F)]),f=m([h.ListOrders.filter(d=>d.MethodShippingId!==F)]);v.value=v.value[0],f.value=f.value[0],H.value=v.value,J.value=f.value,le(k,d=>{f.value=d.filter(o=>o.MethodShippingId!==F),v.value=ndata.filter(o=>o.MethodShippingId===F)});const E=d=>{_.value={...d},x.value=!0,$.value=!0},W=d=>{g.value=!0,_.value={...d},$.value=!0},R=d=>{d||(_.value={},$.value=!1)},X=async d=>{s.require({message:"¿Estas seguro que deseas continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",accept:async()=>{let o=await n.postActionOrder(d.id,1);if(c.add({severity:o.status,summary:"",detail:o.message,life:3e3}),o.status==="success"){const I=f.value.findIndex(t=>t===d);I!==-1&&f.value.splice(I,1)}},reject:()=>{}})};return(d,o)=>{const I=te("Toast");return u(),L(q,null,[l("div",ge,[_e,a(G)]),v.value.length>0?(u(),L("div",xe,[Ve,l("div",Ce,[l("div",we,[(u(),p(e(b),{modelValue:k.value,"onUpdate:modelValue":o[0]||(o[0]=t=>k.value=t),options:v.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocNum},null,8,["modelValue","options"]))]),l("div",De,[(u(),p(e(b),{modelValue:M.value,"onUpdate:modelValue":o[1]||(o[1]=t=>M.value=t),options:v.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocDate},null,8,["modelValue","options"]))]),l("div",Ne,[(u(),p(e(b),{modelValue:U.value,"onUpdate:modelValue":o[2]||(o[2]=t=>U.value=t),options:v.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocTime},null,8,["modelValue","options"]))]),l("div",$e,[a(e(b),{modelValue:O.value,"onUpdate:modelValue":o[3]||(o[3]=t=>O.value=t),options:v.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",ke,[(u(),p(e(b),{modelValue:j.value,"onUpdate:modelValue":o[4]||(o[4]=t=>j.value=t),options:v.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{class:"mb-20",value:v.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:d.loading},{default:i(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:i(t=>[w(" N° "+N(t.data.DocNum),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:i(t=>[a(e(z),{modelValue:t.data.DocTotal,"onUpdate:modelValue":V=>t.data.DocTotal=V,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:i(t=>[a(e(C),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:i(t=>[a(e(y),{icon:"pi pi-eye",onClick:V=>E(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:i(t=>[a(e(y),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value","loading"])])):T("",!0),Se,l("div",Te,[l("div",Le,[(u(),p(e(b),{modelValue:k.value,"onUpdate:modelValue":o[5]||(o[5]=t=>k.value=t),options:f.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocNum},null,8,["modelValue","options"]))]),l("div",Me,[(u(),p(e(b),{modelValue:M.value,"onUpdate:modelValue":o[6]||(o[6]=t=>M.value=t),options:f.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocDate},null,8,["modelValue","options"]))]),l("div",Ue,[(u(),p(e(b),{modelValue:U.value,"onUpdate:modelValue":o[7]||(o[7]=t=>U.value=t),options:f.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocTime},null,8,["modelValue","options"]))]),l("div",Oe,[a(e(b),{modelValue:O.value,"onUpdate:modelValue":o[8]||(o[8]=t=>O.value=t),options:f.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"}},null,8,["modelValue","options"])]),l("div",je,[(u(),p(e(b),{modelValue:j.value,"onUpdate:modelValue":o[9]||(o[9]=t=>j.value=t),options:f.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",display:"chip",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none","max-width":"300px"},key:d.DocTotal},null,8,["modelValue","options"]))])]),a(e(A),{value:f.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:d.loading},{default:i(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:i(t=>[w(" N° "+N(t.data.DocNum),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:i(t=>[a(e(z),{modelValue:t.data.DocTotal,"onUpdate:modelValue":V=>t.data.DocTotal=V,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:i(t=>[a(e(C),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:"Documentos"},{body:i(t=>[a(e(y),{icon:"pi pi-eye",onClick:V=>W(t.data),class:"!font-normal !text-primary-900",label:"Ver documentos",link:""},null,8,["onClick"])]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:i(t=>[t.data.OrderStatusId==4?(u(),p(e(y),{key:0,icon:"pi pi-eye",onClick:V=>E(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])):T("",!0)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:i(t=>[a(e(y),{label:"Rechazar",onClick:o[10]||(o[10]=V=>d.visibleReport=!0),class:"!py-1.5 mr-3 !border-primary-900 !text-primary-900",outlined:""}),a(e(y),{label:"Autorizar",onClick:V=>X(t.data),class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""},null,8,["onClick"])]),_:1})]),_:1},8,["value","loading"]),$.value?(u(),p(ue,{visible:g.value,"onUpdate:visible":[o[11]||(o[11]=t=>g.value=t),R],order:_.value,key:_.value.timestamp},null,8,["visible","order"])):T("",!0),$.value?(u(),p(ye,{visible:x.value,"onUpdate:visible":[o[12]||(o[12]=t=>x.value=t),R],order:_.value,key:_.value.timestamp},null,8,["visible","order"])):T("",!0),a(I),a(e(oe))],64)}}},Fe={class:"flex justify-between"},Ae=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta "),l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ")],-1),He={class:"flex"},Pe={class:"card flex justify-content-center"},qe={class:"card flex justify-content-center"},Ee={class:"card flex justify-content-center"},Re={class:"card flex justify-content-center mr-20"},Be={class:"card flex justify-content-center"},ze={__name:"Managed",setup(D){const h=m([{statusId:1,note:"4567892",date:"19/04/2023",hour:"10:26",client:"Daniel Ramirez Palma",status:"En espera",totalAmount:"$200",btnInfo:"Informado"},{statusId:2,note:"0998764",date:"19/04/2023",hour:"10:58",client:"Lucas Sandoval",status:"En preparación",totalAmount:"$300"}]);return(s,c)=>(u(),L(q,null,[l("div",Fe,[Ae,a(G)]),l("div",He,[l("div",Pe,[a(e(S),{modelValue:s.selectedValue,"onUpdate:modelValue":c[0]||(c[0]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",qe,[a(e(S),{modelValue:s.selectedValue,"onUpdate:modelValue":c[1]||(c[1]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",Ee,[a(e(S),{modelValue:s.selectedValue,"onUpdate:modelValue":c[2]||(c[2]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",Re,[a(e(S),{modelValue:s.selectedValue,"onUpdate:modelValue":c[3]||(c[3]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",Be,[a(e(S),{modelValue:s.selectedValue,"onUpdate:modelValue":c[4]||(c[4]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Total",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),a(e(A),{class:"mb-20",value:h.value,tableStyle:"min-width: 50rem"},{default:i(()=>[a(e(r),{headerClass:"!bg-primary-900",field:"note",header:"Nota de venta"},{body:i(n=>[w(" N° "+N(n.data.note),1)]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"date",header:"Fecha"}),a(e(r),{headerClass:"!bg-primary-900",field:"hour",header:"Hora"}),a(e(r),{headerClass:"!bg-primary-900",field:"client",header:"Cliente"}),a(e(r),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Monto total"}),a(e(r),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Método entrega"},{body:i(n=>[a(e(C),{Tag:"",icon:"pi pi-shopping-cart",value:"Aquí",rounded:"",class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"})]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:i(n=>[a(e(y),{icon:"pi pi-eye",class:"!font-normal !text-primary-900",label:"Ver observación",link:""})]),_:1}),a(e(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:i(n=>[a(e(y),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value"])],64))}};const Ke={class:"px-3"},ea={__name:"SalesNotes",setup(D){const h=Q(),s=m([]),c=m(!1);return P(async()=>{s.value=await h.getOrders(),c.value=!0}),(n,g)=>(u(),L("div",Ke,[a(e(Y),null,{default:i(()=>[a(e(B),{header:"Por gestionar"},{default:i(()=>[c.value?(u(),p(Ie,{key:0,ListOrders:s.value},null,8,["ListOrders"])):T("",!0)]),_:1}),a(e(B),{header:"Gestionadas"},{default:i(()=>[a(ze)]),_:1})]),_:1})]))}};export{ea as default};

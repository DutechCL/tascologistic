import{s as A,a as K}from"./tabpanel.esm-4672fb56.js";import{b as p,h as O,o as c,i as _,w as d,f as a,g as w,t as N,a as l,u as e,s as v,j as q,c as k,F as j,k as G,l as Q,m as J,r as W,p as S,q as X}from"./index-2f8a48eb.js";import{a as V,b as U,s as i,c as H}from"./tag.esm-d99fd4a7.js";import{_ as E,s as b}from"./multiselect.esm-a45414cb.js";import{u as R}from"./OrdersApiService-2db9d3d1.js";import{s as $}from"./treeselect.esm-a45e3ae8.js";import"./index.esm-11358694.js";const Y=a("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[a("i",{class:"pi pi-eye !text-xl"}),w(" Ver Documentos ")],-1),Z={class:"flex align-center mb-2"},ee={class:"text-primary-900"},le=a("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ae=a("div",{class:"mt-5"},[a("p",null," 2 archivos adjuntos "),a("div",{class:"flex"},[a("div",{class:"mt-2 mr-5",width:"200",height:"180"},[a("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),a("div",{class:"bg-gray-100"},[a("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),a("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])]),a("div",{class:"mt-2 mr-5",width:"200",height:"180"},[a("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),a("div",{class:"bg-gray-100"},[a("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),a("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])])])],-1),te={__name:"DialogDetail",props:{order:String},setup(x){const f=x,s=p([]);return O(()=>{s.value=f.order}),(u,n)=>(c(),_(e(q),{modal:"",header:" ",style:{width:"70vw"}},{default:d(()=>[a("div",null,[Y,a("div",Z,[a("p",ee,[le,w(N(s.value.DocNum),1)]),l(e(V),{icon:"pi pi-shopping-bag",value:s.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),l(e(V),{icon:"pi pi-user",value:s.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]),ae]),l(e(v),{label:"Cerrar",onClick:n[0]||(n[0]=h=>u.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},oe=a("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[a("i",{class:"pi pi-eye !text-xl"}),w(" Ver observaciones ")],-1),se={class:"flex align-center mb-2"},re={class:"text-primary-900"},ie=a("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),de={class:"mt-5"},ne=a("strong",null,"NOTA:",-1),ue=["innerHTML"],me={__name:"DialogDetailObservation",props:{order:String},setup(x){const f=x,s=p([]);O(()=>{s.value=f.order});const u=n=>n.replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(n,h)=>(c(),_(e(q),{modal:"",header:" ",style:{width:"70vw"}},{default:d(()=>[a("div",null,[oe,a("div",se,[a("p",re,[ie,w(N(s.value.DocNum),1)]),l(e(V),{icon:"pi pi-shopping-cart",value:s.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),l(e(V),{icon:"pi pi-user",value:s.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),l(e(U),{tableStyle:"min-width: 50rem",filters:"filters",value:s.value.OrderItems},{default:d(()=>[l(e(i),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:d(g=>[a("p",null,N(g.data.Quantity)+" Unidad",1)]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),l(e(i),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),l(e(i),{headerClass:"!bg-primary-900",field:"Problems",header:"Problema"},{body:d(g=>[(c(!0),k(j,null,G(g.data.Problems,(y,D)=>(c(),_(e(V),{key:D,value:y.ProblemName,rounded:"",class:"mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"]),a("div",de,[ne,w(),a("span",{innerHTML:u(s.value.Comments)},null,8,ue)])]),l(e(v),{label:"Cerrar",onClick:h[0]||(h[0]=g=>n.visibleObservation=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}};const ce={class:"flex justify-between"},pe=a("div",null,[a("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta ")],-1),fe={key:0},be=a("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ",-1),ve={class:"flex"},he={class:"card flex justify-content-center"},ye={class:"card flex justify-content-center"},ge={class:"card flex justify-content-center"},Ce={class:"card flex justify-content-center mr-5"},_e={class:"card flex justify-content-center"},Ve=a("div",null,[a("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),we={class:"flex"},xe={class:"card flex justify-content-center"},De={class:"card flex justify-content-center"},Ne={class:"card flex justify-content-center"},$e={class:"card flex justify-content-center mr-5"},Se={class:"card flex justify-content-center"},P=1,ke={__name:"ToManage",props:{ListOrders:Array},setup(x){const f=x,s=Q(),u=J(),n=R(),h=p(!1),g=p(!1),y=p({}),D=p(!1),M=p([]);console.log(M);const L=p([f.ListOrders.filter(o=>o.MethodShippingId===P)]),m=p([f.ListOrders.filter(o=>o.MethodShippingId!==P)]);L.value=L.value[0],m.value=m.value[0];const I=o=>{y.value={...o},g.value=!0,D.value=!0},B=o=>{h.value=!0,y.value={...o},D.value=!0},F=o=>{o||(y.value={},D.value=!1)},z=async o=>{s.require({message:"¿Estas seguro que deseas continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",accept:async()=>{let r=await n.postActionOrder(o.id,1);if(u.add({severity:r.status,summary:"",detail:r.message,life:3e3}),r.status==="success"){const T=m.value.findIndex(t=>t===o);T!==-1&&m.value.splice(T,1)}},reject:()=>{}})};return(o,r)=>{const T=W("Toast");return c(),k(j,null,[a("div",ce,[pe,l(E)]),L.value.length>0?(c(),k("div",fe,[be,a("div",ve,[a("div",he,[(c(),_(e(b),{modelValue:M.value,"onUpdate:modelValue":r[0]||(r[0]=t=>M.value=t),options:m.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"},key:o.DocNum},null,8,["modelValue","options"]))]),a("div",ye,[l(e(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[1]||(r[1]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),a("div",ge,[l(e(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[2]||(r[2]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),a("div",Ce,[l(e(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[3]||(r[3]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),a("div",_e,[l(e(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[4]||(r[4]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])])]),l(e(U),{class:"mb-20",value:L.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:o.loading},{default:d(()=>[l(e(i),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(t=>[w(" N° "+N(t.data.DocNum),1)]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),l(e(i),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),l(e(i),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),l(e(i),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:d(t=>[l(e(H),{modelValue:t.data.DocTotal,"onUpdate:modelValue":C=>t.data.DocTotal=C,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(t=>[l(e(V),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(t=>[l(e(v),{icon:"pi pi-eye",onClick:C=>I(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(t=>[l(e(v),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value","loading"])])):S("",!0),Ve,a("div",we,[a("div",xe,[l(e(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[5]||(r[5]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),a("div",De,[l(e(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[6]||(r[6]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),a("div",Ne,[l(e(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[7]||(r[7]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),a("div",$e,[l(e(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[8]||(r[8]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),a("div",Se,[l(e(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[9]||(r[9]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])])]),l(e(U),{value:m.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:o.loading},{default:d(()=>[l(e(i),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(t=>[w(" N° "+N(t.data.DocNum),1)]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),l(e(i),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),l(e(i),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),l(e(i),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:d(t=>[l(e(H),{modelValue:t.data.DocTotal,"onUpdate:modelValue":C=>t.data.DocTotal=C,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(t=>[l(e(V),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"note",header:"Documentos"},{body:d(t=>[l(e(v),{icon:"pi pi-eye",onClick:C=>B(t.data),class:"!font-normal !text-primary-900",label:"Ver documentos",link:""},null,8,["onClick"])]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(t=>[t.data.OrderStatusId==4?(c(),_(e(v),{key:0,icon:"pi pi-eye",onClick:C=>I(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])):S("",!0)]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(t=>[l(e(v),{label:"Rechazar",onClick:r[10]||(r[10]=C=>o.visibleReport=!0),class:"!py-1.5 mr-3 !border-primary-900 !text-primary-900",outlined:""}),l(e(v),{label:"Autorizar",onClick:C=>z(t.data),class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""},null,8,["onClick"])]),_:1})]),_:1},8,["value","loading"]),D.value?(c(),_(te,{visible:h.value,"onUpdate:visible":[r[11]||(r[11]=t=>h.value=t),F],order:y.value,key:y.value.timestamp},null,8,["visible","order"])):S("",!0),D.value?(c(),_(me,{visible:g.value,"onUpdate:visible":[r[12]||(r[12]=t=>g.value=t),F],order:y.value,key:y.value.timestamp},null,8,["visible","order"])):S("",!0),l(T),l(e(X))],64)}}},Le={class:"flex justify-between"},Te=a("div",null,[a("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta "),a("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ")],-1),Ue={class:"flex"},Me={class:"card flex justify-content-center"},Oe={class:"card flex justify-content-center"},je={class:"card flex justify-content-center"},Ie={class:"card flex justify-content-center mr-20"},Fe={class:"card flex justify-content-center"},Ae={__name:"Managed",setup(x){const f=p([{statusId:1,note:"4567892",date:"19/04/2023",hour:"10:26",client:"Daniel Ramirez Palma",status:"En espera",totalAmount:"$200",btnInfo:"Informado"},{statusId:2,note:"0998764",date:"19/04/2023",hour:"10:58",client:"Lucas Sandoval",status:"En preparación",totalAmount:"$300"}]);return(s,u)=>(c(),k(j,null,[a("div",Le,[Te,l(E)]),a("div",Ue,[a("div",Me,[l(e($),{modelValue:s.selectedValue,"onUpdate:modelValue":u[0]||(u[0]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",Oe,[l(e($),{modelValue:s.selectedValue,"onUpdate:modelValue":u[1]||(u[1]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",je,[l(e($),{modelValue:s.selectedValue,"onUpdate:modelValue":u[2]||(u[2]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",Ie,[l(e($),{modelValue:s.selectedValue,"onUpdate:modelValue":u[3]||(u[3]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",Fe,[l(e($),{modelValue:s.selectedValue,"onUpdate:modelValue":u[4]||(u[4]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Total",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),l(e(U),{class:"mb-20",value:f.value,tableStyle:"min-width: 50rem"},{default:d(()=>[l(e(i),{headerClass:"!bg-primary-900",field:"note",header:"Nota de venta"},{body:d(n=>[w(" N° "+N(n.data.note),1)]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"date",header:"Fecha"}),l(e(i),{headerClass:"!bg-primary-900",field:"hour",header:"Hora"}),l(e(i),{headerClass:"!bg-primary-900",field:"client",header:"Cliente"}),l(e(i),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Monto total"}),l(e(i),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Método entrega"},{body:d(n=>[l(e(V),{Tag:"",icon:"pi pi-shopping-cart",value:"Aquí",rounded:"",class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"})]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(n=>[l(e(v),{icon:"pi pi-eye",class:"!font-normal !text-primary-900",label:"Ver observación",link:""})]),_:1}),l(e(i),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(n=>[l(e(v),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value"])],64))}};const He={class:"px-3"},Ge={__name:"SalesNotes",setup(x){const f=R(),s=p([]),u=p(!1);return O(async()=>{s.value=await f.getOrders(),u.value=!0}),(n,h)=>(c(),k("div",He,[l(e(K),null,{default:d(()=>[l(e(A),{header:"Por gestionar"},{default:d(()=>[u.value?(c(),_(ke,{key:0,ListOrders:s.value},null,8,["ListOrders"])):S("",!0)]),_:1}),l(e(A),{header:"Gestionadas"},{default:d(()=>[l(Ae)]),_:1})]),_:1})]))}};export{Ge as default};

import{s as F,a as z}from"./tabpanel.esm-40a1b0b4.js";import{b as c,h as M,o as p,i as D,w as d,f as l,g as V,t as N,a as e,u as a,s as v,j as P,c as k,F as O,k as K,l as G,m as Q,r as J,p as S,q as W}from"./index-e3ebb248.js";import{a as _,b as U,s as i,c as A}from"./tag.esm-0406cc2b.js";import{_ as q,s as b}from"./multiselect.esm-55f46bc7.js";import{u as E}from"./OrdersApiService-01725cb3.js";import{s as $}from"./treeselect.esm-41e8db41.js";import"./index.esm-044fac88.js";const X=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),V(" Ver Documentos ")],-1),Y={class:"flex align-center mb-2"},Z={class:"text-primary-900"},ee=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ae=l("div",{class:"mt-5"},[l("p",null," 2 archivos adjuntos "),l("div",{class:"flex"},[l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])]),l("div",{class:"mt-2 mr-5",width:"200",height:"180"},[l("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),l("div",{class:"bg-gray-100"},[l("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),l("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])])])],-1),le={__name:"DialogDetail",props:{order:String},setup(w){const f=w,s=c([]);return M(()=>{s.value=f.order}),(u,n)=>(p(),D(a(P),{modal:"",header:" ",style:{width:"70vw"}},{default:d(()=>[l("div",null,[X,l("div",Y,[l("p",Z,[ee,V(N(s.value.DocNum),1)]),e(a(_),{icon:"pi pi-shopping-bag",value:s.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),e(a(_),{icon:"pi pi-user",value:s.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]),ae]),e(a(v),{label:"Cerrar",onClick:n[0]||(n[0]=h=>u.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},te=l("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),V(" Ver observaciones ")],-1),oe={class:"flex align-center mb-2"},se={class:"text-primary-900"},re=l("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ie={class:"mt-5"},de=l("strong",null,"NOTA:",-1),ne=["innerHTML"],ue={__name:"DialogDetailObservation",props:{order:String},setup(w){const f=w,s=c([]);M(()=>{s.value=f.order});const u=n=>n.replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(n,h)=>(p(),D(a(P),{modal:"",header:" ",style:{width:"70vw"}},{default:d(()=>[l("div",null,[te,l("div",oe,[l("p",se,[re,V(N(s.value.DocNum),1)]),e(a(_),{icon:"pi pi-shopping-cart",value:s.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),e(a(_),{icon:"pi pi-user",value:s.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),e(a(U),{tableStyle:"min-width: 50rem",filters:"filters",value:s.value.OrderItems},{default:d(()=>[e(a(i),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:d(g=>[l("p",null,N(g.data.Quantity)+" Unidad",1)]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),e(a(i),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),e(a(i),{headerClass:"!bg-primary-900",field:"Problems",header:"Problema"},{body:d(g=>[(p(!0),k(O,null,K(g.data.Problems,(y,x)=>(p(),D(a(_),{key:x,value:y.ProblemName,rounded:"",class:"mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"]),l("div",ie,[de,V(),l("span",{innerHTML:u(s.value.Comments)},null,8,ne)])]),e(a(v),{label:"Cerrar",onClick:h[0]||(h[0]=g=>n.visibleObservation=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}};const me={class:"flex justify-between"},ce=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta ")],-1),pe={key:0},fe=l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ",-1),be={class:"flex"},ve={class:"card flex justify-content-center"},he={class:"card flex justify-content-center"},ye={class:"card flex justify-content-center"},ge={class:"card flex justify-content-center mr-5"},Ce={class:"card flex justify-content-center"},_e=l("div",null,[l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),Ve={class:"flex"},we={class:"card flex justify-content-center"},xe={class:"card flex justify-content-center"},De={class:"card flex justify-content-center"},Ne={class:"card flex justify-content-center mr-5"},$e={class:"card flex justify-content-center"},H=1,Se={__name:"ToManage",props:{ListOrders:Array},setup(w){const f=w,s=G(),u=Q(),n=E(),h=c(!1),g=c(!1),y=c({}),x=c(!1);c([]);const L=c([f.ListOrders.filter(o=>o.MethodShippingId===H)]),m=c([f.ListOrders.filter(o=>o.MethodShippingId!==H)]);L.value=L.value[0],m.value=m.value[0];const j=o=>{y.value={...o},g.value=!0,x.value=!0},R=o=>{h.value=!0,y.value={...o},x.value=!0},I=o=>{o||(y.value={},x.value=!1)},B=async o=>{s.require({message:"¿Estas seguro que deseas continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",accept:async()=>{let r=await n.postActionOrder(o.id,1);if(u.add({severity:r.status,summary:"",detail:r.message,life:3e3}),r.status==="success"){const T=m.value.findIndex(t=>t===o);T!==-1&&m.value.splice(T,1)}},reject:()=>{}})};return(o,r)=>{const T=J("Toast");return p(),k(O,null,[l("div",me,[ce,e(q)]),L.value.length>0?(p(),k("div",pe,[fe,l("div",be,[l("div",ve,[e(a(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[0]||(r[0]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),l("div",he,[e(a(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[1]||(r[1]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),l("div",ye,[e(a(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[2]||(r[2]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),l("div",ge,[e(a(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[3]||(r[3]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),l("div",Ce,[e(a(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[4]||(r[4]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])])]),e(a(U),{class:"mb-20",value:L.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:o.loading},{default:d(()=>[e(a(i),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(t=>[V(" N° "+N(t.data.DocNum),1)]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),e(a(i),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),e(a(i),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),e(a(i),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:d(t=>[e(a(A),{modelValue:t.data.DocTotal,"onUpdate:modelValue":C=>t.data.DocTotal=C,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(t=>[e(a(_),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(t=>[e(a(v),{icon:"pi pi-eye",onClick:C=>j(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(t=>[e(a(v),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value","loading"])])):S("",!0),_e,l("div",Ve,[l("div",we,[e(a(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[5]||(r[5]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),l("div",xe,[e(a(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[6]||(r[6]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),l("div",De,[e(a(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[7]||(r[7]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),l("div",Ne,[e(a(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[8]||(r[8]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Clientes",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),l("div",$e,[e(a(b),{modelValue:o.selectedCities,"onUpdate:modelValue":r[9]||(r[9]=t=>o.selectedCities=t),options:m.value,filter:"",optionLabel:"DocTotal",placeholder:"Total",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])])]),e(a(U),{value:m.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:o.loading},{default:d(()=>[e(a(i),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(t=>[V(" N° "+N(t.data.DocNum),1)]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),e(a(i),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),e(a(i),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),e(a(i),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:d(t=>[e(a(A),{modelValue:t.data.DocTotal,"onUpdate:modelValue":C=>t.data.DocTotal=C,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(t=>[e(a(_),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"note",header:"Documentos"},{body:d(t=>[e(a(v),{icon:"pi pi-eye",onClick:C=>R(t.data),class:"!font-normal !text-primary-900",label:"Ver documentos",link:""},null,8,["onClick"])]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(t=>[t.data.OrderStatusId==4?(p(),D(a(v),{key:0,icon:"pi pi-eye",onClick:C=>j(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])):S("",!0)]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(t=>[e(a(v),{label:"Rechazar",onClick:r[10]||(r[10]=C=>o.visibleReport=!0),class:"!py-1.5 mr-3 !border-primary-900 !text-primary-900",outlined:""}),e(a(v),{label:"Autorizar",onClick:C=>B(t.data),class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""},null,8,["onClick"])]),_:1})]),_:1},8,["value","loading"]),x.value?(p(),D(le,{visible:h.value,"onUpdate:visible":[r[11]||(r[11]=t=>h.value=t),I],order:y.value,key:y.value.timestamp},null,8,["visible","order"])):S("",!0),x.value?(p(),D(ue,{visible:g.value,"onUpdate:visible":[r[12]||(r[12]=t=>g.value=t),I],order:y.value,key:y.value.timestamp},null,8,["visible","order"])):S("",!0),e(T),e(a(W))],64)}}},ke={class:"flex justify-between"},Le=l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta "),l("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ")],-1),Te={class:"flex"},Ue={class:"card flex justify-content-center"},Me={class:"card flex justify-content-center"},Oe={class:"card flex justify-content-center"},je={class:"card flex justify-content-center mr-20"},Ie={class:"card flex justify-content-center"},Fe={__name:"Managed",setup(w){const f=c([{statusId:1,note:"4567892",date:"19/04/2023",hour:"10:26",client:"Daniel Ramirez Palma",status:"En espera",totalAmount:"$200",btnInfo:"Informado"},{statusId:2,note:"0998764",date:"19/04/2023",hour:"10:58",client:"Lucas Sandoval",status:"En preparación",totalAmount:"$300"}]);return(s,u)=>(p(),k(O,null,[l("div",ke,[Le,e(q)]),l("div",Te,[l("div",Ue,[e(a($),{modelValue:s.selectedValue,"onUpdate:modelValue":u[0]||(u[0]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",Me,[e(a($),{modelValue:s.selectedValue,"onUpdate:modelValue":u[1]||(u[1]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",Oe,[e(a($),{modelValue:s.selectedValue,"onUpdate:modelValue":u[2]||(u[2]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",je,[e(a($),{modelValue:s.selectedValue,"onUpdate:modelValue":u[3]||(u[3]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),l("div",Ie,[e(a($),{modelValue:s.selectedValue,"onUpdate:modelValue":u[4]||(u[4]=n=>s.selectedValue=n),options:s.nodes,selectionMode:"checkbox",placeholder:"Total",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),e(a(U),{class:"mb-20",value:f.value,tableStyle:"min-width: 50rem"},{default:d(()=>[e(a(i),{headerClass:"!bg-primary-900",field:"note",header:"Nota de venta"},{body:d(n=>[V(" N° "+N(n.data.note),1)]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"date",header:"Fecha"}),e(a(i),{headerClass:"!bg-primary-900",field:"hour",header:"Hora"}),e(a(i),{headerClass:"!bg-primary-900",field:"client",header:"Cliente"}),e(a(i),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Monto total"}),e(a(i),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Método entrega"},{body:d(n=>[e(a(_),{Tag:"",icon:"pi pi-shopping-cart",value:"Aquí",rounded:"",class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"})]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:d(n=>[e(a(v),{icon:"pi pi-eye",class:"!font-normal !text-primary-900",label:"Ver observación",link:""})]),_:1}),e(a(i),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(n=>[e(a(v),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value"])],64))}};const Ae={class:"px-3"},Ke={__name:"SalesNotes",setup(w){const f=E(),s=c([]),u=c(!1);return M(async()=>{s.value=await f.getOrders(),u.value=!0}),(n,h)=>(p(),k("div",Ae,[e(a(z),null,{default:d(()=>[e(a(F),{header:"Por gestionar"},{default:d(()=>[u.value?(p(),D(Se,{key:0,ListOrders:s.value},null,8,["ListOrders"])):S("",!0)]),_:1}),e(a(F),{header:"Gestionadas"},{default:d(()=>[e(Fe)]),_:1})]),_:1})]))}};export{Ke as default};

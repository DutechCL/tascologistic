import{s as F,a as B}from"./tabpanel.esm-93198a02.js";import{b as p,h as T,o as m,i as x,w as n,f as a,g as C,t as $,a as e,u as l,s as h,j as L,c as D,F as O,k as z,l as G,m as Q,r as K,p as k,q as J}from"./index-b16d0020.js";import{a as V,b as U,s as d,c as A}from"./tag.esm-e32f7f38.js";import{s as c}from"./treeselect.esm-9c4336be.js";import{_ as P}from"./Search-da15ecaa.js";import{u as q}from"./OrdersApiService-0409569d.js";const W=a("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[a("i",{class:"pi pi-eye !text-xl"}),C(" Ver Documentos ")],-1),X={class:"flex align-center mb-2"},Y={class:"text-primary-900"},Z=a("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),ee=a("div",{class:"mt-5"},[a("p",null," 2 archivos adjuntos "),a("div",{class:"flex"},[a("div",{class:"mt-2 mr-5",width:"200",height:"180"},[a("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),a("div",{class:"bg-gray-100"},[a("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),a("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])]),a("div",{class:"mt-2 mr-5",width:"200",height:"180"},[a("embed",{class:"w-full",src:"http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf",type:"application/pdf"}),a("div",{class:"bg-gray-100"},[a("i",{class:"pi pi-file-pdf m-2",style:{color:"#F40F02"}}),a("a",{href:"#",class:"font-normal text-sm"},"Nombre de pdf")])])])],-1),le={__name:"DialogDetail",props:{order:String},setup(_){const f=_,s=p([]);return T(()=>{s.value=f.order}),(u,i)=>(m(),x(l(L),{modal:"",header:" ",style:{width:"70vw"}},{default:n(()=>[a("div",null,[W,a("div",X,[a("p",Y,[Z,C($(s.value.DocNum),1)]),e(l(V),{icon:"pi pi-shopping-bag",value:s.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),e(l(V),{icon:"pi pi-user",value:s.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]),ee]),e(l(h),{label:"Cerrar",onClick:i[0]||(i[0]=b=>u.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},ae=a("h1",{class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},[a("i",{class:"pi pi-eye !text-xl"}),C(" Ver observaciones ")],-1),te={class:"flex align-center mb-2"},oe={class:"text-primary-900"},se=a("strong",{class:"mr-3 font-semibold"},"Nota de venta N°",-1),re={class:"mt-5"},de=a("strong",null,"NOTA:",-1),ne=["innerHTML"],ie={__name:"DialogDetailObservation",props:{order:String},setup(_){const f=_,s=p([]);T(()=>{s.value=f.order});const u=i=>i.replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(i,b)=>(m(),x(l(L),{modal:"",header:" ",style:{width:"70vw"}},{default:n(()=>[a("div",null,[ae,a("div",te,[a("p",oe,[se,C($(s.value.DocNum),1)]),e(l(V),{icon:"pi pi-shopping-cart",value:s.value.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),e(l(V),{icon:"pi pi-user",value:s.value.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),e(l(U),{tableStyle:"min-width: 50rem",filters:"filters",value:s.value.OrderItems},{default:n(()=>[e(l(d),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:n(y=>[a("p",null,$(y.data.Quantity)+" Unidad",1)]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),e(l(d),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"}),e(l(d),{headerClass:"!bg-primary-900",field:"Problems",header:"Problema"},{body:n(y=>[(m(!0),D(O,null,z(y.data.Problems,(v,w)=>(m(),x(l(V),{key:w,value:v.ProblemName,rounded:"",class:"mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"]),a("div",re,[de,C(),a("span",{innerHTML:u(s.value.Comments)},null,8,ne)])]),e(l(h),{label:"Cerrar",onClick:b[0]||(b[0]=y=>i.visibleObservation=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},ue={class:"flex justify-between"},ce=a("div",null,[a("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta ")],-1),me={key:0},pe=a("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ",-1),fe={class:"flex"},he={class:"card flex justify-content-center"},be={class:"card flex justify-content-center"},ve={class:"card flex justify-content-center"},ye={class:"card flex justify-content-center mr-20"},ge={class:"card flex justify-content-center"},Ve=a("div",null,[a("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),Ce={class:"flex"},_e={class:"card flex justify-content-center"},we={class:"card flex justify-content-center"},xe={class:"card flex justify-content-center"},$e={class:"card flex justify-content-center mr-5"},Ne={class:"card flex justify-content-center"},H=1,ke={__name:"ToManage",props:{ListOrders:Array},setup(_){const f=_,s=G(),u=Q(),i=q(),b=p(!1),y=p(!1),v=p({}),w=p(!1),M=p([f.ListOrders.filter(o=>o.MethodShippingId===H)]),N=p([f.ListOrders.filter(o=>o.MethodShippingId!==H)]);M.value=M.value[0],N.value=N.value[0];const j=o=>{v.value={...o},y.value=!0,w.value=!0},E=o=>{b.value=!0,v.value={...o},w.value=!0},I=o=>{o||(v.value={},w.value=!1)},R=async o=>{s.require({message:"¿Estas seguro que deseas continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",accept:async()=>{let r=await i.postActionOrder(o.id,1);if(u.add({severity:r.status,summary:"",detail:r.message,life:3e3}),r.status==="success"){const S=N.value.findIndex(t=>t===o);S!==-1&&N.value.splice(S,1)}},reject:()=>{}})};return(o,r)=>{const S=K("Toast");return m(),D(O,null,[a("div",ue,[ce,e(P)]),M.value.length>0?(m(),D("div",me,[pe,a("div",fe,[a("div",he,[e(l(c),{modelValue:o.selectedValue,"onUpdate:modelValue":r[0]||(r[0]=t=>o.selectedValue=t),options:o.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",be,[e(l(c),{modelValue:o.selectedValue,"onUpdate:modelValue":r[1]||(r[1]=t=>o.selectedValue=t),options:o.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",ve,[e(l(c),{modelValue:o.selectedValue,"onUpdate:modelValue":r[2]||(r[2]=t=>o.selectedValue=t),options:o.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",ye,[e(l(c),{modelValue:o.selectedValue,"onUpdate:modelValue":r[3]||(r[3]=t=>o.selectedValue=t),options:o.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",ge,[e(l(c),{modelValue:o.selectedValue,"onUpdate:modelValue":r[4]||(r[4]=t=>o.selectedValue=t),options:o.nodes,selectionMode:"checkbox",placeholder:"Total",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),e(l(U),{class:"mb-20",value:M.value,tableStyle:"min-width: 50rem"},{default:n(()=>[e(l(d),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:n(t=>[C(" N° "+$(t.data.DocNum),1)]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),e(l(d),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),e(l(d),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),e(l(d),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:n(t=>[e(l(A),{modelValue:t.data.DocTotal,"onUpdate:modelValue":g=>t.data.DocTotal=g,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:n(t=>[e(l(V),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:n(t=>[e(l(h),{icon:"pi pi-eye",onClick:g=>j(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"note",header:""},{body:n(t=>[e(l(h),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value"])])):k("",!0),Ve,a("div",Ce,[a("div",_e,[e(l(c),{modelValue:o.selectedValue,"onUpdate:modelValue":r[5]||(r[5]=t=>o.selectedValue=t),options:o.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",we,[e(l(c),{modelValue:o.selectedValue,"onUpdate:modelValue":r[6]||(r[6]=t=>o.selectedValue=t),options:o.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",xe,[e(l(c),{modelValue:o.selectedValue,"onUpdate:modelValue":r[7]||(r[7]=t=>o.selectedValue=t),options:o.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",$e,[e(l(c),{modelValue:o.selectedValue,"onUpdate:modelValue":r[8]||(r[8]=t=>o.selectedValue=t),options:o.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",Ne,[e(l(c),{modelValue:o.selectedValue,"onUpdate:modelValue":r[9]||(r[9]=t=>o.selectedValue=t),options:o.nodes,selectionMode:"checkbox",placeholder:"Total",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),e(l(U),{value:N.value,tableStyle:"min-width: 50rem"},{default:n(()=>[e(l(d),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:n(t=>[C(" N° "+$(t.data.DocNum),1)]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),e(l(d),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),e(l(d),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),e(l(d),{headerClass:"!bg-primary-900",field:"DocTotal",header:"Monto total"},{body:n(t=>[e(l(A),{modelValue:t.data.DocTotal,"onUpdate:modelValue":g=>t.data.DocTotal=g,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:n(t=>[e(l(V),{Tag:"",icon:"pi pi-shopping-cart",value:t.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"note",header:"Documentos"},{body:n(t=>[e(l(h),{icon:"pi pi-eye",onClick:g=>E(t.data),class:"!font-normal !text-primary-900",label:"Ver documentos",link:""},null,8,["onClick"])]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:n(t=>[t.data.OrderStatusId==4?(m(),x(l(h),{key:0,icon:"pi pi-eye",onClick:g=>j(t.data),class:"!font-normal !text-primary-900",label:"Ver observación",link:""},null,8,["onClick"])):k("",!0)]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"note",header:""},{body:n(t=>[e(l(h),{label:"Rechazar",onClick:r[10]||(r[10]=g=>o.visibleReport=!0),class:"!py-1.5 mr-3 !border-primary-900 !text-primary-900",outlined:""}),e(l(h),{label:"Autorizar",onClick:g=>R(t.data),class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""},null,8,["onClick"])]),_:1})]),_:1},8,["value"]),w.value?(m(),x(le,{visible:b.value,"onUpdate:visible":[r[11]||(r[11]=t=>b.value=t),I],order:v.value,key:v.value.timestamp},null,8,["visible","order"])):k("",!0),w.value?(m(),x(ie,{visible:y.value,"onUpdate:visible":[r[12]||(r[12]=t=>y.value=t),I],order:v.value,key:v.value.timestamp},null,8,["visible","order"])):k("",!0),e(S),e(l(J))],64)}}},De={class:"flex justify-between"},Me=a("div",null,[a("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Notas de venta "),a("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ")],-1),Se={class:"flex"},Ue={class:"card flex justify-content-center"},Te={class:"card flex justify-content-center"},Oe={class:"card flex justify-content-center"},je={class:"card flex justify-content-center mr-20"},Ie={class:"card flex justify-content-center"},Fe={__name:"Managed",setup(_){const f=p([{statusId:1,note:"4567892",date:"19/04/2023",hour:"10:26",client:"Daniel Ramirez Palma",status:"En espera",totalAmount:"$200",btnInfo:"Informado"},{statusId:2,note:"0998764",date:"19/04/2023",hour:"10:58",client:"Lucas Sandoval",status:"En preparación",totalAmount:"$300"}]);return(s,u)=>(m(),D(O,null,[a("div",De,[Me,e(P)]),a("div",Se,[a("div",Ue,[e(l(c),{modelValue:s.selectedValue,"onUpdate:modelValue":u[0]||(u[0]=i=>s.selectedValue=i),options:s.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",Te,[e(l(c),{modelValue:s.selectedValue,"onUpdate:modelValue":u[1]||(u[1]=i=>s.selectedValue=i),options:s.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",Oe,[e(l(c),{modelValue:s.selectedValue,"onUpdate:modelValue":u[2]||(u[2]=i=>s.selectedValue=i),options:s.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",je,[e(l(c),{modelValue:s.selectedValue,"onUpdate:modelValue":u[3]||(u[3]=i=>s.selectedValue=i),options:s.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),a("div",Ie,[e(l(c),{modelValue:s.selectedValue,"onUpdate:modelValue":u[4]||(u[4]=i=>s.selectedValue=i),options:s.nodes,selectionMode:"checkbox",placeholder:"Total",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),e(l(U),{class:"mb-20",value:f.value,tableStyle:"min-width: 50rem"},{default:n(()=>[e(l(d),{headerClass:"!bg-primary-900",field:"note",header:"Nota de venta"},{body:n(i=>[C(" N° "+$(i.data.note),1)]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"date",header:"Fecha"}),e(l(d),{headerClass:"!bg-primary-900",field:"hour",header:"Hora"}),e(l(d),{headerClass:"!bg-primary-900",field:"client",header:"Cliente"}),e(l(d),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Monto total"}),e(l(d),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Método entrega"},{body:n(i=>[e(l(V),{Tag:"",icon:"pi pi-shopping-cart",value:"Aquí",rounded:"",class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"})]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"note",header:" Observación"},{body:n(i=>[e(l(h),{icon:"pi pi-eye",class:"!font-normal !text-primary-900",label:"Ver observación",link:""})]),_:1}),e(l(d),{headerClass:"!bg-primary-900",field:"note",header:""},{body:n(i=>[e(l(h),{label:"Informado",class:"!py-1.5 !border-primary-900 !text-primary-900",outlined:""})]),_:1})]),_:1},8,["value"])],64))}};const Ae={class:"px-3"},Be={__name:"SalesNotes",setup(_){const f=q(),s=p([]),u=p(!1);return T(async()=>{s.value=await f.getOrders(),u.value=!0}),(i,b)=>(m(),D("div",Ae,[e(l(B),null,{default:n(()=>[e(l(F),{header:"Por gestionar"},{default:n(()=>[u.value?(m(),x(ke,{key:0,ListOrders:s.value},null,8,["ListOrders"])):k("",!0)]),_:1}),e(l(F),{header:"Gestionadas"},{default:n(()=>[e(Fe)]),_:1})]),_:1})]))}};export{Be as default};

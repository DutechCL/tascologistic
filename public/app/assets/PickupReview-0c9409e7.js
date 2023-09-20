import{s as o,a as n,b as g}from"./tag.esm-ed8d2bb5.js";import{s as u}from"./treeselect.esm-a54d1f28.js";import{_ as w}from"./Search-4d5c8a10.js";import{u as C}from"./OrdersApiService-c91dbb9e.js";import{b as f,h as R,r as _,o as i,c as S,f as r,a as l,u as a,w as d,g as c,t as V,i as m,p}from"./index-b452af4a.js";const M={class:"px-8"},D={class:"flex justify-between"},x=r("div",null,[r("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Pickeo / Revisión "),r("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ")],-1),O={class:"flex"},j={class:"card flex justify-content-center"},H={class:"card flex justify-content-center"},I={class:"card flex justify-content-center"},U={class:"card flex justify-content-center mr-20"},E=r("div",null,[r("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),T={class:"flex"},B={class:"card flex justify-content-center"},P={class:"card flex justify-content-center"},F={class:"card flex justify-content-center"},$={class:"card flex justify-content-center mr-5"},N=1,L={__name:"PickupReview",setup(A){const k=C(),h=f([]),y=f([]),v=f([]);return R(async()=>{h.value=await k.getProcessedOrders(),y.value=h.value.filter(t=>t.MethodShippingId===N),v.value=h.value.filter(t=>t.MethodShippingId!==N)}),(t,s)=>{const b=_("router-link");return i(),S("div",M,[r("div",D,[x,l(w)]),r("div",O,[r("div",j,[l(a(u),{modelValue:t.selectedValue,"onUpdate:modelValue":s[0]||(s[0]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",H,[l(a(u),{modelValue:t.selectedValue,"onUpdate:modelValue":s[1]||(s[1]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",I,[l(a(u),{modelValue:t.selectedValue,"onUpdate:modelValue":s[2]||(s[2]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",U,[l(a(u),{modelValue:t.selectedValue,"onUpdate:modelValue":s[3]||(s[3]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),l(a(g),{class:"mb-20",value:y.value,tableStyle:"min-width: 50rem"},{default:d(()=>[l(a(o),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(e=>[c(" N° "+V(e.data.DocNum),1)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),l(a(o),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),l(a(o),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),l(a(o),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(e=>[l(a(n),{Tag:"",icon:"pi pi-shopping-cart",value:e.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:d(e=>[e.data.ResponsiblePickerName?(i(),m(a(n),{key:0,icon:"pi pi-user",value:e.data.ResponsiblePickerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):p("",!0)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:d(e=>[e.data.ResponsibleReviewerName?(i(),m(a(n),{key:0,icon:"pi pi-user",value:e.data.ResponsibleReviewerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):p("",!0)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:d(e=>[l(a(n),{icon:"pi pi-circle-fill",value:e.data.OrderStatusName,class:"p-tag-2 tag-font-method tag-radius"},null,8,["value"])]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(e=>[e.data.OrderStatusId!=3?(i(),m(b,{key:0,to:{name:"review-notes",params:{id:e.data.id,responsible:"picker"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:d(()=>[c("Pickear")]),_:2},1032,["to"])):p("",!0),e.data.OrderStatusId==3?(i(),m(b,{key:1,to:{name:"review-notes",params:{id:e.data.id,responsible:"revisor"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:d(()=>[c("Revisar")]),_:2},1032,["to"])):p("",!0)]),_:1})]),_:1},8,["value"]),E,r("div",T,[r("div",B,[l(a(u),{modelValue:t.selectedValue,"onUpdate:modelValue":s[4]||(s[4]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",P,[l(a(u),{modelValue:t.selectedValue,"onUpdate:modelValue":s[5]||(s[5]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",F,[l(a(u),{modelValue:t.selectedValue,"onUpdate:modelValue":s[6]||(s[6]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",$,[l(a(u),{modelValue:t.selectedValue,"onUpdate:modelValue":s[7]||(s[7]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),l(a(g),{class:"mb-20",value:v.value,tableStyle:"min-width: 50rem"},{default:d(()=>[l(a(o),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(e=>[c(" N° "+V(e.data.DocNum),1)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),l(a(o),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),l(a(o),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),l(a(o),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(e=>[l(a(n),{Tag:"",icon:[e.data.icon,"pi"],value:e.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["icon","value"])]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:d(e=>[e.data.ResponsiblePickerName?(i(),m(a(n),{key:0,icon:"pi pi-user",value:e.data.ResponsiblePickerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):p("",!0)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:d(e=>[e.data.ResponsibleReviewerName?(i(),m(a(n),{key:0,icon:"pi pi-user",value:e.data.ResponsibleReviewerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):p("",!0)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:d(e=>[l(a(n),{icon:"pi pi-circle-fill",value:e.data.OrderStatusName,class:"p-tag-3 tag-font-method tag-radius"},null,8,["value"])]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(e=>[e.data.OrderStatusId!=3?(i(),m(b,{key:0,to:{name:"review-notes",params:{id:e.data.id,responsible:"picker"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:d(()=>[c("Pickear")]),_:2},1032,["to"])):p("",!0),e.data.OrderStatusId==3?(i(),m(b,{key:1,to:{name:"review-notes",params:{id:e.data.id,responsible:"revisor"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:d(()=>[c("Revisar")]),_:2},1032,["to"])):p("",!0)]),_:1})]),_:1},8,["value"])])}}};export{L as default};

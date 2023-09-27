import{s as o,a as u,b as V}from"./tag.esm-8c95b8df.js";import{a as m}from"./treeselect.esm-38186378.js";import{_ as C}from"./Search-bad8c794.js";import{u as R}from"./OrdersApiService-80cb22d5.js";import{b as v,h as _,r as S,o as i,c as g,f as r,a as l,u as a,w as d,H as n,g as c,t as k,i as p}from"./index-0f425d5d.js";const M={class:"px-8"},D={key:0},x={class:"flex justify-between"},O=r("div",null,[r("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Pickeo / Revisión "),r("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ")],-1),j={class:"flex"},H={class:"card flex justify-content-center"},I={class:"card flex justify-content-center"},U={class:"card flex justify-content-center"},E={class:"card flex justify-content-center mr-20"},T={key:1},B=r("div",null,[r("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),P={class:"flex"},F={class:"card flex justify-content-center"},$={class:"card flex justify-content-center"},A={class:"card flex justify-content-center"},K={class:"card flex justify-content-center mr-5"},w=1,W={__name:"PickupReview",setup(q){const N=R(),h=v([]),b=v([]),y=v([]);return _(async()=>{h.value=await N.getProcessedOrders(),b.value=h.value.filter(t=>t.MethodShippingId===w),y.value=h.value.filter(t=>t.MethodShippingId!==w)}),(t,s)=>{const f=S("router-link");return i(),g("div",M,[b.value.length>0?(i(),g("div",D,[r("div",x,[O,l(C)]),r("div",j,[r("div",H,[l(a(m),{modelValue:t.selectedValue,"onUpdate:modelValue":s[0]||(s[0]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",I,[l(a(m),{modelValue:t.selectedValue,"onUpdate:modelValue":s[1]||(s[1]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",U,[l(a(m),{modelValue:t.selectedValue,"onUpdate:modelValue":s[2]||(s[2]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",E,[l(a(m),{modelValue:t.selectedValue,"onUpdate:modelValue":s[3]||(s[3]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),l(a(V),{class:"mb-20",value:b.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:t.loading},{default:d(()=>[l(a(o),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(e=>[c(" N° "+k(e.data.DocNum),1)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),l(a(o),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),l(a(o),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),l(a(o),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(e=>[l(a(u),{Tag:"",icon:"pi pi-shopping-cart",value:e.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:d(e=>[e.data.ResponsiblePickerName?(i(),p(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsiblePickerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:d(e=>[e.data.ResponsibleReviewerName?(i(),p(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsibleReviewerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:d(e=>[l(a(u),{icon:"pi pi-circle-fill",value:e.data.OrderStatusName,class:"p-tag-2 tag-font-method tag-radius"},null,8,["value"])]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(e=>[e.data.OrderStatusId!=3?(i(),p(f,{key:0,to:{name:"review-notes",params:{id:e.data.id,responsible:"picker"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:d(()=>[c("Pickear")]),_:2},1032,["to"])):n("",!0),e.data.OrderStatusId==3?(i(),p(f,{key:1,to:{name:"review-notes",params:{id:e.data.id,responsible:"revisor"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:d(()=>[c("Revisar")]),_:2},1032,["to"])):n("",!0)]),_:1})]),_:1},8,["value","loading"])])):n("",!0),y.value.length>0?(i(),g("div",T,[B,r("div",P,[r("div",F,[l(a(m),{modelValue:t.selectedValue,"onUpdate:modelValue":s[4]||(s[4]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",$,[l(a(m),{modelValue:t.selectedValue,"onUpdate:modelValue":s[5]||(s[5]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Fecha",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",A,[l(a(m),{modelValue:t.selectedValue,"onUpdate:modelValue":s[6]||(s[6]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Hora",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),r("div",K,[l(a(m),{modelValue:t.selectedValue,"onUpdate:modelValue":s[7]||(s[7]=e=>t.selectedValue=e),options:t.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),l(a(V),{class:"mb-20",value:y.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:t.loading},{default:d(()=>[l(a(o),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:d(e=>[c(" N° "+k(e.data.DocNum),1)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),l(a(o),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),l(a(o),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),l(a(o),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:d(e=>[l(a(u),{Tag:"",icon:[e.data.icon,"pi"],value:e.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["icon","value"])]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:d(e=>[e.data.ResponsiblePickerName?(i(),p(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsiblePickerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:d(e=>[e.data.ResponsibleReviewerName?(i(),p(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsibleReviewerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:d(e=>[l(a(u),{icon:"pi pi-circle-fill",value:e.data.OrderStatusName,class:"p-tag-3 tag-font-method tag-radius"},null,8,["value"])]),_:1}),l(a(o),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(e=>[e.data.OrderStatusId!=3?(i(),p(f,{key:0,to:{name:"review-notes",params:{id:e.data.id,responsible:"picker"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:d(()=>[c("Pickear")]),_:2},1032,["to"])):n("",!0),e.data.OrderStatusId==3?(i(),p(f,{key:1,to:{name:"review-notes",params:{id:e.data.id,responsible:"revisor"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:d(()=>[c("Revisar")]),_:2},1032,["to"])):n("",!0)]),_:1})]),_:1},8,["value","loading"])])):n("",!0)])}}};export{W as default};

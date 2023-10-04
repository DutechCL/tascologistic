import{s,a as u,b as N}from"./tag.esm-ad7f4c80.js";import{_ as x}from"./Search-8e159234.js";import{u as L}from"./OrdersApiService-3379c027.js";import{s as m}from"./multiselect.esm-6cedd2a5.js";import{e as h,k as O,r as F,o as d,c as v,x as n,h as i,a as t,u as a,w as r,i as y,t as w,l as c,n as k}from"./index-5214fa03.js";import"./index.esm-196f3641.js";const M={class:"px-8"},T={key:0,class:"text-center",style:{color:"#259bd7"}},j=i("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},null,-1),I=[j],H={key:1},U={class:"flex justify-between"},E=i("div",null,[i("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Pickeo / Revisión "),i("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ")],-1),B={class:"flex"},$={class:"card flex justify-content-center"},z={class:"card flex justify-content-center"},A={class:"card flex justify-content-center"},K={class:"card flex justify-content-center mr-20"},P={key:2},q=i("div",null,[i("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),G={class:"flex"},J={class:"card flex justify-content-center"},Q={class:"card flex justify-content-center"},W={class:"card flex justify-content-center"},X={class:"card flex justify-content-center mr-20"},S=1,se={__name:"PickupReview",setup(Y){const R=L(),g=h([]),p=h([]),b=h([]),C=h(!1);O(async()=>{g.value=await R.getProcessedOrders(),p.value=g.value.filter(l=>l.MethodShippingId===S),b.value=g.value.filter(l=>l.MethodShippingId!==S),C.value=!0});function _(l){const o=V(l);return(.299*o.r+.587*o.g+.114*o.b)/255>.5?"#000000":"#FFFFFF"}function V(l){const o=parseInt(l.substring(1),16),f=o>>16&255,e=o>>8&255,D=o&255;return{r:f,g:e,b:D}}return(l,o)=>{const f=F("router-link");return d(),v("div",M,[C.value?n("",!0):(d(),v("div",T,I)),p.value.length>0?(d(),v("div",H,[i("div",U,[E,t(x)]),i("div",B,[i("div",$,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[0]||(o[0]=e=>l.selectedCities=e),options:p.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),i("div",z,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[1]||(o[1]=e=>l.selectedCities=e),options:p.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),i("div",A,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[2]||(o[2]=e=>l.selectedCities=e),options:p.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),i("div",K,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[3]||(o[3]=e=>l.selectedCities=e),options:p.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Cliente",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])])]),t(a(N),{class:"mb-20",value:p.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:l.loading},{default:r(()=>[t(a(s),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:r(e=>[y(" N° "+w(e.data.DocNum),1)]),_:1}),t(a(s),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),t(a(s),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),t(a(s),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),t(a(s),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:r(e=>[t(a(u),{Tag:"",icon:"pi pi-shopping-cart",value:e.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),t(a(s),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:r(e=>[e.data.ResponsiblePickerName?(d(),c(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsiblePickerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(s),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:r(e=>[e.data.ResponsibleReviewerName?(d(),c(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsibleReviewerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(s),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:r(e=>[t(a(u),{icon:"pi pi-circle-fill",value:e.data.OrderStatusName,style:k({backgroundColor:e.data.OrderStatusColor,color:_(e.data.OrderStatusColor)}),class:"tag-font-method tag-radius"},null,8,["value","style"])]),_:1}),t(a(s),{headerClass:"!bg-primary-900",field:"note",header:""},{body:r(e=>[e.data.OrderStatusId!=3?(d(),c(f,{key:0,to:{name:"review-notes",params:{id:e.data.id,responsible:"picker"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:r(()=>[y("Pickear")]),_:2},1032,["to"])):n("",!0),e.data.OrderStatusId==3?(d(),c(f,{key:1,to:{name:"review-notes",params:{id:e.data.id,responsible:"revisor"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:r(()=>[y("Revisar")]),_:2},1032,["to"])):n("",!0)]),_:1})]),_:1},8,["value","loading"])])):n("",!0),b.value.length>0?(d(),v("div",P,[q,i("div",G,[i("div",J,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[4]||(o[4]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),i("div",Q,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[5]||(o[5]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),i("div",W,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[6]||(o[6]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),i("div",X,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[7]||(o[7]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Cliente",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])])]),t(a(N),{class:"mb-20",value:b.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:l.loading},{default:r(()=>[t(a(s),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:r(e=>[y(" N° "+w(e.data.DocNum),1)]),_:1}),t(a(s),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),t(a(s),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),t(a(s),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),t(a(s),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:r(e=>[t(a(u),{Tag:"",icon:[e.data.icon,"pi"],value:e.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["icon","value"])]),_:1}),t(a(s),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:r(e=>[e.data.ResponsiblePickerName?(d(),c(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsiblePickerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(s),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:r(e=>[e.data.ResponsibleReviewerName?(d(),c(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsibleReviewerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(s),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:r(e=>[t(a(u),{icon:"pi pi-circle-fill",value:e.data.OrderStatusName,style:k({backgroundColor:e.data.OrderStatusColor,color:_(e.data.OrderStatusColor)}),class:"tag-font-method tag-radius"},null,8,["value","style"])]),_:1}),t(a(s),{headerClass:"!bg-primary-900",field:"note",header:""},{body:r(e=>[e.data.OrderStatusId!=3?(d(),c(f,{key:0,to:{name:"review-notes",params:{id:e.data.id,responsible:"picker"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:r(()=>[y("Pickear")]),_:2},1032,["to"])):n("",!0),e.data.OrderStatusId==3?(d(),c(f,{key:1,to:{name:"review-notes",params:{id:e.data.id,responsible:"revisor"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:r(()=>[y("Revisar")]),_:2},1032,["to"])):n("",!0)]),_:1})]),_:1},8,["value","loading"])])):n("",!0)])}}};export{se as default};

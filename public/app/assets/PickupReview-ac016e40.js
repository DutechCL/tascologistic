import{s as r,a as u,b as N}from"./tag.esm-27917adf.js";import{_ as D}from"./Search-8c5fa890.js";import{u as x}from"./OrdersApiService-555b7f04.js";import{s as m}from"./multiselect.esm-c46db975.js";import{e as v,j as L,r as O,o as i,c as g,g as d,a as t,u as a,w as s,x as n,h as y,t as _,k as c,n as w}from"./index-57bbf730.js";import"./index.esm-a6355687.js";const j={class:"px-8"},F={key:0},M={class:"flex justify-between"},T=d("div",null,[d("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Pickeo / Revisión "),d("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ")],-1),I={class:"flex"},H={class:"card flex justify-content-center"},U={class:"card flex justify-content-center"},E={class:"card flex justify-content-center"},B={class:"card flex justify-content-center mr-20"},$={key:1},A=d("div",null,[d("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),K={class:"flex"},P={class:"card flex justify-content-center"},q={class:"card flex justify-content-center"},z={class:"card flex justify-content-center"},G={class:"card flex justify-content-center mr-20"},k=1,ae={__name:"PickupReview",setup(J){const S=x(),h=v([]),p=v([]),b=v([]);L(async()=>{h.value=await S.getProcessedOrders(),p.value=h.value.filter(l=>l.MethodShippingId===k),b.value=h.value.filter(l=>l.MethodShippingId!==k)});function C(l){const o=R(l);return(.299*o.r+.587*o.g+.114*o.b)/255>.5?"#000000":"#FFFFFF"}function R(l){const o=parseInt(l.substring(1),16),f=o>>16&255,e=o>>8&255,V=o&255;return{r:f,g:e,b:V}}return(l,o)=>{const f=O("router-link");return i(),g("div",j,[p.value.length>0?(i(),g("div",F,[d("div",M,[T,t(D)]),d("div",I,[d("div",H,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[0]||(o[0]=e=>l.selectedCities=e),options:p.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",U,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[1]||(o[1]=e=>l.selectedCities=e),options:p.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",E,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[2]||(o[2]=e=>l.selectedCities=e),options:p.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",B,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[3]||(o[3]=e=>l.selectedCities=e),options:p.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Cliente",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])])]),t(a(N),{class:"mb-20",value:p.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:l.loading},{default:s(()=>[t(a(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:s(e=>[y(" N° "+_(e.data.DocNum),1)]),_:1}),t(a(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),t(a(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),t(a(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),t(a(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:s(e=>[t(a(u),{Tag:"",icon:"pi pi-shopping-cart",value:e.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),t(a(r),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:s(e=>[e.data.ResponsiblePickerName?(i(),c(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsiblePickerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(r),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:s(e=>[e.data.ResponsibleReviewerName?(i(),c(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsibleReviewerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(r),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:s(e=>[t(a(u),{icon:"pi pi-circle-fill",value:e.data.OrderStatusName,style:w({backgroundColor:e.data.OrderStatusColor,color:C(e.data.OrderStatusColor)}),class:"tag-font-method tag-radius"},null,8,["value","style"])]),_:1}),t(a(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:s(e=>[e.data.OrderStatusId!=3?(i(),c(f,{key:0,to:{name:"review-notes",params:{id:e.data.id,responsible:"picker"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:s(()=>[y("Pickear")]),_:2},1032,["to"])):n("",!0),e.data.OrderStatusId==3?(i(),c(f,{key:1,to:{name:"review-notes",params:{id:e.data.id,responsible:"revisor"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:s(()=>[y("Revisar")]),_:2},1032,["to"])):n("",!0)]),_:1})]),_:1},8,["value","loading"])])):n("",!0),b.value.length>0?(i(),g("div",$,[A,d("div",K,[d("div",P,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[4]||(o[4]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",q,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[5]||(o[5]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",z,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[6]||(o[6]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",G,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":o[7]||(o[7]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"Customer.CardName",placeholder:"Cliente",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])])]),t(a(N),{class:"mb-20",value:b.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:l.loading},{default:s(()=>[t(a(r),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:s(e=>[y(" N° "+_(e.data.DocNum),1)]),_:1}),t(a(r),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),t(a(r),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),t(a(r),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),t(a(r),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:s(e=>[t(a(u),{Tag:"",icon:[e.data.icon,"pi"],value:e.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["icon","value"])]),_:1}),t(a(r),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:s(e=>[e.data.ResponsiblePickerName?(i(),c(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsiblePickerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(r),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:s(e=>[e.data.ResponsibleReviewerName?(i(),c(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsibleReviewerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(r),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:s(e=>[t(a(u),{icon:"pi pi-circle-fill",value:e.data.OrderStatusName,style:w({backgroundColor:e.data.OrderStatusColor,color:C(e.data.OrderStatusColor)}),class:"tag-font-method tag-radius"},null,8,["value","style"])]),_:1}),t(a(r),{headerClass:"!bg-primary-900",field:"note",header:""},{body:s(e=>[e.data.OrderStatusId!=3?(i(),c(f,{key:0,to:{name:"review-notes",params:{id:e.data.id,responsible:"picker"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:s(()=>[y("Pickear")]),_:2},1032,["to"])):n("",!0),e.data.OrderStatusId==3?(i(),c(f,{key:1,to:{name:"review-notes",params:{id:e.data.id,responsible:"revisor"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:s(()=>[y("Revisar")]),_:2},1032,["to"])):n("",!0)]),_:1})]),_:1},8,["value","loading"])])):n("",!0)])}}};export{ae as default};

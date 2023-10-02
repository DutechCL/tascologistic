import{s as o,a as u,b as C}from"./tag.esm-19c7f0d6.js";import{_ as k,s as m}from"./multiselect.esm-04e9e679.js";import{u as V}from"./OrdersApiService-6d8650b2.js";import{b as v,h as R,r as S,o as r,c as g,f as d,a as t,u as a,w as s,q as n,g as f,t as N,i as p}from"./index-c749bfdf.js";import"./index.esm-b2a81faa.js";const D={class:"px-8"},x={key:0},L={class:"flex justify-between"},O=d("div",null,[d("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Pickeo / Revisión "),d("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Aquí ")],-1),M={class:"flex"},j={class:"card flex justify-content-center"},H={class:"card flex justify-content-center"},I={class:"card flex justify-content-center"},T={class:"card flex justify-content-center mr-20"},U={key:1},E=d("div",null,[d("h2",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"}," Retiro / Despacho ")],-1),P={class:"flex"},B={class:"card flex justify-content-center"},F={class:"card flex justify-content-center"},$={class:"card flex justify-content-center"},q={class:"card flex justify-content-center mr-20"},_=1,W={__name:"PickupReview",setup(A){const w=V(),h=v([]),c=v([]),b=v([]);return R(async()=>{h.value=await w.getProcessedOrders(),c.value=h.value.filter(l=>l.MethodShippingId===_),b.value=h.value.filter(l=>l.MethodShippingId!==_)}),(l,i)=>{const y=S("router-link");return r(),g("div",D,[c.value.length>0?(r(),g("div",x,[d("div",L,[O,t(k)]),d("div",M,[d("div",j,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":i[0]||(i[0]=e=>l.selectedCities=e),options:c.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",H,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":i[1]||(i[1]=e=>l.selectedCities=e),options:c.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",I,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":i[2]||(i[2]=e=>l.selectedCities=e),options:c.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",T,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":i[3]||(i[3]=e=>l.selectedCities=e),options:c.value,filter:"",optionLabel:"Customer.Customer",placeholder:"Cliente",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])])]),t(a(C),{class:"mb-20",value:c.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:l.loading},{default:s(()=>[t(a(o),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:s(e=>[f(" N° "+N(e.data.DocNum),1)]),_:1}),t(a(o),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),t(a(o),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),t(a(o),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),t(a(o),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:s(e=>[t(a(u),{Tag:"",icon:"pi pi-shopping-cart",value:e.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),t(a(o),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:s(e=>[e.data.ResponsiblePickerName?(r(),p(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsiblePickerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(o),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:s(e=>[e.data.ResponsibleReviewerName?(r(),p(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsibleReviewerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(o),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:s(e=>[t(a(u),{icon:"pi pi-circle-fill",value:e.data.OrderStatusName,class:"p-tag-2 tag-font-method tag-radius"},null,8,["value"])]),_:1}),t(a(o),{headerClass:"!bg-primary-900",field:"note",header:""},{body:s(e=>[e.data.OrderStatusId!=3?(r(),p(y,{key:0,to:{name:"review-notes",params:{id:e.data.id,responsible:"picker"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:s(()=>[f("Pickear")]),_:2},1032,["to"])):n("",!0),e.data.OrderStatusId==3?(r(),p(y,{key:1,to:{name:"review-notes",params:{id:e.data.id,responsible:"revisor"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:s(()=>[f("Revisar")]),_:2},1032,["to"])):n("",!0)]),_:1})]),_:1},8,["value","loading"])])):n("",!0),b.value.length>0?(r(),g("div",U,[E,d("div",P,[d("div",B,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":i[4]||(i[4]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"DocNum",placeholder:"Nota de venta",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",F,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":i[5]||(i[5]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"DocDate",placeholder:"Fecha",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",$,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":i[6]||(i[6]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"DocTime",placeholder:"Hora",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])]),d("div",q,[t(a(m),{modelValue:l.selectedCities,"onUpdate:modelValue":i[7]||(i[7]=e=>l.selectedCities=e),options:b.value,filter:"",optionLabel:"Customer.Customer",placeholder:"Cliente",maxSelectedLabels:3,class:"w-full md:w-20rem",style:{border:"none"}},null,8,["modelValue","options"])])]),t(a(C),{class:"mb-20",value:b.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:l.loading},{default:s(()=>[t(a(o),{headerClass:"!bg-primary-900",field:"DocNum",header:"Nota de venta"},{body:s(e=>[f(" N° "+N(e.data.DocNum),1)]),_:1}),t(a(o),{headerClass:"!bg-primary-900",field:"DocDate",header:"Fecha"}),t(a(o),{headerClass:"!bg-primary-900",field:"DocTime",header:"Hora"}),t(a(o),{headerClass:"!bg-primary-900",field:"Customer.CardName",header:"Cliente"}),t(a(o),{headerClass:"!bg-primary-900",field:"MethodShippingName",header:"Método entrega"},{body:s(e=>[t(a(u),{Tag:"",icon:[e.data.icon,"pi"],value:e.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["icon","value"])]),_:1}),t(a(o),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:s(e=>[e.data.ResponsiblePickerName?(r(),p(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsiblePickerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(o),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:s(e=>[e.data.ResponsibleReviewerName?(r(),p(a(u),{key:0,icon:"pi pi-user",value:e.data.ResponsibleReviewerName,class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):n("",!0)]),_:1}),t(a(o),{headerClass:"!bg-primary-900",field:"OrderStatusName",header:"Estado"},{body:s(e=>[t(a(u),{icon:"pi pi-circle-fill",value:e.data.OrderStatusName,class:"p-tag-3 tag-font-method tag-radius"},null,8,["value"])]),_:1}),t(a(o),{headerClass:"!bg-primary-900",field:"note",header:""},{body:s(e=>[e.data.OrderStatusId!=3?(r(),p(y,{key:0,to:{name:"review-notes",params:{id:e.data.id,responsible:"picker"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:s(()=>[f("Pickear")]),_:2},1032,["to"])):n("",!0),e.data.OrderStatusId==3?(r(),p(y,{key:1,to:{name:"review-notes",params:{id:e.data.id,responsible:"revisor"}},class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},{default:s(()=>[f("Revisar")]),_:2},1032,["to"])):n("",!0)]),_:1})]),_:1},8,["value","loading"])])):n("",!0)])}}};export{W as default};

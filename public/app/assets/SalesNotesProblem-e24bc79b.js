import{a as i,s as d,b as u}from"./tag.esm-a977f6b0.js";import{s as c}from"./treeselect.esm-adf1f58c.js";import{b as m,o as n,c as P,f as s,g as T,a,u as e,w as o,F as g,t as p,i as b,p as A}from"./index-7bdec9dc.js";const V={class:"px-8"},y={class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},_=s("i",{class:"pi pi-inbox !text-xl"},null,-1),v=s("div",{class:"flex align-center mb-2"},null,-1),D={class:"flex"},R={class:"card flex justify-content-center"},I={class:"card flex justify-content-center"},k={class:"mini-table mt-8"},C=s("div",{class:"space"},null,-1),S={__name:"SalesNotesProblem",setup(L){const f=m([{productId:1,qty:"4",units:"unidades",sku:"28-32-2340-123",name:"ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV",problem:"Sin stock"},{productId:2,qty:"1",units:"unidad",sku:"28-32-2340-321",name:"ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV"},{productId:3,qty:"8",units:"unidades",sku:"28-32-2340-W32",name:"ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV"},{productId:4,qty:"5",units:"unidades",sku:"28-32-2340-S32",name:"ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV"},{productId:4,qty:"6",units:"unidades",sku:"28-32-2340-FW3",name:"ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV"}]),h=m([{productId:1,sku:"28-32-2340-123",name:"ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV",problem:"Sin stock"}]);return(l,r)=>(n(),P(g,null,[s("div",V,[s("h1",y,[_,T(" Nota de venta N° 162559 "),a(e(i),{icon:"pi pi-shopping-cart",value:"Aquí",class:"ml-3 tag-radius tag-rounded-blue tag-font-method"})]),v,a(e(i),{icon:"pi pi-user",value:"Daniel Ramirez",class:"tag-radius tag-rounded-blue tag-font-method mb-5"}),s("div",D,[s("div",R,[a(e(c),{modelValue:l.selectedValue,"onUpdate:modelValue":r[0]||(r[0]=t=>l.selectedValue=t),options:l.nodes,selectionMode:"checkbox",placeholder:"Cantidad",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),s("div",I,[a(e(c),{modelValue:l.selectedValue,"onUpdate:modelValue":r[1]||(r[1]=t=>l.selectedValue=t),options:l.nodes,selectionMode:"checkbox",placeholder:"SKU",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),a(e(u),{tableStyle:"min-width: 50rem",filters:"filters",value:f.value},{default:o(()=>[a(e(d),{headerClass:"!bg-primary-900",field:"date",header:"Cantidad"},{body:o(t=>[s("p",null,p(t.data.qty)+" "+p(t.data.units),1)]),_:1}),a(e(d),{headerClass:"!bg-primary-900",field:"sku",header:"SKU"}),a(e(d),{headerClass:"!bg-primary-900",field:"name",header:"Producto"}),a(e(d),{headerClass:"!bg-primary-900",field:"problem",header:"Problema"},{body:o(t=>[t.data.problem?(n(),b(e(i),{key:0,Tag:"",value:t.data.problem,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])):A("",!0)]),_:1})]),_:1},8,["value"]),s("div",k,[a(e(u),{tableStyle:"min-width: 50rem",filters:"filters",value:h.value},{default:o(()=>[a(e(d),{headerClass:"!bg-secundary-300",field:"sku",header:"SKU"}),a(e(d),{headerClass:"!bg-secundary-300",field:"name",header:"Producto"}),a(e(d),{headerClass:"!bg-secundary-300",field:"problem",header:"Problema"},{body:o(t=>[t.data.problem?(n(),b(e(i),{key:0,Tag:"",value:t.data.problem,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])):A("",!0)]),_:1})]),_:1},8,["value"])])]),C],64))}};export{S as default};

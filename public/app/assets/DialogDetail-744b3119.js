import{d as N,s as d,b as v,a as b}from"./tag.esm-535aff5f.js";import{o as n,c as R,f as l,a as r,u as e,b as g,h as C,i as u,w as o,t as _,p as h,s as x,j as k,g as w}from"./index-ed101740.js";const D={class:"card flex flex-wrap justify-content-center gap-3"},V={class:"p-input-icon-left relative"},$=l("i",{class:"pi pi-search absolute !top-5",style:{color:"#259BD7"}},null,-1),E={__name:"Search",setup(y){return(p,i)=>(n(),R("div",D,[l("span",V,[$,r(e(N),{class:"!py-2 !rounded-xl !bg-secundary-300 !border-none",modelValue:p.value1,"onUpdate:modelValue":i[0]||(i[0]=c=>p.value1=c),placeholder:"Buscar"},null,8,["modelValue"])])]))}},S=l("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),w(" Ver detalles ")],-1),B=l("div",{class:"mt-2 mb-1 text-primary-900 font-semi-bold"},[l("p",null,"Productos")],-1),I={__name:"DialogDetail",props:{orderDetails:Array},setup(y){const p=y,i=g([]),c=g([]);return C(()=>{var m;i.value=p.orderDetails,c.value=(m=p.orderDetails)==null?void 0:m.OrderItems,console.log(i.value)}),(m,f)=>(n(),u(e(k),{modal:"",header:" ",style:{width:"70vw"}},{default:o(()=>[l("div",null,[S,l("p",null,"Revisa aquí los detalles de la nota de venta N° "+_(i.value.DocNum),1)]),B,r(e(v),{tableStyle:"min-width: 50rem",filters:"filters",value:c.value},{default:o(()=>[r(e(d),{headerClass:"!bg-primary-900",field:"date",header:"Cantidad"},{body:o(a=>[l("p",null,_(a.data.Quantity)+" Unidades",1)]),_:1}),r(e(d),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),r(e(d),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"})]),_:1},8,["value"]),r(e(v),{class:"pt-5",tableStyle:"min-width: 50rem",value:[i.value]},{default:o(()=>[r(e(d),{headerClass:"!bg-primary-900",field:"SalesEmployeeName",header:"Vendedor"},{body:o(a=>{var s,t;return[(s=a.data)!=null&&s.SalesEmployeeName?(n(),u(e(b),{key:0,icon:"pi pi-user",value:(t=a.data)==null?void 0:t.SalesEmployeeName,class:"p-tag-1 tag-font-method tag-radius"},null,8,["value"])):h("",!0)]}),_:1}),r(e(d),{headerClass:"!bg-primary-900",field:"ResponsibleAuthorizerName",header:"Autorizado por"},{body:o(a=>{var s,t;return[(s=a.data)!=null&&s.ResponsibleAuthorizerName?(n(),u(e(b),{key:0,icon:"pi pi-user",value:(t=a.data)==null?void 0:t.ResponsibleAuthorizerName,class:"p-tag-1 tag-font-method tag-radius"},null,8,["value"])):h("",!0)]}),_:1}),r(e(d),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Preparado por:"},{body:o(a=>{var s,t;return[(s=a.data)!=null&&s.ResponsiblePickerName?(n(),u(e(b),{key:0,icon:"pi pi-user",value:(t=a.data)==null?void 0:t.ResponsiblePickerName,class:"p-tag-1 tag-font-method tag-radius"},null,8,["value"])):h("",!0)]}),_:1}),r(e(d),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisado por:"},{body:o(a=>{var s,t;return[(s=a.data)!=null&&s.ResponsibleReviewerName?(n(),u(e(b),{key:0,icon:"pi pi-user",value:(t=a.data)==null?void 0:t.ResponsibleReviewerName,class:"p-tag-1 tag-font-method tag-radius"},null,8,["value"])):h("",!0)]}),_:1})]),_:1},8,["value"]),r(e(x),{label:"Cerrar",onClick:f[0]||(f[0]=a=>m.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}};export{I as _,E as a};

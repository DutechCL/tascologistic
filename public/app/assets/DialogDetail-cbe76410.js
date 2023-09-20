import{c as N,s as d,b as y,a as b}from"./tag.esm-dc33095a.js";import{o as n,c as R,f as l,a as t,u as e,b as g,h as C,i as p,w as i,t as _,p as h,s as x,j as k,g as w}from"./index-a8a67531.js";const D={class:"card flex flex-wrap justify-content-center gap-3"},V={class:"p-input-icon-left relative"},$=l("i",{class:"pi pi-search absolute !top-5",style:{color:"#259BD7"}},null,-1),I={__name:"Search",setup(f){return(u,o)=>(n(),R("div",D,[l("span",V,[$,t(e(N),{class:"!py-2 !rounded-xl !bg-secundary-300 !border-none",modelValue:u.value1,"onUpdate:modelValue":o[0]||(o[0]=c=>u.value1=c),placeholder:"Buscar"},null,8,["modelValue"])])]))}},A=l("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-eye !text-xl"}),w(" Ver detalles ")],-1),z=l("div",{class:"mt-2 mb-1 text-primary-900 font-semi-bold"},[l("p",null,"Productos")],-1),U={__name:"DialogDetail",props:{orderDetails:Array},setup(f){const u=f,o=g([]),c=g([]);return C(()=>{var m;o.value=u.orderDetails,c.value=(m=u.orderDetails)==null?void 0:m.OrderItems,console.log(o.value)}),(m,v)=>(n(),p(e(k),{modal:"",header:" ",style:{width:"70vw"}},{default:i(()=>[l("div",null,[A,l("p",null,"Revisa aquí los detalles de la nota de venta N° "+_(o.value.DocNum),1)]),z,t(e(y),{tableStyle:"min-width: 50rem",filters:"filters",value:c.value},{default:i(()=>[t(e(d),{headerClass:"!bg-primary-900",field:"date",header:"Cantidad"},{body:i(a=>[l("p",null,_(a.data.Quantity)+" Unidades",1)]),_:1}),t(e(d),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),t(e(d),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"})]),_:1},8,["value"]),t(e(y),{class:"pt-5",tableStyle:"min-width: 50rem",value:[o.value]},{default:i(()=>[t(e(d),{headerClass:"!bg-primary-900",field:"ResponsibleAuthorizerName",header:"Vendedor"},{body:i(a=>{var s,r;return[(s=a.data)!=null&&s.ResponsibleAuthorizerName?(n(),p(e(b),{key:0,icon:"pi pi-user",value:(r=a.data)==null?void 0:r.ResponsibleAuthorizerName,class:"p-tag-1 tag-font-method tag-radius"},null,8,["value"])):h("",!0)]}),_:1}),t(e(d),{headerClass:"!bg-primary-900",field:"ResponsibleAuthorizerName",header:"Autorizado por"},{body:i(a=>{var s,r;return[(s=a.data)!=null&&s.ResponsibleAuthorizerName?(n(),p(e(b),{key:0,icon:"pi pi-user",value:(r=a.data)==null?void 0:r.ResponsibleAuthorizerName,class:"p-tag-1 tag-font-method tag-radius"},null,8,["value"])):h("",!0)]}),_:1}),t(e(d),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Preparado por:"},{body:i(a=>{var s,r;return[(s=a.data)!=null&&s.ResponsiblePickerName?(n(),p(e(b),{key:0,icon:"pi pi-user",value:(r=a.data)==null?void 0:r.ResponsiblePickerName,class:"p-tag-1 tag-font-method tag-radius"},null,8,["value"])):h("",!0)]}),_:1}),t(e(d),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisado por:"},{body:i(a=>{var s,r;return[(s=a.data)!=null&&s.ResponsibleReviewerName?(n(),p(e(b),{key:0,icon:"pi pi-user",value:(r=a.data)==null?void 0:r.ResponsibleReviewerName,class:"p-tag-1 tag-font-method tag-radius"},null,8,["value"])):h("",!0)]}),_:1})]),_:1},8,["value"]),t(e(x),{label:"Cerrar",onClick:v[0]||(v[0]=a=>m.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}};export{U as _,I as a};

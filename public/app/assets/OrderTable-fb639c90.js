import{s as t,a as o,b as l}from"./tag.esm-90848af9.js";import{g as c,o as u,c as p,b as a,w as r,u as e,a as h,d as m,t as f,n as _}from"./index-152d7a90.js";import"./index.esm-69705378.js";const b={class:"px-8"},g=h("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"}," Revise su orden aquí ",-1),I={__name:"OrderTable",setup(v){const i=c([{statusId:1,note:"4567892",date:"19/04/2023",hour:"10:26",client:"Daniel Ramirez Palma",status:"En espera"},{statusId:2,note:"0998764",date:"19/04/2023",hour:"10:58",client:"Lucas Sandoval",status:"En preparación"},{statusId:3,note:"0998764",date:"19/04/2023",hour:"11:25",client:"Diego Ramos Catalán",status:"En preparación"},{statusId:4,note:"0998764",date:"19/04/2023",hour:"12:41",client:"Lucas Sandoval",status:"En preparación"}]),n=d=>`p-tag-${d}`;return(d,y)=>(u(),p("div",b,[g,a(e(l),{value:i.value,tableStyle:"min-width: 50rem"},{default:r(()=>[a(e(t),{headerClass:"!bg-primary-900",field:"note",header:"Nota de venta"},{body:r(s=>[m(" N° "+f(s.data.note),1)]),_:1}),a(e(t),{headerClass:"!bg-primary-900",field:"date",header:"Fecha"}),a(e(t),{headerClass:"!bg-primary-900",field:"hour",header:"Hora"}),a(e(t),{headerClass:"!bg-primary-900",field:"client",header:"Cliente"}),a(e(t),{headerClass:"!bg-primary-900",field:"status",header:"Estado"},{body:r(s=>[a(e(o),{icon:"pi pi-circle-fill",value:s.data.status,class:_([n(s.data.statusId),"tag-font-status tag-radius"])},null,8,["value","class"])]),_:1})]),_:1},8,["value"])]))}};export{I as default};

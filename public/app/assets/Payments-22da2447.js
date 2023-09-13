import{s as x,a as R}from"./tabpanel.esm-83228ae6.js";import{o as p,c as b,f as n,a as l,u as o,O as q,x as T,z as g,b as f,i as G,w as d,s as w,F as $,k as B,t as k,p as M,j as K,g as h}from"./index-23413f13.js";import{c as U,d as W,s as c,a as S,e as P,b as I}from"./tag.esm-1e852153.js";import{s as V}from"./treeselect.esm-40ac6e48.js";const H={class:"card flex flex-wrap justify-content-center gap-3"},J={class:"p-input-icon-left relative"},Q=n("i",{class:"pi pi-search absolute !top-5",style:{color:"#259BD7"}},null,-1),O={__name:"Search",setup(a){return(e,r)=>(p(),b("div",H,[n("span",J,[Q,l(o(U),{class:"!py-2 !rounded-xl !bg-secundary-300 !border-none",modelValue:e.value1,"onUpdate:modelValue":r[0]||(r[0]=s=>e.value1=s),placeholder:"Buscar"},null,8,["modelValue"])])]))}};var X={root:function(e){var r=e.instance,s=e.props;return["p-radiobutton p-component",{"p-radiobutton-checked":r.checked,"p-radiobutton-disabled":s.disabled,"p-radiobutton-focused":r.focused}]},input:function(e){var r=e.instance,s=e.props;return["p-radiobutton-box",{"p-highlight":r.checked,"p-disabled":s.disabled,"p-focus":r.focused}]},icon:"p-radiobutton-icon"},Y={name:"BaseRadioButton",extends:T,props:{value:null,modelValue:null,name:{type:String,default:null},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},css:{classes:X},provide:function(){return{$parentInstance:this}}},F={name:"RadioButton",extends:Y,emits:["click","update:modelValue","change","focus","blur"],data:function(){return{focused:!1}},methods:{onClick:function(e){this.disabled||(this.$emit("click",e),this.$emit("update:modelValue",this.value),this.$refs.input.focus(),this.checked||this.$emit("change",e))},onFocus:function(e){this.focused=!0,this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.$emit("blur",e)}},computed:{checked:function(){return this.modelValue!=null&&q.equals(this.modelValue,this.value)}}};function _(a){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(a)}function D(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),r.push.apply(r,s)}return r}function j(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?D(Object(r),!0).forEach(function(s){Z(a,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(r,s))})}return a}function Z(a,e,r){return e=ee(e),e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function ee(a){var e=ae(a,"string");return _(e)==="symbol"?e:String(e)}function ae(a,e){if(_(a)!=="object"||a===null)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var s=r.call(a,e||"default");if(_(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}var te=["id","name","checked","disabled","value","aria-labelledby","aria-label"],le=["data-p-highlight","data-p-disabled","data-p-focused"];function ne(a,e,r,s,i,t){return p(),b("div",g({class:a.cx("root"),onClick:e[2]||(e[2]=function(m){return t.onClick(m)})},a.ptm("root"),{"data-pc-name":"radiobutton"}),[n("div",g({class:"p-hidden-accessible"},a.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[n("input",g({ref:"input",id:a.inputId,type:"radio",name:a.name,checked:t.checked,disabled:a.disabled,value:a.value,"aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel,onFocus:e[0]||(e[0]=function(){return t.onFocus&&t.onFocus.apply(t,arguments)}),onBlur:e[1]||(e[1]=function(){return t.onBlur&&t.onBlur.apply(t,arguments)})},a.ptm("hiddenInput")),null,16,te)],16),n("div",g({ref:"box",class:[a.cx("input"),a.inputClass],style:a.inputStyle},j(j({},a.inputProps),a.ptm("input")),{"data-p-highlight":t.checked,"data-p-disabled":a.disabled,"data-p-focused":i.focused}),[n("div",g({class:a.cx("icon")},a.ptm("icon")),null,16)],16,le)],16)}F.render=ne;const se=n("div",null,[n("h1",{class:"mb-4 text-primary-900 font-inter font-semibold text-xl"},[n("i",{class:"pi pi-info-circle rotate-180 !text-xl"}),h(" Medios de pago ")]),n("p",{class:"mb-4 text-primary-900 font-inter font-medium text-md"}," Factura N° 541651 ")],-1),oe=n("div",{class:"flex justify-between",style:{width:"80%"}},[n("div",{class:"mt-2 mb-1"},[n("p",null,[h("Cliente: "),n("span",{class:"text-primary-900 font-semi-bold"},"Ricardo Chávez Pérez")])]),n("div",{class:"mt-2 mb-1"},[n("p",null,[h("Monto total: "),n("span",{class:"text-primary-900 font-semi-bold"},"$520.250")])]),n("div",{class:"mt-2 mb-1"},[n("p",null,[h("Fecha: "),n("span",{class:"text-primary-900 font-semi-bold"},"19/04/2023")])])],-1),re={class:"mt-4 flex justify-between align-center"},ie={class:"w-9/12"},de=n("p",{class:"mb-1"},"Selecciona el método de pago",-1),ue={key:0},ce=n("p",{class:"py-5"},"Aquí puedes navegar a través de los métodos de pagos",-1),pe={class:"grid grid-cols-5"},me=["for"],be={key:1,class:"py-8"},ye=n("p",{class:"text-primary-900 font-inter font-medium text-md"},"Datos de pago",-1),fe={class:"grid grid-cols-2"},ve=["for"],N={__name:"DialogMethosPayment",setup(a){const e=f(),r=f([]),s=f(""),i=f(""),t=f([{idMethod:1,name:"BCI pagos",inputs:[{key:"bci1",type:"number",label:"N° de la tarjeta"},{key:"bci2",type:"date",label:"Válido hasta"},{key:"bci3",type:"text",label:"N° Dia (D, B, G, C)"},{key:"bci4",type:"number",label:"Cantidad de cuotas"},{key:"bci5",type:"number",label:"Cantidad de pagos"},{key:"bci6",type:"text",label:"Partir documento de tarjeta"},{key:"bci7",type:"number",label:"Primer pago parcial"},{key:"bci8",type:"number",label:"Cada pago adicional"}]},{idMethod:2,name:"Transferencia",inputs:[{key:"transferencia1",type:"date",label:"Fecha de transferencia"},{key:"transferencia2",type:"number",label:"N° de transferencia"},{key:"transferencia3",type:"number",label:"Importe total"}]},{idMethod:3,name:"Web pay",inputs:[{key:"webpay1",type:"number",label:"N° de la tarjeta"},{key:"webpay2",type:"date",label:"Válido hasta"},{key:"webpay3",type:"text",label:"N° Dia (D, B, G, C)"},{key:"webpay4",type:"number",label:"Cantidad de cuotas"},{key:"webpay5",type:"number",label:"Cantidad de pagos"},{key:"webpay6",type:"text",label:"Partir documento de tarjeta"},{key:"webpay7",type:"number",label:"Primer pago parcial"},{key:"webpay8",type:"number",label:"Cada pago adicional"}]},{idMethod:4,name:"Cheque",inputs:[{key:"cheque1",type:"number",label:"Importe"},{key:"cheque2",type:"date",label:"Fecha de vencimiento"},{key:"cheque3",type:"select",label:"Banco"},{key:"cheque4",type:"number",label:"N° de cheque"}]},{idMethod:5,name:"Efectivo",inputs:[{key:"efectivo1",type:"number",label:"Monto a pagar"}]},{idMethod:6,name:"Cuenta corriente",inputs:[{key:"cuentacorriente1",type:"number",label:"Código de cliente"},{key:"cuentacorriente2",type:"number",label:"Monto a pagar"}]},{idMethod:7,name:"Saldo a favor",inputs:[{key:"saldoafavor1",type:"date",label:"Fecha del pago"},{key:"saldoafavor2",type:"number",label:"Monto a pagar"}]}]),m=()=>{e.value&&!r.value.some(v=>v.name===e.value.name)&&(r.value.push(e.value),e.value=null)},E=v=>{i.value=t.value.find(y=>y.idMethod===v)};return(v,y)=>(p(),G(o(K),{modal:"",header:" ",style:{width:"70vw"}},{default:d(()=>[se,oe,n("div",re,[n("div",ie,[de,l(o(W),{modelValue:e.value,"onUpdate:modelValue":y[0]||(y[0]=u=>e.value=u),options:t.value,optionLabel:"name",placeholder:"Selecciona el método de pago",class:"w-full md:w-14rem"},null,8,["modelValue","options"])]),l(o(w),{icon:"pi pi-plus",label:"Agregar",class:"!py-2 !border-none !bg-primary-900",onClick:m})]),r.value.length>0?(p(),b("div",ue,[ce,n("ul",pe,[(p(!0),b($,null,B(r.value,u=>(p(),b("li",{class:"!bg-cyan-500 shadow-lg !mr-3 !p-3",key:u.name},[l(o(F),{modelValue:s.value,"onUpdate:modelValue":y[1]||(y[1]=C=>s.value=C),inputId:u.idMethod,onChange:C=>E(u.idMethod),name:"method",value:u.name},null,8,["modelValue","inputId","onChange","value"]),n("label",{for:u.idMethod,class:"ml-2"},k(u.name),9,me)]))),128))])])):M("",!0),i.value?(p(),b("div",be,[ye,n("div",fe,[(p(!0),b($,null,B(i.value.inputs,({key:u,type:C,label:A},L)=>(p(),b("div",{key:L,class:"flex flex-col p-2"},[n("label",{for:u},k(A),9,ve),l(o(U),{type:C,name:u,modelValue:v.value,"onUpdate:modelValue":y[2]||(y[2]=z=>v.value=z),"aria-describedby":u},null,8,["type","name","modelValue","aria-describedby"])]))),128))])])):M("",!0),l(o(w),{label:"Cerrar",onClick:y[3]||(y[3]=u=>v.visible=!1),class:"!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"})]),_:1}))}},he={class:"flex justify-between"},ge=n("div",null,[n("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Facturas pendientes de pago ")],-1),Ve={class:"flex"},ke={class:"card flex justify-content-center"},_e={class:"card flex justify-content-center"},Ce={class:"card flex justify-content-center mr-20"},we={__name:"ToManage",setup(a){const e=f(!1),r=f([{statusId:1,bills:"53453453",note:"4567892",client:"Daniel Ramirez Palma",seller:"Lucas Sandoval",status:"En espera",totalAmount:"200000",credit:"700000",positiveBalance:"500000"},{statusId:2,bills:"535345353",note:"0998764",client:"Lucas Sandoval",seller:"Daniel Ramirez Palma",status:"En preparación",totalAmount:"200000",credit:"700000",positiveBalance:"500000"},{statusId:3,bills:"532122323",note:"0998764",client:"Lucas Perez",seller:"Lucas Sandoval",status:"En preparación",totalAmount:"200000",credit:"700000",positiveBalance:"500000"},{statusId:4,bills:"53234453",note:"0998764",client:"Daniel Palma",seller:"Daniel Ramirez",status:"En preparación",totalAmount:"200000",credit:"700000",positiveBalance:"500000"}]);return(s,i)=>(p(),b($,null,[n("div",he,[ge,l(O)]),n("div",Ve,[n("div",ke,[l(o(V),{modelValue:s.selectedValue,"onUpdate:modelValue":i[0]||(i[0]=t=>s.selectedValue=t),options:s.nodes,selectionMode:"checkbox",placeholder:"Factura",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),n("div",_e,[l(o(V),{modelValue:s.selectedValue,"onUpdate:modelValue":i[1]||(i[1]=t=>s.selectedValue=t),options:s.nodes,selectionMode:"checkbox",placeholder:"Nota de venta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),n("div",Ce,[l(o(V),{modelValue:s.selectedValue,"onUpdate:modelValue":i[2]||(i[2]=t=>s.selectedValue=t),options:s.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),l(o(I),{class:"mb-20",value:r.value,tableStyle:"min-width: 50rem"},{default:d(()=>[l(o(c),{headerClass:"!bg-primary-900",field:"bills",header:"Factura"},{body:d(t=>[h(" N° "+k(t.data.note),1)]),_:1}),l(o(c),{headerClass:"!bg-primary-900",field:"note",header:"Nota de venta"},{body:d(t=>[h(" N° "+k(t.data.note),1)]),_:1}),l(o(c),{headerClass:"!bg-primary-900",field:"client",header:"Cliente"},{body:d(t=>[l(o(S),{icon:"pi pi-user",value:t.data.client,class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"},null,8,["value"])]),_:1}),l(o(c),{headerClass:"!bg-primary-900",field:"totalAmount",header:"Total"},{body:d(t=>[l(o(P),{modelValue:t.data.totalAmount,"onUpdate:modelValue":m=>t.data.totalAmount=m,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(o(c),{headerClass:"!bg-primary-900",field:"seller",header:"Vendedor"},{body:d(t=>[l(o(S),{icon:"pi pi-user",value:t.data.seller,class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"},null,8,["value"])]),_:1}),l(o(c),{headerClass:"!bg-primary-900",field:"status",header:"Entrega"}),l(o(c),{headerClass:"!bg-primary-900",field:"credit",header:"Crédito"},{body:d(t=>[l(o(P),{modelValue:t.data.credit,"onUpdate:modelValue":m=>t.data.credit=m,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(o(c),{headerClass:"!bg-primary-900",field:"positiveBalance",header:"Saldo a favor"},{body:d(t=>[l(o(P),{modelValue:t.data.positiveBalance,"onUpdate:modelValue":m=>t.data.positiveBalance=m,class:"remove-format-input",inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",readonly:"",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(o(c),{headerClass:"!bg-primary-900",field:"note",header:""},{body:d(t=>[l(o(w),{label:"Pagar",class:"!py-1.5 !border-primary-900 !text-primary-900",onClick:i[3]||(i[3]=m=>e.value=!0),outlined:""})]),_:1})]),_:1},8,["value"]),l(N,{visible:e.value,"onUpdate:visible":i[4]||(i[4]=t=>e.value=t)},null,8,["visible"])],64))}},$e={class:"flex justify-between"},Pe=n("div",null,[n("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"}," Pago a cuenta ")],-1),Se={class:"flex"},xe={class:"card flex justify-content-center mr-20"},Be={class:"card flex justify-content-center"},Me={__name:"Managed",setup(a){const e=f(!1),r=f([{statusId:1,bills:"53453453",note:"4567892",client:"Daniel Ramirez Palma",seller:"Lucas Sandoval",status:"En espera",totalAmount:"200000",credit:"700000",positiveBalance:"500000"},{statusId:2,bills:"535345353",note:"0998764",client:"Lucas Sandoval",seller:"Daniel Ramirez Palma",status:"En preparación",totalAmount:"200000",credit:"700000",positiveBalance:"500000"},{statusId:3,bills:"532122323",note:"0998764",client:"Lucas Perez",seller:"Lucas Sandoval",status:"En preparación",totalAmount:"200000",credit:"700000",positiveBalance:"500000"},{statusId:4,bills:"53234453",note:"0998764",client:"Daniel Palma",seller:"Daniel Ramirez",status:"En preparación",totalAmount:"200000",credit:"700000",positiveBalance:"500000"}]);return(s,i)=>(p(),b($,null,[n("div",$e,[Pe,l(O)]),n("div",Se,[n("div",xe,[l(o(V),{modelValue:s.selectedValue,"onUpdate:modelValue":i[0]||(i[0]=t=>s.selectedValue=t),options:s.nodes,selectionMode:"checkbox",placeholder:"Cliente",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),n("div",Be,[l(o(V),{modelValue:s.selectedValue,"onUpdate:modelValue":i[1]||(i[1]=t=>s.selectedValue=t),options:s.nodes,selectionMode:"checkbox",placeholder:"Cuenta",class:"md:w-20rem w-full"},null,8,["modelValue","options"])])]),l(o(I),{class:"mb-20",value:r.value,tableStyle:"min-width: 50rem"},{default:d(()=>[l(o(c),{headerClass:"!bg-primary-900",field:"client",header:"Cliente",style:{width:"20%"}},{body:d(t=>[l(o(S),{icon:"pi pi-user",value:t.data.client,class:"!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"},null,8,["value"])]),_:1}),l(o(c),{headerClass:"!bg-primary-900",field:"note",header:"Nota de venta",style:{width:"65%"}},{body:d(t=>[h(" N° "+k(t.data.note),1)]),_:1}),l(o(c),{headerClass:"!bg-primary-900",field:"note",header:"",style:{width:"20%"}},{body:d(t=>[l(o(w),{label:"Pagar",class:"!py-1.5 !border-primary-900 !text-primary-900",onClick:i[2]||(i[2]=m=>e.value=!0),outlined:""})]),_:1})]),_:1},8,["value"]),l(N,{visible:e.value,"onUpdate:visible":i[3]||(i[3]=t=>e.value=t)},null,8,["visible"])],64))}};const De={class:"px-3"},Fe={__name:"Payments",setup(a){return(e,r)=>(p(),b("div",De,[l(o(R),null,{default:d(()=>[l(o(x),{header:"Facturas pendientes de pago"},{default:d(()=>[l(we)]),_:1}),l(o(x),{header:"Pago a cuenta"},{default:d(()=>[l(Me)]),_:1})]),_:1})]))}};export{Fe as default};

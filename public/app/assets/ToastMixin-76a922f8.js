import{I as O,o as p,c as S,E as P,h as _,e as a,v as I,a as C,u as T,a4 as D,f as h}from"./index-cf48280a.js";import{d as N}from"./tag.esm-9e551abd.js";import{u as m}from"./OrdersApiService-fa967cc7.js";var f={name:"ChevronLeftIcon",extends:O},v=_("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1),L=[v];function g(r,n,e,i,l,c){return p(),S("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.pti()),L,16)}f.render=g;const A="/",H=1,w=2,U=3,B="here",V="pickup",y="delivery",M="pickup-delivery",x="cda",G="picker",K="reviewer",$="picker-reviewer",b="bills",k=1,Y=2,W=3,j=4,J=5,F=6,Z=7,q=8,z="approve",Q="reject",X="info",ee="guide",se="invoice",te=2,oe=3,ie={API_BASE_URL:A,METHOD_SHIPPING_HERE_ID:H,METHOD_SHIPPING_PICKUP_ID:w,METHOD_SHIPPING_DELIVERY_ID:U,METHOD_SHIPPING_HERE:B,METHOD_SHIPPING_PICKUP:V,METHOD_SHIPPING_DELIVERY:y,METHOD_SHIPPING_PICKUP_AND_DELIVERY:M,RESPONSIBLE_CDA:x,RESPONSIBLE_PICKER:G,RESPONSIBLE_REVIEWER:K,RESPONSIBLE_PICKER_REVIEWER:$,RESPONSIBLE_BILLER:b,ORDER_STATUS_ON_HOLD:k,ORDER_STATUS_ON_PICKER:Y,ORDER_STATUS_PICKED:W,ORDER_STATUS_ON_REVIEWER:j,ORDER_STATUS_REVIEWED:J,ORDER_STATUS_BILLED:F,ORDER_STATUS_PAYMENT:Z,ORDER_STATUS_REJECTED:q,ACTION_APPROVE:z,ACTION_REJECT:Q,ACTION_INFO:X,DOCUMENT_TYPE_GUIDE:ee,DOCUMENT_TYPE_INVOICE:se,PROCESS_PICKER_ID:te,PROCESS_REVIEWER_ID:oe},re={class:"card flex flex-wrap justify-content-center gap-3"},ne={class:"p-input-icon-left relative"},ce=_("i",{class:"pi pi-search absolute !top-5",style:{color:"#259BD7"}},null,-1),le={__name:"Search",props:{orders:Object,type:String,warehouses:String,methodShipping:String},setup(r,{emit:n}){const e=r,i=m(),l=a(e.orders),c=a(e.orders),E=a(null);I(()=>e.orders,s=>{l.value=s,c.value=s}),I(()=>E.value,s=>{u(s)});const u=s=>{let t=d(c.value,s);if(t.length>0)n("search",{orders:t});else{let o={type:e.type,warehouses:e.warehouses,methodShipping:e.methodShipping,search:s};i.searchOrders(o).then(R=>{n("search",{orders:R.data})})}};function d(s,t){return s.filter(o=>o.DocNum.toString().includes(t.toString())||o.DocEntry.toString().includes(t.toString())||o.Customer.CardName.toLowerCase().includes(t.toLowerCase()))}return(s,t)=>(p(),S("div",re,[_("span",ne,[ce,C(T(N),{class:"!py-2 !rounded-xl !bg-secundary-300 !border-none",modelValue:E.value,"onUpdate:modelValue":t[0]||(t[0]=o=>E.value=o),placeholder:"Buscar"},null,8,["modelValue"])])]))}},Ie={setup(){const r=D(),n=e=>{r.add({severity:e.status,summary:e.title||"",detail:e.message,life:e.time||3e3})};return h(()=>{}),{showToast:n}}};export{Ie as T,le as _,ie as c,f as s};

import{q as f,o as l,c as p,h as s,i as y,u as e,a as i,k as b,p as m,F as v,s as x,x as g}from"./index-c9913481.js";import{c,_ as D}from"./ConfirmMixin-881a5905.js";import{u as k,_ as E,a as S}from"./useOrderProcessing-665d1acc.js";import"./tag.esm-986a8a05.js";import"./index.esm-30d5ffbd.js";import"./OrdersApiService-919c32bf.js";import"./ApiService-9f515afe.js";import"./_commonjsHelpers-725317a4.js";import"./FilterMultiSelect-77b9d12a.js";import"./index.esm-5c63f3b0.js";import"./index-dd28ee9b.js";const B={class:"px-8"},I={class:"flex justify-between"},N={class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"},O=s("i",{class:"pi pi-refresh"},null,-1),V=[O],P={key:1,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},L=s("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No hay ordenes actualmente en este proceso ",-1),q={__name:"DispatchOrders",setup(M){const{updateOrders:r,orders:n,search:_,actionMethod:u,visibleDetailsMethod:h,orderStore:t}=k();return f(async()=>{await r(c.METHOD_SHIPPING_DELIVERY).then(()=>{n.value=t.listOrders})}),(d,o)=>(l(),p(v,null,[s("div",B,[s("div",I,[s("h1",N,[y(" Despacho "),s("a",{style:{cursor:"pointer"},onClick:o[0]||(o[0]=(...a)=>e(r)&&e(r)(...a))},V)]),i(D,{type:e(c).RESPONSIBLE_BILLER,methodShipping:e(c).METHOD_SHIPPING_DELIVERY,orders:e(t).orders,onSearch:e(_)},null,8,["type","methodShipping","orders","onSearch"])]),i(E,{orders:e(n),actions:d.actions,onAction:e(u)},null,8,["orders","actions","onAction"]),e(t).visibleDialog?(l(),b(S,{key:0,visible:e(t).visibleDialog,"onUpdate:visible":o[1]||(o[1]=a=>e(t).visibleDialog=a),orderDetails:e(t).order,onVisible:e(h)},null,8,["visible","orderDetails","onVisible"])):m("",!0),e(n).length===0?(l(),p("div",P,[L,i(e(x),{label:"Regresar",severity:"primary",outlined:"",onClick:d.goBack,class:"ml-3 !py-1.5"},null,8,["onClick"])])):m("",!0)]),i(e(g))],64))}};export{q as default};

import{s as m,a as y}from"./tabpanel.esm-c86c63f5.js";import{q as D,r as g,o as a,c as _,h as r,a as o,w as x,u as e,i as B,k as u,p as c,F as k,s as V,x as E}from"./index-1730fa93.js";import{c as p,_ as S}from"./ConfirmMixin-09fdbf34.js";import{u as I,_ as N,a as O}from"./useOrderProcessing-322bdfa4.js";import"./index.esm-cb9c53e2.js";import"./tag.esm-1e519b5f.js";import"./OrdersApiService-bd4fdae8.js";import"./ApiService-c2258a17.js";import"./_commonjsHelpers-725317a4.js";import"./FilterMultiSelect-7d98fb57.js";import"./index.esm-0fb109ef.js";import"./index-dd28ee9b.js";const P={class:"px-3"},C={class:"px-8"},$={class:"flex justify-between"},L={class:"mb-4 text-primary-900 font-inter font-semibold text-2xl"},M=r("i",{class:"pi pi-refresh"},null,-1),R=[M],T={key:2,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},w=r("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No hay ordenes actualmente en este proceso ",-1),X={__name:"DispatchOrders",setup(H){const{updateOrders:n,orders:d,search:b,actionMethod:h,visibleDetailsMethod:f,orderStore:s}=I();return D(async()=>{await n(p.METHOD_SHIPPING_DELIVERY).then(()=>{d.value=s.listOrders})}),(l,t)=>{const v=g("DialogDetailBill");return a(),_(k,null,[r("div",P,[o(e(y),{modelValue:l.selectedTab,"onUpdate:modelValue":t[0]||(t[0]=i=>l.selectedTab=i)},{default:x(()=>[o(e(m),{header:"Por gestionar"}),o(e(m),{header:"Gestionadas"})]),_:1},8,["modelValue"])]),r("div",C,[r("div",$,[r("h1",L,[B(" Despacho "),r("a",{style:{cursor:"pointer"},onClick:t[1]||(t[1]=(...i)=>e(n)&&e(n)(...i))},R)]),o(S,{type:e(p).RESPONSIBLE_BILLER,methodShipping:e(p).METHOD_SHIPPING_DELIVERY,orders:e(s).orders,onSearch:e(b)},null,8,["type","methodShipping","orders","onSearch"])]),o(N,{orders:e(d),actions:l.actions,onAction:e(h)},null,8,["orders","actions","onAction"]),e(s).visibleDialog?(a(),u(O,{key:0,visible:e(s).visibleDialog,"onUpdate:visible":t[2]||(t[2]=i=>e(s).visibleDialog=i),orderDetails:e(s).order,onVisible:e(f)},null,8,["visible","orderDetails","onVisible"])):c("",!0),e(s).visibleBill?(a(),u(v,{key:1,visible:e(s).visibleBill,"onUpdate:visible":t[3]||(t[3]=i=>e(s).visibleBill=i)},null,8,["visible"])):c("",!0),e(d).length===0?(a(),_("div",T,[w,o(e(V),{label:"Regresar",severity:"primary",outlined:"",onClick:l.goBack,class:"ml-3 !py-1.5"},null,8,["onClick"])])):c("",!0)]),o(e(E))],64)}}};export{X as default};
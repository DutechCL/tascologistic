import{c as _,T as V,C as K,_ as z}from"./ConfirmMixin-1fbce134.js";import{y as W,e as C,v as w,o as f,c as R,h as l,t as S,a,w as y,u as e,i as M,k as x,p as I,n as G,s as D,q as U,m as j,j as B,F as L,l as q,x as Q,z as J,r as Y}from"./index-4352535e.js";import{u as X}from"./OrdersApiService-7d35ab2b.js";import{s as u,a as k,b as N}from"./tag.esm-cdfa0061.js";import{_ as Z}from"./FilterMultiSelect-46b006dc.js";import{u as ee,s as te}from"./ProblemsApiService-6224a352.js";import"./_commonjsHelpers-725317a4.js";import"./ApiService-ba9a4109.js";import"./index.esm-07950154.js";import"./index.esm-477ec446.js";import"./index-dd28ee9b.js";function $(d,p){return d.filter(b=>b.method_shipping_id===p).sort((b,t)=>new Date(t.updated_at)-new Date(b.updated_at))}const re=1,se=2,ae=3,H=X(),T=W("ordersPickerReview",{state:()=>({listOrders:[],listOrdersHere:[],listOrdersPickupDelivery:[],isDataLoaded:!1,showDetailOrder:!1,showDialogProblem:!1,orderItem:{},currentOrder:{},isProblemMapped:[],isCompleteMapped:[],setOrderItemsProblems:new Set,orderItemsProblems:[],order:[],type:""}),getters:{orders:d=>d.listOrders},actions:{async getOrdersPickerAndReviewer(){let d=await H.getOrdersPickerAndReviewer(this.wareHouseCode);this.classifyOrders(d.data),this.isDataLoaded=!0},async assignResponsible(){let d={orderId:this.currentOrder.id,responsible:this.currentOrder.responsible};const p=await H.assignResponsible(d);return this.updateListOrders(p.data),p},async processOrderAction(d){const p=await H.processOrderPickerReviewer(d);return this.updateListOrders(p.data),p},classifyOrders(d){this.listOrders=d,this.listOrdersHere=$(d,re),this.listOrdersPickupDelivery=[...$(d,se),...$(d,ae)]},updateListOrders(d){[_.ORDER_STATUS_REVIEWED,_.ORDER_STATUS_REJECTED].includes(d.order_status_id)?this.listOrders=this.listOrders.filter(p=>p.id!==d.id):this.listOrders=this.listOrders.map(p=>p.id===d.id?d:p),this.classifyOrders(this.listOrders)}}});const oe={key:0},le={class:"mb-4 text-primary-900 font-inter font-semibold text-xl"},ie={class:"flex"},A={__name:"DataTableOrdersPickerReview",props:{title:String,type:String,orders:Array},setup(d,{emit:p}){const b=d,{showToast:t}=V.setup(),h=T(),g=C(b.orders),O=C(["DocNum","Customer","DocTotal","DocTime","DocDate"]);w(()=>b.orders,r=>{g.value=r});const v=r=>{g.value=r.orders},P=(r,s)=>{h.showDetailOrder=!0,h.currentOrder=r,h.currentOrder.responsible=s,n()},n=async()=>{try{let r=await h.assignResponsible();t({status:r.status,message:r.message})}catch(r){r.response&&(t({status:r.response.data.status,message:r.response.data.message}),h.showDetailOrder=!1)}},i=(r,s)=>{var o;return(o=r.Responsibles.find(E=>E.pivot.task==s))==null?void 0:o.name};function c(r){const s=m(r);return(.299*s.r+.587*s.g+.114*s.b)/255>.5?"#000000":"#FFFFFF"}function m(r){const s=parseInt(r.substring(1),16),o=s>>16&255,E=s>>8&255,F=s&255;return{r:o,g:E,b:F}}return(r,s)=>b.orders.length>0?(f(),R("div",oe,[l("h2",le,S(b.title),1),l("div",ie,[a(Z,{typeOrders:b.type,allOrders:b.orders,filters:O.value,onFilter:v},null,8,["typeOrders","allOrders","filters"])]),a(e(N),{class:"mb-20",value:g.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:r.loading,rowsPerPageOptions:[5,10,20,50],paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} a {last} de {totalRecords}"},{default:y(()=>[a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"DocNum",header:"Nota de venta"},{body:y(o=>[M(" N° "+S(o.data.DocNum),1)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"DocDate",header:"Fecha"}),a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"DocTime",header:"Hora"}),a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"Customer.CardName",header:"Cliente"}),a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"MethodShippingName",header:"Método entrega"},{body:y(o=>[a(e(k),{Tag:"",icon:"pi pi-shopping-cart",value:o.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:y(o=>[i(o.data,e(_).RESPONSIBLE_PICKER)?(f(),x(e(k),{key:0,icon:"pi pi-user",value:i(o.data,e(_).RESPONSIBLE_PICKER),class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):I("",!0)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:y(o=>[i(o.data,e(_).RESPONSIBLE_REVIEWER)?(f(),x(e(k),{key:0,icon:"pi pi-user",value:i(o.data,e(_).RESPONSIBLE_REVIEWER),class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):I("",!0)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"OrderStatusName",header:"Estado"},{body:y(o=>[a(e(k),{icon:"pi pi-circle-fill",value:o.data.OrderStatusName,style:G({backgroundColor:o.data.OrderStatusColor,color:c(o.data.OrderStatusColor)}),class:"tag-font-method tag-radius"},null,8,["value","style"])]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"note",header:""},{body:y(o=>[o.data.process_id==e(_).PROCESS_PICKER_ID?(f(),x(e(D),{key:0,label:"Pickear",onClick:E=>P(o.data,e(_).RESPONSIBLE_PICKER),class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},null,8,["onClick"])):I("",!0),o.data.process_id==e(_).PROCESS_REVIEWER_ID?(f(),x(e(D),{key:1,label:"Revisar",onClick:E=>P(o.data,e(_).RESPONSIBLE_REVIEWER),class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},null,8,["onClick"])):I("",!0)]),_:1})]),_:1},8,["value","loading"])])):I("",!0)}},de=l("h1",{class:"mb-3 mt-3 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-info-circle !text-xl rotate-180"}),M(" Reportar problema ")],-1),ne=l("p",{class:"mb-3"},"Por favor indique uno o más problemas detectados",-1),ce={key:0,class:"mt-4"},pe=l("p",{class:"mb-3"},"Por favor indique el problema detectado",-1),ue={class:"float-right"},me={__name:"DialogReportProblemOrderItem",props:{typeProblems:String},setup(d){const p=d,b=ee(),t=T(),h=C([]),g=C([]),O=C(!1),v=C(null),P=C(!0),n=C(!1),i=()=>{t.showDialogProblem=!1};U(async()=>{await b.getProblems(p.typeProblems),h.value=b.problems}),w(()=>b.problems,r=>{h.value=r}),w(()=>t.orderItem,()=>{g.value=[],v.value="",t.orderItem.problems!=null&&(g.value=t.orderItem.problems,v.value=t.orderItem.other)}),w(g,r=>{O.value=r.some(s=>s.title==="Otro"),P.value=r.length===0||O.value&&!n.value,t.orderItem.problems=r});const c=()=>{t.showDialogProblem=!1,t.orderItem.other=v.value,t.setOrderItemsProblems.add(t.orderItem),t.currentOrder.orderItemsProblems=Array.from(t.setOrderItemsProblems),(t.currentOrder.orderItemsProblems||[]).length>0&&(t.isProblemMapped[t.orderItem.id]=!0)};w(v,()=>{O.value?(n.value=!!m(v.value).trim(),P.value=!n.value):P.value=!1});const m=r=>new DOMParser().parseFromString(r,"text/html").body.innerText;return(r,s)=>(f(),x(e(j),{modal:"",header:" ",style:{width:"70vw"},"onUpdate:visible":i},{default:y(()=>[l("div",null,[de,ne,a(e(N),{selection:g.value,"onUpdate:selection":s[0]||(s[0]=o=>g.value=o),value:h.value,dataKey:"id"},{default:y(()=>[a(e(u),{headerClass:"!bg-primary-900",header:"Seleccionar",selectionMode:"multiple"}),a(e(u),{headerClass:"!bg-primary-900",field:"title",header:"Problema detectado"})]),_:1},8,["selection","value"]),O.value?(f(),R("div",ce,[pe,a(e(te),{class:"custom-editor",modelValue:v.value,"onUpdate:modelValue":s[1]||(s[1]=o=>v.value=o),editorStyle:"height: 80px"},null,8,["modelValue"])])):I("",!0)]),l("div",ue,[a(e(D),{label:"Reportar",disabled:P.value,onClick:c,class:"!py-2 !border-none !px-10 !bg-primary-900 mt-5"},null,8,["disabled"])])]),_:1}))}},be={key:0},he={class:"px-8"},_e={class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},ge=l("i",{class:"pi pi-inbox !text-xl"},null,-1),ye=l("div",{class:"flex align-center mb-2"},null,-1),fe=l("br",null,null,-1),ve={class:"flex"},Oe=l("strong",{class:"mr-3"},"NOTA: ",-1),Pe=l("div",{class:"flex"},null,-1),Ce={class:"mini-table mt-8"},Ie={class:"mt-8 flex float-right"},Re=l("div",{class:"space"},null,-1),Ee={class:"content-picker-problem"},Se={__name:"DetailOrder",setup(d){const{showToast:p}=V.setup(),{showConfirm:b}=K.setup(),t=T(),h=C(!0),g=new Set,O=()=>{t.showDetailOrder=!1,t.setOrderItemsProblems.clear(),t.isProblemMapped=[],t.isCompleteMapped=[]},v=(n,i)=>{var m,r;t.orderItem=n,t.showDialogProblem=i!=="complete",t.isCompleteMapped[n.id]=i==="complete",t.isProblemMapped[n.id]=i!=="complete",(((m=t.currentOrder)==null?void 0:m.orderItemsProblems)||[]).length>0&&i==="complete"&&(t.currentOrder.orderItemsProblems=(r=t.currentOrder)==null?void 0:r.orderItemsProblems.filter(s=>s.id!==n.id));const c=i==="complete"?g.add(n):g.delete(n);t.currentOrder.ordersItemsComplete=Array.from(c)};w(()=>{var n,i;return[(n=t.currentOrder)==null?void 0:n.orderItemsProblems,(i=t.currentOrder)==null?void 0:i.ordersItemsComplete]},()=>{const n=t.currentOrder;let i=Object.keys(t.isCompleteMapped).filter(r=>t.isCompleteMapped[r]===!0),c=Object.keys(t.isProblemMapped).filter(r=>t.isProblemMapped[r]===!0),m=i.length+c.length;h.value=m!==n.OrderItems.length});const P=async()=>{var i;if(await b())try{let m={action:(t.currentOrder.orderItemsProblems||[]).length==0?_.ACTION_APPROVE:_.ACTION_REJECT,orderId:t.currentOrder.id,responsible:t.currentOrder.responsible,orderItemsProblem:((i=t.currentOrder)==null?void 0:i.orderItemsProblems)??[]},r=await t.processOrderAction(m);r.status==="success"&&(t.showDetailOrder=!1,t.setOrderItemsProblems.clear(),t.isProblemMapped=[],t.isCompleteMapped=[],p({status:r.status,message:r.message}))}catch(c){c.response&&p({status:c.response.data.status,message:c.response.data.message})}else h.value=!1,p({status:"info",message:"Proceso cancelado"})};return(n,i)=>{var c,m,r;return f(),R(L,null,[e(t).showDetailOrder?(f(),R("div",be,[l("div",he,[l("h1",_e,[l("i",{class:"pi pi-arrow-left pr-3",onClick:O}),ge,M(" Nota de venta N° "+S(e(t).currentOrder.DocNum)+" ",1),a(e(k),{icon:"pi pi-shopping-cart",value:e(t).currentOrder.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),ye,a(e(k),{icon:"pi pi-user",value:e(t).currentOrder.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),fe,l("div",ve,[Oe,a(e(k),{value:e(t).currentOrder.Comments,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"])]),Pe,a(e(N),{tableStyle:"min-width: 50rem",filters:"filters",value:e(t).currentOrder.OrderItems},{default:y(()=>[a(e(u),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:y(s=>[l("p",null,S(s.data.Quantity)+" "+S(s.data.Quantity>1?"Unidades":"Unidad"),1)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),a(e(u),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"},{body:y(s=>[l("p",null,S(s.data.ItemDescription),1)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"WarehouseCode",header:"Almacén"}),a(e(u),{headerClass:"!bg-primary-900",field:"U_SBO_StockVentas",header:"Stock Ventas"},{body:y(s=>[l("p",null,S(s.data.U_SBO_StockVentas)+" "+S(s.data.U_SBO_StockVentas>1?"Unidades":"Unidad"),1)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"id",header:""},{body:y(s=>[a(e(D),{icon:"pi pi-check-circle",onClick:o=>v(s.data,"complete"),label:"Completado",class:B({"!py-2.5 !bg-green-300 !border-green-300 !text-white !mr-5 p-buttons-picker":e(t).isCompleteMapped[s.data.id],"!py-2.5 !border-primary-900 !text-primary-900 mr-5 p-buttons-picker":!e(t).isCompleteMapped[s.data.id]}),outlined:!e(t).isCompleteMapped[s.data.id]},null,8,["onClick","class","outlined"]),a(e(D),{icon:"pi pi-info-circle rotate-180",onClick:o=>v(s.data,"problem"),label:"Problema",class:B({"!py-2.5 !bg-red-300 !border-red-300 !text-white !mr-5 p-buttons-picker":e(t).isProblemMapped[s.data.id],"!py-2.5 !border-primary-900 !text-primary-900 mr-5 p-buttons-picker":!e(t).isProblemMapped[s.data.id]}),outlined:!e(t).isProblemMapped[s.data.id]},null,8,["onClick","class","outlined"])]),_:1})]),_:1},8,["value"]),l("div",Ce,[(c=e(t).currentOrder)!=null&&c.orderItemsProblems&&(((m=e(t).currentOrder)==null?void 0:m.orderItemsProblems)||[]).length>0?(f(),x(e(N),{key:0,tableStyle:"min-width: 50rem",filters:"filters",value:(r=e(t).currentOrder)==null?void 0:r.orderItemsProblems,class:"teble-probelm"},{default:y(()=>[a(e(u),{headerClass:"!bg-secundary-300",field:"ItemCode",header:"SKU",class:"p-3",style:{"padding-top":"15px","max-width":"100px"}}),a(e(u),{headerClass:"!bg-secundary-300",field:"ItemDescription",header:"Producto",class:"p-3",style:{"padding-top":"15px"}}),a(e(u),{headerClass:"!bg-secundary-300",field:"problems",header:"Problema",class:"p-3",style:{"padding-top":"15px"}},{body:y(s=>[(f(!0),R(L,null,q(s.data.problems,(o,E)=>(f(),x(e(k),{key:E,value:o.title,rounded:"",class:"my-2 mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"])):I("",!0)]),l("div",Ie,[a(e(D),{onClick:O,label:"Cancelar",class:"mr-4 !py-1.5 !px-10 p-button-outlined float-right !border-primary-900 !text-primary-900"}),a(e(D),{onClick:P,disabled:h.value,label:"Finalizar pedido",class:"!py-1.5 !border-none !px-10 !bg-primary-900 float-right"},null,8,["disabled"])])]),Re,l("div",Ee,[a(me,{visible:e(t).showDialogProblem,"onUpdate:visible":i[0]||(i[0]=s=>e(t).showDialogProblem=s),product:n.product,problemsProduct:n.problemsSelected,typeProblems:e(_).RESPONSIBLE_PICKER_REVIEWER,onSelectionChange:n.handleSelectionChange,onVisible:n.visibleReportMethod},null,8,["visible","product","problemsProduct","typeProblems","onSelectionChange","onVisible"])])])):I("",!0),a(e(Q))],64)}}};const ke={class:"px-8"},we={key:0,class:"text-center",style:{color:"#259bd7"}},xe=l("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},null,-1),De=[xe],Ne={key:1},Me={class:"flex justify-between"},Te=l("i",{class:"pi pi-refresh"},null,-1),$e=[Te],He={key:0,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},Le=l("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No se han encontrado ordenes ",-1),Ve=[Le],Je={__name:"PickupReview",props:{wareHouseCode:String},setup(d){const p=d,{showToast:b}=V.setup(),t=T(),h=C([]),g=C([]),{listOrdersHere:O,listOrdersPickupDelivery:v}=J(t.$state),P=()=>{t.getOrdersPickerAndReviewer(),b({status:"success",title:"Ordenes actualizadas",message:"Las ordenes se han actualizado correctamente"})};w(()=>t.orders,()=>{h.value=O.value,g.value=v.value}),U(()=>{t.wareHouseCode=p.wareHouseCode,t.getOrdersPickerAndReviewer()});const n=i=>{h.value=i.orders.filter(c=>c.method_shipping_id===_.METHOD_SHIPPING_HERE_ID).sort((c,m)=>new Date(m.updated_at)-new Date(c.updated_at)),g.value=i.orders.filter(c=>c.method_shipping_id!==_.METHOD_SHIPPING_HERE_ID).sort((c,m)=>new Date(m.updated_at)-new Date(c.updated_at))};return(i,c)=>{const m=Y("Toast");return f(),R(L,null,[l("div",ke,[e(t).isDataLoaded?I("",!0):(f(),R("div",we,De)),e(t).showDetailOrder?I("",!0):(f(),R("div",Ne,[l("div",Me,[l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"},[M(" Pickeo / Revisión "),l("a",{style:{cursor:"pointer"},onClick:P},$e)])]),a(z,{type:e(_).RESPONSIBLE_PICKER_REVIEWER,warehouses:p.wareHouseCode,orders:[...e(O),...e(v)],onSearch:n},null,8,["type","warehouses","orders"])]),a(A,{title:"Aqui",type:e(_).METHOD_SHIPPING_HERE,orders:h.value},null,8,["type","orders"]),a(A,{title:"Retiro / Despacho",type:e(_).METHOD_SHIPPING_PICKUP_AND_DELIVERY,orders:g.value},null,8,["type","orders"])])),a(Se)]),h.value.length===0&&g.value.length===0?(f(),R("div",He,Ve)):I("",!0),a(m)],64)}}};export{Je as default};

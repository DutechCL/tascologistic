import{T as V,c as g,_ as K}from"./ToastMixin-0f28ed05.js";import{y as z,e as C,v as x,o as f,c as R,h as l,t as S,a,w as y,u as e,i as M,k as w,p as I,n as G,s as D,q as U,m as W,j as B,F as L,l as j,x as q,z as Q,r as Y}from"./index-acd3f73e.js";import{u as J}from"./OrdersApiService-bf71abfd.js";import{s as u,a as E,b as N}from"./tag.esm-dff77a7c.js";import{_ as X}from"./FilterMultiSelect-f957ff8c.js";import{u as Z,s as ee}from"./ProblemsApiService-d7502d4a.js";import{C as te}from"./ConfirmMixin-e5331d63.js";import"./ApiService-17b85f0a.js";import"./index.esm-e451eccc.js";import"./index.esm-bdde54fb.js";import"./index-dd28ee9b.js";function T(d,b){return d.filter(p=>p.method_shipping_id===b).sort((p,t)=>new Date(t.updated_at)-new Date(p.updated_at))}const re=1,se=2,ae=3,H=J(),$=z("ordersPickerReview",{state:()=>({listOrders:[],listOrdersHere:[],listOrdersPickupDelivery:[],isDataLoaded:!1,showDetailOrder:!1,showDialogProblem:!1,orderItem:{},currentOrder:{},isProblemMapped:[],isCompleteMapped:[],setOrderItemsProblems:new Set,orderItemsProblems:[],order:[],type:""}),getters:{orders:d=>d.listOrders},actions:{async getOrdersPickerAndReviewer(){let d=await H.getOrdersPickerAndReviewer(this.wareHouseCode);this.classifyOrders(d.data),this.isDataLoaded=!0},async assingResponsible(){let d={orderId:this.currentOrder.id,responsible:this.currentOrder.responsible};const b=await H.assingResponsible(d);return this.updateListOrders(b.data),b},async processOrderAction(d){const b=await H.processOrderPickerReviewer(d);return this.updateListOrders(b.data),b},classifyOrders(d){this.listOrders=d,this.listOrdersHere=T(d,re),this.listOrdersPickupDelivery=[...T(d,se),...T(d,ae)]},updateListOrders(d){this.listOrders.findIndex(p=>p.id===d.id)!==-1?this.listOrders=this.listOrders.map(p=>p.id===d.id?d:p):this.listOrders=[d,...this.listOrders],this.classifyOrders(this.listOrders)}}});const oe={key:0},le={class:"mb-4 text-primary-900 font-inter font-semibold text-xl"},ie={class:"flex"},A={__name:"DataTableOrdersPickerReview",props:{title:String,type:String,orders:Array},setup(d,{emit:b}){const p=d,{showToast:t}=V.setup(),h=$(),_=C(p.orders),O=C(["DocNum","Customer","DocTotal","DocTime","DocDate"]);x(()=>p.orders,r=>{_.value=r});const v=r=>{_.value=r.orders},P=(r,s)=>{console.log(r),h.showDetailOrder=!0,h.currentOrder=r,h.currentOrder.responsible=s,n()},n=async()=>{try{let r=await h.assingResponsible();t({status:r.status,message:r.message})}catch(r){r.response&&(t({status:r.response.data.status,message:r.response.data.message}),h.showDetailOrder=!1)}},i=(r,s)=>{var o;return(o=r.Responsibles.find(k=>k.pivot.task==s))==null?void 0:o.name};function c(r){const s=m(r);return(.299*s.r+.587*s.g+.114*s.b)/255>.5?"#000000":"#FFFFFF"}function m(r){const s=parseInt(r.substring(1),16),o=s>>16&255,k=s>>8&255,F=s&255;return{r:o,g:k,b:F}}return(r,s)=>p.orders.length>0?(f(),R("div",oe,[l("h2",le,S(p.title),1),l("div",ie,[a(X,{typeOrders:p.type,allOrders:p.orders,filters:O.value,onFilter:v},null,8,["typeOrders","allOrders","filters"])]),a(e(N),{class:"mb-20",value:_.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:r.loading,rowsPerPageOptions:[5,10,20,50],paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} a {last} de {totalRecords}"},{default:y(()=>[a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"DocNum",header:"Nota de venta"},{body:y(o=>[M(" N° "+S(o.data.DocNum),1)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"DocDate",header:"Fecha"}),a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"DocTime",header:"Hora"}),a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"Customer.CardName",header:"Cliente"}),a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"MethodShippingName",header:"Método entrega"},{body:y(o=>[a(e(E),{Tag:"",icon:"pi pi-shopping-cart",value:o.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:y(o=>[i(o.data,e(g).RESPONSIBLE_PICKER)?(f(),w(e(E),{key:0,icon:"pi pi-user",value:i(o.data,e(g).RESPONSIBLE_PICKER),class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):I("",!0)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:y(o=>[i(o.data,e(g).RESPONSIBLE_REVIEWER)?(f(),w(e(E),{key:0,icon:"pi pi-user",value:i(o.data,e(g).RESPONSIBLE_REVIEWER),class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):I("",!0)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",sortable:"",field:"OrderStatusName",header:"Estado"},{body:y(o=>[a(e(E),{icon:"pi pi-circle-fill",value:o.data.OrderStatusName,style:G({backgroundColor:o.data.OrderStatusColor,color:c(o.data.OrderStatusColor)}),class:"tag-font-method tag-radius"},null,8,["value","style"])]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"note",header:""},{body:y(o=>[o.data.process_id==e(g).PROCESS_PICKER_ID?(f(),w(e(D),{key:0,label:"Pickear",onClick:k=>P(o.data,e(g).RESPONSIBLE_PICKER),class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},null,8,["onClick"])):I("",!0),o.data.process_id==e(g).PROCESS_REVIEWER_ID?(f(),w(e(D),{key:1,label:"Revisar",onClick:k=>P(o.data,e(g).RESPONSIBLE_REVIEWER),class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},null,8,["onClick"])):I("",!0)]),_:1})]),_:1},8,["value","loading"])])):I("",!0)}},de=l("h1",{class:"mb-3 mt-3 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-info-circle !text-xl rotate-180"}),M(" Reportar problema ")],-1),ne=l("p",{class:"mb-3"},"Por favor indique uno o más problemas detectados",-1),ce={key:0,class:"mt-4"},pe=l("p",{class:"mb-3"},"Por favor indique el problema detectado",-1),ue={class:"float-right"},me={__name:"DialogReportProblemOrderItem",props:{typeProblems:String},setup(d){const b=d,p=Z(),t=$(),h=C([]),_=C([]),O=C(!1),v=C(null),P=C(!0),n=C(!1),i=()=>{t.showDialogProblem=!1};U(async()=>{await p.getProblems(b.typeProblems),h.value=p.problems}),x(()=>p.problems,r=>{h.value=r}),x(()=>t.orderItem,()=>{_.value=[],v.value="",t.orderItem.problems!=null&&(_.value=t.orderItem.problems,v.value=t.orderItem.other)}),x(_,r=>{O.value=r.some(s=>s.title==="Otro"),P.value=r.length===0||O.value&&!n.value,t.orderItem.problems=r});const c=()=>{t.showDialogProblem=!1,t.orderItem.other=v.value,t.setOrderItemsProblems.add(t.orderItem),t.currentOrder.orderItemsProblems=Array.from(t.setOrderItemsProblems),(t.currentOrder.orderItemsProblems||[]).length>0&&(t.isProblemMapped[t.orderItem.id]=!0)};x(v,()=>{O.value?(n.value=!!m(v.value).trim(),P.value=!n.value):P.value=!1});const m=r=>new DOMParser().parseFromString(r,"text/html").body.innerText;return(r,s)=>(f(),w(e(W),{modal:"",header:" ",style:{width:"70vw"},"onUpdate:visible":i},{default:y(()=>[l("div",null,[de,ne,a(e(N),{selection:_.value,"onUpdate:selection":s[0]||(s[0]=o=>_.value=o),value:h.value,dataKey:"id"},{default:y(()=>[a(e(u),{headerClass:"!bg-primary-900",header:"Seleccionar",selectionMode:"multiple"}),a(e(u),{headerClass:"!bg-primary-900",field:"title",header:"Problema detectado"})]),_:1},8,["selection","value"]),O.value?(f(),R("div",ce,[pe,a(e(ee),{class:"custom-editor",modelValue:v.value,"onUpdate:modelValue":s[1]||(s[1]=o=>v.value=o),editorStyle:"height: 80px"},null,8,["modelValue"])])):I("",!0)]),l("div",ue,[a(e(D),{label:"Reportar",disabled:P.value,onClick:c,class:"!py-2 !border-none !px-10 !bg-primary-900 mt-5"},null,8,["disabled"])])]),_:1}))}},be={key:0},he={class:"px-8"},_e={class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},ge=l("i",{class:"pi pi-inbox !text-xl"},null,-1),ye=l("div",{class:"flex align-center mb-2"},null,-1),fe=l("br",null,null,-1),ve={class:"flex"},Oe=l("strong",{class:"mr-3"},"NOTA: ",-1),Pe=l("div",{class:"flex"},null,-1),Ce={class:"mini-table mt-8"},Ie={class:"mt-8 flex float-right"},Re=l("div",{class:"space"},null,-1),ke={class:"content-picker-problem"},Se={__name:"DetailOrder",setup(d){const{showToast:b}=V.setup(),{showConfirm:p}=te.setup(),t=$(),h=C(!0),_=new Set,O=()=>{t.showDetailOrder=!1,t.setOrderItemsProblems.clear(),t.isProblemMapped=[],t.isCompleteMapped=[]},v=(n,i)=>{var m,r;t.orderItem=n,t.showDialogProblem=i!=="complete",t.isCompleteMapped[n.id]=i==="complete",t.isProblemMapped[n.id]=i!=="complete",(((m=t.currentOrder)==null?void 0:m.orderItemsProblems)||[]).length>0&&i==="complete"&&(t.currentOrder.orderItemsProblems=(r=t.currentOrder)==null?void 0:r.orderItemsProblems.filter(s=>s.id!==n.id));const c=i==="complete"?_.add(n):_.delete(n);t.currentOrder.ordersItemsComplete=Array.from(c)};x(()=>{var n,i;return[(n=t.currentOrder)==null?void 0:n.orderItemsProblems,(i=t.currentOrder)==null?void 0:i.ordersItemsComplete]},()=>{const n=t.currentOrder;let i=Object.keys(t.isCompleteMapped).filter(r=>t.isCompleteMapped[r]===!0),c=Object.keys(t.isProblemMapped).filter(r=>t.isProblemMapped[r]===!0),m=i.length+c.length;h.value=m!==n.OrderItems.length});const P=async()=>{var i;if(await p())try{let m={action:(t.currentOrder.orderItemsProblems||[]).length==0?g.ACTION_APPROVE:g.ACTION_REJECT,orderId:t.currentOrder.id,responsible:t.currentOrder.responsible,orderItemsProblem:((i=t.currentOrder)==null?void 0:i.orderItemsProblems)??[]},r=await t.processOrderAction(m);r.status==="success"&&(t.showDetailOrder=!1,t.setOrderItemsProblems.clear(),t.isProblemMapped=[],t.isCompleteMapped=[],b({status:r.status,message:r.message}))}catch(c){c.response&&b({status:c.response.data.status,message:c.response.data.message})}else h.value=!1,b({status:"info",message:"Proceso cancelado"})};return(n,i)=>{var c,m,r;return f(),R(L,null,[e(t).showDetailOrder?(f(),R("div",be,[l("div",he,[l("h1",_e,[l("i",{class:"pi pi-arrow-left pr-3",onClick:O}),ge,M(" Nota de venta N° "+S(e(t).currentOrder.DocNum)+" ",1),a(e(E),{icon:"pi pi-shopping-cart",value:e(t).currentOrder.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),ye,a(e(E),{icon:"pi pi-user",value:e(t).currentOrder.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),fe,l("div",ve,[Oe,a(e(E),{value:e(t).currentOrder.Comments,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"])]),Pe,a(e(N),{tableStyle:"min-width: 50rem",filters:"filters",value:e(t).currentOrder.OrderItems},{default:y(()=>[a(e(u),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:y(s=>[l("p",null,S(s.data.Quantity)+" "+S(s.data.Quantity>1?"Unidades":"Unidad"),1)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),a(e(u),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"},{body:y(s=>[l("p",null,S(s.data.ItemDescription),1)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"WarehouseCode",header:"Almacén"}),a(e(u),{headerClass:"!bg-primary-900",field:"U_SBO_StockVentas",header:"Stock Ventas"},{body:y(s=>[l("p",null,S(s.data.U_SBO_StockVentas)+" "+S(s.data.U_SBO_StockVentas>1?"Unidades":"Unidad"),1)]),_:1}),a(e(u),{headerClass:"!bg-primary-900",field:"id",header:""},{body:y(s=>[a(e(D),{icon:"pi pi-check-circle",onClick:o=>v(s.data,"complete"),label:"Completado",class:B({"!py-2.5 !bg-green-300 !border-green-300 !text-white !mr-5 p-buttons-picker":e(t).isCompleteMapped[s.data.id],"!py-2.5 !border-primary-900 !text-primary-900 mr-5 p-buttons-picker":!e(t).isCompleteMapped[s.data.id]}),outlined:!e(t).isCompleteMapped[s.data.id]},null,8,["onClick","class","outlined"]),a(e(D),{icon:"pi pi-info-circle rotate-180",onClick:o=>v(s.data,"problem"),label:"Problema",class:B({"!py-2.5 !bg-red-300 !border-red-300 !text-white !mr-5 p-buttons-picker":e(t).isProblemMapped[s.data.id],"!py-2.5 !border-primary-900 !text-primary-900 mr-5 p-buttons-picker":!e(t).isProblemMapped[s.data.id]}),outlined:!e(t).isProblemMapped[s.data.id]},null,8,["onClick","class","outlined"])]),_:1})]),_:1},8,["value"]),l("div",Ce,[(c=e(t).currentOrder)!=null&&c.orderItemsProblems&&(((m=e(t).currentOrder)==null?void 0:m.orderItemsProblems)||[]).length>0?(f(),w(e(N),{key:0,tableStyle:"min-width: 50rem",filters:"filters",value:(r=e(t).currentOrder)==null?void 0:r.orderItemsProblems,class:"teble-probelm"},{default:y(()=>[a(e(u),{headerClass:"!bg-secundary-300",field:"ItemCode",header:"SKU",class:"p-3",style:{"padding-top":"15px","max-width":"100px"}}),a(e(u),{headerClass:"!bg-secundary-300",field:"ItemDescription",header:"Producto",class:"p-3",style:{"padding-top":"15px"}}),a(e(u),{headerClass:"!bg-secundary-300",field:"problems",header:"Problema",class:"p-3",style:{"padding-top":"15px"}},{body:y(s=>[(f(!0),R(L,null,j(s.data.problems,(o,k)=>(f(),w(e(E),{key:k,value:o.title,rounded:"",class:"my-2 mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"])):I("",!0)]),l("div",Ie,[a(e(D),{onClick:O,label:"Cancelar",class:"mr-4 !py-1.5 !px-10 p-button-outlined float-right !border-primary-900 !text-primary-900"}),a(e(D),{onClick:P,disabled:h.value,label:"Finalizar pedido",class:"!py-1.5 !border-none !px-10 !bg-primary-900 float-right"},null,8,["disabled"])])]),Re,l("div",ke,[a(me,{visible:e(t).showDialogProblem,"onUpdate:visible":i[0]||(i[0]=s=>e(t).showDialogProblem=s),product:n.product,problemsProduct:n.problemsSelected,typeProblems:e(g).RESPONSIBLE_PICKER_REVIEWER,onSelectionChange:n.handleSelectionChange,onVisible:n.visibleReportMethod},null,8,["visible","product","problemsProduct","typeProblems","onSelectionChange","onVisible"])])])):I("",!0),a(e(q))],64)}}};const Ee={class:"px-8"},xe={key:0,class:"text-center",style:{color:"#259bd7"}},we=l("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},null,-1),De=[we],Ne={key:1},Me={class:"flex justify-between"},$e=l("i",{class:"pi pi-refresh"},null,-1),Te=[$e],He={key:0,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},Le=l("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No se han encontrado ordenes ",-1),Ve=[Le],Ye={__name:"PickupReview",props:{wareHouseCode:String},setup(d){const b=d,{showToast:p}=V.setup(),t=$(),h=C([]),_=C([]),{listOrdersHere:O,listOrdersPickupDelivery:v}=Q(t.$state),P=()=>{t.getOrdersPickerAndReviewer(),p({status:"success",title:"Ordenes actualizadas",message:"Las ordenes se han actualizado correctamente"})};x(()=>t.orders,()=>{h.value=O.value,_.value=v.value}),U(()=>{t.wareHouseCode=b.wareHouseCode,t.getOrdersPickerAndReviewer()});const n=i=>{h.value=i.orders.filter(c=>c.method_shipping_id===g.METHOD_SHIPPING_HERE_ID).sort((c,m)=>new Date(m.updated_at)-new Date(c.updated_at)),_.value=i.orders.filter(c=>c.method_shipping_id!==g.METHOD_SHIPPING_HERE_ID).sort((c,m)=>new Date(m.updated_at)-new Date(c.updated_at))};return(i,c)=>{const m=Y("Toast");return f(),R(L,null,[l("div",Ee,[e(t).isDataLoaded?I("",!0):(f(),R("div",xe,De)),e(t).showDetailOrder?I("",!0):(f(),R("div",Ne,[l("div",Me,[l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"},[M(" Pickeo / Revisión "),l("a",{style:{cursor:"pointer"},onClick:P},Te)])]),a(K,{type:e(g).RESPONSIBLE_PICKER_REVIEWER,warehouses:b.wareHouseCode,orders:[...e(O),...e(v)],onSearch:n},null,8,["type","warehouses","orders"])]),a(A,{title:"Aqui",type:e(g).METHOD_SHIPPING_HERE,orders:h.value},null,8,["type","orders"]),a(A,{title:"Retiro / Despacho",type:e(g).METHOD_SHIPPING_PICKUP_AND_DELIVERY,orders:_.value},null,8,["type","orders"])])),a(Se)]),h.value.length===0&&_.value.length===0?(f(),R("div",He,Ve)):I("",!0),a(m)],64)}}};export{Ye as default};

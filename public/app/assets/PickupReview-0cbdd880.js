import{T as V,_ as U,c as g,a as z}from"./FilterMultiSelect-796a38e0.js";import{k as G,e as C,x as k,o as y,c as R,h as l,t as D,a,w as v,u as r,i as M,l as x,q as I,n as W,s as w,v as F,p as j,j as B,F as L,m as q,y as Q,z as Y,r as J}from"./index-c880184c.js";import{u as X}from"./OrdersApiService-706b4dba.js";import{s as m,a as S,b as N}from"./tag.esm-f51f7c2c.js";import{u as Z,s as ee}from"./ProblemsApiService-db52eb7b.js";import{C as re}from"./ConfirmMixin-c64e0a1d.js";import"./index.esm-63a5631d.js";import"./index.esm-d2e2b394.js";import"./ApiService-418896ba.js";function T(d,b){return d.filter(p=>p.method_shipping_id===b).sort((p,e)=>new Date(e.updated_at)-new Date(p.updated_at))}const te=1,se=2,ae=3,H=X(),$=G("ordersPickerReview",{state:()=>({listOrders:[],listOrdersHere:[],listOrdersPickupDelivery:[],isDataLoaded:!1,showDetailOrder:!1,showDialogProblem:!1,orderItem:{},currentOrder:{},isProblemMapped:[],isCompleteMapped:[],setOrderItemsProblems:new Set,orderItemsProblems:[],order:[],type:""}),getters:{orders:d=>d.listOrders},actions:{async getOrdersPickerAndReviewer(){let d=await H.getOrdersPickerAndReviewer(this.wareHouseCode);this.classifyOrders(d.data),this.isDataLoaded=!0},async assingResponsible(){let d={orderId:this.currentOrder.id,responsible:this.currentOrder.responsible};const b=await H.assingResponsible(d);return this.updateListOrders(b.data),b},async processOrderAction(d){const b=await H.processOrderPickerReviewer(d);return this.updateListOrders(b.data),b},classifyOrders(d){this.listOrders=d,this.listOrdersHere=T(d,te),this.listOrdersPickupDelivery=[...T(d,se),...T(d,ae)]},updateListOrders(d){this.listOrders.findIndex(p=>p.id===d.id)!==-1?this.listOrders=this.listOrders.map(p=>p.id===d.id?d:p):this.listOrders=[d,...this.listOrders],this.classifyOrders(this.listOrders)}}});const oe={key:0},le={class:"mb-4 text-primary-900 font-inter font-semibold text-xl"},ie={class:"flex"},A={__name:"DataTableOrdersPickerReview",props:{title:String,type:String,orders:Array},setup(d,{emit:b}){const p=d,{showToast:e}=V.setup(),h=$(),_=C(p.orders),O=C(["DocNum","Customer","DocTotal","DocTime","DocDate"]);k(()=>p.orders,t=>{_.value=t});const f=t=>{_.value=t.orders},P=(t,s)=>{console.log(t),h.showDetailOrder=!0,h.currentOrder=t,h.currentOrder.responsible=s,n()},n=async()=>{try{let t=await h.assingResponsible();e({status:t.status,message:t.message})}catch(t){t.response&&(e({status:t.response.data.status,message:t.response.data.message}),h.showDetailOrder=!1)}},i=(t,s)=>{var o;return(o=t.Responsibles.find(E=>E.pivot.task==s))==null?void 0:o.name};function c(t){const s=u(t);return(.299*s.r+.587*s.g+.114*s.b)/255>.5?"#000000":"#FFFFFF"}function u(t){const s=parseInt(t.substring(1),16),o=s>>16&255,E=s>>8&255,K=s&255;return{r:o,g:E,b:K}}return(t,s)=>p.orders.length>0?(y(),R("div",oe,[l("h2",le,D(p.title),1),l("div",ie,[a(U,{typeOrders:p.type,allOrders:p.orders,filters:O.value,onFilter:f},null,8,["typeOrders","allOrders","filters"])]),a(r(N),{class:"mb-20",value:_.value,tableStyle:"min-width: 50rem",filters:"filters",paginator:"",rows:5,dataKey:"id",filterDisplay:"row",loading:t.loading,rowsPerPageOptions:[5,10,20,50],paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} a {last} de {totalRecords}"},{default:v(()=>[a(r(m),{headerClass:"!bg-primary-900",sortable:"",field:"DocNum",header:"Nota de venta"},{body:v(o=>[M(" N° "+D(o.data.DocNum),1)]),_:1}),a(r(m),{headerClass:"!bg-primary-900",sortable:"",field:"DocDate",header:"Fecha"}),a(r(m),{headerClass:"!bg-primary-900",sortable:"",field:"DocTime",header:"Hora"}),a(r(m),{headerClass:"!bg-primary-900",sortable:"",field:"Customer.CardName",header:"Cliente"}),a(r(m),{headerClass:"!bg-primary-900",sortable:"",field:"MethodShippingName",header:"Método entrega"},{body:v(o=>[a(r(S),{Tag:"",icon:"pi pi-shopping-cart",value:o.data.MethodShippingName,rounded:"",class:"tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),_:1}),a(r(m),{headerClass:"!bg-primary-900",field:"ResponsiblePickerName",header:"Picker"},{body:v(o=>[i(o.data,r(g).RESPONSIBLE_PICKER)?(y(),x(r(S),{key:0,icon:"pi pi-user",value:i(o.data,r(g).RESPONSIBLE_PICKER),class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):I("",!0)]),_:1}),a(r(m),{headerClass:"!bg-primary-900",field:"ResponsibleReviewerName",header:"Revisor"},{body:v(o=>[i(o.data,r(g).RESPONSIBLE_REVIEWER)?(y(),x(r(S),{key:0,icon:"pi pi-user",value:i(o.data,r(g).RESPONSIBLE_REVIEWER),class:"tag-rounded-blue tag-font-method tag-radius"},null,8,["value"])):I("",!0)]),_:1}),a(r(m),{headerClass:"!bg-primary-900",sortable:"",field:"OrderStatusName",header:"Estado"},{body:v(o=>[a(r(S),{icon:"pi pi-circle-fill",value:o.data.OrderStatusName,style:W({backgroundColor:o.data.OrderStatusColor,color:c(o.data.OrderStatusColor)}),class:"tag-font-method tag-radius"},null,8,["value","style"])]),_:1}),a(r(m),{headerClass:"!bg-primary-900",field:"note",header:""},{body:v(o=>[o.data.process_id==r(g).PROCESS_PICKER_ID?(y(),x(r(w),{key:0,label:"Piekear",onClick:E=>P(o.data,r(g).RESPONSIBLE_PICKER),class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},null,8,["onClick"])):I("",!0),o.data.process_id==r(g).PROCESS_REVIEWER_ID?(y(),x(r(w),{key:1,label:"Revisar",onClick:E=>P(o.data,r(g).RESPONSIBLE_REVIEWER),class:"p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"},null,8,["onClick"])):I("",!0)]),_:1})]),_:1},8,["value","loading"])])):I("",!0)}},de=l("h1",{class:"mb-3 mt-3 text-primary-900 font-inter font-semibold text-xl"},[l("i",{class:"pi pi-info-circle !text-xl rotate-180"}),M(" Reportar problema ")],-1),ne=l("p",{class:"mb-3"},"Por favor indique uno o más problemas detectados",-1),ce={key:0,class:"mt-4"},pe=l("p",{class:"mb-3"},"Por favor indique el problema detectado",-1),ue={class:"float-right"},me={__name:"DialogReportProblemOrderItem",props:{typeProblems:String},setup(d){const b=d,p=Z(),e=$(),h=C([]),_=C([]),O=C(!1),f=C(null),P=C(!0),n=C(!1),i=()=>{e.showDialogProblem=!1};F(async()=>{await p.getProblems(b.typeProblems),h.value=p.problems}),k(()=>p.problems,t=>{h.value=t}),k(()=>e.orderItem,()=>{_.value=[],f.value="",e.orderItem.problems!=null&&(_.value=e.orderItem.problems,f.value=e.orderItem.other)}),k(_,t=>{O.value=t.some(s=>s.title==="Otro"),P.value=t.length===0||O.value&&!n.value,e.orderItem.problems=t});const c=()=>{e.showDialogProblem=!1,e.orderItem.other=f.value,e.setOrderItemsProblems.add(e.orderItem),e.currentOrder.orderItemsProblems=Array.from(e.setOrderItemsProblems),(e.currentOrder.orderItemsProblems||[]).length>0&&(e.isProblemMapped[e.orderItem.id]=!0)};k(f,()=>{O.value?(n.value=!!u(f.value).trim(),P.value=!n.value):P.value=!1});const u=t=>new DOMParser().parseFromString(t,"text/html").body.innerText;return(t,s)=>(y(),x(r(j),{modal:"",header:" ",style:{width:"70vw"},"onUpdate:visible":i},{default:v(()=>[l("div",null,[de,ne,a(r(N),{selection:_.value,"onUpdate:selection":s[0]||(s[0]=o=>_.value=o),value:h.value,dataKey:"id"},{default:v(()=>[a(r(m),{headerClass:"!bg-primary-900",header:"Seleccionar",selectionMode:"multiple"}),a(r(m),{headerClass:"!bg-primary-900",field:"title",header:"Problema detectado"})]),_:1},8,["selection","value"]),O.value?(y(),R("div",ce,[pe,a(r(ee),{class:"custom-editor",modelValue:f.value,"onUpdate:modelValue":s[1]||(s[1]=o=>f.value=o),editorStyle:"height: 80px"},null,8,["modelValue"])])):I("",!0)]),l("div",ue,[a(r(w),{label:"Reportar",disabled:P.value,onClick:c,class:"!py-2 !border-none !px-10 !bg-primary-900 mt-5"},null,8,["disabled"])])]),_:1}))}},be={key:0},he={class:"px-8"},_e={class:"mb-1 text-primary-900 font-inter font-semibold text-xl"},ge=l("i",{class:"pi pi-inbox !text-xl"},null,-1),ye=l("div",{class:"flex align-center mb-2"},null,-1),fe=l("div",{class:"flex"},null,-1),ve={class:"mini-table mt-8"},Oe={class:"mt-8 flex float-right"},Pe=l("div",{class:"space"},null,-1),Ce={class:"content-picker-problem"},Ie={__name:"DetailOrder",setup(d){const{showToast:b}=V.setup(),{showConfirm:p}=re.setup(),e=$(),h=C(!0),_=new Set,O=()=>{e.showDetailOrder=!1,e.setOrderItemsProblems.clear(),e.isProblemMapped=[],e.isCompleteMapped=[]},f=(n,i)=>{var u,t;e.orderItem=n,e.showDialogProblem=i!=="complete",e.isCompleteMapped[n.id]=i==="complete",e.isProblemMapped[n.id]=i!=="complete",(((u=e.currentOrder)==null?void 0:u.orderItemsProblems)||[]).length>0&&i==="complete"&&(e.currentOrder.orderItemsProblems=(t=e.currentOrder)==null?void 0:t.orderItemsProblems.filter(s=>s.id!==n.id));const c=i==="complete"?_.add(n):_.delete(n);e.currentOrder.ordersItemsComplete=Array.from(c)};k(()=>{var n,i;return[(n=e.currentOrder)==null?void 0:n.orderItemsProblems,(i=e.currentOrder)==null?void 0:i.ordersItemsComplete]},()=>{const n=e.currentOrder;let i=Object.keys(e.isCompleteMapped).filter(t=>e.isCompleteMapped[t]===!0),c=Object.keys(e.isProblemMapped).filter(t=>e.isProblemMapped[t]===!0),u=i.length+c.length;h.value=u!==n.OrderItems.length});const P=async()=>{var i;if(await p())try{let u={action:(e.currentOrder.orderItemsProblems||[]).length==0?g.ACTION_APPROVE:g.ACTION_REJECT,orderId:e.currentOrder.id,responsible:e.currentOrder.responsible,orderItemsProblem:((i=e.currentOrder)==null?void 0:i.orderItemsProblems)??[]},t=await e.processOrderAction(u);t.status==="success"&&(e.showDetailOrder=!1,e.setOrderItemsProblems.clear(),e.isProblemMapped=[],e.isCompleteMapped=[],b({status:t.status,message:t.message}))}catch(c){c.response&&b({status:c.response.data.status,message:c.response.data.message})}else h.value=!1,b({status:"info",message:"Proceso cancelado"})};return(n,i)=>{var c,u,t;return y(),R(L,null,[r(e).showDetailOrder?(y(),R("div",be,[l("div",he,[l("h1",_e,[l("i",{class:"pi pi-arrow-left pr-3",onClick:O}),ge,M(" Nota de venta N° "+D(r(e).currentOrder.DocNum)+" ",1),a(r(S),{icon:"pi pi-shopping-cart",value:r(e).currentOrder.MethodShippingName,class:"ml-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"])]),ye,a(r(S),{icon:"pi pi-user",value:r(e).currentOrder.Customer.CardName,class:"tag-radius tag-rounded-blue tag-font-method mb-5"},null,8,["value"]),fe,a(r(N),{tableStyle:"min-width: 50rem",filters:"filters",value:r(e).currentOrder.OrderItems},{default:v(()=>[a(r(m),{headerClass:"!bg-primary-900",field:"Quantity",header:"Cantidad"},{body:v(s=>[l("p",null,D(s.data.Quantity)+" "+D(s.data.Quantity>1?"Unidades":"Unidad"),1)]),_:1}),a(r(m),{headerClass:"!bg-primary-900",field:"ItemCode",header:"SKU"}),a(r(m),{headerClass:"!bg-primary-900",field:"ItemDescription",header:"Producto"},{body:v(s=>[l("p",null,D(s.data.ItemDescription),1)]),_:1}),a(r(m),{headerClass:"!bg-primary-900",field:"ubication",header:"Ubicación"}),a(r(m),{headerClass:"!bg-primary-900",field:"id",header:""},{body:v(s=>[a(r(w),{icon:"pi pi-check-circle",onClick:o=>f(s.data,"complete"),label:"Completado",class:B({"!py-2.5 !bg-green-300 !border-green-300 !text-white !mr-5 p-buttons-picker":r(e).isCompleteMapped[s.data.id],"!py-2.5 !border-primary-900 !text-primary-900 mr-5 p-buttons-picker":!r(e).isCompleteMapped[s.data.id]}),outlined:!r(e).isCompleteMapped[s.data.id]},null,8,["onClick","class","outlined"]),a(r(w),{icon:"pi pi-info-circle rotate-180",onClick:o=>f(s.data,"problem"),label:"Problema",class:B({"!py-2.5 !bg-red-300 !border-red-300 !text-white !mr-5 p-buttons-picker":r(e).isProblemMapped[s.data.id],"!py-2.5 !border-primary-900 !text-primary-900 mr-5 p-buttons-picker":!r(e).isProblemMapped[s.data.id]}),outlined:!r(e).isProblemMapped[s.data.id]},null,8,["onClick","class","outlined"])]),_:1})]),_:1},8,["value"]),l("div",ve,[(c=r(e).currentOrder)!=null&&c.orderItemsProblems&&(((u=r(e).currentOrder)==null?void 0:u.orderItemsProblems)||[]).length>0?(y(),x(r(N),{key:0,tableStyle:"min-width: 50rem",filters:"filters",value:(t=r(e).currentOrder)==null?void 0:t.orderItemsProblems,class:"teble-probelm"},{default:v(()=>[a(r(m),{headerClass:"!bg-secundary-300",field:"ItemCode",header:"SKU",class:"p-3",style:{"padding-top":"15px","max-width":"100px"}}),a(r(m),{headerClass:"!bg-secundary-300",field:"ItemDescription",header:"Producto",class:"p-3",style:{"padding-top":"15px"}}),a(r(m),{headerClass:"!bg-secundary-300",field:"problems",header:"Problema",class:"p-3",style:{"padding-top":"15px"}},{body:v(s=>[(y(!0),R(L,null,q(s.data.problems,(o,E)=>(y(),x(r(S),{key:E,value:o.title,rounded:"",class:"my-2 mr-3 tag-radius tag-rounded-blue tag-font-method"},null,8,["value"]))),128))]),_:1})]),_:1},8,["value"])):I("",!0)]),l("div",Oe,[a(r(w),{onClick:O,label:"Cancelar",class:"mr-4 !py-1.5 !px-10 p-button-outlined float-right !border-primary-900 !text-primary-900"}),a(r(w),{onClick:P,disabled:h.value,label:"Finalizar pedido",class:"!py-1.5 !border-none !px-10 !bg-primary-900 float-right"},null,8,["disabled"])])]),Pe,l("div",Ce,[a(me,{visible:r(e).showDialogProblem,"onUpdate:visible":i[0]||(i[0]=s=>r(e).showDialogProblem=s),product:n.product,problemsProduct:n.problemsSelected,typeProblems:r(g).RESPONSIBLE_PICKER_REVIEWER,onSelectionChange:n.handleSelectionChange,onVisible:n.visibleReportMethod},null,8,["visible","product","problemsProduct","typeProblems","onSelectionChange","onVisible"])])])):I("",!0),a(r(Q))],64)}}};const Re={class:"px-8"},Ee={key:0,class:"text-center",style:{color:"#259bd7"}},ke=l("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},null,-1),xe=[ke],we={key:1},Se={class:"flex justify-between"},De=l("i",{class:"pi pi-refresh"},null,-1),Ne=[De],Me={key:0,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},$e=l("h1",{class:"align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900"}," No se han encontrado ordenes ",-1),Te=[$e],Ge={__name:"PickupReview",props:{wareHouseCode:String},setup(d){const b=d,{showToast:p}=V.setup(),e=$(),h=C([]),_=C([]),{listOrdersHere:O,listOrdersPickupDelivery:f}=Y(e.$state),P=()=>{e.getOrdersPickerAndReviewer(),p({status:"success",title:"Ordenes actualizadas",message:"Las ordenes se han actualizado correctamente"})};k(()=>e.orders,()=>{h.value=O.value,_.value=f.value}),F(()=>{e.wareHouseCode=b.wareHouseCode,e.getOrdersPickerAndReviewer()});const n=i=>{h.value=i.orders.filter(c=>c.method_shipping_id===g.METHOD_SHIPPING_HERE_ID).sort((c,u)=>new Date(u.updated_at)-new Date(c.updated_at)),_.value=i.orders.filter(c=>c.method_shipping_id!==g.METHOD_SHIPPING_HERE_ID).sort((c,u)=>new Date(u.updated_at)-new Date(c.updated_at))};return(i,c)=>{const u=J("Toast");return y(),R(L,null,[l("div",Re,[r(e).isDataLoaded?I("",!0):(y(),R("div",Ee,xe)),r(e).showDetailOrder?I("",!0):(y(),R("div",we,[l("div",Se,[l("div",null,[l("h1",{class:"mb-2 text-primary-900 font-inter font-semibold text-2xl"},[M(" Pickeo / Revisión "),l("a",{style:{cursor:"pointer"},onClick:P},Ne)])]),a(z,{type:r(g).RESPONSIBLE_PICKER_REVIEWER,warehouses:b.wareHouseCode,orders:[...r(O),...r(f)],onSearch:n},null,8,["type","warehouses","orders"])]),a(A,{title:"Aqui",type:r(g).METHOD_SHIPPING_HERE,orders:h.value},null,8,["type","orders"]),a(A,{title:"Retiro / Despacho",type:r(g).METHOD_SHIPPING_PICKUP_AND_DELIVERY,orders:_.value},null,8,["type","orders"])])),a(Ie)]),h.value.length===0&&_.value.length===0?(y(),R("div",Me,Te)):I("",!0),a(u)],64)}}};export{Ge as default};
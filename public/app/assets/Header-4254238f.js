import{_ as W}from"./logo_v1-42b67b8d.js";import{A as X,Z as B,D as g,ac as le,R as Y,S as ce,X as ue,B as V,r as E,K as M,o as l,k as v,w as A,c as h,E as u,a as w,T as U,L as x,h as p,C as N,p as I,M as P,U as R,O as f,F as C,l as J,j as L,t as S,a0 as Q,y as $,ae as de,a4 as me,e as F,v as fe,q as he,u as j,s as pe,i as _}from"./index-c2d85073.js";import{a as ee,s as te}from"./index.esm-a0327bb2.js";import{g as ne}from"./ApiService-1d2bc215.js";import{u as ge,a as be}from"./chat-50f817b1.js";import"./_commonjsHelpers-725317a4.js";var ve=`
.p-sidebar-mask {
    display: none;
    pointer-events: none;
    background-color: transparent;
    transition-property: background-color;
}

.p-sidebar-mask.p-component-overlay {
    pointer-events: auto;
}

.p-sidebar-visible {
    display: flex;
}

.p-sidebar {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
}

.p-sidebar-content {
    overflow-y: auto;
    flex-grow: 1;
}

.p-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
}

.p-sidebar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.p-sidebar-full .p-sidebar {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
}

/* Animation */
/* Center */
.p-sidebar-left .p-sidebar-enter-from,
.p-sidebar-left .p-sidebar-leave-to {
    transform: translateX(-100%);
}
.p-sidebar-right .p-sidebar-enter-from,
.p-sidebar-right .p-sidebar-leave-to {
    transform: translateX(100%);
}
.p-sidebar-top .p-sidebar-enter-from,
.p-sidebar-top .p-sidebar-leave-to {
    transform: translateY(-100%);
}
.p-sidebar-bottom .p-sidebar-enter-from,
.p-sidebar-bottom .p-sidebar-leave-to {
    transform: translateY(100%);
}
.p-sidebar-full .p-sidebar-enter-from,
.p-sidebar-full .p-sidebar-leave-to {
    opacity: 0;
}
.p-sidebar-full .p-sidebar-enter-active,
.p-sidebar-full .p-sidebar-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Size */
.p-sidebar-left .p-sidebar {
    width: 20rem;
    height: 100%;
}

.p-sidebar-right .p-sidebar {
    width: 20rem;
    height: 100%;
}

.p-sidebar-top .p-sidebar {
    height: 10rem;
    width: 100%;
}

.p-sidebar-bottom .p-sidebar {
    height: 10rem;
    width: 100%;
}

.p-sidebar-left .p-sidebar-sm,
.p-sidebar-right .p-sidebar-sm {
    width: 20rem;
}

.p-sidebar-left .p-sidebar-md,
.p-sidebar-right .p-sidebar-md {
    width: 40rem;
}

.p-sidebar-left .p-sidebar-lg,
.p-sidebar-right .p-sidebar-lg {
    width: 60rem;
}

.p-sidebar-top .p-sidebar-sm,
.p-sidebar-bottom .p-sidebar-sm {
    height: 10rem;
}

.p-sidebar-top .p-sidebar-md,
.p-sidebar-bottom .p-sidebar-md {
    height: 20rem;
}

.p-sidebar-top .p-sidebar-lg,
.p-sidebar-bottom .p-sidebar-lg {
    height: 30rem;
}

.p-sidebar-left .p-sidebar-content,
.p-sidebar-right .p-sidebar-content,
.p-sidebar-top .p-sidebar-content,
.p-sidebar-bottom .p-sidebar-content {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 64em) {
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-md {
        width: 20rem;
    }
}
`,Ie={mask:function(e){var n=e.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center"}}},ye={mask:function(e){var n=e.instance,a=e.props,r=["left","right","top","bottom"],i=r.find(function(c){return c===a.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":a.modal,"p-sidebar-mask-scrollblocker":a.blockScroll,"p-sidebar-visible":n.containerVisible,"p-sidebar-full":n.fullScreen},i?"p-sidebar-".concat(i):""]},root:function(e){var n=e.instance;return["p-sidebar p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1,"p-sidebar-full":n.fullScreen}]},header:"p-sidebar-header",headerContent:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},ke=X(ve,{name:"sidebar",manual:!0}),Pe=ke.load,we={name:"BaseSidebar",extends:V,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},css:{classes:ye,inlineStyles:Ie,loadStyle:Pe},provide:function(){return{$parentInstance:this}}},ie={name:"Sidebar",extends:we,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&B.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.autoZIndex&&B.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&g.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&B.clear(this.mask),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(r){return r.querySelector("[autofocus]")},n=this.$slots.default&&e(this.content);n||(n=this.$slots.header&&e(this.headerContainer),n||(n=e(this.container))),n&&n.focus()},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&g.addClass(document.body,"p-overflow-hidden")},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&g.removeClass(document.body,"p-overflow-hidden")},onKeydown:function(e){e.code==="Escape"&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},closeButtonRef:function(e){this.closeButton=e},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.isOutsideClicked(n)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:le,ripple:Y},components:{Portal:ce,TimesIcon:ue}};function H(t){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(t)}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z(Object(n),!0).forEach(function(a){Ae(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ae(t,e,n){return e=Ce(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ce(t){var e=Ee(t,"string");return H(e)==="symbol"?e:String(e)}function Ee(t,e){if(H(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(H(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Se=["aria-modal"],Ke=["aria-label"];function xe(t,e,n,a,r,i){var c=E("Portal"),d=M("ripple"),o=M("focustrap");return l(),v(c,null,{default:A(function(){return[r.containerVisible?(l(),h("div",u({key:0,ref:i.maskRef,onMousedown:e[2]||(e[2]=function(){return i.onMaskClick&&i.onMaskClick.apply(i,arguments)}),class:t.cx("mask"),style:t.sx("mask",!0,{position:t.position})},t.ptm("mask")),[w(U,{name:"p-sidebar",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:A(function(){return[t.visible?x((l(),h("div",u({key:0,ref:i.containerRef,class:t.cx("root"),role:"complementary","aria-modal":t.modal,onKeydown:e[1]||(e[1]=function(){return i.onKeydown&&i.onKeydown.apply(i,arguments)})},G(G({},t.$attrs),t.ptm("root"))),[p("div",u({ref:i.headerContainerRef,class:t.cx("header")},t.ptm("header")),[t.$slots.header?(l(),h("div",u({key:0,class:t.cx("headerContent")},t.ptm("headerContent")),[N(t.$slots,"header")],16)):I("",!0),t.showCloseIcon?x((l(),h("button",u({key:1,ref:i.closeButtonRef,autofocus:"",type:"button",class:t.cx("closeButton"),"aria-label":i.closeAriaLabel,onClick:e[0]||(e[0]=function(){return i.hide&&i.hide.apply(i,arguments)})},t.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[N(t.$slots,"closeicon",{},function(){return[(l(),v(P(t.closeIcon?"span":"TimesIcon"),u({class:[t.cx("closeIcon"),t.closeIcon]},t.ptm("closeIcon")),null,16,["class"]))]})],16,Ke)),[[d]]):I("",!0)],16),p("div",u({ref:i.contentRef,class:t.cx("content")},t.ptm("content")),[N(t.$slots,"default")],16)],16,Se)),[[o]]):I("",!0)]}),_:3},8,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):I("",!0)]}),_:3})}ie.render=xe;var Oe=`
.p-panelmenu .p-panelmenu-header-action {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
}

.p-panelmenu .p-panelmenu-header-action:focus {
    z-index: 1;
}

.p-panelmenu .p-submenu-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-panelmenu .p-menuitem-link {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    overflow: hidden;
}

.p-panelmenu .p-menuitem-text {
    line-height: 1;
}
`,Le={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:function(e){var n=e.instance,a=e.item;return["p-panelmenu-header",{"p-highlight":n.isItemActive(a),"p-disabled":n.isItemDisabled(a)}]},headerContent:"p-panelmenu-header-content",headerAction:function(e){var n=e.instance,a=e.isActive,r=e.isExactActive;return["p-panelmenu-header-action",{"router-link-active":a,"router-link-active-exact":n.exact&&r}]},headerIcon:"p-menuitem-icon",headerLabel:"p-menuitem-text",toggleableContent:"p-toggleable-content",menuContent:"p-panelmenu-content",menu:"p-panelmenu-root-list",menuitem:function(e){var n=e.instance,a=e.processedItem;return["p-menuitem",{"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},content:"p-menuitem-content",action:function(e){var n=e.props,a=e.isActive,r=e.isExactActive;return["p-menuitem-link",{"router-link-active":a,"router-link-active-exact":n.exact&&r}]},icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator"},He=X(Oe,{name:"panelmenu",manual:!0}),Te=He.load,De={name:"BasePanelMenu",extends:V,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},exact:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},css:{classes:Le,loadStyle:Te},provide:function(){return{$parentInstance:this}}},ae={name:"PanelMenuSub",hostName:"PanelMenu",extends:V,emits:["item-toggle"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},exact:{type:Boolean,default:!0},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return"".concat(this.panelId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,a){return e&&e.item?f.getItemValue(e.item[n],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,a){return this.ptm(e,{context:{item:n,index:a,active:this.isItemActive(n),focused:this.isItemFocused(n)}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return f.isNotEmpty(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-toggle",{processedItem:n,expanded:!this.isItemActive(n)})},onItemToggle:function(e){this.$emit("item-toggle",e)},onItemActionClick:function(e,n){n&&n(e)},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(a){return n.isItemVisible(a)&&n.getItemProp(a,"separator")}).length+1}},components:{ChevronRightIcon:ee,ChevronDownIcon:te},directives:{ripple:Y}},Fe=["tabindex"],Ne=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-focused","data-p-disabled"],Ve=["onClick"],Be=["href","onClick"],je=["href","target"];function _e(t,e,n,a,r,i){var c=E("router-link"),d=E("PanelMenuSub",!0),o=M("ripple");return l(),h("ul",{class:L(t.cx("submenu")),tabindex:n.tabindex},[(l(!0),h(C,null,J(n.items,function(s,m){return l(),h(C,{key:i.getItemKey(s)},[i.isItemVisible(s)&&!i.getItemProp(s,"separator")?(l(),h("li",u({key:0,id:i.getItemId(s),class:[t.cx("menuitem",{processedItem:s}),i.getItemProp(s,"class")],style:i.getItemProp(s,"style"),role:"treeitem","aria-label":i.getItemLabel(s),"aria-expanded":i.isItemGroup(s)?i.isItemActive(s):void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(m)},i.getPTOptions("menuitem",s,m),{"data-p-focused":i.isItemFocused(s),"data-p-disabled":i.isItemDisabled(s)}),[p("div",u({class:t.cx("content"),onClick:function(b){return i.onItemClick(b,s)}},i.getPTOptions("content",s,m)),[n.templates.item?(l(),v(P(n.templates.item),{key:1,item:s.item},null,8,["item"])):(l(),h(C,{key:0},[i.getItemProp(s,"to")&&!i.isItemDisabled(s)?(l(),v(c,{key:0,to:i.getItemProp(s,"to"),custom:""},{default:A(function(k){var b=k.navigate,y=k.href,O=k.isActive,D=k.isExactActive;return[x((l(),h("a",u({href:y,class:t.cx("action",{isActive:O,isExactActive:D}),tabindex:"-1","aria-hidden":"true",onClick:function(oe){return i.onItemActionClick(oe,b)}},i.getPTOptions("action",s,m)),[n.templates.itemicon?(l(),v(P(n.templates.itemicon),{key:0,item:s.item,class:L([t.cx("icon"),i.getItemProp(s,"icon")])},null,8,["item","class"])):i.getItemProp(s,"icon")?(l(),h("span",u({key:1,class:[t.cx("icon"),i.getItemProp(s,"icon")]},i.getPTOptions("icon",s,m)),null,16)):I("",!0),p("span",u({class:t.cx("label")},i.getPTOptions("label",s,m)),S(i.getItemLabel(s)),17)],16,Be)),[[o]])]}),_:2},1032,["to"])):x((l(),h("a",u({key:1,href:i.getItemProp(s,"url"),class:t.cx("action"),target:i.getItemProp(s,"target"),tabindex:"-1","aria-hidden":"true"},i.getPTOptions("action",s,m)),[i.isItemGroup(s)?(l(),h(C,{key:0},[n.templates.submenuicon?(l(),v(P(n.templates.submenuicon),u({key:0,class:t.cx("submenuIcon"),active:i.isItemActive(s)},i.getPTOptions("submenuIcon",s,m)),null,16,["class","active"])):(l(),v(P(i.isItemActive(s)?"ChevronDownIcon":"ChevronRightIcon"),u({key:1,class:t.cx("submenuIcon")},i.getPTOptions("submenuIcon",s,m)),null,16,["class"]))],64)):I("",!0),n.templates.itemicon?(l(),v(P(n.templates.itemicon),{key:1,item:s.item,class:L([t.cx("icon"),i.getItemProp(s,"icon")])},null,8,["item","class"])):i.getItemProp(s,"icon")?(l(),h("span",u({key:2,class:[t.cx("icon"),i.getItemProp(s,"icon")]},i.getPTOptions("icon",s,m)),null,16)):I("",!0),p("span",u({class:t.cx("label")},i.getPTOptions("label",s,m)),S(i.getItemLabel(s)),17)],16,je)),[[o]])],64))],16,Ve),w(U,{name:"p-toggleable-content"},{default:A(function(){return[x(p("div",u({class:t.cx("toggleableContent")},t.ptm("toggleableContent")),[i.isItemVisible(s)&&i.isItemGroup(s)?(l(),v(d,u({key:0,id:i.getItemId(s)+"_list",role:"group",panelId:n.panelId,focusedItemId:n.focusedItemId,items:s.items,level:n.level+1,templates:n.templates,activeItemPath:n.activeItemPath,exact:n.exact,onItemToggle:i.onItemToggle,pt:t.pt},t.ptm("submenu")),null,16,["id","panelId","focusedItemId","items","level","templates","activeItemPath","exact","onItemToggle","pt"])):I("",!0)],16),[[Q,i.isItemActive(s)]])]}),_:2},1024)],16,Ne)):I("",!0),i.isItemVisible(s)&&i.getItemProp(s,"separator")?(l(),h("li",u({key:1,style:i.getItemProp(s,"style"),class:[t.cx("separator"),i.getItemProp(s,"class")],role:"separator"},t.ptm("separator")),null,16)):I("",!0)],64)}),128))],10,Fe)}ae.render=_e;function Me(t,e){return Ge(t)||ze(t,e)||Re(t,e)||Ue()}function Ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(t,e){if(t){if(typeof t=="string")return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(t,e)}}function Z(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function ze(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,r,i,c,d=[],o=!0,s=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=i.call(n)).done)&&(d.push(a.value),d.length!==e);o=!0);}catch(m){s=!0,r=m}finally{try{if(!o&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw r}}return d}}function Ge(t){if(Array.isArray(t))return t}var re={name:"PanelMenuList",hostName:"PanelMenu",extends:V,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null},exact:{type:Boolean,default:!0}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},mounted:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,n){return e&&e.item?f.getItemValue(e.item[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.parentKey})},isItemGroup:function(e){return f.isNotEmpty(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&f.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey:function(e){var n=f.isNotEmpty(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:n,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var n=f.isNotEmpty(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:n,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var n=this;if(f.isNotEmpty(this.focusedItem)){var a=this.activeItemPath.some(function(r){return r.key===n.focusedItem.key});a?this.activeItemPath=this.activeItemPath.filter(function(r){return r.key!==n.focusedItem.key}):this.focusedItem=f.isNotEmpty(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault()}},onArrowRightKey:function(e){var n=this;if(f.isNotEmpty(this.focusedItem)){var a=this.isItemGroup(this.focusedItem);if(a){var r=this.activeItemPath.some(function(i){return i.key===n.focusedItem.key});r?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(i){return i.parentKey!==n.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(f.isNotEmpty(this.focusedItem)){var n=g.findSingle(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=n&&(g.findSingle(n,'[data-pc-section="action"]')||g.findSingle(n,"a,button"));a?a.click():n&&n.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var n=e.processedItem,a=e.expanded;this.expandedKeys?this.$emit("item-toggle",{item:n.item,expanded:a}):(this.activeItemPath=this.activeItemPath.filter(function(r){return r.parentKey!==n.parentKey}),a&&this.activeItemPath.push(n)),this.focusedItem=n,g.focus(this.$el)},isElementInPanel:function(e,n){var a=e.currentTarget.closest('[data-pc-section="panel"]');return a&&a.contains(n)},isItemMatched:function(e){return this.isValidItem(e)&&this.getItemLabel(e).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)},findFirstItem:function(){var e=this;return this.visibleItems.find(function(n){return e.isValidItem(n)})},findLastItem:function(){var e=this;return f.findLast(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItem:function(e){var n=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),r=a<this.visibleItems.length-1?this.visibleItems.slice(a+1).find(function(i){return n.isValidItem(i)}):void 0;return r||e},findPrevItem:function(e){var n=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),r=a>0?f.findLast(this.visibleItems.slice(0,a),function(i){return n.isValidItem(i)}):void 0;return r||e},searchItems:function(e,n){var a=this;this.searchValue=(this.searchValue||"")+n;var r=null,i=!1;if(f.isNotEmpty(this.focusedItem)){var c=this.visibleItems.findIndex(function(d){return d.key===a.focusedItem.key});r=this.visibleItems.slice(c).find(function(d){return a.isItemMatched(d)}),r=f.isEmpty(r)?this.visibleItems.slice(0,c).find(function(d){return a.isItemMatched(d)}):r}else r=this.visibleItems.find(function(d){return a.isItemMatched(d)});return f.isNotEmpty(r)&&(i=!0),f.isEmpty(r)&&f.isEmpty(this.focusedItem)&&(r=this.findFirstItem()),f.isNotEmpty(r)&&this.changeFocusedItem({originalEvent:e,processedItem:r,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItem:function(e){var n=e.originalEvent,a=e.processedItem,r=e.focusOnNext,i=e.selfCheck,c=e.allowHeaderFocus,d=c===void 0?!0:c;f.isNotEmpty(this.focusedItem)&&this.focusedItem.key!==a.key?(this.focusedItem=a,this.scrollInView()):d&&this.$emit("header-focus",{originalEvent:n,focusOnNext:r,selfCheck:i})},scrollInView:function(){var e=g.findSingle(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]'));e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath:function(e){var n=this;this.activeItemPath=Object.entries(e||{}).reduce(function(a,r){var i=Me(r,2),c=i[0],d=i[1];if(d){var o=n.findProcessedItemByItemKey(c);o&&a.push(o)}return a},[])},findProcessedItemByItemKey:function(e,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n=n||a===0&&this.processedItems,!n)return null;for(var r=0;r<n.length;r++){var i=n[r];if(this.getItemProp(i,"key")===e)return i;var c=this.findProcessedItemByItemKey(e,i.items,a+1);if(c)return c}},createProcessedItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",c=[];return e&&e.forEach(function(d,o){var s=(i!==""?i+"_":"")+o,m={item:d,index:o,level:a,key:s,parent:r,parentKey:i};m.items=n.createProcessedItems(d.items,a+1,m,s),c.push(m)}),c},flatItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(r){n.isVisibleItem(r)&&(a.push(r),n.flatItems(r.items,a))}),a}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return f.isNotEmpty(this.focusedItem)?"".concat(this.panelId,"_").concat(this.focusedItem.key):null}},components:{PanelMenuSub:ae}};function Ze(t,e,n,a,r,i){var c=E("PanelMenuSub");return l(),v(c,u({id:n.panelId+"_list",class:t.cx("menu"),role:"tree",tabindex:-1,"aria-activedescendant":r.focused?i.focusedItemId:void 0,panelId:n.panelId,focusedItemId:r.focused?i.focusedItemId:void 0,items:i.processedItems,templates:n.templates,activeItemPath:r.activeItemPath,exact:n.exact,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemToggle:i.onItemToggle,pt:t.pt},t.ptm("menu")),null,16,["id","class","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","exact","onFocus","onBlur","onKeydown","onItemToggle","pt"])}re.render=Ze;function T(t){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(t)}function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function qe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?q(Object(n),!0).forEach(function(a){We(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function We(t,e,n){return e=Xe(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xe(t){var e=Ye(t,"string");return T(e)==="symbol"?e:String(e)}function Ye(t,e){if(T(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(T(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var se={name:"PanelMenu",extends:De,emits:["update:expandedKeys","panel-open","panel-close"],data:function(){return{id:this.$attrs.id,activeItem:null}},watch:{"$attrs.id":function(e){this.id=e||R()}},mounted:function(){this.id=this.id||R()},methods:{getItemProp:function(e,n){return e?f.getItemValue(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,a){return this.ptm(e,{context:{index:a,active:this.isItemActive(n),focused:this.isItemFocused(n)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:f.equals(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return f.equals(e,this.activeItem)},getPanelId:function(e){return"".concat(this.id,"_").concat(e)},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return"".concat(this.getPanelId(e),"_header")},getContentId:function(e){return"".concat(this.getPanelId(e),"_content")},onHeaderClick:function(e,n){if(this.isItemDisabled(n)){e.preventDefault();return}n.command&&n.command({originalEvent:e,item:n}),this.changeActiveItem(e,n),g.focus(e.currentTarget)},onHeaderKeyDown:function(e,n){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"Space":this.onHeaderEnterKey(e,n);break}},onHeaderArrowDownKey:function(e){var n=g.getAttribute(e.currentTarget,"data-p-highlight")===!0?g.findSingle(e.currentTarget.nextElementSibling,'[data-pc-section="menu"]'):null;n?g.focus(n):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var n=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),a=g.getAttribute(n,"data-p-highlight")===!0?g.findSingle(n.nextElementSibling,'[data-pc-section="menu"]'):null;a?g.focus(a):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,n){var a=g.findSingle(e.currentTarget,'[data-pc-section="headeraction"]');a?a.click():this.onHeaderClick(e,n),e.preventDefault()},onHeaderActionClick:function(e,n){n&&n(e)},findNextHeader:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.nextElementSibling,r=g.findSingle(a,'[data-pc-section="header"]');return r?g.getAttribute(r,"data-p-disabled")?this.findNextHeader(r.parentElement):r:null},findPrevHeader:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.previousElementSibling,r=g.findSingle(a,'[data-pc-section="header"]');return r?g.getAttribute(r,"data-p-disabled")?this.findPrevHeader(r.parentElement):r:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var n=e.originalEvent,a=e.focusOnNext,r=e.selfCheck,i=n.currentTarget.closest('[data-pc-section="panel"]'),c=r?g.findSingle(i,'[data-pc-section="header"]'):a?this.findNextHeader(i):this.findPrevHeader(i);c?this.changeFocusedHeader(n,c):a?this.onHeaderHomeKey(n):this.onHeaderEndKey(n)},changeActiveItem:function(e,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!this.isItemDisabled(n)){var r=this.isItemActive(n),i=r?"panel-close":"panel-open";this.activeItem=a?n:this.activeItem&&f.equals(n,this.activeItem)?null:n,this.changeExpandedKeys({item:n,expanded:!r}),this.$emit(i,{originalEvent:e,item:n})}},changeExpandedKeys:function(e){var n=e.item,a=e.expanded,r=a===void 0?!1:a;if(this.expandedKeys){var i=qe({},this.expandedKeys);r?i[n.key]=!0:delete i[n.key],this.$emit("update:expandedKeys",i)}},changeFocusedHeader:function(e,n){n&&g.focus(n)}},components:{PanelMenuList:re,ChevronRightIcon:ee,ChevronDownIcon:te}},Je=["id"],Qe=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown","data-p-highlight","data-p-disabled"],$e=["href","onClick"],et=["href"],tt=["id","aria-labelledby"];function nt(t,e,n,a,r,i){var c=E("router-link"),d=E("PanelMenuList");return l(),h("div",u({id:r.id,class:t.cx("root")},t.ptm("root"),{"data-pc-name":"panelmenu"}),[(l(!0),h(C,null,J(t.model,function(o,s){return l(),h(C,{key:i.getPanelKey(s)},[i.isItemVisible(o)?(l(),h("div",u({key:0,style:i.getItemProp(o,"style"),class:[t.cx("panel"),i.getItemProp(o,"class")]},t.ptm("panel")),[p("div",u({id:i.getHeaderId(s),class:[t.cx("header",{item:o}),i.getItemProp(o,"headerClass")],tabindex:i.isItemDisabled(o)?-1:t.tabindex,role:"button","aria-label":i.getItemLabel(o),"aria-expanded":i.isItemActive(o),"aria-controls":i.getContentId(s),"aria-disabled":i.isItemDisabled(o),onClick:function(k){return i.onHeaderClick(k,o)},onKeydown:function(k){return i.onHeaderKeyDown(k,o)}},i.getPTOptions("header",o,s),{"data-p-highlight":i.isItemActive(o),"data-p-disabled":i.isItemDisabled(o)}),[p("div",u({class:t.cx("headerContent")},i.getPTOptions("headerContent",o,s)),[t.$slots.item?(l(),v(P(t.$slots.item),{key:1,item:o},null,8,["item"])):(l(),h(C,{key:0},[i.getItemProp(o,"to")&&!i.isItemDisabled(o)?(l(),v(c,{key:0,to:i.getItemProp(o,"to"),custom:""},{default:A(function(m){var k=m.navigate,b=m.href,y=m.isActive,O=m.isExactActive;return[p("a",u({href:b,class:t.cx("headerAction",{isActive:y,isExactActive:O}),tabindex:-1,onClick:function(K){return i.onHeaderActionClick(K,k)}},i.getPTOptions("headerAction",o,s)),[t.$slots.headericon?(l(),v(P(t.$slots.headericon),{key:0,item:o,class:L([t.cx("headerIcon"),i.getItemProp(o,"icon")])},null,8,["item","class"])):i.getItemProp(o,"icon")?(l(),h("span",u({key:1,class:[t.cx("headerIcon"),i.getItemProp(o,"icon")]},i.getPTOptions("headerIcon",o,s)),null,16)):I("",!0),p("span",u({class:t.cx("headerLabel")},i.getPTOptions("headerLabel",o,s)),S(i.getItemLabel(o)),17)],16,$e)]}),_:2},1032,["to"])):(l(),h("a",u({key:1,href:i.getItemProp(o,"url"),class:t.cx("headerAction"),tabindex:-1},i.getPTOptions("headerAction",o,s)),[i.getItemProp(o,"items")?N(t.$slots,"submenuicon",{key:0,active:i.isItemActive(o)},function(){return[(l(),v(P(i.isItemActive(o)?"ChevronDownIcon":"ChevronRightIcon"),u({class:t.cx("submenuIcon")},i.getPTOptions("submenuIcon",o,s)),null,16,["class"]))]}):I("",!0),t.$slots.headericon?(l(),v(P(t.$slots.headericon),{key:1,item:o,class:L([t.cx("headerIcon"),i.getItemProp(o,"icon")])},null,8,["item","class"])):i.getItemProp(o,"icon")?(l(),h("span",u({key:2,class:[t.cx("headerIcon"),i.getItemProp(o,"icon")]},i.getPTOptions("headerIcon",o,s)),null,16)):I("",!0),p("span",u({class:t.cx("headerLabel")},i.getPTOptions("headerLabel",o,s)),S(i.getItemLabel(o)),17)],16,et))],64))],16)],16,Qe),w(U,{name:"p-toggleable-content"},{default:A(function(){return[x(p("div",u({id:i.getContentId(s),class:t.cx("toggleableContent"),role:"region","aria-labelledby":i.getHeaderId(s)},t.ptm("toggleableContent")),[i.getItemProp(o,"items")?(l(),h("div",u({key:0,class:t.cx("menuContent")},t.ptm("menuContent")),[w(d,{panelId:i.getPanelId(s),items:i.getItemProp(o,"items"),templates:t.$slots,expandedKeys:t.expandedKeys,onItemToggle:i.changeExpandedKeys,onHeaderFocus:i.updateFocusedHeader,exact:t.exact,pt:t.pt},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","exact","pt"])],16)):I("",!0)],16,tt),[[Q,i.isItemActive(o)]])]}),_:2},1024)],16)):I("",!0)],64)}),128))],16,Je)}se.render=nt;const it=$("menuItems",{state:()=>({menuItems:[]}),getters:{menu:t=>t.menuItems},actions:{async getMenuItems(){let t=await ne("api/v1/menu-items");this.menuItems=t.data}}}),at=$("auth",{state:()=>({authUser:null,authToken:localStorage.getItem("token")}),getters:{user:t=>t.authUser,token:t=>t.authToken},actions:{async getToken(){return await ne("sanctum/csrf-cookie")},async login(t,e){const n=await de.post("/api/v1/login",{email:t,password:e});this.authToken=n.data.token,localStorage.setItem("token",this.authToken)}}});const rt={class:"bg-primary-100 py-4 mb-10 px-7"},st={class:"wrapper flex justify-start"},ot=p("img",{class:"w-188 h-60",src:W},null,-1),lt=p("div",{class:"card flex justify-content-center"},null,-1),ct=p("div",{class:"flex justify-center mb-20"},[p("img",{class:"w-188 h-60",src:W})],-1),ut={class:"",style:{background:"#f3f3f35e"}},dt={class:"gap-2"},mt={class:"font-bold text-900",style:{color:"#313131"}},ft={class:"font-medium text-lg my-3 text-900",style:{color:"#000"}},ht={class:"font-medium text-lg my-3 text-900",style:{color:"#000"}},kt={__name:"Header",setup(t){const e=me(),n=F(!1),a=F([]),r=()=>{n.value||(e.add({severity:"success",summary:"Can you send me the report?",group:"bc"}),n.value=!0)},i=()=>{n.value=!1};at();const c=ge(),d=be();fe(()=>d.notifications,b=>{let y=b>1?`(${b}) Notificaciones`:`(${b}) Notificación`;document.title=b>0?y:"Tasco Logistics",r()});const o=it(),s=F(!1),m=F([]),k=b=>({picker:"Bodega",reviewer:"Bodega",cda:"CDA"})[b.chat.order.report_user_responsible];return he(async()=>{try{await c.getUser(),await o.getMenuItems(),m.value=o.menuItems,c.pusher().subscribe(`private-notification.${c.currentUser.id}`).bind("notification.sent",y=>{a.value=y,y.currentUser.id!==c.currentUser.id&&d.incrementNotifications()})}catch(b){console.error("Error fetching orders:",b)}}),(b,y)=>{const O=E("router-link"),D=E("Toast");return l(),h(C,null,[p("header",rt,[p("div",st,[ot,w(j(pe),{class:"main-bars",icon:"pi pi-bars",onClick:y[0]||(y[0]=K=>s.value=!0)})]),lt]),w(j(ie),{visible:s.value,"onUpdate:visible":y[1]||(y[1]=K=>s.value=K)},{default:A(()=>[ct,w(j(se),{class:"main-menu",model:m.value},null,8,["model"])]),_:1},8,["visible"]),w(D,{group:"bc",onClose:i,style:{background:"#f3f3f35e"}},{message:A(K=>[p("div",ut,[p("div",dt,[p("span",mt,S(a.value.currentUser.name),1)]),p("div",ft,[_("Incidencia en nota de venta "),p("strong",null,"No: "+S(a.value.chat.order.DocNum),1)]),p("div",ht,[_("Desde "),p("strong",null,S(k(a.value)),1)]),w(O,{to:{name:"show-chat",params:{id:a.value.chat.id}}},{default:A(()=>[_(" Ver ")]),_:1},8,["to"])])]),_:1})],64)}}};export{kt as default};

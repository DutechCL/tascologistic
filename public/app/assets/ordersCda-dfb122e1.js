import{y as s}from"./index-32f547de.js";import{u as a}from"./OrdersApiService-1071cf59.js";import{c as t}from"./ToastMixin-c4a92866.js";const e=a(),i=s("ordersCda",{state:()=>({listOrders:[],listOrdersManage:[],order:[],showDialog:!1,typeDialog:"",currentOrder:{orderId:null,action:"",responsible:t.RESPONSIBLE_CDA,problems:"",anotherProblem:""}}),getters:{orders:r=>r.listOrders},actions:{async getOrdersCdaToManager(){let r=await e.getOrdersCdaToManager();this.listOrders=r.data},async getOrdersCdaManage(){let r=await e.getOrdersCdaManage();this.listOrdersManage=r.data},async processOrderCda(){let r=await e.processOrderCda(this.currentOrder);return this.listOrders=r.data,r}}});export{i as u};
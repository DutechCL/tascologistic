import{y as s}from"./index-cf48280a.js";import{u as a}from"./OrdersApiService-fa967cc7.js";import{c as t}from"./ToastMixin-76a922f8.js";const e=a(),i=s("ordersCda",{state:()=>({listOrders:[],listOrdersManage:[],order:[],showDialog:!1,typeDialog:"",buttomReport:!0,currentOrder:{orderId:null,action:"",responsible:t.RESPONSIBLE_CDA,problems:"",anotherProblem:""}}),getters:{orders:r=>r.listOrders},actions:{async getOrdersCdaToManager(){let r=await e.getOrdersCdaToManager();this.listOrders=r.data},async getOrdersCdaManage(){let r=await e.getOrdersCdaManage();this.listOrdersManage=r.data},async processOrderCda(){let r=await e.processOrderCda(this.currentOrder);return this.listOrders=r.data,r}}});export{i as u};

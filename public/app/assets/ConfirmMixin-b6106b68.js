import{W as n,f as o}from"./index-039c313d.js";const m={setup(){const r=n(),c=e=>new Promise((i,s)=>{r.require({message:(e==null?void 0:e.message)||"¿Estás seguro de que quieres continuar?",header:"Confirmación",icon:"pi pi-exclamation-triangle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",acceptLabel:"Si",rejectLabel:"No",accept:()=>{i(!0)},reject:()=>{i(!1)}})});return o(()=>{}),{showConfirm:c}}};export{m as C};

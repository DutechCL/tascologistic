<template>
    <div class="p-5 flex justify-center">
        <div class="flex">
            <router-link class="mr-4" :to="{name:'table-order'}">Ordenes</router-link> 
            <router-link class="mr-4" :to="{name:'table-order-tracking'}">Retiro / Despacho</router-link>
            <router-link class="mr-4" :to="{name:'sales-notes'}">Notas de venta</router-link>
            <router-link class="mr-4" :to="{name:'pickup-review'}">Pickeo / Revisión</router-link>
            <router-link class="mr-4" :to="{name:'problem-notes'}">Detalle nota problema</router-link>
            <router-link class="mr-4" :to="{name:'review-notes'}">Detalle nota revisión</router-link>

            <router-link class="mr-4" :to="{name:'table-dispatch-orders'}">Despacho</router-link>
            <router-link class="mr-4" :to="{name:'table-pickup-orders'}">Retira Aqui</router-link>
            <router-link class="mr-4" :to="{name:'payments'}">Pendientes</router-link>
          

            
        </div>
        
       
  
    </div>
  </template>
  
  <script setup>
  import TabView from 'primevue/tabview'
  import TabPanel from 'primevue/tabpanel'
import { RouterLink } from 'vue-router';
  </script>
  
  <style>
    .p-tabview .p-tabview-nav{
      @apply flex justify-center border-none mb-3;
    }
    .p-tabview .p-tabview-nav li.p-highlight{
      @apply relative z-10 ;
      margin-right: -20px !important;
    }
    .p-tabview .p-tabview-nav li.p-highlight:nth-child(2){
      margin-left: -20px !important;
    }
    .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
        box-shadow: none;
    }
    .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link{
      @apply bg-primary-900 rounded-3xl border-2 border-primary-900;
    }
    .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link span{
      @apply text-white;
    }
    .p-tabview .p-tabview-nav li .p-tabview-nav-link{
      @apply !py-3 !px-10 border-primary-900 border-2 font-normal hover:border-primary-900;
    }
    .p-tabview .p-tabview-nav li .p-tabview-nav-link span{
      @apply text-primary-900;
    }
  
    .p-tabview .p-tabview-nav li:nth-child(2) .p-tabview-nav-link{
      @apply rounded-r-3xl border-l-0;
    }
   
    .p-tabview .p-tabview-nav li:nth-child(1) .p-tabview-nav-link{
      @apply rounded-l-3xl  border-r-0 ;
    }
  
  </style>
          
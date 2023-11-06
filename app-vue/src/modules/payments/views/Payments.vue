<template>
  <div class="px-3">
    <TabView>
      <TabPanel header="Facturas pendientes de pago">
        <ToManage/>
      </TabPanel>
      <TabPanel header="Pago a cuenta">
        <Managed/>
      </TabPanel>
  </TabView>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import ToManage from '../components/ToManage.vue'
import Managed from '../components/Managed.vue';
import { useOrdersPayment } from '../../../stores/orders/ordersPayments.js';

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
        
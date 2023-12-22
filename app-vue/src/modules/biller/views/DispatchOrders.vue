<template>
  <div class="px-3">
    <TabView  v-model="selectedTab">
      <TabPanel header="Por gestionar">
       
      </TabPanel>
      <TabPanel header="Gestionadas">
        
      </TabPanel>
    </TabView>
  </div>
    <div class="px-8">
      <div class="flex justify-between">
        <h1 class="mb-4 text-primary-900 font-inter font-semibold text-2xl">
          Despacho  <a style="cursor: pointer;" @click="updateOrders"><i class="pi pi-refresh"></i></a> 
        </h1>
        <Search :type="constants.RESPONSIBLE_BILLER" :methodShipping="constants.METHOD_SHIPPING_DELIVERY" :orders="orderStore.orders" @search="search"/>
      </div>

      <DataTableOrders 
        :orders="orders"
        :actions="actions"
        @action="actionMethod"
        />

      <DialogDetail  
        v-if="orderStore.visibleDialog" 
        v-model:visible="orderStore.visibleDialog" 
        :orderDetails="orderStore.order"
        @visible="visibleDetailsMethod"
        />

      <DialogDetailBill 
        v-if="orderStore.visibleBill" 
        v-model:visible="orderStore.visibleBill"
      />
        <div v-if="orders.length === 0" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <h1 class="align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900">
            No hay ordenes actualmente en este proceso
          </h1>
          <Button label="Regresar"  severity="primary" outlined @click="goBack" class="ml-3 !py-1.5" ></Button>
        </div>
    </div>
    <ConfirmDialog></ConfirmDialog>
  </template>
  
  <script setup>
  import { onBeforeMount } from 'vue';
  import TabView from 'primevue/tabview';
  import TabPanel from 'primevue/tabpanel';
  import Button from 'primevue/button';
  import Search from '../../../components/search/Search.vue';
  import DialogDetail from '../components/DialogDetail.vue';
  import DataTableOrders from '../components/tables/DataTableOrders.vue';
  import ConfirmDialog from 'primevue/confirmdialog';
  import constants from '@/constants/constants';
  import { useOrderProcessing } from '../composables/useOrderProcessing.js';

  const { 
      updateOrders, 
      orders, 
      search, 
      actionMethod, 
      visibleDetailsMethod, 
      orderStore
    } = useOrderProcessing();

    onBeforeMount(async () => {
      await updateOrders(constants.METHOD_SHIPPING_DELIVERY).then(() => {
        orders.value = orderStore.listOrders;
      });
    });

  </script>
  
<style>
  .p-tag-1{
    @apply bg-primary-100
    
  }
  .p-tag-1 span{
    @apply text-primary-900
  }

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
.p-calendar .p-inputtext{
border: none !important;
padding: 6px;
color: #fff;
font-weight: 600;
background: transparent;
}

.p-confirm-dialog .p-dialog-content {
padding: 45px !important;
}

.p-multiselect-label.p-placeholder, .p-multiselect-trigger{
color: #259bd7 !important;
}
.p-button.p-component.p-confirm-dialog-accept{
background: #259bd7!important;
}
.p-multiselect.p-multiselect-chip .p-multiselect-token {
background: #259bd7!important;
font-weight: 600;
color: #ffffff !important;
}
.p-dialog.p-component.p-ripple-disabled.p-confirm-dialog{
padding: 15px !important;
background: #ffffff !important;
}

.close-filter-date{
padding: 0px;
cursor: pointer;
background: #259bd7;
color: #fff;
font-weight: 600;
border-radius: 50%;
width: 25px;
text-align: center;
position: absolute;
border: 1px solid;
right: 6px;
top: 6px;
height: 25px;
}
.active-filter-date{
background: #259bd7;
border-radius: 27px;
height: 40px;
}
.active-filter-date i{
font-size: 12px;
}

.text-not-info{
font-size: 20px;
color: #898989;
}
</style>
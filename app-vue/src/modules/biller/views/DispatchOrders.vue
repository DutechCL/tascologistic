<template>
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

</style>
        
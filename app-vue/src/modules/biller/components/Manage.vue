<template>
      <div class="px-8">
        <div class="flex justify-between">
          <h1 class="mb-4 text-primary-900 font-inter font-semibold text-2xl">
            {{ title }}  <a style="cursor: pointer;" @click="updateOrders(props.methodShipping)"><i class="pi pi-refresh"></i></a> 
          </h1>
          <Search :type="constants.RESPONSIBLE_BILLER" :methodShipping="constants.METHOD_SHIPPING_HERE"  :orders="orderStore.listOrders" @search="search"/>
        </div>
  
      </div>
          <div class="px-8">
  
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
    </template>
    
    <script setup>
    import { onBeforeMount, defineProps } from 'vue';
    import Button from 'primevue/button';
    import Search from '../../../components/search/Search.vue';
    import DialogDetail from './DialogDetail.vue';
    import DialogDetailBill from './DialogDetailBill.vue';
    import DataTableOrders from './tables/DataTableOrders.vue';
    import constants from '@/constants/constants';
    import { useOrderProcessing } from '../composables/useOrderProcessing.js';
  
    const props = defineProps({
      status: String,
      methodShipping: String,
    })

    const { 
        updateOrders, 
        orders, 
        search, 
        actionMethod, 
        visibleDetailsMethod, 
        orderStore,
        title,
      } = useOrderProcessing();
  
      onBeforeMount(async () => {
          if(props.status === 'pending'){            
            await updateOrders(props.methodShipping).then(() => {
              orders.value = orderStore.listOrders;
            });
          }else{
            await orderStore.getOrdersBillManage(props.methodShipping).then((data) => {
              orders.value = data;
            }); 
          }
      });
  
  </script>
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
  import { ref, onBeforeMount, watch } from 'vue'
  import Button from 'primevue/button'
  import Search from '../../../components/search/Search.vue'
  import DialogDetail from '../components/DialogDetail.vue';
  import ConfirmDialog from 'primevue/confirmdialog';
  import DataTableOrders from '../components/tables/DataTableOrders.vue';
  import { useOrdersBills } from '../../../stores/orders/ordersBills.js';
  import { ToastMixin } from '../../../Utils/ToastMixin';
  import { ConfirmMixin } from '../../../Utils/ConfirmMixin';
  import constants from '@/constants/constants';

  const { showToast } = ToastMixin.setup();
  const { showConfirm } = ConfirmMixin.setup();

  const orderStore = useOrdersBills()
  const visible = ref(false);
  const orders = ref([]);

  const search = (data) => {
    orders.value = data.orders;
  }

  const actionMethod = (data) => {

    switch (data.method) {
      case 'showDetailOrder':
        orderStore.showDetailOrder(data.order);
        break;
      case 'processOrderBiller':
        processOrderBiller(data);
        break;
    }
  }

  const updateOrders = async () => {
    await orderStore.getOrdersBillDelivery();
    showToast({
      status: 'success',
      message: 'Ordenes actualizadas',
      time: 3000
    });
  }

  watch(() => orderStore.orders, (value) => {
    orders.value = orderStore.orders;
  });

 const goBack = () => {
    if (orders.value.length === 0) {
        window.location.href = '/admin/dashboard/'
      }
  }

  const processOrderBiller = async (value) => {
  try {
    let result = await showConfirm();

    if (result) {
      let response = await orderStore.processOrderBiller(value);

      if (response.status === 'success') {
        orders.value.filter(o => o.id !== response.data.id);
        showToast({
          status: 'success',
          message: response.message,
        });
      } 
    } else {
      showToast({
        status: 'info',
        message: 'Proceso cancelado',
      });
    }
  } catch (error) {
    if(error.response.status == 401){
      console.log(orders.value , error.response.data.data);
      orders.value.filter(o => o.id !== error.response.data.data.id);
    }

    showToast({
      status: 'error',
      message: error.response.data.message,
    });

  }
};


  const visibleDetailsMethod = (value) => {
    visible.value = value.visibleDetails;
  };

  onBeforeMount( async() => {
    await orderStore.getOrdersBillDelivery();
    orders.value = orderStore.orders;
  })

  </script>
  
<style>
  .p-tag-1{
    @apply bg-primary-100
    
  }
  .p-tag-1 span{
    @apply text-primary-900
  }

</style>
        
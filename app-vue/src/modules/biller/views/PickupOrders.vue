<template>
    <div class="px-8">
      <div class="flex justify-between">
        <h1 class="mb-4 text-primary-900 font-inter font-semibold text-2xl">
          Retira / Aquí  <a style="cursor: pointer;" @click="updateOrders"><i class="pi pi-refresh"></i></a> 
        </h1>
        <Search :orders="orderStore.listOrders" @search="search"/>
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
  import { ref, onBeforeMount, watch} from 'vue';
  import Button from 'primevue/button';
  import Search from '../../../components/search/Search.vue';
  import DialogDetail from '../components/DialogDetail.vue';
  import DataTableOrders from '../components/tables/DataTableOrders.vue';
  import ConfirmDialog from 'primevue/confirmdialog';
  import { useOrdersBills } from '../../../stores/orders/ordersBills.js';
  import { ToastMixin } from '../../../Utils/ToastMixin';
  import { ConfirmMixin } from '../../../Utils/ConfirmMixin';
  import constants from '@/constants/constants';
  
  const { showToast } = ToastMixin.setup();
  const { showConfirm } = ConfirmMixin.setup();

  const orderStore = useOrdersBills()
  const orders = ref([]);
  const actions = ref([
      {
        active: 'true',
        method: 'generateDocument',
        document: constants.DOCUMENT_TYPE_INVOICE,
        label: 'Factura / Boleta',
      }
  ])

  const updateOrders = async () => {
    await orderStore.getOrdersBillPickupAndHere();
    showToast({
      status: 'success',
      message: 'Ordenes actualizadas',
      time: 3000
    });
  }

  watch(() => orderStore.listOrders, (value) => {
    orders.value = orderStore.listOrders;
  });

  const search = (data) => {
    orders.value = data.orders;
  }

  const actionMethod = (data) => {
    switch (data.method) {
      case 'showDetailOrder':
        orderStore.showDetailOrder(data.order);
        break;
      case 'generateDocument':
        generateDocument(data);
        break;
    }
  }

  const generateDocument = async (value) => {
    let result = await showConfirm();
    if(result){
      let response = await orderStore.generateDocument(value);
      showToast({
        status: response.status,
        message: response.message,
      });
    }else{
      showToast({
      status: 'info',
      message: 'Proceso cancelado',
    });
    }
  };

  const visibleDetailsMethod = (value) => {
    orderStore.visibleDialog = value.visibleDetails;
  };

  onBeforeMount( async() => {
    await orderStore.getOrdersBillPickupAndHere();
    orders.value = orderStore.listOrders;
  })

  const goBack = () => {
    if (orders.value.length === 0) {
        window.location.href = '/admin/dashboard/'
      }
  }

</script>
  
<style>
  .p-tag-1{
    @apply bg-primary-100
  }
  .p-tag-1 span{
    @apply text-primary-900
  }

</style>
          
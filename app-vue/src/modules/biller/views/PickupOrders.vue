<template>
    <div class="px-8">
      <div class="flex justify-between">
        <h1 class="mb-4 text-primary-900 font-inter font-semibold text-2xl">
          Retira / Aquí  <a style="cursor: pointer;" @click="updateOrders"><i class="pi pi-refresh"></i></a> 
        </h1>
        <Search :orders="ordersStore.orders" @search="search"/>
      </div>

      <DataTableOrders 
        :orders="orders"
        :actions="actions"
        @action="actionMethod"
        />

      <DialogDetail 
      v-if="visible" 
      v-model:visible="visible" 
      :orderDetails="order"
      @visible="visibleDetailsMethod"
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
  import { ref, onBeforeMount, watch} from 'vue';
  import Button from 'primevue/button';
  import Search from '../../../components/search/Search.vue';
  import DialogDetail from '../components/DialogDetail.vue';

  import DataTableOrders from '../components/tables/DataTableOrders.vue';


  import { useOrders } from '../../../services/OrdersApiService.js';

  const ordersStore = useOrders()
  const visible = ref(false);
  const orders = ref([]);
  const order = ref([]);
  const actions = ref([
      {
        active: true,
        action: 'bill',
        label: 'Factura / Boleta',
      }
  ])

  const updateOrders = async () => {
    await ordersStore.getOrdersBillPickupAndHere();
    showToast({
      status: 'success',
      message: 'Ordenes actualizadas',
      time: 3000
    });
  }

  watch(() => ordersStore.orders, (value) => {
    orders.value = ordersStore.orders;
  });

  const search = (data) => {
    orders.value = data.orders;
  }

  const actionMethod = (data) => {
    switch (data.action) {
      case 'showDetailOrder':
        showDetailOrder(data.order);
        break;
      default:
        break;
    }
  }

  const visibleDetailsMethod = (value) => {
    visible.value = value.visibleDetails;
  };

  onBeforeMount( async() => {
    await ordersStore.getOrdersBillPickupAndHere();
    orders.value = ordersStore.orders;
  })

  const goBack = () => {
    if (orders.value.length === 0) {
        window.location.href = '/admin/dashboard/'
      }
  }

  const showDetailOrder = (orders) => {
    order.value = orders;
    visible.value = true;
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
          
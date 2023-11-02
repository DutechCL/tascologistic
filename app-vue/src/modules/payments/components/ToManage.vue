<template>
  <div class="flex justify-between">
    <div>
      <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
        Facturas pendientes de pago  <a style="cursor: pointer;" @click="updateOrders"><i class="pi pi-refresh"></i></a> 
      </h1>
    </div>
    <Search :orders="ordersPayment.ordersPaymentsPending" @search="search"/>
  </div>

  <DataTabletPayments v-if="loading" :orders="orders" :filters="filters" :column="column" @action="action"/>

  <DialogMethosPayment v-model:visible="ordersPayment.showDialog"/>

</template>

<script setup>
import { ref, defineProps, onBeforeMount, watch } from 'vue'
import Search from '../../../components/search/Search.vue'
import DialogMethosPayment from './DialogMethosPayment.vue'
import DataTabletPayments from './tables/DataTabletPayments.vue'
import { useOrdersPayment } from '../../../stores/orders/ordersPayments.js';
import { ToastMixin } from '../../../Utils/ToastMixin';

const { showToast } = ToastMixin.setup();
const ordersPayment = useOrdersPayment();

const filters = ref([
  'DocEntry',
  'DocNum', 
  'Customer'
])

const column = ref([
  'DocEntry',
  'DocNum', 
  'Customer',
  'DocTotal',
  'SalesEmployeeName',
  'MethodShippingName',
  'credit',
  'positiveBalance',
  'actions'
])

const visible = ref(false);
const props = defineProps({
  orders: Array
})
const orders = ref([]);
const loading = ref(false);

onBeforeMount( async() => {
  await ordersPayment.getOrdersPayment();
  orders.value = ordersPayment.ordersPaymentsPending;
  loading.value = true;
});
const search = (data) => {
  orders.value = data.orders;
}

const updateOrders = async() => {
  await ordersPayment.getOrdersPayment();
  showToast({
    status: 'success',
    title: 'Ordenes actualizadas',
    message: 'Las ordenes se han actualizado correctamente',
  })
}

watch(
  () => ordersPayment.ordersPaymentsPending, 
  (value) => {
    orders.value = value;
});
</script>

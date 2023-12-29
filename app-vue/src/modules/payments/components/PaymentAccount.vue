<template>
  <div class="flex justify-between">
    <div>
      <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
        Registrar pago a cuenta
      </h1>
    </div>
    <Search :type="'customers'" :customers="allCustomers" @search="search"/>
  </div>

  <DataTabletCustomers v-if="loading" :customers="customers" :filters="filters" :column="column" @action="action"/>

  <DialogMethosPayment v-model:visible="visible"/>

</template>

<script setup>
import { ref, defineProps, onBeforeMount, watch } from 'vue'
import Search from '../../../components/search/Search.vue'
import DialogMethosPayment from './DialogMethosPayment.vue'
import DataTabletCustomers from './tables/DataTabletCustomers.vue'
import { useOrdersPayment } from '../../../stores/orders/ordersPayments.js';
import { ToastMixin } from '../../../Utils/ToastMixin';

const { showToast } = ToastMixin.setup();
const ordersPayment = useOrdersPayment();

const filters = ref([
  'Customer',
  'NumAcount'
])

const column = ref([
  'Customer',
  'NumAcount',
  'actions'
])

const visible = ref(false);

const customers = ref([]);
const allCustomers = ref([]);
const loading = ref(false);

onBeforeMount( async() => {
  await ordersPayment.getCustomers();
  customers.value = ordersPayment.customers;
  allCustomers.value = ordersPayment.customers;
  loading.value = true;
});
const search = (data) => {
  customers.value = data.customers;
}

</script>

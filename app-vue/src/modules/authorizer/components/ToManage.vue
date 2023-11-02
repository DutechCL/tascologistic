<template>
  <div class="flex justify-between">
    <div>
      <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
        Notas de venta <a style="cursor: pointer;" @click="updateOrders"><i class="pi pi-refresh"></i></a> 
      </h1>
    </div>
    <Search :orders="props.orders" @search="search"/>
  </div>

  <!-- tablas de ordenes segun metodo de envio -->

  <!-- aqui -->
  <DataTableOrdersCda 
    :title="'Aquí'"
    :type="constants.METHOD_SHIPPING_HERE"
    :orders="ordersHere"
    :toManage="toManage"
    @processOrder="processOrder"/>

  <!-- retiro despacho -->
  <DataTableOrdersCda 
    :title="'Retiro / Despacho'"
    :type="constants.METHOD_SHIPPING_PICKUP_AND_DELIVERY"
    :orders="ordersPickup"
    :toManage="toManage"
    @processOrder="processOrder"/>

    <!-- Componentes de diálogo -->
    <DialogDetail
      v-if="ordersStore.typeDialog === 'detail'"
      v-model:visible="ordersStore.showDialog"
      :order="ordersStore.order"
    />

    <DialogDetailObservation
      v-if="ordersStore.typeDialog === 'observation'"
      v-model:visible="ordersStore.showDialog"
      :order="ordersStore.order"
    />

    <DialogReportProblem
      v-if="ordersStore.typeDialog === 'reportProblem'"
      v-model:visible="ordersStore.showDialog"
      :typeProblems="constants.RESPONSIBLE_CDA"
      :order="ordersStore.order"
      @processOrder="processOrder"
    />

    <DialogaddObservation
    v-if="ordersStore.typeDialog === 'addObservation'"
    v-model:visible="ordersStore.showDialog"
    :typeProblems="constants.RESPONSIBLE_CDA"
    :order="ordersStore.order"
    :disabled="true"
  />

  <div v-if="ordersHere.length === 0 && ordersPickup.length === 0" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h1 class="align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900">
      No se han encontrado ordenes
    </h1>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, onMounted, defineEmits} from 'vue'
import constants from '@/constants/constants';
import Search from '../../../components/search/Search.vue';
import DialogDetail from './DialogDetail.vue'
import DialogDetailObservation from './DialogDetailObservation.vue'
import DialogReportProblem from './DialogReportProblem.vue'
// import DialogaddObservation from './DialogaddObservation.vue'
import { useOrdersCda } from '../../../stores/orders/ordersCda.js'
import DataTableOrdersCda from './tables/DataTableOrdersCda.vue';
import { ToastMixin } from '../../../Utils/ToastMixin';
import { ConfirmMixin } from '../../../Utils/ConfirmMixin';

const { showToast } = ToastMixin.setup();
const { showConfirm } = ConfirmMixin.setup();
const ordersStore = useOrdersCda();
const emit = defineEmits();
const props = defineProps(
    {
        toManage: Boolean,
        orders: Array,
    }
)
const ordersHere = ref([]);
const ordersPickup = ref([]);

const updateOrders = async () => {
  emit('updateOrders');
}
onMounted( async() => {
  classificateOrders(props.orders);
});

const search = (data) => {
  classificateOrders(data.orders)
}

watch(
  () => props.orders,
  () => {
    classificateOrders(props.orders);
  }
)

const classificateOrders = (orders) => {

  ordersHere.value = orders
    .filter(o => o.method_shipping_id === constants.METHOD_SHIPPING_HERE_ID)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  ordersPickup.value = orders
    .filter(o => o.method_shipping_id !== constants.METHOD_SHIPPING_HERE_ID)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
}

const processOrder = async () => {
  const result = await showConfirm();
  if (result) {
    try {
      let response = await ordersStore.processOrderCda();

      if (response.status === 'success') {
        ordersStore.showDialog = false;
        showToast({
          status: response.status,
          message: response.message,
        });
        ordersStore.getOrdersCdaManage();
      }
    } catch (error) {
      if (error.response) {
        showToast({
          status: error.response.data.status,
          message: error.response.data.message,
        });
      }
    }
  } else {
    showToast({
      status: 'info',
      message: 'Proceso cancelado',
    });
  }
}

</script>

<style>
  [data-pc-section="sort"] svg {
  color: white !important;
  width: 12px;
  }
</style>

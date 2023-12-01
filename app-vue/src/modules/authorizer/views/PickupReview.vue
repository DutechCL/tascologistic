<template>
  <div class="px-8">
    <div v-if="!ordersStore.isDataLoaded" class="text-center" style="color:#259bd7">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem;"></i>
    </div>
    <div v-if="!ordersStore.showDetailOrder">
      <div class="flex justify-between ">
        <div>
          <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
            Pickeo / Revisión <a style="cursor: pointer;" @click="updateOrders"><i class="pi pi-refresh"></i></a> 
          </h1>
        </div>
        <Search 
          :type="constants.RESPONSIBLE_PICKER_REVIEWER" 
          :warehouses="props.wareHouseCode" 
          :orders="[...listOrdersHere, ...listOrdersPickupDelivery]" @search="search"/>
      </div>
      <!-- Start table orders here -->
      <DataTableOrdersPickerReview 
        :title="'Aqui'" 
        :type="constants.METHOD_SHIPPING_HERE" 
        :orders="ordersHere"/>
      <!-- End table orders here -->

      <!-- Start table orders PickupAndDelivery -->
      <DataTableOrdersPickerReview 
        :title="'Retiro / Despacho'" 
        :type="constants.METHOD_SHIPPING_PICKUP_AND_DELIVERY" 
        :orders="ordersPickupDelivery"/>
      <!-- End table orders PickupAndDelivery -->
    </div>
    <!-- start detail order -->
    <DetailOrder/>
    <!-- end detail order -->
  </div>
  <div v-if="ordersHere.length === 0 && ordersPickupDelivery.length  === 0" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h1 class="align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900">
      No se han encontrado ordenes
    </h1>
  </div>
  <Toast />
</template>

<script setup>
import { ref, onBeforeMount, toRefs, watch, defineProps } from 'vue'
import Search from '../../../components/search/Search.vue';
import { useOrdersPickerReview } from '../../../stores/orders/ordersPickerReview';
import DataTableOrdersPickerReview from '../components/tables/DataTableOrdersPickerReview.vue'
import constants from '@/constants/constants';
import DetailOrder from '../components/DetailOrder.vue';
import { ToastMixin } from '../../../Utils/ToastMixin';

const { showToast } = ToastMixin.setup();
const ordersStore = useOrdersPickerReview()
const ordersHere = ref([])
const ordersPickupDelivery = ref([])
const props = defineProps({
  wareHouseCode: String
});

const { listOrdersHere, listOrdersPickupDelivery } = toRefs(ordersStore.$state);

const updateOrders = () => {
  ordersStore.getOrdersPickerAndReviewer();
  showToast({
    status: 'success',
    title: 'Ordenes actualizadas',
    message: 'Las ordenes se han actualizado correctamente',
  })
}

watch(
  () => ordersStore.orders, 
  () => {
    ordersHere.value = listOrdersHere.value;
    ordersPickupDelivery.value = listOrdersPickupDelivery.value;
});

onBeforeMount(() => {
    ordersStore.wareHouseCode = props.wareHouseCode;
    ordersStore.getOrdersPickerAndReviewer();
});

const search = (value) => {

  ordersHere.value = value.orders
        .filter(order => order.method_shipping_id === constants.METHOD_SHIPPING_HERE_ID)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  ordersPickupDelivery.value = value.orders
        .filter(order => order.method_shipping_id !== constants.METHOD_SHIPPING_HERE_ID)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
}
</script>

<style>
.p-multiselect-label.p-placeholder, .p-multiselect-trigger{
  color: #259bd7 !important;
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
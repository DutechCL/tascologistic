<template>
    <div v-if="!ordersStore.showDetailOrder" class="px-8">
      <div class="flex justify-between">
        <h1 class="mb-4 text-primary-900 font-inter font-semibold text-2xl">
          Despacho 
          <Button
          label="Exportar"
          icon="pi pi-file-export"
          class="ml-5 !p-button p-component !bg-primary-900 !py-1 !border-primary-900 !text-white btn-custom"
          :disabled="ordersStore.listOrdersSelected.length === 0"
          @click="exportOrders"/>
        </h1>
        <Search :type="`${constants.RESPONSIBLE_DISPATCH}:true`"  :orders="allOrders" @search="search"/>
      </div>
      <div v-if="!ordersStore.isDataLoaded" class="text-center" style="color:#259bd7">
        <i class="pi pi-spin pi-spinner" style="font-size: 2rem;"></i>
      </div>
      <DataTableDispatch :title="''" :orders="orders" />

      <div v-if="ordersStore.isDataLoaded">
          <div v-if="orders.length === 0" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1 class="align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900">
                No hay ordenes actualmente en este proceso
            </h1>
            <Button label="Regresar"  severity="primary" outlined @click="goBack" class="ml-3 !py-1.5" ></Button>
        </div>
      </div>
    </div>
    <!-- start detail order -->
    <DetailOrder/>
    <!-- end detail order -->
  
    <!-- Componentes de diálogo -->
    <DialogDetail
      v-if="ordersStore.typeDialog === 'detail'"
      v-model:visible="ordersStore.showDialog"
      :order="ordersStore.currentOrder"
    />
    <ConfirmDialog></ConfirmDialog>
    <Toast />
  </template>
  
  <script setup>
  import { ref, onBeforeMount, watch, defineEmits} from 'vue'
  import Button from 'primevue/button'
  import DataTableDispatch from '../components/tables/DataTableDispatch.vue';
  import DetailOrder from '../components/DetailOrder.vue';
  import DialogDetail from '../components/DialogDetail.vue';
  import { useOrdersDispatch } from "../../../stores/orders/ordersDispatch";
  import Search from '../../../components/search/Search.vue';
  import constants from '@/constants/constants';
  import { all } from 'axios';

  import { ToastMixin } from '../../../Utils/ToastMixin';
  import { ConfirmMixin } from '../../../Utils/ConfirmMixin';
import { set } from 'date-fns';
  
  const { showToast } = ToastMixin.setup();
  const { showConfirm } = ConfirmMixin.setup();
  
  const props = defineProps({
    orders: Array,
  });
  const emit = defineEmits();
  const ordersStore = useOrdersDispatch();
  const orders = ref(props.orders);
  const allOrders = ref(props.orders);

  watch(
    () => props.orders,
    () => {
      orders.value = props.orders;
      allOrders.value = props.orders;
    }
  );
  
  const search = (data) => {
    orders.value = data.orders;
  }
  
  const exportOrders = async () => {
    try {
      let result = await showConfirm();

      if (result) {
        const orderIds = ordersStore.listOrdersSelected.map(order => order.id);
        const orderIdsString = orderIds.join(',');
        const url = `/api/v1/orders/dispatch/export?ids=${orderIdsString}`;
        const downloadLink = document.createElement('a');

        downloadLink.href = url;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        confirmDownloadDocuments(orderIds);

      } else {
          showToast({
              status: 'info',
              message: 'Proceso cancelado',
          });
      }
    } catch (error) {
      console.log(error)
        showToast({
            status: 'error',
            message: 'No se pudo realizar la accion',
        });
    }
  }

  const confirmDownloadDocuments = async (orderIds) => {
    const orderIdsString = orderIds.join(',');
    let result = await showConfirm({message: ' ¿ Ralizo la descarga del documento de Despacho ?'});

    if (result) {
      let response = await ordersStore.markAsExported(orderIdsString);

      if (response.export) {
        
        showToast({
            status: 'success',
            message: 'Se exportaron las ordenes correctamente',
        });
        let o = orders.value.filter(o => !orderIds.includes(o.id));
        orders.value = o;
      }
    }else{
      showToast({
          status: 'info',
          message: 'Proceso cancelado',
      });
    }
  }

//   const exportOrders = (data) => {
//   const orderIds = data.orders.map(order => order.id);
//   const orderIdsString = orderIds.join(',');
//   const url = `/api/v1/orders/dispatch/export?ids=${orderIdsString}`;
//   window.open(url, '_blank');
// };

  
  
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
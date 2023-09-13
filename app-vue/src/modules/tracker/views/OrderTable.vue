<template>
  <div class="px-8">
    <h1 class="mb-4 text-primary-900 font-inter font-semibold text-2xl">
      Revise su orden aquí
    </h1>
    <DataTable :value="orders" tableStyle="min-width: 50rem">
        <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
          <template #body="slotProps">
            N° {{ slotProps.data.DocNum  }}
          </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="DocDate" header="Fecha"></Column>
        <Column headerClass="!bg-primary-900"  field="DocTime" header="Hora"></Column>
        <Column headerClass="!bg-primary-900"  field="customer.CardName" header="Cliente"></Column>
        <Column headerClass="!bg-primary-900"  field="order_status" header="Estado" >
          <template #body="slotProps">
           <Tag :icon="'pi pi-circle-fill'"  :value="slotProps.data.order_status.name" :class="getSeverity(slotProps.data.order_status.id)" class="tag-font-status tag-radius"></Tag>
          </template>
        </Column> 
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';

import { useOrders } from '../../../services/OrdersApiService.js';

const ORDERS_STATUS_AQUI = 1;

const ordersStore = useOrders();
const orders = ref([]);

onMounted( async() => {
  orders.value = await ordersStore.getOrdersByMethodShipping([ORDERS_STATUS_AQUI]);
})

const getSeverity = (data) =>{
  return `p-tag-${data}`
}
</script>

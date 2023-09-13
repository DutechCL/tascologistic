<template>
  <div class="px-8">
    <h1 class="mb-4 text-primary-900 font-inter font-semibold text-2xl">
      Retiro / Despacho
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
        <Column headerClass="!bg-primary-900"  field="method_shipping" header="Método entrega" >
          <template #body="slotProps">
           <Tag :icon="'pi pi-home'" :value="slotProps.data.method_shipping.name" :class="getSeverity(1)" class="tag-font-method tag-radius"></Tag>
          </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="order_status" header="Estado" >
          <template #body="slotProps">
           <Tag  :icon="'pi pi-circle-fill'" :value="slotProps.data.order_status.name" :class="getSeverity(slotProps.data.order_status.id)" class="tag-font-status tag-radius"></Tag>
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

const ORDERS_STATUS_RETIRA = 2;
const ORDERS_STATUS_DESPACHO = 3;

const ordersStore = useOrders();
const orders = ref([]);

onMounted( async() => {
  orders.value = await ordersStore.getOrdersByMethodShipping([ORDERS_STATUS_RETIRA, ORDERS_STATUS_DESPACHO]);
})

const getSeverity = (data) =>{
  return `p-tag-${data}`
}
</script>

<style>

  .p-column-title{
    @apply text-white
  }
  .p-datatable-tbody tr:nth-child(odd){
    @apply bg-secundary-200 !important
  }
  .p-datatable-tbody tr:nth-child(even){
    @apply bg-secundary-100 !important
  }
  .p-tag-1{
   @apply bg-primary-100
   
  }
  .p-tag-1 span{
    @apply text-primary-900
  }
  .p-tag-2{
    @apply bg-orange-100
  }
  .p-tag-2 span{
    @apply text-orange-900
  }
  .p-tag-3{
    @apply bg-green-100
  }
  .p-tag-3 span{
    @apply text-green-900
  }
  .p-tag-4{
    @apply bg-blue-dark-100
  }
  .p-tag-4{
    @apply text-blue-dark-900
  }
  .pi-circle-fill{
    font-size: 9px !important;
  }

</style>
        
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
           <Tag :icon="'pi pi-circle-fill'"  :value="slotProps.data.order_status.name" :style="{ backgroundColor: slotProps.data.order_status.color, color: getTextColor(slotProps.data.order_status.color) }" class="tag-font-status tag-radius"></Tag>
          </template>
        </Column> 
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';

import { useOrders } from '../../../services/OrdersApiService.js';

const ORDERS_STATUS_AQUI = 1;

const ordersStore = useOrders();
const orders = ref([]);

const loadData = async () => {
  orders.value = await ordersStore.getOrdersByMethodShipping([ORDERS_STATUS_AQUI]);
};

onMounted(() => {
  // Cargar datos inicialmente
  loadData();

  // Configurar intervalo para recargar cada 15 segundos
  const refreshInterval = setInterval(loadData, 15000);

  // Limpiar intervalo al desmontar el componente
  onBeforeUnmount(() => {
    clearInterval(refreshInterval);
  });
});

function getTextColor(bgColor) {
  const rgb = hexToRgb(bgColor);
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;

  // Ajusta la luminosidad según tus necesidades
  const threshold = 0.5; // Valor entre 0 y 1, ajusta según sea necesario

  return luminance > threshold ? '#000000' : '#FFFFFF';
}

// Función para convertir el color hexadecimal a RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}
</script>

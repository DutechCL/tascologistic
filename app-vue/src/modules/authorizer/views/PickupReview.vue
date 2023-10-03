<template>
  <div class="px-8">
    <div v-if="ordersHere.length > 0">
    <div class="flex justify-between ">
      <div>
        <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
          Pickeo / Revisión
        </h1>
        <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
          Aquí
        </h2>
      </div>
      <Search/>
    </div>
    <div class="flex">
      <div class="card flex justify-content-center ">
        <MultiSelect v-model="selectedCities" :options="ordersHere" filter optionLabel="DocNum" placeholder="Nota de venta" :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none;" />
      </div>
      <div class="card flex justify-content-center ">
        <MultiSelect v-model="selectedCities" :options="ordersHere" filter optionLabel="DocDate" placeholder="Fecha" :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none;" />
      </div>
      <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" :options="ordersHere" filter optionLabel="DocTime" placeholder="Hora" :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none;" />
      </div>
      <div class="card flex justify-content-center mr-20">
        <MultiSelect v-model="selectedCities" :options="ordersHere" filter optionLabel="Customer.CardName" placeholder="Cliente" :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none;" />
      </div>
    </div>
    <DataTable class="mb-20" :value="ordersHere" tableStyle="min-width: 50rem" filters="filters" paginator :rows="5" dataKey="id" filterDisplay="row" :loading="loading">
        <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
          <template #body="slotProps">
            N° {{ slotProps.data.DocNum  }}
          </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="DocDate" header="Fecha"></Column>
        <Column headerClass="!bg-primary-900"  field="DocTime" header="Hora"></Column>
        <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente"></Column>
        <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Método entrega">
          <template #body="slotProps">
            <Tag Tag :icon="'pi pi-shopping-cart'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
          </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ResponsiblePickerName" header="Picker">
            <template #body="slotProps">
                <Tag v-if="slotProps.data.ResponsiblePickerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsiblePickerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ResponsibleReviewerName" header="Revisor">
            <template #body="slotProps">
                <Tag v-if="slotProps.data.ResponsibleReviewerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsibleReviewerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="OrderStatusName" header="Estado" >
          <template #body="slotProps">
           <Tag :icon="'pi pi-circle-fill'"  :value="slotProps.data.OrderStatusName" :style="{ backgroundColor: slotProps.data.OrderStatusColor, color: getTextColor(slotProps.data.OrderStatusColor) }" class=" tag-font-method tag-radius"></Tag>
          </template>
        </Column>
        
        <Column headerClass="!bg-primary-900"  field="note" header="" >
          <template #body="slotProps">
            <router-link v-if="slotProps.data.OrderStatusId != 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'picker' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Pickear</router-link>
            <router-link v-if="slotProps.data.OrderStatusId == 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'revisor' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Revisar</router-link>
          </template>
        </Column>
    </DataTable>
  </div>
    <!--   Table two dispath       -->
     <div v-if="ordersPickupAndDelivery.length > 0">
      <div>
        <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
          Retiro / Despacho
        </h2>
      </div>
      <div class="flex">
        <div class="card flex justify-content-center ">
          <MultiSelect v-model="selectedCities" :options="ordersPickupAndDelivery" filter optionLabel="DocNum" placeholder="Nota de venta" :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none;" />
        </div>
        <div class="card flex justify-content-center ">
          <MultiSelect v-model="selectedCities" :options="ordersPickupAndDelivery" filter optionLabel="DocDate" placeholder="Fecha" :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none;" />
        </div>
        <div class="card flex justify-content-center">
          <MultiSelect v-model="selectedCities" :options="ordersPickupAndDelivery" filter optionLabel="DocTime" placeholder="Hora" :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none;" />
        </div>
        <div class="card flex justify-content-center mr-20">
          <MultiSelect v-model="selectedCities" :options="ordersPickupAndDelivery" filter optionLabel="Customer.CardName" placeholder="Cliente" :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none;" />
        </div>
      
      </div>
      <DataTable class="mb-20" :value="ordersPickupAndDelivery" tableStyle="min-width: 50rem" filters="filters" paginator :rows="5" dataKey="id" filterDisplay="row" :loading="loading">
          <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
            <template #body="slotProps">
              N° {{ slotProps.data.DocNum  }}
            </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="DocDate" header="Fecha"></Column>
          <Column headerClass="!bg-primary-900"  field="DocTime" header="Hora"></Column>
          <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente"></Column>
          <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Método entrega">
            <template #body="slotProps">
              <Tag Tag :icon="[slotProps.data.icon,'pi']"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
            </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="ResponsiblePickerName" header="Picker">
              <template #body="slotProps">
                  <Tag v-if="slotProps.data.ResponsiblePickerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsiblePickerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
              </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="ResponsibleReviewerName" header="Revisor">
              <template #body="slotProps">
                  <Tag v-if="slotProps.data.ResponsibleReviewerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsibleReviewerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
              </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="OrderStatusName" header="Estado" >
            <template #body="slotProps">
            <Tag :icon="'pi pi-circle-fill'"  :value="slotProps.data.OrderStatusName" :style="{ backgroundColor: slotProps.data.OrderStatusColor, color: getTextColor(slotProps.data.OrderStatusColor) }" class=" tag-font-method tag-radius"></Tag>
            </template>
          </Column>
          
          <Column headerClass="!bg-primary-900"  field="note" header="" >
            <template #body="slotProps">
              <router-link v-if="slotProps.data.OrderStatusId != 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'picker' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Pickear</router-link>
              <router-link v-if="slotProps.data.OrderStatusId == 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'revisor' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Revisar</router-link>
            </template>
          </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import Search from '../components/Search.vue'
import { useOrders } from '../../../services/OrdersApiService.js';
import MultiSelect from 'primevue/multiselect';

const METHOD_SHIPPING_HERE = 1;

const ordersStore = useOrders()
const orders = ref([]);
const ordersHere = ref([]);
const ordersPickupAndDelivery = ref([]);

onBeforeMount( async() => {
  orders.value =  await ordersStore.getProcessedOrders();
  ordersHere.value = orders.value.filter( order => order.MethodShippingId === METHOD_SHIPPING_HERE)
  ordersPickupAndDelivery.value = orders.value.filter( order => order.MethodShippingId !== METHOD_SHIPPING_HERE)
})

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

<style>
.p-multiselect-label.p-placeholder, .p-multiselect-trigger{
  color: #259bd7 !important;
}
</style>
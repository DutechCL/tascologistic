<template>
  <div class="flex justify-between">
    <div>
      <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
        Notas de venta
      </h1>
      <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
        Retiro / Despacho
      </h2>
    </div>
    <Search/>
  </div>
  <div class="flex">
    <div class="card flex justify-content-center ">
      <MultiSelect v-model="selectedDocNum" :options="selectOrdersPickupAndDelivery" filter optionLabel="DocNum" placeholder="Nota de venta" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocNum" />
    </div>
    <div class="card flex justify-content-center ">
      <MultiSelect v-model="selectedDocDate" :options="selectOrdersPickupAndDelivery" filter optionLabel="DocDate" placeholder="Fecha" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocDate" />
    </div>
    <div class="card flex justify-content-center">
      <MultiSelect v-model="selectedDocTime" :options="selectOrdersPickupAndDelivery" filter optionLabel="DocTime" placeholder="Hora" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocTime"/>
    </div>
    <div class="card flex justify-content-center mr-5">
      <MultiSelect v-model="selectedCustomer" :options="selectOrdersPickupAndDelivery" filter optionLabel="Customer.CardName" placeholder="Clientes" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" />
    </div>
    <div class="card flex justify-content-center">
      <MultiSelect v-model="selectedDocTotal" :options="selectOrdersPickupAndDelivery" filter optionLabel="DocTotal" placeholder="Total" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocTotal" />
    </div>
  </div>
  <DataTable class="mb-20" :value="ordersPickupAndDelivery" tableStyle="min-width: 50rem">
      <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
        <template #body="slotProps">
          N° {{ slotProps.data.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="DocDate" header="Fecha"></Column>
      <Column headerClass="!bg-primary-900"  field="DocTime" header="Hora"></Column>
      <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente"></Column>
      <Column headerClass="!bg-primary-900"  field="DocTotal" header="Monto total">
        <template #body="slotProps">
          <InputNumber v-model="slotProps.data.DocTotal" class="remove-format-input" inputId="currency-us" mode="currency" currency="USD" locale="en-US" readonly :minFractionDigits="0"  />
         </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Método entrega">
        <template #body="slotProps">
          <Tag Tag :icon="'pi pi-shopping-cart'"  :value="slotProps.data.MethodShippingName" rounded class=" !font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"></Tag>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header="Observaciones">
        <template #body="slotProps">
          <Button :icon="'pi pi-eye'"  @click="showDocuments(slotProps.data)" class="!font-normal !text-primary-900
          " label="Ver Observaciones" link></Button>
        </template>
      </Column>
      
      <Column headerClass="!bg-primary-900"  field="note" header="" >
        <template #body="slotProps">
          <Button label="Informado" class="!py-1.5 !border-primary-900 !text-primary-900" outlined >
          </Button>
        </template>
      </Column>
  </DataTable>
  <DialogDetail 
  v-if="isDataLoaded" 
  v-model:visible="visible"
  :order="thisOrder"
  :key="thisOrder.timestamp"
  @update:visible="handleDialogVisibilityChange"
  />
</template>

<script setup>
import { ref, defineProps } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import Search from './Search.vue'
import MultiSelect from 'primevue/multiselect';
import { useOrders } from '../../../services/OrdersApiService.js';
import DialogDetail from './DialogDetail.vue'

const ordersStore = useOrders()

// console.log(ordersStore.orders);

const METHOD_SHIPPING_HERE = 1;

const props = defineProps({
  ListordersManager: Array
})


const visible = ref(false)
const thisOrder = ref({})
const isDataLoaded = ref(false)

const selectOrdersPickupAndDelivery = ref([])
const selectedDocNum = ref([])
const selectedDocDate = ref([])
const selectedDocTime = ref([])
const selectedCustomer = ref([])
const selectedDocTotal = ref([])

const ordersPickupAndDelivery = ref(
  props.ListordersManager.filter( order => order.MethodShippingId !== METHOD_SHIPPING_HERE)
);

selectOrdersPickupAndDelivery.value = ordersPickupAndDelivery.value

const showDocuments = (data) => {
  visible.value = true;
  thisOrder.value = { ...data };
  isDataLoaded.value = true;
}

const handleDialogVisibilityChange = (newValue) => {
  if (!newValue) {
    thisOrder.value = {}; // Reiniciar los datos al cerrar el diálogo
    isDataLoaded.value = false;
  }
}
</script>

<style>
.p-multiselect-label.p-placeholder, .p-multiselect-trigger{
  color: #259bd7 !important;
}
.p-multiselect.p-multiselect-chip .p-multiselect-token {
  background: #259bd7!important;
  font-weight: 600;
  color: #ffffff !important;
}
</style>
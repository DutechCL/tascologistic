<template>
  <div class="flex justify-between">
    <div>
      <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
        Notas de venta
      </h1>
    </div>
    <Search @search="search"/>
  </div>
  <div v-if="ordersHere.length > 0">
    <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
      Aquí
    </h2>
  <div class="flex">
    <FilterMultiSelect :typeOrders="'Here'" :allOrders="allOrdersHere" @filter="filter"/>
  </div>
  <DataTable @onPage="loadMoreData"  class="mb-20" :value="ordersHere" tableStyle="min-width: 50rem" filters="filters" paginator :rows="5" dataKey="id" filterDisplay="row" :loading="loading">
      <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
        <template #body="slotProps">
          N° {{ slotProps.data.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable field="DocDate" header="Fecha"></Column>
      <Column headerClass="!bg-primary-900" sortable field="DocTime" header="Hora"></Column>
      <Column headerClass="!bg-primary-900" sortable field="Customer.CardName" header="Cliente"></Column>
      <Column headerClass="!bg-primary-900" sortable field="DocTotal" header="Monto total"></Column>
      <Column headerClass="!bg-primary-900" sortable field="MethodShippingName" header="Método entrega">
        <template #body="slotProps">
          <Tag Tag :icon="'pi pi-shopping-cart'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header="Observación">
        <template #body="slotProps">
          <Button :icon="'pi pi-eye'" @click="openDialog('observation',slotProps.data)" class="!font-normal !text-primary-900
          " label="Ver observación" link></Button>
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
    <FilterMultiSelect :typeOrders="constants.METHOD_SHIPPING_PICKUP_AND_DELIVERY" :allOrders="allOrdersPickupAndDelivery" @filter="filter"/>
  </div>
  <DataTable @onPage="loadMoreData"  :value="ordersPickupAndDelivery" tableStyle="min-width: 50rem" filters="filters" paginator :rows="5" dataKey="id" filterDisplay="row" :loading="loading">
      <Column 
        headerClass="!bg-primary-900"  
        field="DocNum" 
        header="Nota de venta"
        >
        <template #body="slotProps">
          N° {{ slotProps.data.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable field="DocDate" header="Fecha"></Column>
      <Column headerClass="!bg-primary-900" sortable field="DocTime" header="Hora"></Column>
      <Column headerClass="!bg-primary-900" sortable field="Customer.CardName" header="Cliente"></Column>
      <Column headerClass="!bg-primary-900" sortable field="DocTotal" header="Monto total"></Column>
      <Column headerClass="!bg-primary-900" sortable field="MethodShippingName" header="Método entrega">
        <template #body="slotProps">
          <Tag Tag :icon="'pi pi-shopping-cart'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header="Documentos">
        <template #body="slotProps">
          <Button :icon="'pi pi-eye'"  @click="openDialog('detail',slotProps.data)" class="!font-normal !text-primary-900
          " label="Ver documentos" link></Button>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header=" Observación">
        <template #body="slotProps">
          <Button v-if="slotProps.data.HasProblems" :icon="'pi pi-eye'" @click="openDialog('observation',slotProps.data)" class="!font-normal !text-primary-900
          " label="Ver observación" link></Button>
        </template>
      </Column>
  </DataTable>
  </div>
  <DialogDetail
  v-if="currentDialog === 'detail'"
  v-model:visible="visible"
  :order="selectedOrder"
  @visible="closeDialog"
/>
<DialogDetailObservation
  v-if="currentDialog === 'observation'"
  v-model:visible="visible"
  :order="selectedOrder"
  @visible="closeDialog"
/>
    <div v-if="ordersHere.length === 0 && ordersPickupAndDelivery.length  === 0" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1 class="align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900">
        No se han encontrado ordenes
      </h1>
    </div>
</template>

<script setup>
import { ref, toRefs, defineProps} from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import Search from './Search.vue'
import DialogDetail from './DialogDetail.vue'
import DialogDetailObservation from './DialogDetailObservation.vue'
import { UseSearch } from '../composables/UseSearch'
import { UseDialogs } from '../composables/UseDialogs'
import FilterMultiSelect from './FilterMultiSelect.vue'
import constants from '@/constants/constants';

const props = defineProps({
  ListOrders: Array,
  search: String
})

const { ListOrders } = toRefs(props)

const {
    visible,
    selectedOrder,
    currentDialog,
    openDialog,
    closeDialog,
} = UseDialogs();

const {
    ordersHere,
    ordersPickupAndDelivery,
    allOrdersPickupAndDelivery,
    allOrdersHere,
    search
} = UseSearch(ListOrders);

const filter = (data) => {
  if(data.type === constants.METHOD_SHIPPING_HERE){
    ordersHere.value = data.orders;
  }else{
    ordersPickupAndDelivery.value = data.orders;
  }
}

const loading = ref(false);


</script>
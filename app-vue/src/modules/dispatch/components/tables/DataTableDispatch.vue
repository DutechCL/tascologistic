<template>

<div v-if="orders.length > 0"  class="pb-10">
  <div>
    <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
        {{props.title}}
    </h2>
  </div>

  <div class="flex">
      <FilterMultiSelect :allOrders="props.orders" :typeOrders="props.type" :filters="filters" @filter="filter"  />
  </div>
      
  <DataTable 
    :value="orders" 
    :rowsPerPageOptions="[5, 10, 20, 50]" 
    :rows="5" 
    @page="getData"
    paginator 
    dataKey="id" 
    filterDisplay="row" 
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} a {last} de {totalRecords}">
    <Column  headerClass="!bg-primary-900" field="DocNum" header="Nota de venta" sortable >
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
        <Tag Tag :icon="'pi pi-truck'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
      </template>
    </Column>
    <Column headerClass="!bg-primary-900" sortable field="warehouse" header="Bodega"></Column>
    <Column headerClass="!bg-primary-900"  field="note" header="Documentos">
      <template #body="slotProps">
        <Button :icon="'pi pi-eye'"  @click="openDialog(action.value ,slotProps.data)" class="!font-normal !text-primary-900
        " :label="'Ver documento'" link></Button>
      </template>
    </Column>
    <Column headerClass="!bg-primary-900"  field="note" header="">
      <template #body="slotProps">
          <Button :label="'Revisar'"  class="!py-1.5 mr-3 !border-primary-900 !text-primary-900" outlined />
          <Button :label="'Reportar'"  class="!py-1.5 mr-3 !border-primary-900 !text-primary-900" outlined/>
      </template>
    </Column>
  </DataTable>
  <!-- <Paginator :rows="5" :totalRecords="props.totalOrders" :rowsPerPageOptions="[5, 10, 20, 30]"></Paginator> -->
</div>

</template>

<script setup>
import { ref, defineProps, watch, defineEmits} from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import constants from '@/constants/constants';
import FilterMultiSelect from '../../../../components/filters/FilterMultiSelect.vue';
import { useOrdersCda } from '../../../../stores/orders/ordersCda'
// import Paginator from 'primevue/paginator';
const props = defineProps(
    {
      title: String,
      orders: Array,
    }
)

const ordersStore = useOrdersCda();
const emit = defineEmits();
const orders = ref(props.orders);

const filters = ref([
  'DocNum', 
  'Customer',
  'DocTotal',
  'DocTime',
  'DocDate',
])

watch(
    () => props.orders,
    () => {
      orders.value = props.orders;
    }
)

const openDialog = (dialog, order) => {

}

const filter = (data) => {
  orders.value = data.orders;
}
</script>

<style>
[data-pc-section="sort"] svg {
  color: white !important;
  width: 12px;
  }
</style>
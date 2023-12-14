<template>
    <div v-if="customers.length > 0">
        <!-- <div class="flex">
          <FilterMultiSelect :allOrders="props.orders" :typeOrders="props.type" @filter="filter" :filters="filters" />
        </div> -->
    
        <DataTable 
          :value="customers" 
          :rowsPerPageOptions="[5, 10, 20, 50]" 
          :rows="5" 
          paginator 
          dataKey="id" 
          filterDisplay="row" 
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} a {last} de {totalRecords}">

            <Column sortable headerClass="!bg-primary-900"  field="CardName" header="Cliente" style="max-width: 300px;">
              <template #body="slotProps">
                <Tag :icon="'pi pi-user'"  :value="slotProps.data.CardName" class="!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"></Tag>
              </template>
            </Column>
            <Column sortable headerClass="!bg-primary-900"  field="CardCode" header="N° Documento" style="max-width: 300px;">
              <template #body="slotProps">
                <Tag :icon="'pi pi-user'"  :value="slotProps.data.CardCode" class="!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"></Tag>
              </template>
            </Column>
            <Column v-if="props.column.includes('actions')" headerClass="!bg-primary-900"  field="actions" header="" >
              <template #body="slotProps">
                <Button label="Pagar" class="!py-1.5 !border-primary-900 !text-primary-900 float-right" @click="showDialog(slotProps.data)" outlined >
                </Button>
              </template>
            </Column>
        </DataTable>
      </div>
      <div v-if="customers.length === 0" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 class="align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900">
          No se han encontrado clientes
        </h1>
      </div>
</template>

<script setup>
import { defineProps, onBeforeMount, onMounted, ref, watch } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber';
import FilterMultiSelect from '../../../../components/filters/FilterMultiSelect.vue';
import constants from '@/constants/constants';
import { useOrdersPayment } from '../../../../stores/orders/ordersPayments'
import { ToastMixin } from '../../../../Utils/ToastMixin';
import { ConfirmMixin } from '../../../../Utils//ConfirmMixin';

const { showToast } = ToastMixin.setup();
const { showConfirm } = ConfirmMixin.setup();
const ordersPayment = useOrdersPayment();

const props = defineProps({
  customers: Array,
  filters: Array,
  column: Array,
})

const customers = ref([]);

onMounted(() => {
  customers.value = props.customers;
});

const showDialog = (order) => {
  // assignResponsible(order);
  ordersPayment.order = order
  ordersPayment.showDialog = true;
}

watch(
  () => props.customers, 
  (value) => {
    customers.value = value;
});

</script>

<style>
[data-pc-section="sort"] svg {
  color: white !important;
  width: 12px;
}
</style>
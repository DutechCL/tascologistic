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
    :rowsPerPageOptions="[10, , 20, 50, 100]" 
    :rows="10" 
    v-model:selection="ordersStore.listOrdersSelected"
    paginator 
    dataKey="id"
    filterDisplay="row" 
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} a {last} de {totalRecords}"
    :selectAll="selectAll"
    @select-all-change="onSelectAllChange"
    >
    <Column v-if="props.type !== 'manage'" headerClass="!bg-primary-900" selectionMode="multiple"></Column>
    <Column  headerClass="!bg-primary-900" field="DocNum" header="Nota de venta" sortable >
      <template #body="slotProps">
        N° {{ slotProps.data.DocNum  }}
      </template>
    </Column>
    <Column headerClass="!bg-primary-900" sortable field="DocDate" header="Fecha"></Column>
    <Column headerClass="!bg-primary-900" sortable field="DocTime" header="Hora"></Column>
    <Column headerClass="!bg-primary-900" sortable field="Customer.CardName" header="Cliente"></Column>
    <Column headerClass="!bg-primary-900" sortable field="U_SBO_FormaPago" header="Tipo de documento">
      <template #body="slotProps">
        <Tag Tag :icon="'pi pi-file'"  :value="slotProps.data.U_SBO_FormaPago" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
      </template>
    </Column>
    <Column headerClass="!bg-primary-900" sortable field="bill?.DocEntry" header="N° de documento"></Column>
    <Column headerClass="!bg-primary-900" sortable field="bill?.created_at" header="Fecha de emisión">
      <template #body="slotProps">
        <p>{{ formatDate(slotProps.data.bill?.created_at) }}</p>
      </template>
    </Column>
    <Column headerClass="!bg-primary-900" sortable field="bill?.created_at" header="Hora de emisión">
      <template #body="slotProps">
        <p>{{ formatTime(slotProps.data.bill?.created_at) }}</p>
      </template>
    </Column>
    <Column headerClass="!bg-primary-900" sortable field="DocTotal" header="Monto total"></Column>
    <Column headerClass="!bg-primary-900" sortable field="MethodShippingName" header="Método entrega">
      <template #body="slotProps">
        <Tag Tag :icon="'pi pi-truck'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
      </template>
    </Column>
    <Column headerClass="!bg-primary-900" sortable field="warehouse" header="Bodega">
      <template #body="slotProps">
        <Tag Tag :icon="'pi pi-building'"  :value="slotProps.data.warehouse" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
      </template>
    </Column>
    <Column headerClass="!bg-primary-900"  field="note" header="Documentos">
      <template #body="slotProps">
        <Button :icon="'pi pi-eye'"  @click="openDialog('detail', slotProps.data)" class="!font-normal !text-primary-900
        " :label="'Ver documento'" link></Button>
      </template>
    </Column>
  </DataTable>
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
import { useOrdersDispatch } from "../../../../stores/orders/ordersDispatch";
import { ToastMixin } from '../../../../Utils/ToastMixin';
import { format } from 'date-fns';

const selectAll = ref(false);
const { showToast } = ToastMixin.setup();
const props = defineProps(
    {
      title: String,
      orders: Array,
      type: String,
    }
)

const ordersStore = useOrdersDispatch();
const emit = defineEmits();
const orders = ref(props.orders);

const filters = ref([
  'DocNum', 
  'Customer',
  'DocTotal',
  // 'DocTime',
  'DocDate',
  'Warehouse',
])

watch(
    () => props.orders,
    () => {
      orders.value = props.orders;
    }
)

const formatDate = (dateString) => {
  if (!dateString) return '';
  return format(new Date(dateString), 'yyyy-MM-dd');
};

const formatTime = (dateString) => {
  if (!dateString) return '';
  return format(new Date(dateString), 'HH:mm:ss');
};

const onSelectAllChange = (event) => {
    if (event.checked) {
      // Seleccionar todas las filas visibles
      selectedOrders.value = [...orders]; // Ajusta esto según tu lógica de paginación
    } else {
      // Deseleccionar todas las filas
      selectedOrders.value = [];
    }
  };

const action = (order, responsible) => {
  ordersStore.showDetailOrder = true;
  ordersStore.currentOrder = order;
  ordersStore.currentOrder.responsible = responsible;
  assignResponsible();
}

const assignResponsible = async () => {
  
  try {
    let response = await ordersStore.assignResponsible()

      showToast({
        status: response.status,
        message: response.message,
      });
  } catch (error) {
      if (error.response) {
        showToast({
          status: error.response.data.status,
          message: error.response.data.message,
        });
        ordersStore.showDetailOrder = false;
      }
  }
} 

const openDialog = (dialog, order) => {
  ordersStore.currentOrder = order
  ordersStore.showDialog = true
  ordersStore.typeDialog = dialog
  console.log(ordersStore.typeDialog, ordersStore.showDialog)
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
<template>

<div v-if="orders.length > 0"  class="pb-10">
  <div>
    <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
        {{props.title}}
    </h2>
  </div>

  <div class="flex">
      <FilterMultiSelect :allOrders="props.orders" :typeOrders="props.type" :filters="filters" @filter="filter" />
  </div>
      
  <DataTable 
    :value="orders" 
    :rowsPerPageOptions="[5, 10, 20, 50]" 
    :rows="5" 
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
        <Tag v-if="props.type == constants.METHOD_SHIPPING_HERE" Tag :icon="'pi pi-shopping-cart'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
        <Tag v-if="props.type == constants.METHOD_SHIPPING_PICKUP_AND_DELIVERY" Tag :icon="slotProps.data.method_shipping_id === constants.METHOD_SHIPPING_PICKUP_ID ? 'pi pi-home' : 'pi pi-truck'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>       
      </template>
    </Column>
    <Column headerClass="!bg-primary-900"  field="note" header="Documentos">
      <template #body="slotProps">
        <Button v-for="action in actionsLink[props.type]" :icon="'pi pi-eye'"  @click="openDialog(action.value ,slotProps.data)" class="!font-normal !text-primary-900
        " :label="action.label" link></Button>
      </template>
    </Column>
    <Column headerClass="!bg-primary-900"  field="note" header="Observación" v-if="!props.toManage">
      <template #body="slotProps">
        <Button v-if="slotProps.data.HasProblems" :icon="'pi pi-eye'" @click="openDialog('observation',slotProps.data)" class="!font-normal !text-primary-900
        " label="Ver observación" link></Button>
      </template>
    </Column>
    <Column headerClass="!bg-primary-900"  field="note" header="" v-if="props.toManage" >
      <template #body="slotProps">
        <Button v-for="action in actionsBtn[props.type]" :label="action.label" @click="openDialog(action.value, slotProps.data)"  class="!py-1.5 mr-3 !border-primary-900 !text-primary-900" outlined >
        </Button>
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
import { useOrdersCda } from '../../../../stores/orders/ordersCda'

const props = defineProps(
    {
      title: String,
      type: String,
      orders: Array,
      toManage: Boolean,
    }
)
const ordersStore = useOrdersCda();
const emit = defineEmits();
const orders = ref(props.orders);
const actionsLink = ref({
    'here': [
      {
        label: 'Ver observación',
        value: 'observation'
      }
    ],
    'pickup-delivery': [
      {
        label: 'Var documentos',
        value: 'detail'
      },
    ],
})
const actionsBtn = ref({
    'here': [
      {
        label: 'Informado',
        value: constants.ACTION_INFO
      }
    ],
    'pickup-delivery': [
      {
        label: 'Rechazar',
        value: 'reportProblem'
      },
      {
        label: 'Autorizar',
        value: constants.ACTION_APPROVE
      }
    ],
})
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

  if([constants.ACTION_INFO, constants.ACTION_APPROVE].includes(dialog)){
    ordersStore.currentOrder.orderId = order.id;
    ordersStore.currentOrder.action = dialog;
    emit('processOrder');
    return;
  }
  ordersStore.order = order;
  ordersStore.showDialog = true;
  ordersStore.typeDialog = dialog;
}

const filter = (data) => {
  orders.value = data.orders;
}
</script>
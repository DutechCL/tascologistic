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
    <FilterMultiSelect 
    v-if="isDataLoaded" 
    :typeOrders="constants.METHOD_SHIPPING_HERE" 
    :allOrders="allOrdersHere" 
    @filter="filter"/>
  </div>
  <DataTable class="mb-20" 
    :value="ordersHere" 
    tableStyle="min-width: 50rem" 
    filters="filters" 
    paginator 
    :rowsPerPageOptions="[5, 10, 20, 50]" 
    :rows="5" 
    dataKey="id" 
    filterDisplay="row" 
    :loading="loading"
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} a {last} de {totalRecords}"
    >
      <Column headerClass="!bg-primary-900" sortable  field="DocNum" header="Nota de venta">
        <template #body="slotProps">
          N° {{ slotProps.data.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable field="DocDate" header="Fecha"></Column>
      <Column headerClass="!bg-primary-900" sortable field="DocTime" header="Hora"></Column>
      <Column headerClass="!bg-primary-900" sortable  field="Customer.CardName" header="Cliente"></Column>
      <Column headerClass="!bg-primary-900" sortable field="DocTotal" header="Monto total"></Column>
      <!-- <Column headerClass="!bg-primary-900"  field="totalAmount" header="Monto total"></Column> -->
      <Column headerClass="!bg-primary-900" sortable field="MethodShippingName" header="Método entrega">
        <template #body="slotProps">
          <Tag Tag :icon="'pi pi-shopping-cart'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header=" Observación">
        <template #body="slotProps">
          <Button :icon="'pi pi-eye'" @click="openDialog('observation',slotProps.data)" class="!font-normal !text-primary-900
          " label="Ver observación" link></Button>
        </template>
      </Column>
      
      <Column headerClass="!bg-primary-900"  field="note" header="" >
        <template #body="slotProps">
          <Button @click="actionOrder(slotProps.data, 3)" label="Informado" class="!py-1.5 !border-primary-900 !text-primary-900" outlined >
          </Button>
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
    <FilterMultiSelect 
      v-if="isDataLoaded"
      :allOrders="allOrdersPickupAndDelivery" 
      :typeOrders="constants.METHOD_SHIPPING_PICKUP_AND_DELIVERY" 
      @filter="filter"
      />
  </div>
  <DataTable 
    :value="ordersPickupAndDelivery" 
    tableStyle="min-width: 50rem" 
    filters="filters" 
    paginator 
    :rowsPerPageOptions="[5, 10, 20, 50]" 
    :rows="5" 
    dataKey="id" 
    filterDisplay="row" 
    :loading="loading"
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} a {last} de {totalRecords}"
    >
      <Column 
        headerClass="!bg-primary-900"  
        field="DocNum" 
        header="Nota de venta"
        sortable
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
          <Tag Tag :icon="slotProps.data.MethodShippingId === constants.METHOD_SHIPPING_PICKUP_ID ? 'pi pi-home' : 'pi pi-truck'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header="Documentos">
        <template #body="slotProps">
          <Button :icon="'pi pi-eye'"  @click="openDialog('detail',slotProps.data)" class="!font-normal !text-primary-900
          " label="Ver documentos" link></Button>
        </template>
      </Column>
      <!-- <Column headerClass="!bg-primary-900"  field="note" header=" Observación">
        <template #body="slotProps">
          <Button v-if="slotProps.data.OrderStatusId == 4" :icon="'pi pi-eye'" @click="showDetailsOrders(slotProps.data)" class="!font-normal !text-primary-900
          " label="Ver observación" link></Button>
        </template>
      </Column> -->
      
      <Column headerClass="!bg-primary-900"  field="note" header="" >
        <template #body="slotProps">
          <Button label="Rechazar" @click="openDialog('reportProblem',slotProps.data)"  class="!py-1.5 mr-3 !border-primary-900 !text-primary-900" outlined >
          </Button>
          <Button label="Autorizar" @click="actionOrder(slotProps.data, 1)" class="!py-1.5 !border-primary-900 !text-primary-900 mr-3" outlined >
          </Button>
          <!-- <Button label="Observación" :disabled="slotProps.data.observation != null"  @click="openDialog('addObservation',slotProps.data)" class="!py-1.5 !border-primary-900 !text-primary-900" outlined >
          </Button> -->
        </template>
      </Column>
  </DataTable>
</div>
    <!-- Componentes de diálogo -->
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
    <DialogReportProblem
      v-if="currentDialog === 'reportProblem'"
      v-model:visible="visible"
      :typeProblems="constants.RESPONSIBLE_CDA"
      :order="selectedOrder"
      @visible="closeDialog"
    />
    <DialogAddObservation
    v-if="currentDialog === 'addObservation'"
    v-model:visible="visible"
    :typeProblems="constants.RESPONSIBLE_CDA"
    :order="selectedOrder"
    :disabled="true"
    @visible="closeDialog"
  />
    <div v-if="ordersHere.length === 0 && ordersPickupAndDelivery.length  === 0" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1 class="align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900">
        No se han encontrado ordenes
      </h1>
    </div>
</template>

<script setup>
import { ref, toRefs, defineProps, onBeforeMount} from 'vue'
import constants from '@/constants/constants';
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import Search from './Search.vue'
import DialogDetail from './DialogDetail.vue'
import DialogDetailObservation from './DialogDetailObservation.vue'
import DialogReportProblem from './DialogReportProblem.vue'
import DialogAddObservation from './DialogAddObservation.vue'
import FilterMultiSelect from '../../../components/filters/FilterMultiSelect.vue';
import { useOrders } from '../../../services/OrdersApiService.js'
import { UseSearch } from '../composables/UseSearch'
import { UseDialogs } from '../composables/UseDialogs'
import { ToastMixin } from '../../../Utils/ToastMixin';
import { ConfirmMixin } from '../../../Utils/ConfirmMixin';

const { showToast } = ToastMixin.setup();
const { showConfirm } = ConfirmMixin.setup();

const ordersStore = useOrders()
const props = defineProps({
  ListOrders: Array,
  search: String
})

const { ListOrders } = toRefs(props);
const isDataLoaded = ref(false);

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

onBeforeMount(() => {
  isDataLoaded.value = true;
});

const filter = (data) => {
  console.log(data)
  if(data.type === constants.METHOD_SHIPPING_HERE){
    ordersHere.value = data.orders;
  }else{
    ordersPickupAndDelivery.value = data.orders;
  }
}

const loading = ref(false);

const actionOrder = async (order, action = 1) => {
  const result = await showConfirm();
  if (result) {
    try {
      const body = {
          orderId: order.id,
          action: action,
          responsible: constants.RESPONSIBLE_CDA,
          problems: null,
          other: null,
          orderItemsProblem: null
      }
      let data = await ordersStore.processOrderAction(body);
      showToast({
        status: data.status,
        message: data.message,
      });
    } catch (error) {
      if (error.response) {
        showToast({
          status: error.response.data.status,
          message: error.response.data.message,
        });
      }
    }
  } else {
    showToast({
      status: 'info',
      message: 'Proceso cancelado',
    });
  }
}


</script>

<style>
  [data-pc-section="sort"] svg {
  color: white !important;
  width: 12px;
  }
</style>

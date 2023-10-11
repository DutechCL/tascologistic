<template>
  <div class="flex justify-between">
    <div>
      <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
        Notas de venta
      </h1>
    </div>
    <Search @search="search"/>
  </div>
  <div>
    <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
      Aquí
    </h2>
  <div class="flex">
    <div class="card flex justify-content-center ">
      <MultiSelect v-model="selectedDocNumHere" :options="ordersHere" filter optionLabel="DocNum" placeholder="Nota de venta" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocNum" />
    </div>
    <div style="position: relative; " :class="{ 'active-filter-date': !dateLabelHere }">
      <Calendar inputId="rangeDate" v-model="datesHere" selectionMode="range" :manualInput="false" style="border: none !important; color: #259bd7 !important"/>
      <label v-if="dateLabelHere" style="position: absolute;
                    left: 40%;
                    color: #259bd7;
                    top: 26%;" for="rangeDate">Fecha</label>
          <div class="align-center card flex justify-content-center mr-5">
              <a class="close-filter-date" v-if="!dateLabelHere" @click="removeFilterDate('Here')"> <i class="pi pi-times"></i> </a>
          </div>
    </div>
    <div class="card flex justify-content-center mr-5">
      <MultiSelect v-model="selectedDocTimeHere" :options="ordersHere" filter optionLabel="DocTime" placeholder="Hora" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" />
    </div>
    <div class="card flex justify-content-center mr-5">
      <MultiSelect v-model="selectedCustomerHere" :options="ordersHere" filter optionLabel="Customer.CardName" placeholder="Clientes" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" />
    </div>
    <div class="card flex justify-content-center">
      <MultiSelect v-model="selectedDocTotalHere" :options="ordersHere" filter optionLabel="DocTotal" placeholder="Total" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocTotal" />
    </div>
  </div>
  <DataTable @onPage="loadMoreData"  class="mb-20" :value="ordersHere" tableStyle="min-width: 50rem" filters="filters" paginator :rows="5" dataKey="id" filterDisplay="row" :loading="loading">
      <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
        <template #body="slotProps">
          N° {{ slotProps.data.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="DocDate" header="Fecha"></Column>
      <Column headerClass="!bg-primary-900"  field="DocTime" header="Hora"></Column>
      <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente"></Column>
      <Column headerClass="!bg-primary-900"  field="DocTotal" header="Monto total"></Column>
      <!-- <Column headerClass="!bg-primary-900"  field="totalAmount" header="Monto total"></Column> -->
      <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Método entrega">
        <template #body="slotProps">
          <Tag Tag :icon="'pi pi-shopping-cart'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header=" Observación">
        <template #body="slotProps">
          <Button :icon="'pi pi-eye'" @click="showDetailsOrders(slotProps.data)" class="!font-normal !text-primary-900
          " label="Ver observación" link></Button>
        </template>
      </Column>
      
      <Column headerClass="!bg-primary-900"  field="note" header="" >
        <template #body="slotProps">
          <Button @click="actionOrder(slotProps.data)" label="Informado" class="!py-1.5 !border-primary-900 !text-primary-900" outlined >
          </Button>
        </template>
      </Column>
      <template v-if="ordersHere.length === 0" #footer>
        <tr>
          <td :colspan="numberOfColumns" class="text-not-info">
            No hay órdenes disponible.
          </td>
        </tr>
      </template>
  </DataTable>
</div>
  <!--   Table two dispath       -->
  <div>
    <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
      Retiro / Despacho
    </h2>
  </div>
  <div class="flex">
    <div class="card flex justify-content-center ">
      <MultiSelect v-model="selectedDocNumPickup" :options="ordersPickupAndDelivery" filter optionLabel="DocNum" placeholder="Nota de venta" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocNum" />
    </div>
    <div style="position: relative; " :class="{ 'active-filter-date': !dateLabelPickup }">
      <Calendar inputId="rangeDatePickup" v-model="datesPickup" selectionMode="range" :manualInput="false" style="border: none !important;"/>
      <label v-if="dateLabelPickup" style="position: absolute;
                    left: 40%;
                    color: #259bd7;
                    top: 26%;" for="rangeDatePickup">Fecha</label>
          <div class="align-center card flex justify-content-center mr-5">
            <a class="close-filter-date"  v-if="!dateLabelPickup" @click="removeFilterDate('Pickup')"><i class="pi pi-times"></i></a>
        </div>
    </div>
    <div class="card flex justify-content-center mr-5">
      <MultiSelect v-model="selectedDocTimePickup" :options="ordersPickupAndDelivery" filter optionLabel="DocTime" placeholder="Hora" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" />
    </div>
    <div class="card flex justify-content-center mr-5">
      <MultiSelect v-model="selectedCustomerPickup" :options="ordersPickupAndDelivery" filter optionLabel="Customer.CardName" placeholder="Clientes" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" />
    </div>
    <div class="card flex justify-content-center">
      <MultiSelect v-model="selectedDocTotalPickup" :options="ordersPickupAndDelivery" filter optionLabel="DocTotal" placeholder="Total" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocTotal" />
    </div>
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
      <Column headerClass="!bg-primary-900"  field="DocDate" header="Fecha"></Column>
      <Column headerClass="!bg-primary-900"  field="DocTime" header="Hora"></Column>
      <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente"></Column>
      <Column headerClass="!bg-primary-900"  field="DocTotal" header="Monto total"></Column>
      <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Método entrega">
        <template #body="slotProps">
          <Tag Tag :icon="slotProps.data.MethodShippingId === 2 ? 'pi pi-home' : 'pi pi-truck'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header="Documentos">
        <template #body="slotProps">
          <Button :icon="'pi pi-eye'"  @click="showDocuments(slotProps.data)" class="!font-normal !text-primary-900
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
          <Button label="Rechazar" @click="visibleReportProbelms(slotProps.data)"  class="!py-1.5 mr-3 !border-primary-900 !text-primary-900" outlined >
          </Button>
          <Button label="Autorizar" @click="actionOrder(slotProps.data, 3)" class="!py-1.5 !border-primary-900 !text-primary-900" outlined >
          </Button>
        </template>
      </Column>
      <template v-if="ordersPickupAndDelivery.length === 0" #footer>
        <tr>
          <td :colspan="numberOfColumns" class="text-not-info">
            No hay órdenes disponible.
          </td>
        </tr>
      </template>
  </DataTable>

  <DialogDetail 
    v-if="isDataLoaded" 
    v-model:visible="visible"
    :order="thisOrder"
    :key="thisOrder.timestamp"
    @update:visible="handleDialogVisibilityChange"
    @visible="visibleDetailsMethod"
    />
  <DialogDetailObservation 
    v-if="isDataLoaded" 
    v-model:visible="visibleObservation" 
    :order="thisOrder" 
    :key="thisOrder.timestamp"
    @update:visible="handleDialogVisibilityChange"
    @visible="visibleObservationMethod"
    />
    <DialogReportProblem 
    v-model:visible="visibleReport" 
    :typeProblems="'cda'"
    :order="orderProblem"
    @selection-change="handleSelectionChange" 
    @visible-report="visibleReportMethod"
    />
    <Toast />
    <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import { ref, toRefs, defineProps, watch } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import Search from './Search.vue'
import DialogDetail from './DialogDetail.vue'
import DialogDetailObservation from './DialogDetailObservation.vue'
import DialogReportProblem from './DialogReportProblem.vue'
import ConfirmDialog from 'primevue/confirmdialog'
import MultiSelect from 'primevue/multiselect'
import Calendar from 'primevue/calendar'
import { useOrders } from '../../../services/OrdersApiService.js'
import { useConfirm } from "primevue/useconfirm"
import { useToast } from 'primevue/usetoast'
import { useFilters } from '../composables/UseFilters'

const METHOD_SHIPPING_HERE = 1

const confirm = useConfirm()
const toast = useToast();
const ordersStore = useOrders()
const props = defineProps({
  ListOrders: Array,
  search: String
})

const { ListOrders } = toRefs(props);
const visible = ref(false)
const visibleObservation = ref(false)
const thisOrder = ref({})
const isDataLoaded = ref(false)
const visibleReport = ref()
const orderProblem = ref([])
const {
    datesHere,
    datesPickup,
    dateLabelHere,
    dateLabelPickup,
    ordersHere,
    ordersPickupAndDelivery,
    selectedDocNumPickup,
    selectedDocTimePickup,
    selectedCustomerPickup,
    selectedDocTotalPickup,
    selectedDocNumHere,
    selectedDocTimeHere,
    selectedCustomerHere,
    selectedDocTotalHere,
    removeFilterDate,
    search
} = useFilters(ListOrders);

watch(() => props.ListOrders, (newListOrders) => {
  ordersHere.value = newListOrders.filter( order => order.MethodShippingId === METHOD_SHIPPING_HERE)
  ordersPickupAndDelivery.value = newListOrders.filter( order => order.MethodShippingId !== METHOD_SHIPPING_HERE)
});

const visibleReportProbelms = (value) => {
  visibleReport.value = true
  orderProblem.value = value
}

const visibleReportMethod = ({ value }) => {
  if (!value) {
    visibleReport.value = visibleReport.visibleReport;
  }
};

const visibleObservationMethod = (value) => {
  visibleObservation.value = value.visibleObservation;
};

const visibleDetailsMethod = (value) => {
  visible.value = value.visibleDetails;
};

const showDetailsOrders = (data) => {
  thisOrder.value = { ...data };
  visibleObservation.value = true;
  isDataLoaded.value = true;
}

const showDocuments = (data) => {
  visible.value = true;
  thisOrder.value = { ...data };
  isDataLoaded.value = true;
}

const handleDialogVisibilityChange = (newValue) => {
  if (!newValue) {
    thisOrder.value = {}; 
    isDataLoaded.value = false;
  }
}

const loading = ref(false);

const actionOrder = async (order, action = 1) => {
  confirm.require({
      message: '¿Estas seguro que deseas continuar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: async() => {
        let data = await ordersStore.postActionOrder(order.id, action);
        toast.add({ severity: data.status, summary: '', detail: data.message, life: 3000 });
      },
      reject: () => {
      }
    });
}


</script>

<style>

</style>
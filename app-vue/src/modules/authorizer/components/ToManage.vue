<template>
  <div class="flex justify-between">
    <div>
      <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
        Notas de venta
      </h1>
    </div>
    <Search/>
  </div>
  <div v-if="ordersHere.length > 0">
    <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
      Aquí
    </h2>
  <div class="flex">
    <div class="card flex justify-content-center ">
      <MultiSelect v-model="selectedDocNum" :options="selectFilterOrdersHere" filter optionLabel="DocNum" placeholder="Nota de venta" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocNum" />
    </div>
    <div class="card flex justify-content-center ">
      <MultiSelect v-model="selectedDocDate" :options="selectFilterOrdersHere" filter optionLabel="DocDate" placeholder="Fecha" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocDate" />
    </div>
    <div class="card flex justify-content-center">
      <MultiSelect v-model="selectedDocTime" :options="selectFilterOrdersHere" filter optionLabel="DocTime" placeholder="Hora" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocTime"/>
    </div>
    <div class="card flex justify-content-center mr-5">
      <MultiSelect v-model="selectedCustomer" :options="selectFilterOrdersHere" filter optionLabel="Customer.CardName" placeholder="Clientes" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" />
    </div>
    <div class="card flex justify-content-center">
      <MultiSelect v-model="selectedDocTotal" :options="selectFilterOrdersHere" filter optionLabel="DocTotal" placeholder="Total" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocTotal" />
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
      <Column headerClass="!bg-primary-900"  field="DocTotal" header="Monto total">
        <template #body="slotProps">
          <InputNumber v-model="slotProps.data.DocTotal" class="remove-format-input" inputId="currency-us" mode="currency" currency="USD" locale="en-US" readonly :minFractionDigits="0"  />
         </template>
      </Column>
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
          <Button label="Informado" class="!py-1.5 !border-primary-900 !text-primary-900" outlined >
          </Button>
        </template>
      </Column>
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
      <MultiSelect v-model="selectedDocNum" :options="selectFilterordersPickupAndDelivery" filter optionLabel="DocNum" placeholder="Nota de venta" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocNum" />
    </div>
    <div class="card flex justify-content-center ">
      <MultiSelect v-model="selectedDocDate" :options="selectFilterordersPickupAndDelivery" filter optionLabel="DocDate" placeholder="Fecha" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocDate" />
    </div>
    <div class="card flex justify-content-center">
      <MultiSelect v-model="selectedDocTime" :options="selectFilterordersPickupAndDelivery" filter optionLabel="DocTime" placeholder="Hora" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocTime"/>
    </div>
    <div class="card flex justify-content-center mr-5">
      <MultiSelect v-model="selectedCustomer" :options="selectFilterordersPickupAndDelivery" filter optionLabel="Customer.CardName" placeholder="Clientes" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" />
    </div>
    <div class="card flex justify-content-center">
      <MultiSelect v-model="selectedDocTotal" :options="selectFilterordersPickupAndDelivery" filter optionLabel="DocTotal" placeholder="Total" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocTotal" />
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
      <Column headerClass="!bg-primary-900"  field="DocTotal" header="Monto total">
        <template #body="slotProps">
          <InputNumber v-model="slotProps.data.DocTotal" class="remove-format-input" inputId="currency-us" mode="currency" currency="USD" locale="en-US" readonly :minFractionDigits="0"  />
         </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Método entrega">
        <template #body="slotProps">
          <Tag Tag :icon="'pi pi-shopping-cart'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header="Documentos">
        <template #body="slotProps">
          <Button :icon="'pi pi-eye'"  @click="showDocuments(slotProps.data)" class="!font-normal !text-primary-900
          " label="Ver documentos" link></Button>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header=" Observación">
        <template #body="slotProps">
          <Button v-if="slotProps.data.OrderStatusId == 4" :icon="'pi pi-eye'" @click="showDetailsOrders(slotProps.data)" class="!font-normal !text-primary-900
          " label="Ver observación" link></Button>
        </template>
      </Column>
      
      <Column headerClass="!bg-primary-900"  field="note" header="" >
        <template #body="slotProps">
          <Button label="Rechazar" @click="visibleReport = true"  class="!py-1.5 mr-3 !border-primary-900 !text-primary-900" outlined >
          </Button>
          <Button label="Autorizar" @click="actionOrder(slotProps.data)" class="!py-1.5 !border-primary-900 !text-primary-900" outlined >
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
    <Toast />
    <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import Search from './Search.vue'
import DialogDetail from './DialogDetail.vue'
import DialogDetailObservation from './DialogDetailObservation.vue'
import { useOrders } from '../../../services/OrdersApiService.js';
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from 'primevue/usetoast';
import InputNumber from 'primevue/inputnumber';
import MultiSelect from 'primevue/multiselect';


const confirm = useConfirm();

const toast = useToast();

const METHOD_SHIPPING_HERE = 1;

const ordersStore = useOrders()

const props = defineProps({
  ListOrders: Array
})


const visible = ref(false)
const visibleObservation = ref(false)
const thisOrder = ref({})
const isDataLoaded = ref(false)
const selectedDocNum = ref([])
const selectedDocDate = ref([])
const selectedDocTime = ref([])
const selectedCustomer = ref([])
const selectedDocTotal = ref([])

// console.log(props.ListOrders)

const visibleObservationMethod = (value) => {
  visibleObservation.value = value.visibleObservation;
};

const visibleDetailsMethod = (value) => {
  visible.value = value.visibleDetails;
};

const ordersHere = ref(
  props.ListOrders.filter( order => order.MethodShippingId === METHOD_SHIPPING_HERE)
);

const ordersPickupAndDelivery = ref(
  props.ListOrders.filter( order => order.MethodShippingId !== METHOD_SHIPPING_HERE)
);

const selectFilterOrdersHere = ref(
  ordersHere.value
);

const selectFilterordersPickupAndDelivery = ref(
  ordersPickupAndDelivery.value
);


watch(selectedDocNum, (data) => {
  if (data.length === 0) {
    ordersPickupAndDelivery.value =  props.ListOrders.filter( order => order.MethodShippingId !== METHOD_SHIPPING_HERE);
    ordersHere.value =  props.ListOrders.filter( order => order.MethodShippingId === METHOD_SHIPPING_HERE);
  } else {
    ordersPickupAndDelivery.value = data.filter(order => order.MethodShippingId !== METHOD_SHIPPING_HERE);
    ordersHere.value = data.filter(order => order.MethodShippingId === METHOD_SHIPPING_HERE);
  }
});

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
    thisOrder.value = {}; // Reiniciar los datos al cerrar el diálogo
    isDataLoaded.value = false;
  }
}

const loading = ref(false);

const loadMoreData = async (event) => {
  loading.value = true;

  try {
    const { first, rows } = event; // first es el índice del primer registro en la página, y rows es la cantidad de registros por página
    const newData = await ordersStore.getOrders({ offset: first, limit: rows });
    ordersHere.value = [...ordersHere.value, ...newData];
  } catch (error) {
    console.error('Error al cargar más datos', error);
  } finally {
    loading.value = false;
  }
};


const actionOrder = async (order) => {
  confirm.require({
      message: '¿Estas seguro que deseas continuar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: async() => {
        let data = await ordersStore.postActionOrder(order.id, 1);
        console.log(data)
        toast.add({ severity: data.status, summary: '', detail: data.message, life: 3000 });
        if (data.status === 'success') {
          const indexOfRowToRemove = ordersPickupAndDelivery.value.findIndex(order1 => order1 === order);
          if (indexOfRowToRemove !== -1) {
            ordersPickupAndDelivery.value.splice(indexOfRowToRemove, 1);
          }
        }
      },
      reject: () => {
      }
    });
}


</script>

<style>
.p-confirm-dialog .p-dialog-content {
  padding: 45px !important;
}

.p-multiselect-label.p-placeholder, .p-multiselect-trigger{
  color: #259bd7 !important;
}
.p-button.p-component.p-confirm-dialog-accept{
  background: #259bd7!important;
}
.p-multiselect.p-multiselect-chip .p-multiselect-token {
  background: #259bd7!important;
  font-weight: 600;
  color: #ffffff !important;
}
.p-dialog.p-component.p-ripple-disabled.p-confirm-dialog{
  padding: 15px !important;
  background: #ffffff !important;
}
</style>
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
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Nota de venta" class="md:w-20rem w-full " />
    </div>
    <div class="card flex justify-content-center ">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Fecha" class="md:w-20rem w-full" />
    </div>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Hora" class="md:w-20rem w-full" />
    </div>
    <div class="card flex justify-content-center mr-20">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Cliente" class="md:w-20rem w-full" />
    </div>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Total" class="md:w-20rem w-full" />
    </div>
  </div>
  <DataTable  class="mb-20" :value="ordersHere" tableStyle="min-width: 50rem">
      <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
        <template #body="slotProps">
          N° {{ slotProps.data.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="DocDate" header="Fecha"></Column>
      <Column headerClass="!bg-primary-900"  field="DocTime" header="Hora"></Column>
      <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente"></Column>
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
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Nota de venta" class="md:w-20rem w-full " />
    </div>
    <div class="card flex justify-content-center ">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Fecha" class="md:w-20rem w-full" />
    </div>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Hora" class="md:w-20rem w-full" />
    </div>
    <div class="card flex justify-content-center mr-5">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Cliente" class="md:w-20rem w-full" />
    </div>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Total" class="md:w-20rem w-full" />
    </div>
  </div>
  <DataTable :value="ordersPickupAndDelivery" tableStyle="min-width: 50rem">
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
    />
  <DialogDetailObservation 
    v-if="isDataLoaded" 
    v-model:visible="visibleObservation" 
    :order="thisOrder" 
    :key="thisOrder.timestamp"
    @update:visible="handleDialogVisibilityChange"
    />
    <Toast />
    <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import TreeSelect from 'primevue/treeselect'
import Search from './Search.vue'
import DialogDetail from './DialogDetail.vue'
import DialogDetailObservation from './DialogDetailObservation.vue'
import { useOrders } from '../../../services/OrdersApiService.js';
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from 'primevue/usetoast';



const confirm = useConfirm();

const toast = useToast();

const METHOD_SHIPPING_HERE = 1;

const ordersStore = useOrders()

const props = defineProps({
  ListOrders: Array
})

const visible = ref(false);
const visibleObservation = ref(false);
const thisOrder = ref({});
const isDataLoaded = ref(false); 

// console.log(props.ListOrders)

const ordersHere = ref([
  props.ListOrders.filter( order => order.MethodShippingId === METHOD_SHIPPING_HERE)
]);

const ordersPickupAndDelivery = ref([
  props.ListOrders.filter( order => order.MethodShippingId !== METHOD_SHIPPING_HERE)
]);

ordersHere.value = ordersHere.value[0]
ordersPickupAndDelivery.value = ordersPickupAndDelivery.value[0]

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

const actionOrder = async (order) => {
  confirm.require({
      message: '¿Estas seguro que deseas continuar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: async() => {
        let data = await ordersStore.postActionOrder(order.id, 1);
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

</style>
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
          <Button :icon="'pi pi-eye'" @click="openDialog('observation',slotProps.data)" class="!font-normal !text-primary-900
          " label="Ver observación" link></Button>
        </template>
      </Column>
      
      <Column headerClass="!bg-primary-900"  field="note" header="" >
        <template #body="slotProps">
          <Button @click="actionOrder(slotProps.data)" label="Informado" class="!py-1.5 !border-primary-900 !text-primary-900" outlined >
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
          <Button label="Autorizar" @click="actionOrder(slotProps.data, 3)" class="!py-1.5 !border-primary-900 !text-primary-900" outlined >
          </Button>
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
      :typeProblems="'cda'"
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
import DialogReportProblem from './DialogReportProblem.vue'
import MultiSelect from 'primevue/multiselect'
import Calendar from 'primevue/calendar'
import { useOrders } from '../../../services/OrdersApiService.js'
import { useFilters } from '../composables/UseFilters'
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

const {
    visible,
    selectedOrder,
    currentDialog,
    openDialog,
    closeDialog,
} = UseDialogs();

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

const loading = ref(false);

const actionOrder = async (order, action = 1) => {
  const result = await showConfirm();
  if (result) {
    try {
      let data = await ordersStore.postActionOrder(order.id, action);
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

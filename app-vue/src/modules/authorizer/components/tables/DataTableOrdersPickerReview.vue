<template>
    <div v-if="props.orders.length > 0">
        <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
          {{props.title}}
        </h2>
        <div class="flex">
          <FilterMultiSelect :typeOrders="props.type" :allOrders="props.orders" :filters="filters" @filter="filter"/>
        </div>
        <DataTable 
          class="mb-20" :value="orders" 
          tableStyle="min-width: 50rem" 
          filters="filters" 
          paginator 
          :rows="5"  
          dataKey="id" 
          filterDisplay="row" 
          :loading="loading"
          :rowsPerPageOptions="[5, 10, 20, 50]" 
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
            <Column headerClass="!bg-primary-900" sortable field="Customer.CardName" header="Cliente"></Column>
            <Column headerClass="!bg-primary-900" sortable field="MethodShippingName" header="Método entrega">
              <template #body="slotProps">
                <Tag Tag :icon="'pi pi-shopping-cart'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
              </template>
            </Column>
            <Column headerClass="!bg-primary-900"  field="ResponsiblePickerName" header="Picker">
                <template #body="slotProps">
                    <Tag v-if="getResponsible(slotProps.data, constants.RESPONSIBLE_PICKER)" :icon="'pi pi-user'" :value="getResponsible(slotProps.data, constants.RESPONSIBLE_PICKER)" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
                </template>
            </Column>
            <Column headerClass="!bg-primary-900"  field="ResponsibleReviewerName" header="Revisor">
                <template #body="slotProps">
                    <Tag v-if="getResponsible(slotProps.data, constants.RESPONSIBLE_REVIEWER)" :icon="'pi pi-user'" :value="getResponsible(slotProps.data, constants.RESPONSIBLE_REVIEWER)" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
                </template>
            </Column>
            <Column headerClass="!bg-primary-900" sortable field="OrderStatusName" header="Estado" >
              <template #body="slotProps">
              <Tag :icon="'pi pi-circle-fill'"  :value="slotProps.data.OrderStatusName" :style="{ backgroundColor: slotProps.data.OrderStatusColor, color: getTextColor(slotProps.data.OrderStatusColor) }" class=" tag-font-method tag-radius"></Tag>
              </template>
            </Column>
            
            <Column headerClass="!bg-primary-900"  field="note" header="" >
              <template #body="slotProps">
                <Button 
                  v-if="slotProps.data.process_id == constants.PROCESS_PICKER_ID" 
                  :label="'Pickear'" @click="action(slotProps.data, constants.RESPONSIBLE_PICKER)" 
                  class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"/>
                <Button 
                  v-if="slotProps.data.process_id == constants.PROCESS_REVIEWER_ID" 
                  :label="'Revisar'" @click="action(slotProps.data, constants.RESPONSIBLE_REVIEWER)" 
                  class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900"/>
              </template>
            </Column>
        </DataTable>
      </div>
</template>


<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import FilterMultiSelect from '../../../../components/filters/FilterMultiSelect.vue';
import Button from 'primevue/button'
import constants from '@/constants/constants';
import { useOrdersPickerReview } from '../../../../stores/orders/ordersPickerReview';
import { ToastMixin } from '../../../../Utils/ToastMixin';

const { showToast } = ToastMixin.setup();
const ordersStore = useOrdersPickerReview();
const emit = defineEmits();
const props = defineProps({
  title: String,
  type: String,
  orders: Array,
})
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
  (data) => {
    orders.value = data;
  }
);

const filter = (data) => {
    orders.value = data.orders;
}

const action = (order, responsible) => {
  console.log(order)
  ordersStore.showDetailOrder = true;
  ordersStore.currentOrder = order;
  ordersStore.currentOrder.responsible = responsible;
  assingResponsible();
}

const assingResponsible = async () => {
  
  try {
    let response = await ordersStore.assingResponsible()

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


const getResponsible = (order, type) =>{
   return order.Responsibles.find((responsible) => responsible.pivot.task == type)?.name
}

function getTextColor(bgColor) {
  const rgb = hexToRgb(bgColor);
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  const threshold = 0.5;
  return luminance > threshold ? '#000000' : '#FFFFFF';
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}
</script>

<style>
[data-pc-section="sort"] svg {
  color: white !important;
  width: 12px;
  }
</style>
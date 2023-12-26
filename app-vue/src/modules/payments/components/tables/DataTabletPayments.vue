<template>
    <div v-if="orders.length > 0">
        <div class="flex">
          <FilterMultiSelect :allOrders="props.orders" :typeOrders="props.type" @filter="filter" :filters="filters" />
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
            <Column v-if="props.column.includes('DocEntry')" sortable headerClass="!bg-primary-900"  field="DocEntry" header="Factura">
              <template #body="slotProps">
                N° {{ slotProps.data.DocEntry  }}
              </template>
            </Column>
            <Column v-if="props.column.includes('DocNum')" sortable headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
              <template #body="slotProps">
                N° {{ slotProps.data.DocNum  }}
              </template>
            </Column>
            <Column v-if="props.column.includes('Customer')" sortable headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente" style="max-width: 300px;">
              <template #body="slotProps">
                <Tag :icon="'pi pi-user'"  :value="slotProps.data.Customer.CardName" class="!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"></Tag>
              </template>
            </Column>
            <Column v-if="props.column.includes('NumAcount')" sortable headerClass="!bg-primary-900"  field="NumAcount" header="Cuenta">
              <template #body="slotProps">
                N° {{ slotProps.data.DocNum  }}
              </template>
            </Column>
            <Column v-if="props.column.includes('DocTotal')" sortable headerClass="!bg-primary-900"  field="DocTotal" header="Total"></Column>
            <Column v-if="props.column.includes('SalesEmployeeName')" sortable headerClass="!bg-primary-900"  field="SalesEmployeeName" header="Vendedor">
              <template #body="slotProps">
                <Tag :icon="'pi pi-user'"  :value="slotProps.data.SalesEmployeeName" class="!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"></Tag>
              </template>
            </Column>
            <Column v-if="props.column.includes('MethodShippingName')" sortable headerClass="!bg-primary-900"  field="MethodShippingName" header="Entrega">
              <template #body="slotProps">
                <Tag v-if="slotProps.data.method_shipping_id === constants.METHOD_SHIPPING_HERE_ID" Tag :icon="'pi pi-shopping-cart'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
                <Tag v-if="slotProps.data.method_shipping_id === constants.METHOD_SHIPPING_PICKUP_ID" Tag :icon="'pi pi-home'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
                <Tag v-if="slotProps.data.method_shipping_id === constants.METHOD_SHIPPING_DELIVERY_ID" Tag :icon="'pi pi-truck'"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
              </template>
            </Column>
            <Column v-if="props.column.includes('credit')" sortable headerClass="!bg-primary-900"  field="credit" header="Crédito">
              <template #body="slotProps">
                <InputNumber v-model="slotProps.data.credit" class="remove-format-input" inputId="currency-us" mode="currency" currency="USD" locale="en-US" readonly :minFractionDigits="0"  />
              </template>
            </Column>
            <Column v-if="props.column.includes('positiveBalance')" sortable headerClass="!bg-primary-900"  field="positiveBalance" header="Saldo a favor">
              <template #body="slotProps">
                <InputNumber v-model="slotProps.data.positiveBalance " class="remove-format-input" inputId="currency-us" mode="currency" currency="USD" locale="en-US" readonly :minFractionDigits="0"  />
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
      <div v-if="orders.length === 0" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 class="align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900">
          No se han encontrado ordenes
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
  orders: Array,
  filters: Array,
  column: Array,
})

const orders = ref([]);

onMounted(() => {
  orders.value = props.orders;
});

const showDialog = (order) => {
  assignResponsible(order);
  ordersPayment.customer = null
  ordersPayment.order = order
  ordersPayment.showDialog = true;
}

const assignResponsible = async (order) => {
  try {
    const response = await ordersPayment.assignResponsible(order.id);
    showToast({
      status: response.status,
      message: response.message,
    });
  } catch (error) {
    showToast({
      status: error.response.data.status,
      message: error.response.data.message,
    });
  }
}
const filter = (data) => {
  orders.value = data.orders;
}

watch(
  () => props.orders, 
  (value) => {
    orders.value = value;
});

</script>

<style>
[data-pc-section="sort"] svg {
  color: white !important;
  width: 12px;
}
</style>
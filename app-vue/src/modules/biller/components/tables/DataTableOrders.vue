<template>

    <div v-if="orders.length > 0">
        <div class="flex">
          <FilterMultiSelect 
          :typeOrders="'here'" 
          :allOrders="allOrders" 
          :filters="filters"
          @filter="filter"/>
        </div>
      <DataTable 
        tableStyle="min-width: 50rem" 
        filters="filters" 
        :value="orders" 
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
          <Column headerClass="!bg-primary-900" sortable  field="DocDate" header="Fecha"></Column>
          <Column headerClass="!bg-primary-900" sortable  field="Customer.CardName" header="Cliente" style="max-width: 300px;"></Column>
          <Column headerClass="!bg-primary-900" sortable  field="DocTotal" header="Monto total"></Column>
          <Column headerClass="!bg-primary-900" sortable  field="MethodShippingName" header="Método entrega" >
              <template #body="slotProps">
              <Tag :icon="getIcon(slotProps.data)" :value="slotProps.data.MethodShippingName" class="p-tag-1 tag-font-method tag-radius"></Tag>
              </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="note" header="Detalles">
              <template #body="slotProps">
                  <Button :icon="'pi pi-eye'" @click="actionMethod('showDetailOrder', slotProps.data)" class="!text-primary-900" label="Ver detalles" link></Button>
              </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="client" header="Emitir">
              <template #body="slotProps">
                  <Button
                    :label="slotProps.data.U_SBO_FormaPago" 
                    @click="actionMethod('processOrderBiller', slotProps.data, slotProps.data.U_SBO_FormaPago)" 
                    class="!py-1.5 !border-primary-900 !text-primary-900 mr-3"  
                    severity="primary" 
                    style="width: 100px;"
                    outlined></Button>
              </template>
        </Column>
      </DataTable>
    </div>

</template>

<script setup>
  import { ref, watch, defineEmits} from 'vue';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Tag from 'primevue/tag';
  import Button from 'primevue/button';
  import FilterMultiSelect from '../../../../components/filters/FilterMultiSelect.vue';
  import constants from '@/constants/constants';

  const props = defineProps({
    type: String,
    actions: Object,
    orders: Object,
  })
  const emit = defineEmits();
  const orders = ref(props.orders);
  const allOrders = ref(props.orders);
  const filters = ref([
    'DocNum', 
    'Customer',
    'DocTotal',
    'DocTime',
    'DocDate',
  ])
  const getIcon = (data) => {
      switch (data.method_shipping_id) {
      case constants.METHOD_SHIPPING_DELIVERY_ID:
        return 'pi pi-truck';
      case constants.METHOD_SHIPPING_PICKUP_ID:
        return 'pi pi-home';
      case constants.METHOD_SHIPPING_HERE_ID:
        return 'pi pi-shopping-cart';
      default:
        return 'pi pi-shopping-cart';
    }
  }

  const actionMethod = (method, order, document = null,) => {
    emit('action', {'method': method, 'document': document, 'responsible': 'biller', order});
  }

  const filter = (data) => {
      orders.value = data.orders;
  }

  watch(() => props.orders, (value) => {
    orders.value = value;
    allOrders.value = value;
  })


</script>
  
<style>
  .p-tag-1{
    @apply bg-primary-100
  }
  .p-tag-1 span{
    @apply text-primary-900
  }
  [data-pc-section="sort"] svg {
    color: white !important;
    width: 12px;
    }
</style>
          
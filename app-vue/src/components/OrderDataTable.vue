<template>
    <div class="flex">
        <FilterMultiSelect :typeOrders="'Here'" :allOrders="allOrdersHere" @filter="filter"/>
    </div>
    <DataTable @onPage="loadMoreData"  class="mb-20" :value="ordersHere" tableStyle="min-width: 50rem" filters="filters" paginator :rows="5" dataKey="id" filterDisplay="row" :loading="loading">
        <Column headerClass="!bg-primary-900" sortable  field="DocNum" header="Nota de venta">
          <template #body="slotProps">
            N° {{ slotProps.data.DocNum  }}
          </template>
        </Column>
        <Column headerClass="!bg-primary-900" sortable field="DocDate" header="Fecha"></Column>
        <Column headerClass="!bg-primary-900" sortable field="DocTime" header="Hora"></Column>
        <Column headerClass="!bg-primary-900" sortable  field="Customer.CardName" header="Cliente"></Column>
        <Column headerClass="!bg-primary-900" sortable field="DocTotal" header="Monto total"></Column>
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
            <Button @click="actionOrder(slotProps.data)" label="Informado" class="!py-1.5 !border-primary-900 !text-primary-900" outlined >
            </Button>
          </template>
        </Column>
    </DataTable>
  </template>
  
  <script setup>
  import { ref, toRefs, defineProps} from 'vue'
  import Button from 'primevue/button'
  import Column from 'primevue/column'
  import DataTable from 'primevue/datatable'
  import Tag from 'primevue/tag'
  import FilterMultiSelect from './FilterMultiSelect.vue'
  import { useOrders } from '../../../services/OrdersApiService.js'
  import { UseSearch } from '../composables/UseSearch'
  import { ToastMixin } from '../../../Utils/ToastMixin';
  import { ConfirmMixin } from '../../../Utils/ConfirmMixin';
  
  const { showToast } = ToastMixin.setup();
  const { showConfirm } = ConfirmMixin.setup();
  
  const ordersStore = useOrders()
  const props = defineProps({
    ListOrders: Array,
    search: String,
    typeOrders: String,
    rows: Object
  })
  
  const { ListOrders } = toRefs(props);

  const {
      ordersHere,
      ordersPickupAndDelivery,
      allOrdersPickupAndDelivery,
      allOrdersHere,
      search
  } = UseSearch(ListOrders);
  
  const filter = (data) => {
    if(data.type === 'Here'){
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
        let data = await ordersStore.processOrderAction(order.id, action);
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
  
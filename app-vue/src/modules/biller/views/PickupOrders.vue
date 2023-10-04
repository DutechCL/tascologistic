<template>
    <div class="px-8">
      <div class="flex justify-between">
        <h1 class="mb-4 text-primary-900 font-inter font-semibold text-2xl">
          Retira / Aquí
        </h1>
        <Search/>
      </div>
      <div v-if="orders.length > 0">
      <DataTable tableStyle="min-width: 50rem" filters="filters" :value="orders" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading">

          <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
            <template #body="slotProps">
              N° {{ slotProps.data.DocNum  }}
            </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="DocDate" header="Fecha"></Column>
          <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente"></Column>
          <Column headerClass="!bg-primary-900"  field="DocTotal" header="Monto total">
            <template #body="slotProps">
              <InputNumber v-model="slotProps.data.DocTotal" class="remove-format-input" inputId="currency-us" mode="currency" currency="USD" locale="en-US" readonly :minFractionDigits="0"  />
             </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Método entrega" >
                <template #body="slotProps">
                <Tag :icon="slotProps.data.icon" :value="slotProps.data.MethodShippingName" class="p-tag-1 tag-font-method tag-radius"></Tag>
                </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="note" header="Detalles">
                <template #body="slotProps">
                    <Button :icon="'pi pi-eye'" @click="showDetailOrder(slotProps.data)" class="!text-primary-900" label="Ver detalles" link></Button>
                </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="client" header="Emitir">
                <template #body="slotProps">
                    <Button label="Factura / Boleta" class="!py-1.5 !border-primary-900 !text-primary-900"  severity="primary" outlined></Button>
              </template>
        </Column>
      </DataTable>

      <DialogDetail 
      v-if="visible" 
      v-model:visible="visible" 
      :orderDetails="order"
      @visible="visibleDetailsMethod"
      />
      </div>
      <div v-if="orders.length === 0" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 class="align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900">
          No hay ordenes actualmente en este proceso
        </h1>
        <Button label="Regresar"  severity="primary" outlined @click="goBack" class="ml-3 !py-1.5" ></Button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount} from 'vue';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Tag from 'primevue/tag';
  import Button from 'primevue/button';
  import Search from '../components/Search.vue';
  import DialogDetail from '../components/DialogDetail.vue';
  import InputNumber from 'primevue/inputnumber';

  import { useOrders } from '../../../services/OrdersApiService.js';

  const ordersStore = useOrders()

  const visible = ref(false);

  const orders = ref([]);
  const order = ref([]);

  const visibleDetailsMethod = (value) => {
    visible.value = value.visibleDetails;
  };
  onBeforeMount( async() => {
    let body = {
      ordersStatusId: [5],
      methodShippingId: [1,2],
    }
    // inicialmente se cargan las ordenes con estado 5 (En revisión) y con método de envío 1 (Aquí)
    // el metodo getOrdersByParams recibe un objeto con los parametros que se quieren filtrar
    // y retorna un array con las ordenes que cumplen con los parametros
    // actualmente solo se filtra por estado y método de envío
    orders.value =  await ordersStore.getOrdersByParams(body);
  })

  const goBack = () => {
    if (orders.value.length === 0) {
        window.location.href = '/admin/dashboard/'
      }
  }


  const showDetailOrder = (orders) => {
    order.value = orders;
    visible.value = true;
  } 

</script>
  
<style>
  .p-tag-1{
    @apply bg-primary-100
  }
  .p-tag-1 span{
    @apply text-primary-900
  }

</style>
          
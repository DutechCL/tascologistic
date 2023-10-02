<template>
    <div class="px-8">
      <div class="flex justify-between">
        <h1 class="mb-4 text-primary-900 font-inter font-semibold text-2xl">
          Despacho
        </h1>
        <Search/>
      </div>
      <div class="flex">
        <div class="card flex justify-content-center ">
            <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Nota de venta" class="md:w-20rem w-full " />
        </div>
        <div class="card flex justify-content-center ">
            <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Fecha" class="md:w-20rem w-full" />
        </div>
        <div class="card flex justify-content-center mr-20">
            <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Cliente" class="md:w-20rem w-full" />
        </div>
   
      </div>
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
                    $ {{ slotProps.data.DocTotal  }}
                </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Método entrega" >
                <template #body="slotProps">
                <Tag :icon="slotProps.data.icon" :value="slotProps.data.MethodShippingName" class="p-tag-1 tag-font-method tag-radius" ></Tag>
                </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="note" header="Detalles">
                <template #body="slotProps">
                  
                    <Button :icon="'pi pi-eye'" @click="showDetailOrder(slotProps.data)" class="!text-primary-900" label="Ver detalles" link></Button>
                </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="client" header="Emitir">
                <template #body="slotProps">
                    <Button label="Guía" class="!py-1.5 !border-primary-900 !text-primary-900" outlined >
                    </Button>
                  
                    <Button label="Factura / Boleta"  severity="secondary" outlined :disabled="true" class="ml-3 !py-1.5"></Button>
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
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
  import TreeSelect from 'primevue/treeselect'
  import Search from '../components/Search.vue'
  import DialogDetail from '../components/DialogDetail.vue';
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
      methodShippingId: [3],
    }
    // inicialmente se cargan las ordenes con estado 5 (En revisión) y con método de envío 1 (Aquí)
    // el metodo getOrdersByParams recibe un objeto con los parametros que se quieren filtrar
    // y retorna un array con las ordenes que cumplen con los parametros
    // actualmente solo se filtra por estado y método de envío
    orders.value =  await ordersStore.getOrdersByParams(body);
  })

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
        
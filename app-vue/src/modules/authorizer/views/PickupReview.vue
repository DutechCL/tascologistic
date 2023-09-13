<template>
  <div class="px-8">
    <div class="flex justify-between ">
      <div>
        <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
          Pickeo / Revisión
        </h1>
        <h2 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
          Aquí
        </h2>
      </div>
      <Search/>
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
      <div class="card flex justify-content-center mr-20">
          <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Cliente" class="md:w-20rem w-full" />
      </div>
     
    </div>
    <DataTable class="mb-20" :value="ordersHere" tableStyle="min-width: 50rem">
        <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
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
        <Column headerClass="!bg-primary-900"  field="ResponsiblePickerName" header="Picker">
            <template #body="slotProps">
                <Tag v-if="slotProps.data.ResponsiblePickerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsiblePickerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ResponsibleReviewerName" header="Revisor">
            <template #body="slotProps">
                <Tag v-if="slotProps.data.ResponsibleReviewerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsibleReviewerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="OrderStatusName" header="Estado" >
          <template #body="slotProps">
           <Tag :icon="'pi pi-circle-fill'"  :value="slotProps.data.OrderStatusName" class="p-tag-2 tag-font-method tag-radius"></Tag>
          </template>
        </Column>
        
        <Column headerClass="!bg-primary-900"  field="note" header="" >
          <template #body="slotProps">
            <router-link v-if="slotProps.data.OrderStatusId != 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'picker' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Pickear</router-link>
            <router-link v-if="slotProps.data.OrderStatusId == 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'revisor' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Revisar</router-link>
          </template>
        </Column>
    </DataTable>
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
     
    </div>
    <DataTable class="mb-20" :value="ordersPickupAndDelivery" tableStyle="min-width: 50rem">
        <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
          <template #body="slotProps">
            N° {{ slotProps.data.DocNum  }}
          </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="DocDate" header="Fecha"></Column>
        <Column headerClass="!bg-primary-900"  field="DocTime" header="Hora"></Column>
        <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente"></Column>
        <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Método entrega">
          <template #body="slotProps">
            <Tag Tag :icon="[slotProps.data.icon,'pi']"  :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
          </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ResponsiblePickerName" header="Picker">
            <template #body="slotProps">
                <Tag v-if="slotProps.data.ResponsiblePickerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsiblePickerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ResponsibleReviewerName" header="Revisor">
            <template #body="slotProps">
                <Tag v-if="slotProps.data.ResponsibleReviewerName" :icon="'pi pi-user'" :value="slotProps.data.ResponsibleReviewerName" class=" tag-rounded-blue tag-font-method tag-radius"></Tag>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="OrderStatusName" header="Estado" >
          <template #body="slotProps">
           <Tag :icon="'pi pi-circle-fill'"  :value="slotProps.data.OrderStatusName" class="p-tag-3 tag-font-method tag-radius"></Tag>
          </template>
        </Column>
        
        <Column headerClass="!bg-primary-900"  field="note" header="" >
          <template #body="slotProps">
            <router-link v-if="slotProps.data.OrderStatusId != 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'picker' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Pickear</router-link>
            <router-link v-if="slotProps.data.OrderStatusId == 3" :to="{ name: 'review-notes', params: { id: slotProps.data.id, responsible: 'revisor' } }" class="p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900">Revisar</router-link>
          </template>
        </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import TreeSelect from 'primevue/treeselect'
import Search from '../components/Search.vue'
import { useOrders } from '../../../services/OrdersApiService.js';

const METHOD_SHIPPING_HERE = 1;

const ordersStore = useOrders()
const orders = ref([]);
const ordersHere = ref([]);
const ordersPickupAndDelivery = ref([]);

onBeforeMount( async() => {
  orders.value =  await ordersStore.getProcessedOrders();
  ordersHere.value = orders.value.filter( order => order.MethodShippingId === METHOD_SHIPPING_HERE)
  ordersPickupAndDelivery.value = orders.value.filter( order => order.MethodShippingId !== METHOD_SHIPPING_HERE)
})

</script>
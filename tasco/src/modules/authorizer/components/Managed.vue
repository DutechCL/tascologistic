<template>
  <div class="flex justify-between">
    <div>
      <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
        Notas de venta
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
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Total" class="md:w-20rem w-full" />
    </div>
  </div>
  <DataTable class="mb-20" :value="products" tableStyle="min-width: 50rem">
      <Column headerClass="!bg-primary-900"  field="note" header="Nota de venta">
        <template #body="slotProps">
          N° {{ slotProps.data.note  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="date" header="Fecha"></Column>
      <Column headerClass="!bg-primary-900"  field="hour" header="Hora"></Column>
      <Column headerClass="!bg-primary-900"  field="client" header="Cliente"></Column>
      <Column headerClass="!bg-primary-900"  field="totalAmount" header="Monto total"></Column>
      <Column headerClass="!bg-primary-900"  field="totalAmount" header="Método entrega">
        <template #body="slotProps">
          <Tag Tag :icon="'pi pi-shopping-cart'"  :value="'Aquí'" rounded class=" !font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"></Tag>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header=" Observación">
        <template #body="slotProps">
          <Button :icon="'pi pi-eye'" class="!font-normal !text-primary-900
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
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import TreeSelect from 'primevue/treeselect'
import Search from './Search.vue'
const products = ref([
  {
    statusId: 1,
    note: '4567892',
    date: '19/04/2023',
    hour: '10:26',
    client: 'Daniel Ramirez Palma',
    status: 'En espera',
    totalAmount: '$200',
    btnInfo: 'Informado',
  },
  {
    statusId: 2,
    note: '0998764',
    date: '19/04/2023',
    hour: '10:58',
    client: 'Lucas Sandoval',
    status: 'En preparación',
    totalAmount: '$300'
  },
 
  
])
</script>
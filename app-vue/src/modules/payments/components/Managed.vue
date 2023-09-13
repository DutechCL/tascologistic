<template>
  <div class="flex justify-between">
    <div>
      <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
        Pago a cuenta
      </h1>
    </div>
    <Search/>
  </div>
  <div class="flex">
    <div class="card flex justify-content-center mr-20">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Cliente" class="md:w-20rem w-full" />
    </div>
    <div class="card flex justify-content-center ">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Cuenta" class="md:w-20rem w-full " />
    </div>
  </div>

  <DataTable class="mb-20" :value="products" tableStyle="min-width: 50rem">
      <Column headerClass="!bg-primary-900"  field="client" header="Cliente" style="width:20%">
        <template #body="slotProps">
          <Tag :icon="'pi pi-user'"  :value="slotProps.data.client" class="!font-normal !text-md !px-3 !bg-primary-100 !text-primary-900"></Tag>
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="note" header="Nota de venta" style="width:65%">
        <template #body="slotProps">
          N° {{ slotProps.data.note  }}
        </template>
      </Column>
      
      <Column headerClass="!bg-primary-900"  field="note" header="" style="width:20%" >
        <template #body="slotProps">
          <Button label="Pagar" class="!py-1.5 !border-primary-900 !text-primary-900" @click="visible = true" outlined  >
          </Button>
        </template>
      </Column>
  </DataTable>
  <DialogMethosPayment v-model:visible="visible"/>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import TreeSelect from 'primevue/treeselect'
import Search from './Search.vue'
import DialogMethosPayment from './DialogMethosPayment.vue'

const visible = ref(false)
const products = ref([
  {
    statusId: 1,
    bills: '53453453',
    note: '4567892',
    client: 'Daniel Ramirez Palma',
    seller: 'Lucas Sandoval',
    status: 'En espera',
    totalAmount: '200000',
    credit: '700000',
    positiveBalance: '500000'
  },
  {
    statusId: 2,
    bills: '535345353',
    note: '0998764',
    client: 'Lucas Sandoval',
    seller: 'Daniel Ramirez Palma',
    status: 'En preparación',
    totalAmount: '200000',
    credit: '700000',
    positiveBalance: '500000'
  },
  {
    statusId: 3,
    bills: '532122323',
    note: '0998764',
    client: 'Lucas Perez',
    seller: 'Lucas Sandoval',
    status: 'En preparación',
    totalAmount: '200000',
    credit: '700000',
    positiveBalance: '500000'
  },
  {
    statusId: 4,
    bills: '53234453',
    note: '0998764',
    client: 'Daniel Palma',
    seller: 'Daniel Ramirez',
    status: 'En preparación',
    totalAmount: '200000',
    credit: '700000',
    positiveBalance: '500000'
  },
])
</script>

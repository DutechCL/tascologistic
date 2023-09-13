<template>
  <div class="px-8">
      <h1 class="mb-1 text-primary-900 font-inter font-semibold text-xl">
        <i class="pi pi-inbox !text-xl"></i>
        Nota de venta N° 162559
        <Tag :icon="'pi pi-shopping-cart'" value="Aquí" class="ml-3 tag-radius tag-rounded-blue tag-font-method"></Tag>
      </h1>
      <div class="flex align-center mb-2">
      
        
      </div>
      <Tag :icon="'pi pi-user'" value="Daniel Ramirez" class="tag-radius tag-rounded-blue tag-font-method mb-5"></Tag>

      <div class="flex">
        <div class="card flex justify-content-center ">
            <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Cantidad" class="md:w-20rem w-full " />
        </div>
        <div class="card flex justify-content-center ">
            <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="SKU" class="md:w-20rem w-full" />
        </div>
      
      </div>
      <DataTable tableStyle="min-width: 50rem" filters="filters" :value="products">
        <Column headerClass="!bg-primary-900"  field="date" header="Cantidad">
            <template #body="slotProps">
                <p>{{slotProps.data.qty}} {{slotProps.data.units}}</p>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="sku" header="SKU"></Column>
        <Column headerClass="!bg-primary-900"  field="name" header="Producto"></Column>
        <Column headerClass="!bg-primary-900"  field="problem" header="Problema">
          <template #body="slotProps">
            <Tag v-if="slotProps.data.problem" Tag :value="slotProps.data.problem" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
          </template>
        </Column>
    </DataTable>

    <div class="mini-table mt-8">
      <DataTable tableStyle="min-width: 50rem" filters="filters" :value="productsProblem">
    
          <Column headerClass="!bg-secundary-300"  field="sku" header="SKU"></Column>
          <Column headerClass="!bg-secundary-300"  field="name" header="Producto"></Column>
          <Column headerClass="!bg-secundary-300"  field="problem" header="Problema">
            <template #body="slotProps">
              <Tag v-if="slotProps.data.problem" Tag :value="slotProps.data.problem" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>
            </template>
          </Column>
      </DataTable>
    </div>
  </div>
  <div class="space"></div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import TreeSelect from 'primevue/treeselect'

 const products = ref([
    {
      productId: 1,
      qty: '4',
      units: 'unidades',
      sku: '28-32-2340-123',
      name: 'ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV',
      problem: 'Sin stock'
    },
    {
      productId: 2,
      qty: '1',
      units: 'unidad',
      sku: '28-32-2340-321',
      name: 'ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV',
    },
    {
      productId: 3,
      qty: '8',
      units: 'unidades',
      sku: '28-32-2340-W32',
      name: 'ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV',
    },
    {
      productId: 4,
      qty: '5',
      units: 'unidades',
      sku: '28-32-2340-S32',
      name: 'ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV',
    },
    {
      productId: 4,
      qty: '6',
      units: 'unidades',
      sku: '28-32-2340-FW3',
      name: 'ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV',
    },
  ])

  const productsProblem = ref([
    {
      productId: 1,
      sku: '28-32-2340-123',
      name: 'ADAPTADOR TADOR MULTIPLE 3P+TRetiro 16A IP44 400VACV',
      problem: 'Sin stock'
    },
   
   
  ])

</script>
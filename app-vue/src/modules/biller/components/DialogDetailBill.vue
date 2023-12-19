<template>
<Dialog v-model:visible="orderStore.visibleBill" maximizable modal header=" " :style="{ width: '70vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <div>
        <h1 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
            <i class="pi pi-eye !text-xl"></i>
            Cabecera del documento
          </h1>
    </div>
    <DataTable tableStyle="min-width: 50rem" filters="filters" :value="[orderStore.bill]">
        <Column headerClass="!bg-primary-900"  field="DocEntry" header="DocEntry"></Column>
        <Column headerClass="!bg-primary-900"  field="FebosID" header="FebosID"></Column>
        <Column headerClass="!bg-primary-900"  field="Folio" header="Folio"></Column>
        <Column headerClass="!bg-primary-900"  field="created_at" header="created_at"></Column>
    </DataTable>

    <div class="mt-5">
        <div>
            <h1 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
                <i class="pi pi-eye !text-xl"></i>
                Preview del documento
              </h1>
        </div>
        <embed style="height: 100vh;" class=" w-full" :src="orderStore.bill.LinkPDF"  type="application/pdf">
    </div>
</Dialog>
</template>


<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useOrdersBills } from '../../../stores/orders/ordersBills.js';

const orderStore = useOrdersBills()


</script>
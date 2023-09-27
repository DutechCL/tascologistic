<template>
  <Dialog modal header=" " :style="{ width: '70vw' }">
    <div>
        <h1 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
            <i class="pi pi-eye !text-xl"></i>
            Ver detalles
          </h1>
        <p>Revisa aquí los detalles de la nota de venta N° {{order.DocNum}}</p>
    </div>
    <div class="mt-2 mb-1 text-primary-900 font-semi-bold">
        <p>Productos</p>
    </div>
    <DataTable tableStyle="min-width: 50rem" filters="filters" :value="products">
        <Column headerClass="!bg-primary-900"  field="date" header="Cantidad">
            <template #body="slotProps">
                <p>{{slotProps.data.Quantity}} Unidades</p>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ItemCode" header="SKU"></Column>
        <Column headerClass="!bg-primary-900"  field="ItemDescription" header="Producto"></Column>
    </DataTable>

    <DataTable class="pt-5" tableStyle="min-width: 50rem" :value="[order]">
        <Column headerClass="!bg-primary-900"  field="SalesEmployeeName" header="Vendedor">
            <template #body="slotProps">
                <Tag v-if="slotProps.data?.SalesEmployeeName" :icon="'pi pi-user'" :value="slotProps.data?.SalesEmployeeName" class="p-tag-1 tag-font-method tag-radius"></Tag>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ResponsibleAuthorizerName" header="Autorizado por">
            <template #body="slotProps">
                <Tag v-if="slotProps.data?.ResponsibleAuthorizerName" :icon="'pi pi-user'" :value="slotProps.data?.ResponsibleAuthorizerName" class="p-tag-1 tag-font-method tag-radius"></Tag>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ResponsiblePickerName" header="Preparado por:">
            <template #body="slotProps">
                <Tag v-if="slotProps.data?.ResponsiblePickerName" :icon="'pi pi-user'" :value="slotProps.data?.ResponsiblePickerName" class="p-tag-1 tag-font-method tag-radius"></Tag>
            </template>
        </Column>
        <Column headerClass="!bg-primary-900"  field="ResponsibleReviewerName" header="Revisado por:">
            <template #body="slotProps">
                <Tag v-if="slotProps.data?.ResponsibleReviewerName" :icon="'pi pi-user'" :value="slotProps.data?.ResponsibleReviewerName" class="p-tag-1 tag-font-method tag-radius"></Tag>
            </template>
        </Column>
    </DataTable>
    <Button label="Cerrar"  @click="visible = false" class="!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"/>
</Dialog>
</template>

<script setup>
import { ref, defineProps, onBeforeMount} from 'vue'
import Dialog from 'primevue/dialog'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const order = ref([])
const products = ref([])
const props = defineProps({
  orderDetails: Array
})

onBeforeMount(() => {
  
  order.value = props.orderDetails
  products.value = props.orderDetails?.OrderItems

  console.log(order.value)
})
</script>
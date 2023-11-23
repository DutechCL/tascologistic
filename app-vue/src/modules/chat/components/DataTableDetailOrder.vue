<template>
    <DataTable tableStyle="min-width: 50rem" :value="order" dataKey="id" >
      <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
        <template #body="slotProps">
          N° {{ slotProps.data.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900"  field="Customer.CardCode" header="Rut" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Desde" >
          <template #body="slotProps">
          <Tag  :value="'Bodega'" class="p-tag-1 tag-font-method tag-radius"></Tag>
          </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="SalesEmployeeName" header="Vendedor"></Column>
      <Column headerClass="!bg-primary-900"  field="SalesEmployeeName" header="Informador"></Column>
    </DataTable>
    <!-- <template> -->
        <div class="bg-secundary-100 p-5">
            <div class="">
                <div class="flex">
                    <strong>Motivo:</strong>
                    <ul class="pl-3">
                        <li class="pb-2"> <Tag  :value="'BORNE TIERRA 4mm2 SKU: 26-11-43454TT Problema: Sin stock, no existe color '" class="p-tag-1 tag-font-method tag-radius"></Tag></li>
                        <li class="pb-2"> <Tag  :value="'TAPA BORNE LIBRE MANTENCION 4.0mm SKU: 26-13-42012 Problema: Problema: Producto en mal estado '" class="p-tag-1 tag-font-method tag-radius"></Tag></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    <!-- </template> -->
</template>

<script setup>

    import { ref, onBeforeMount, watch } from 'vue';
    import DataTable  from 'primevue/datatable';
    import  Column  from 'primevue/column';
    import  Tag from 'primevue/tag';
// import { Button } from 'primevue/button';

    const props = defineProps({
        order: Object,
    });

    const order = ref([]);

    onBeforeMount(() => {
        console.log(props.order)
        order.value = [props.order];
        console.log(order.value)
    });
</script>


<style>
[data-pc-section="sort"] svg {
    color: white !important;
    width: 12px;
    }
</style>
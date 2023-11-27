<template>
    <DataTable tableStyle="min-width: 50rem" :value="[order]" dataKey="id" >
      <Column headerClass="!bg-primary-900"  field="DocNum" header="Nota de venta">
        <template #body="slotProps">
          N° {{ slotProps.data.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="Customer.CardName" header="Cliente" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900"  field="Customer.CardCode" header="Rut" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900"  field="MethodShippingName" header="Desde" >
          <template #body="slotProps">
            <Tag :value="slotProps.data.report_user_responsibles === 'cda' ? 'CDA' : 'Bodega'" class="p-tag-1 tag-font-method tag-radius"></Tag>
          </template>
      </Column>
      <Column headerClass="!bg-primary-900"  field="SalesEmployeeName" header="Vendedor"></Column>
      <Column headerClass="!bg-primary-900"  field="report_user_name" header="Informador"></Column>
    </DataTable>
    <!-- <template> -->
        <div class="bg-secundary-100 p-5">
            <div class="">
                <div class="flex">
                    <strong>Motivo: </strong>
                    <div v-if="order.report_user_responsibles === 'cda'">
                        <ul class="pl-3">
                            <li class="pb-2" v-for="problem in order.Problems" > <Tag  :value="'Problema: ' + problem.ProblemName" class="p-tag-1 tag-font-method tag-radius"></Tag></li>
                        </ul>
                    </div>
                    <div v-else>
                        <ul class="pl-3">
                            <li class="pb-2" v-for="item in order.OrderItems" > 
                                <strong  class="p-tag-1 tag-font-method tag-radius">{{ item.ItemDescription }} - SKU: {{ item.ItemCode }}</strong>  
                                <Tag v-for="problem in item.Problems"  :value="sanitizeHTML(problem.ProblemName)" class="p-tag-1 tag-font-method tag-radius"></Tag>
                            </li>
                        </ul>
                    </div>
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
        order.value = props.order;
        console.log(order.value)
    });

    const sanitizeHTML = (htmlString) => {
        let doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.innerText;
    }
</script>


<style>
[data-pc-section="sort"] svg {
    color: white !important;
    width: 12px;
    }
</style>
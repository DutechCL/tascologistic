<template>
    <DataTable tableStyle="min-width: 50rem" :value="[order]" dataKey="id" >
      <Column headerClass="!bg-primary-900 table-head" class="table-body font-11"  field="DocNum" header="Nota de venta">
        <template #body="slotProps">
          N° {{ slotProps.data.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900 table-head" class="table-body font-11"  field="Customer.CardName" header="Cliente" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900 table-head" class="table-body font-11"  field="Customer.CardCode" header="Rut" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900 table-head" class="table-body font-11"  field="MethodShippingName" header="Desde" >
          <template #body="slotProps">
            <Tag :value="slotProps.data.report_user_responsibles === 'cda' ? 'CDA' : 'Bodega'" class="p-tag-1 tag-font-method font-11 tag-radius"></Tag>
          </template>
      </Column>
      <Column headerClass="!bg-primary-900 table-head" class="table-body font-11"  field="SalesEmployeeName" header="Vendedor"></Column>
      <Column headerClass="!bg-primary-900 table-head" class="table-body font-11"  field="report_user_name" header="Informador"></Column>
    </DataTable>
    <!-- <template> -->
        <div class="bg-secundary-100 p-3" :class="{ 'scroll-problems': showmore }">
            <div class="">
                <div class="flex">
                    <strong>Motivo: </strong>
                    <div style="height: 30px; overflow: hidden" :class="{ 'scroll-problems': showmore }" v-if="order.report_user_responsibles === 'cda'">
                        <ul class="pl-3">
                            <li class="pb-1" v-for="problem in order.Problems" > <Tag  :value="'Problema: ' + problem.ProblemName" class="p-tag-1 tag-font-method font-11 tag-radius"></Tag></li>
                        </ul>
                    </div>
                    <div v-else style="height: 30px; overflow: hidden" :class="{ 'scroll-problems': showmore }" >
                        <ul class="pl-3" >
                            <li class="" v-for="item in order.OrderItems" > 
                                <strong v-if="item.Problems.length > 0"  class="p-tag-1 tag-font-method font-11 tag-radius">{{ item.ItemDescription }} - SKU: {{ item.ItemCode }}</strong>  
                                <Tag v-for="problem in item.Problems"  :value="sanitizeHTML(problem.ProblemName)" class="mx-2 p-tag-1 font-11 tag-font-method tag-radius"></Tag>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class=" center; flex justify-center">
            <Button v-if="showmoreButton" @click="showMore" :icon="showmore ? 'pi pi-angle-up' : 'pi pi-angle-down'" class="w-full btn-angle p-0"></Button>
        </div>
    <!-- </template> -->
</template>

<script setup>

    import { ref, onBeforeMount, watch } from 'vue';
    import DataTable  from 'primevue/datatable';
    import  Column  from 'primevue/column';
    import  Tag from 'primevue/tag';
    import  Button  from 'primevue/button';

    const props = defineProps({
        order: Object,
    });

    const order = ref([]);
    const showmore = ref(false);
    const showmoreButton = ref(false);

    const showMore = () => {
        showmore.value = !showmore.value;
    }

    const showMoreButton = () => {
        if (order.value.Problemsh > 1) {
            showmoreButton.value = true;
        } else {

            console.log(order.value)
            
            const productsWithProblems = order.value.OrderItems.filter(item => item.Problems.length > 0);
            console.log(productsWithProblems)
            if (productsWithProblems.length > 1) {
                showmoreButton.value = true;
            }
        }
    }

    onBeforeMount(() => {
        order.value = props.order;
        
    });

    watch( 
        () => props.order,
        () => {
            order.value = props.order;
            showMoreButton();
        }
    );

    const sanitizeHTML = (htmlString) => {
        let doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.innerText;
    }
</script>


<style>
::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #259bd7;
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-ms-scrollbar {
    width: 12px; 
  }
  
  ::-ms-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }
  
  ::-ms-scrollbar-track {
    background-color: #f1f1f1;
  }

    [data-pc-section="sort"] svg {
    color: white !important;
    width: 12px;
    }
    .table-head, .table-body{
        padding: 5px 10px !important;
        font-size: 14px !important;
    }

    .scroll-problems{
        overflow: auto !important;
        height: auto !important;
        width: 100% !important;
        position: relative !important;
        z-index: 999 !important;

    }

    .btn-angle{
        padding: 0 !important;
        min-width: 30px !important;
        width: 30px !important;
        background: #f6fbfe !important;
        color: #259bd7 !important;
        border-radius: 40% !important;
        margin-top: -15px !important;
        z-index: 9999999 !important;
        border-color: #259bd7 !important;
    }

    .btn-angle:focus {
        box-shadow: none !important;
    }


    .font-11{
        font-size: 11px !important;
    }
    
</style>


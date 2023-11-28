<template>
    <DataTable 
      tableStyle="min-width: 50rem" 
      :value="data" 
      :rowsPerPageOptions="[5, 10, 20, 50]" 
      :rows="5" 
      @page="getData"
      paginator 
      dataKey="id" 
      filterDisplay="row" 
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} a {last} de {totalRecords}">
      <Column headerClass="!bg-primary-900" sortable  field="DocNum" header="Nota de venta">
        <template #body="slotProps">
          N° {{ slotProps.data.order.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable  field="order.Customer.CardName" header="Cliente" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900" sortable  field="order.Customer.CardCode" header="Rut" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900" sortable  field="order.MethodShippingName" header="Método entrega">
        <template #body="slotProps">
          <Tag Tag :value="slotProps.data.order.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>       
        </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable  field="order.MethodShippingName" header="Desde" >
          <template #body="slotProps">
            <Tag :value="slotProps.data.order.report_user_responsibles === 'cda' ? 'CDA' : 'Bodega'" class="p-tag-1 tag-font-method tag-radius"></Tag>
          </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable  field="order.SalesEmployeeName" header="Vendedor"></Column>
      <Column headerClass="!bg-primary-900" sortable field="order.report_user_name" header="Informador"></Column>

      <Column headerClass="!bg-primary-900"  field="note" header="" >
        <template #body="slotProps">
            <div class="flex gap-2">
                <router-link :to="{name: 'show-chat', params: { id: slotProps.data.chat.id }}" class="!border-primary-900 !text-primary-900 btn-custom-table" >Revisar</router-link>
               <Button v-if="slotProps.data.chat.status === 'open'" @click="resolveOrder(slotProps.data.chat.id)" class="!p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900 btn-custom-table" label="Resuelto"></Button>
            </div>
        </template>
      </Column>
    </DataTable>
</template>

<script setup>

    import { ref, onBeforeMount, watch, defineProps } from 'vue';
    import DataTable  from 'primevue/datatable';
    import  Column  from 'primevue/column';
    import  Tag from 'primevue/tag';
    import  Button  from 'primevue/button';
    import { useChat } from '../../../stores/chat/chat';

    const chat = useChat();
    const props = defineProps({
        data: Array,
    });

    const data = ref([]);

    onBeforeMount(() => {
        data.value = props.data;
        console.log(data.value);
    });

    const resolveOrder = async (id) => {
        let response = await chat.resolveOrder(id);
    }
</script>


<style>
    [data-pc-section="sort"] svg {
    color: white !important;
    width: 12px;
    }

    .btn-custom-table{
        border: 1px solid;
        border-radius: 6px;
        padding: 9px;
        background: #fff;
    }
</style>
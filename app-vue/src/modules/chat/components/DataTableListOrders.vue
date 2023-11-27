<template>
    <DataTable 
      tableStyle="min-width: 50rem" 
      :value="orders" 
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
          N° {{ slotProps.data.DocNum  }}
        </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable  field="Customer.CardName" header="Cliente" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900" sortable  field="Customer.CardCode" header="Rut" style="max-width: 300px;"></Column>
      <Column headerClass="!bg-primary-900" sortable  field="MethodShippingName" header="Método entrega">
        <template #body="slotProps">
          <Tag Tag :value="slotProps.data.MethodShippingName" rounded class="tag-radius tag-rounded-blue tag-font-method"></Tag>       
        </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable  field="MethodShippingName" header="Desde" >
          <template #body="slotProps">
            <Tag :value="slotProps.data.report_user_responsibles === 'cda' ? 'CDA' : 'Bodega'" class="p-tag-1 tag-font-method tag-radius"></Tag>
          </template>
      </Column>
      <Column headerClass="!bg-primary-900" sortable  field="SalesEmployeeName" header="Vendedor"></Column>
      <Column headerClass="!bg-primary-900" sortable field="report_user_name" header="Informador"></Column>

      <Column headerClass="!bg-primary-900"  field="note" header="" >
        <template #body="slotProps">
            <div class="flex gap-2">
                <router-link :to="{name: 'show-chat', params: { id: slotProps.data.id }}" class="!border-primary-900 !text-primary-900 btn-custom-table" >Revisar</router-link>
               <Button class="!p-button p-component p-button-outlined !py-1.5 !border-primary-900 !text-primary-900 btn-custom-table" label="Resuelto"></Button>
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

    const props = defineProps({
        orders: Array,
    });

    const orders = ref([]);

    onBeforeMount(() => {
        orders.value = props.orders;

        console.log(orders.value)
    });
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
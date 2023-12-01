<template>
  <Dialog modal header=" " :style="{ width: '70vw' }" maximizable>
    <div>
        <h1 class="mb-1 text-primary-900 font-inter font-semibold text-xl">
          <i class="pi pi-eye !text-xl"></i>
          Ver observaciones
        </h1>
        <div class="flex align-center mb-2">
          <p class="text-primary-900"><strong class="mr-3 font-semibold ">Nota de venta N°</strong>{{ordersStore.order.DocNum}}</p>
          <Tag :icon="'pi pi-shopping-cart'" :value="ordersStore.order.MethodShippingName" class="ml-3 tag-radius tag-rounded-blue tag-font-method"></Tag>
        </div>
        <Tag :icon="'pi pi-user'" :value="ordersStore.order.Customer.CardName" class="tag-radius tag-rounded-blue tag-font-method mb-5"></Tag>

        <DataTable 
          v-if="!ordersStore.order.HasProblems" 
          tableStyle="min-width: 50rem" 
          filters="filters" 
          :value="ordersStore.order.OrderItems"
          paginator
          :rows="10"
          :rowsPerPageOptions="[5, 10, 20, 50]" 
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} a {last} de {totalRecords}"
          >
          <Column headerClass="!bg-primary-900"  field="Quantity" header="Cantidad">
              <template #body="slotProps">
                  <p>{{slotProps.data.Quantity}} {{ slotProps.data.Quantity > 1 ? 'Unidades' : 'Unidad' }}</p>
              </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="ItemCode" header="SKU"></Column>
          <Column headerClass="!bg-primary-900"  field="ItemDescription" header="Producto"></Column>
          <Column headerClass="!bg-primary-900"  field="Problems" header="Problema">
            <template #body="slotProps">
              <p class="mt-2 mr-3 tag-radius tag-rounded-blue tag-font-method" v-for="(problem, index) in slotProps.data.Problems" :key="index" >
                {{ sanitizeHTML(problem.ProblemName) }}
              </p>
            </template>
          </Column>
      </DataTable>

      <div>
        <DataTable v-if="ordersStore.order?.HasProblems" tableStyle="min-width: 50rem" filters="filters" :value="ordersStore.order?.Problems">
          <Column headerClass="!bg-primary-900"  field="ProblemName" header="Probelma">
              <template #body="slotProps">
                  <p>{{slotProps.data.ProblemName}}</p>
              </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="Other" header="Descripcion">
            <template #body="slotProps">
              <p v-html="slotProps.data.Other"></p>
          </template>
          </Column>
      </DataTable>

      </div>

      <div class="mt-5">
        <strong>NOTA:</strong> <br> <span v-html="parseComments(ordersStore.order.Comments)"></span>
      </div>
    </div>
   
   
    
    <Button label="Cerrar"  @click="ordersStore.showDialog = false" class="!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"/>
</Dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import Dialog from 'primevue/dialog'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import { useOrdersCda } from '../../../stores/orders/ordersCda.js'

const ordersStore = useOrdersCda();

const sanitizeHTML = (htmlString) => {
    let doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.innerText;
}

const parseComments = (comments) => {
  return comments
      .replace(/\r/g, '<br>')
      .replace(/\n/g, '<br>')
      .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
  }
</script>
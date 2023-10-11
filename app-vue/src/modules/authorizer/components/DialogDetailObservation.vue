<template>
  <Dialog modal header=" " :style="{ width: '70vw' }">
    <div>
        <h1 class="mb-1 text-primary-900 font-inter font-semibold text-xl">
          <i class="pi pi-eye !text-xl"></i>
          Ver observaciones
        </h1>
        <div class="flex align-center mb-2">
          <p class="text-primary-900"><strong class="mr-3 font-semibold ">Nota de venta N°</strong>{{order.DocNum}}</p>
          <Tag :icon="'pi pi-shopping-cart'" :value="order.MethodShippingName" class="ml-3 tag-radius tag-rounded-blue tag-font-method"></Tag>
        </div>
        <Tag :icon="'pi pi-user'" :value="order.Customer.CardName" class="tag-radius tag-rounded-blue tag-font-method mb-5"></Tag>


        <DataTable v-if="!order.HasProblems" tableStyle="min-width: 50rem" filters="filters" :value="order.OrderItems">
          <Column headerClass="!bg-primary-900"  field="Quantity" header="Cantidad">
              <template #body="slotProps">
                  <p>{{slotProps.data.Quantity}} Unidad</p>
              </template>
          </Column>
          <Column headerClass="!bg-primary-900"  field="ItemCode" header="SKU"></Column>
          <Column headerClass="!bg-primary-900"  field="ItemDescription" header="Producto"></Column>
          <Column headerClass="!bg-primary-900"  field="Problems" header="Problema">
            <template #body="slotProps">
              <span v-for="(problem, index) in slotProps.data.Problems" :key="index" >
                <span class="mr-3 tag-radius tag-rounded-blue tag-font-method"> {{ sanitizeHTML(problem.ProblemName) }}</span>
              </span>
            </template>
          </Column>
      </DataTable>

      <div>
        <DataTable v-if="order.HasProblems" tableStyle="min-width: 50rem" filters="filters" :value="order.Problems">
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
        <strong>NOTA:</strong> <span v-html="parseComments(order.Comments)"></span>
      </div>
    </div>
   
   
    
    <Button label="Cerrar"  @click="visibleObservation" class="!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"/>
</Dialog>
</template>

<script setup>
import { ref, defineProps, onBeforeMount, defineEmits } from 'vue'
import Dialog from 'primevue/dialog'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const props = defineProps({
  order: String
})
const emit = defineEmits();

const order = ref([]);

onBeforeMount(() => {
  order.value = props.order;
})


const visibleObservation = () => {
  emit('visible', {'visibleObservation': false});
}

const sanitizeHTML = (htmlString) => {
      // Crea un elemento div para obtener el texto sin formato
      let doc = new DOMParser().parseFromString(htmlString, 'text/html');
      let text = doc.body.innerText;

      return text;
    }

const parseComments = (comments) => {
    // Reemplazar saltos de línea y tabulaciones con sus equivalentes HTML
    let formattedComments = comments
      .replace(/\r/g, '<br>')  // Reemplazar \r por <br>
      .replace(/\n/g, '<br>')  // Reemplazar \n por <br>
      .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');  // Reemplazar \t por espacios
    return formattedComments;
  }
</script>
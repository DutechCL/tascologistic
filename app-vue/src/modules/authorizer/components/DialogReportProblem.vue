<template>
  <Dialog modal header=" " :style="{ width: '70vw' }">
    <div>
      <h1 class="mb-3 text-primary-900 font-inter font-semibold text-xl">
        <i class="pi pi-info-circle !text-xl rotate-180"></i>
        Reportar problema
      </h1>
      <p class="mb-3" >Por favor indique uno o más problemas detectados</p>
      <DataTable v-model:selection="selectedProduct" :value="problems" dataKey="id" tableStyle="min-width: 50rem">
          <Column headerClass="!bg-primary-900"  header="Seleccionar" selectionMode="multiple" headerStyle="width: 3rem" ></Column>
          <Column headerClass="!bg-primary-900" field="title" header="Problema detectado"></Column>
      </DataTable>
      <div class="mt-4"  v-if="showEditor">
        <p class="mb-3" >Por favor indique el problema detectado</p>
        <Editor v-model="value" editorStyle="height: 80px" />
      </div>
    </div>
   
    <Button label="Cerrar"  @click="visibleReport" class="!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"/>
</Dialog>
</template>

<script setup>
import { ref, watch, defineEmits, onBeforeMount, defineProps } from 'vue'
import Dialog from 'primevue/dialog'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import Editor from 'primevue/editor';

import { useProblems } from '../../../services/ProblemsApiService.js';

const props = defineProps({
  product: Object
})

const problemsStore = useProblems()
const problems = ref([])

onBeforeMount( async() => {
  problems.value =  await problemsStore.getProblems();
})

const selectedProduct = ref([]);
const showEditor = ref(false);


const emit = defineEmits();
const visibleReport = () => {
  const tempSelection = [...selectedProduct.value];
  selectedProduct.value = [];
  emit('visible-report', {'visibleReport': false, tempSelection});
}
watch(selectedProduct, (newSelection) => {
  showEditor.value = newSelection.some((product) => product.problemDetected === 'Otros');
  let product = props.product;
  product.problems = newSelection;
  emit('selection-change', { product });
});
  
</script>


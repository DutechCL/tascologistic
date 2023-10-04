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
   
    <Button label="Reportar"  @click="visibleReport" class="!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"/>
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
import { useOrders } from '../../../services/OrdersApiService.js';
import { useToast } from 'primevue/usetoast';


const props = defineProps({
  order: Object,
  product: Object,
  typeProblems: String,
  problemsProduct: Object
})

const toast = useToast();
const problemsStore = useProblems()
const ordersStore = useOrders();
const emit = defineEmits();

const problems = ref([])
const selectedProduct = ref([]);
const showEditor = ref(false);

onBeforeMount( async() => {
  problems.value =  await problemsStore.getProblems(props.typeProblems);
})

const visibleReport = () => {
  if (props.typeProblems == 'picker-revisor') {
    const tempSelection = [...selectedProduct.value];
    selectedProduct.value = [];
    emit('visible-report', { 'visibleReport': false, tempSelection });
  } else {
    reportOrderProblem();
    selectedProduct.value = [];
    emit('visible-report', { 'visibleReport': false});
  }
}

const reportOrderProblem = async () => {
  let data = await ordersStore.postActionOrder(props.order.id, 2, selectedProduct.value);
  toast.add({ severity: data.status, summary: '', detail: data.message, life: 3000 });
}

watch(() => props.problemsProduct, (newProblemsProduct) => {
  if(newProblemsProduct != undefined){
    selectedProduct.value = [...newProblemsProduct];
  }
});

watch(selectedProduct, (newSelection) => {
  
  showEditor.value = newSelection.some((product) => product.title === 'Otro');

  if (props.typeProblems == 'picker-revisor') {
    let product = props.product;
    product.problems = newSelection;
    emit('selection-change', { product });
  }
});
  
</script>


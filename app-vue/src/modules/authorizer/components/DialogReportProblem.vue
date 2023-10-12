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
        <Editor class="custom-editor" v-model="otherProblem" editorStyle="height: 80px"/>
      </div>
    </div>
    <Button label="Reportar"  :disabled="disableButton" @click="visibleReport" class="!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"/>
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
  problemsProduct: Object,
})
const emit = defineEmits();
const toast = useToast();
const problemsStore = useProblems()
const ordersStore = useOrders();
const problems = ref([])
const selectedProduct = ref([]);
const showEditor = ref(false);
const otherProblem = ref(null);
const product = ref(null);
const disableButton = ref(true)

const order = ref([]);

onBeforeMount( async() => {
  problems.value =  await problemsStore.getProblems(props.typeProblems);
})

watch(() => props.order, (value) => {
  order.value = value;
  if (props.typeProblems == 'cda') {
    selectedProduct.value = [];
  }
})

const visibleReport = () => {
  disableButton.value = true;
  
  if (props.typeProblems == 'picker-revisor') {
    sendProblems()
  } else {
    reportOrderProblem();
    selectedProduct.value = [];
    emit('visible', { 'visibleReport': false});
  }
  otherProblem.value = '';
}

const reportOrderProblem = async () => {
  let data = await ordersStore.postActionOrder(props.order.id, 2, selectedProduct.value, otherProblem.value);
  toast.add({ severity: data.status, summary: '', detail: data.message, life: 3000 });
}

const sendProblems = () => {
  product.value.other = otherProblem.value;
  emit('selection-change',  product.value, {'visibleReport': false});
}

watch(() => props.problemsProduct, (newProblemsProduct) => {
  if(newProblemsProduct != undefined){
    selectedProduct.value = [...newProblemsProduct];
  }
});


// Agrega una variable de estado para rastrear si ya se ingresó texto en otherProblem
const hasTextInOtherProblem = ref(false);

watch(selectedProduct, (newSelection) => {
  showEditor.value = newSelection.some((product) => product.title === 'Otro');
  disableButton.value = newSelection.length === 0 || (showEditor.value && !hasTextInOtherProblem.value);

  if (props.typeProblems === 'picker-revisor') {
    product.value = props.product;
    product.value.problems = newSelection;
  }
});

watch(otherProblem, () => {
  if (showEditor.value) {
    hasTextInOtherProblem.value = !!sanitizeHTML(otherProblem.value).trim();
    disableButton.value = !hasTextInOtherProblem.value;
  } else {
    disableButton.value = false;
  }
});



const sanitizeHTML = (htmlString) => {
      let doc = new DOMParser().parseFromString(htmlString, 'text/html');
      let text = doc.body.innerText;
      return text;
}
</script>


<style>
.custom-editor .ql-image {
  display: none !important;
}
</style>

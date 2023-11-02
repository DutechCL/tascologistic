<template>
  <Dialog modal header=" " :style="{ width: '70vw' }" @update:visible="handleClose">
    <div>
      <h1 class="mb-3 mt-3  text-primary-900 font-inter font-semibold text-xl">
        <i class="pi pi-info-circle !text-xl rotate-180"></i>
        Reportar problema
      </h1>
      <p class="mb-3" >Por favor indique uno o más problemas detectados</p>
      <DataTable v-model:selection="selectedProblems" :value="problems" dataKey="id" >
          <Column headerClass="!bg-primary-900"  header="Seleccionar" selectionMode="multiple" ></Column>
          <Column headerClass="!bg-primary-900" field="title" header="Problema detectado"></Column>
      </DataTable>
      <div class="mt-4"  v-if="showEditor">
        <p class="mb-3">Por favor indique el problema detectado</p>
        <Editor class="custom-editor" v-model="otherProblem" editorStyle="height: 80px"/>
      </div>
    </div>
    <div class="float-right">
      <Button label="Reportar"  :disabled="disableButton" @click="sendProblems" class="!py-2 !border-none !px-10 !bg-primary-900 mt-5"/>
    </div>
</Dialog>
</template>

<script setup>
import { ref, watch, onBeforeMount, defineProps } from 'vue'
import Dialog from 'primevue/dialog'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import Editor from 'primevue/editor';
import { useProblems } from '../../../services/ProblemsApiService.js';
import { useOrdersPickerReview } from '../../../stores/orders/ordersPickerReview.js';

const problemsStore = useProblems()
const ordersStore = useOrdersPickerReview();
const problems = ref([])
const selectedProblems = ref([]);
const showEditor = ref(false);
const otherProblem = ref(null);
const disableButton = ref(true)
const hasTextInOtherProblem = ref(false);
const props = defineProps({
  typeProblems: String,
})

const handleClose = () => {
  ordersStore.showDialogProblem = false
}

onBeforeMount( async() => {
  await problemsStore.getProblems(props.typeProblems);
  problems.value = problemsStore.problems;
})

watch(
  () => problemsStore.problems, 
  (newProblems) => {
  problems.value = newProblems;
});

watch(
  () => ordersStore.orderItem, 
  () => {
    selectedProblems.value = [];
    otherProblem.value = "";

    if(ordersStore.orderItem.problems != undefined){
      selectedProblems.value = ordersStore.orderItem.problems;
      otherProblem.value = ordersStore.orderItem.other;
    }
});

watch(selectedProblems, (newSelection) => {
  showEditor.value = newSelection.some((product) => product.title === 'Otro');
  disableButton.value = newSelection.length === 0 || (showEditor.value && !hasTextInOtherProblem.value);
  
  ordersStore.orderItem.problems = newSelection;
});

const sendProblems = () => {
  ordersStore.showDialogProblem = false;
  ordersStore.orderItem.other = otherProblem.value
  ordersStore.setOrderItemsProblems.add(ordersStore.orderItem)
  ordersStore.currentOrder.orderItemsProblems = Array.from(ordersStore.setOrderItemsProblems);

  if((ordersStore.currentOrder.orderItemsProblems || []).length > 0){
    ordersStore.isProblemMapped[ordersStore.orderItem.id] = true;
  }
}

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

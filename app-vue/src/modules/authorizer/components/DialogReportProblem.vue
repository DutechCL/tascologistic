<template>
  <Dialog modal header=" " :style="{ width: '70vw' }" @update:visible="handleClose">
    <div>
      <h1 class="mb-3 text-primary-900 font-inter font-semibold text-xl">
        <i class="pi pi-info-circle !text-xl rotate-180"></i>
        Reportar problema
      </h1>
      <p class="mb-3" >Por favor indique uno o más problemas detectados</p>
      <DataTable v-model:selection="selectedProduct" :value="problems" dataKey="id" >
          <Column headerClass="!bg-primary-900"  header="Seleccionar" selectionMode="multiple" ></Column>
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
import { ToastMixin } from '../../../Utils/ToastMixin';
import { ConfirmMixin } from '../../../Utils/ConfirmMixin';
import constants from '@/constants/constants';
import { is } from 'date-fns/locale'

const { showToast } = ToastMixin.setup();
const { showConfirm } = ConfirmMixin.setup();

const props = defineProps({
  order: Object,
  product: Object,
  typeProblems: String,
  problemsProduct: Object,
})
const emit = defineEmits();
const problemsStore = useProblems()
const ordersStore = useOrders();
const problems = ref([])
const selectedProduct = ref([]);
const showEditor = ref(false);
const otherProblem = ref(null);
const product = ref(null);
const disableButton = ref(true)
const hasTextInOtherProblem = ref(false);
const listProblems = ref([]);
const isSendProblems = ref(false);
const isProblem = ref(false);

const order = ref([]);

onBeforeMount( async() => {
  if(problemsStore.problems.length === 0){
    problems.value = await problemsStore.getProblems(props.typeProblems);
  }else{
    problems.value = problemsStore.problems;
  }
})

const handleClose = () => {
    disableButton.value = true;
    hasTextInOtherProblem.value = false;
    selectedProduct.value = [];
    otherProblem.value = '';
}

watch(
  () => props.order, 
  (value) => {
  order.value = value;

  if (props.typeProblems == constants.RESPONSIBLE_CDA) {
    selectedProduct.value = [];
  }
})

const visibleReport = () => {
  disableButton.value = true;
  if (props.typeProblems == constants.RESPONSIBLE_CDA) {
    reportOrderProblem();
  } else {
    sendProblems()
  }
}

watch(() => props.problemsProduct, (newProblemsProduct) => {
  if(newProblemsProduct != undefined){
    selectedProduct.value = [...newProblemsProduct];
    isProblem.value = newProblemsProduct.length > 0;

    newProblemsProduct.map((product) => {
      if(product.title === 'Otro'){
        otherProblem.value = product.other;
        hasTextInOtherProblem.value = !!sanitizeHTML(otherProblem.value).trim();
      }
    });
  }
});

watch(selectedProduct, (newSelection) => {
  showEditor.value = newSelection.some((product) => product.title === 'Otro');
  disableButton.value = newSelection.length === 0 || (showEditor.value && !hasTextInOtherProblem.value);
  
  if (props.typeProblems === constants.RESPONSIBLE_PICKER_AND_REVIEWER) {
    product.value = props.product;
    if(!isSendProblems.value){
      product.value.problems = newSelection;
    }
  }
});

const sendProblems = () => {
  isSendProblems.value = true;
  selectedProduct.value.map((product) => {
    if(product.title === 'Otro'){
      product.other = sanitizeHTML(otherProblem.value);
    }
  });
  product.value.other = otherProblem.value;
  listProblems.value = selectedProduct.value;
  emit('selection-change',  product.value, {'visibleReport': false, 'listProblems': listProblems.value});
  handleClose();
}

watch(otherProblem, () => {
  if (showEditor.value) {
    hasTextInOtherProblem.value = !!sanitizeHTML(otherProblem.value).trim();
    disableButton.value = !hasTextInOtherProblem.value;
  } else {
    disableButton.value = false;
  }
});

const reportOrderProblem = async () => {
  const result = await showConfirm();
  if (result) {
    try {
      const body = {
          orderId: props.order.id,
          action: 2,
          responsible: constants.RESPONSIBLE_CDA,
          problems: selectedProduct.value,
          other: otherProblem.value,
          orderItemsProblem: null
      }
      let data = await ordersStore.processOrderAction(body);
      emit('visible', { 'visibleReport': false});
      if(data.status === 'success'){
        selectedProduct.value = [];
        otherProblem.value = '';
        disableButton.value = true;
        hasTextInOtherProblem.value = false;
        showToast({
          status: data.status,
          message: data.message,
        });
      }
    } catch (error) {
      if (error.response) {
        showToast({
          status: error.response.data.status,
          message: error.response.data.message,
        });
      }
    }
  } else {
    showToast({
      status: 'info',
      message: 'Proceso cancelado',
    });
  }
}

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

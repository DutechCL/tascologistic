<template>
  <Dialog modal header=" " :style="{ width: '70vw' }" @update:visible="handleClose">
    <div>
      <h1 class="mb-3 text-primary-900 font-inter font-semibold text-xl">
        <i class="pi pi-info-circle !text-xl rotate-180"></i>
        Realizar observación
      </h1>
      <div class="mt-4">
        <p class="mb-3" >Por favor realizar observación</p>
        <Editor class="custom-editor" v-model="observation" editorStyle="height: 80px"/>
      </div>
    </div>
    <Button label="Enviar"  :disabled="disableButton" @click="sendObservation" class="!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"/>
</Dialog>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Editor from 'primevue/editor';
import { useOrders } from '../../../services/OrdersApiService.js';
import { ToastMixin } from '../../../Utils/ToastMixin';
import { ConfirmMixin } from '../../../Utils/ConfirmMixin';
import constants from '@/constants/constants';

const { showToast } = ToastMixin.setup();
const { showConfirm } = ConfirmMixin.setup();

const props = defineProps({
  order: Object,
  disabled: Boolean,
})
const emit = defineEmits();
const ordersStore = useOrders();
const observation = ref(null);
const disableButton = ref(props.disabled)
const hasTextInOtherProblem = ref(false);
const order = ref([]);

const handleClose = () => {
  observation.value = null;
  disableButton.value = true;
}
watch(observation, () => {
    hasTextInOtherProblem.value = !!sanitizeHTML(observation.value).trim();
    disableButton.value = !hasTextInOtherProblem.value;
});

const sanitizeHTML = (htmlString) => {
    let doc = new DOMParser().parseFromString(htmlString, 'text/html');
    let text = doc.body.innerText;
    return text;
}

watch(
  () => props.order, 
  (value) => {
    order.value = value;
    observation.value = null;
    disableButton.value = true;
  }
);



const sendObservation = async () => {
  disableButton.value = true;
  const result = await showConfirm();
  if (result) {
    try {
      const body = {
          orderId: props.order.id,
          responsible: constants.RESPONSIBLE_CDA,
          observation: observation.value,
      }
      let data = await ordersStore.addObservation(body);
      emit('visible', { 'visibleReport': false});
      
      if(data.status === 'success'){
        observation.value = null;
        disableButton.value = true;
      }
      showToast({
        status: data.status,
        message: data.message,
      });
    } catch (error) {
      if (error.response) {
        showToast({
          status: error.response.data.status,
          message: error.response.data.message,
        });
      }
    }
  } else {
    disableButton.value = false;
    showToast({
      status: 'info',
      message: 'Proceso cancelado',
    });
  }
}
</script>


<style>
.custom-editor .ql-image {
  display: none !important;
}
</style>

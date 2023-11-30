<template>
  <div class="flex justify-between">
    <div>
        <div class="flex mb-5 mt-10" style="    height: 50px;    ">
          <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
            Histórico
          </h1>
          <Button
            label="Descargar"
            icon="pi pi-file-export"
            class="ml-5 !p-button p-component !bg-primary-900 !py-1 !border-primary-900 !text-white btn-custom"
            @click="emit('exportChat', { 'type': 'close' })"/>
        </div>
    </div>
    <Search :type="typeSearch" :orders="orders"/>
  </div>

  <div v-if="!isDataLoaded" class="text-center" style="color:#259bd7">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem;"></i>
  </div>
  <!-- tablas de ordenes segun metodo de envio -->
<DataTableListOrders v-if="dataChat.length > 0" :data="dataChat" />

  <div v-if="dataChat.length === 0" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h1 class="align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900">
      No se han encontrado ordenes
    </h1>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, onBeforeMount, defineEmits} from 'vue'
import constants from '@/constants/constants';
import Search from '../../../components/search/Search.vue';
import DataTableListOrders from './DataTableListOrders.vue';
import { useChat } from "../../../stores/chat/chat";
import Button from 'primevue/button';

const emit = defineEmits();
const chat = useChat();
const dataChat = ref([]);
const isDataLoaded = ref(false);

onBeforeMount(async () => {
  await chat.getResolve().then((data) => {
    dataChat.value = data;
    isDataLoaded.value = true;
  });
});

watch( 
  () => chat.resolve,
  () => {
    dataChat.value = chat.resolve;
  }
);

</script>

<style>
  [data-pc-section="sort"] svg {
  color: white !important;
  width: 12px;
  }
</style>

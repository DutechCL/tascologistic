<template>
  <div class="flex justify-between">
    <div class="flex mb-5 mt-10" style="    height: 50px;    ">
      <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
        Incidencias en notas de venta
      </h1>
      <Button
        label="Descargar"
        icon="pi pi-download"
        class="ml-5 !p-button p-component !bg-primary-900 !py-1 !border-primary-900 !text-white btn-custom"
        @click="updateOrders"/>
    </div>
    <Search :type="typeSearch" :data="dataChat"/>
  </div>

  
  <div v-if="isDataLoaded" class="text-center" style="color:#259bd7">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem;"></i>
  </div>

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
import Button from 'primevue/button';

import { useChat } from "../../../stores/chat/chat";


const chat = useChat();
const dataChat = ref([]);
const isDataLoaded = ref(true);

onBeforeMount(async () => {
  await chat.getOrders().then((data) => {
    dataChat.value = data;
    isDataLoaded.value = false;
  });
});

</script>

<style>
  [data-pc-section="sort"] svg {
  color: white !important;
  width: 12px;
  }
  .btn-custom{
    padding: 15px 40px;
    font-size: 20px;
    margin-left: 50px;
    border-radius: 12px;
  }
</style>

<template>
  <div class="flex justify-between">
    <div>
      <h1 class="mb-2 text-primary-900 font-inter font-semibold text-2xl">
        Notas de venta <a style="cursor: pointer;" @click="updateOrders"><i class="pi pi-refresh"></i></a> 
      </h1>
    </div>
    <Search :type="typeSearch" :orders="orders"/>
  </div>

  <div v-if="!isDataLoaded" class="text-center" style="color:#259bd7">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem;"></i>
  </div>
  <!-- tablas de ordenes segun metodo de envio -->
<DataTableListOrders :orders="orders" />

  <!-- <div v-if="ordersHere.length === 0 && ordersPickup.length === 0" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h1 class="align-center font-inter font-semibold mb-4 text-2xl text-center text-primary-900">
      No se han encontrado ordenes
    </h1>
  </div> -->
</template>

<script setup>
import { ref, watch, defineProps, onMounted, defineEmits} from 'vue'
import constants from '@/constants/constants';
import Search from '../../../components/search/Search.vue';
import DataTableListOrders from './DataTableListOrders.vue';



</script>

<style>
  [data-pc-section="sort"] svg {
  color: white !important;
  width: 12px;
  }
</style>

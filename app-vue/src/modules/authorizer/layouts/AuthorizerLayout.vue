<template>
  <Header/>
  <RouterView/>
</template>
 
<script setup>
import { defineAsyncComponent } from 'vue';
const Header = defineAsyncComponent(() => import('../../../components/header/Header.vue'));
</script>
<style scoped>
 
</style>
<template>
 <RouterView /> 
</template>

<script setup>
import { defineAsyncComponent, onMounted  } from 'vue';
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();

onMounted( async() => {
  await authStore.getToken();
  await authStore.login('super@twgroup.cl', 'super1');
});

</script>


<template>
  <Header/>
  <RouterView/>
</template>
 
<script>
import { defineAsyncComponent, onMounted } from 'vue'

// console.log(orders);

export default{
 components:{
   Header: defineAsyncComponent(()=> import('@/modules/tracker/components/Header.vue'))
  },

}
</script>
<style scoped>
 
</style>
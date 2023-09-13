<template>
  <Header/>
  <RouterView/>
</template>
 
<script>
import { defineAsyncComponent } from 'vue'
export default{
 components:{
  Header: defineAsyncComponent(()=> import('@/modules/authorizer/components/Header.vue'))
 }
}
</script>
<style scoped>
 
</style>
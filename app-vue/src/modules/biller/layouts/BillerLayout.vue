<template>
  <Header/>
  <RouterView/>
</template>
 
<script>
import { defineAsyncComponent } from 'vue'
export default{
 components:{
  Header: defineAsyncComponent(()=> import('../../../components/header/Header.vue'))
 }
}
</script>
<style scoped>
 
</style>
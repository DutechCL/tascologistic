<template>
  <div class="card flex flex-wrap justify-content-center gap-3">
      <span class="p-input-icon-left relative">
        <i class="pi pi-search absolute !top-5  " style="color: #259BD7"/>
        <InputText class="!py-2 !rounded-xl !bg-secundary-300 !border-none" v-model="value1" placeholder="Buscarr" />
        <!-- <i class="pi pi-microphone absolute !top-5 right-3"  style="color: #259BD7"/> -->
      </span>
  </div>
</template>

<script setup>
  import InputText from 'primevue/inputtext'
</script>
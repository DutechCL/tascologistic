<template>
  <Dialog modal header=" " :style="{ width: '70vw' }">
    <div>
        <h1 class="mb-1 text-primary-900 font-inter font-semibold text-xl">
          <i class="pi pi-eye !text-xl"></i>
          Ver Documentos
        </h1>
        <div class="flex align-center mb-2">
          <p class="text-primary-900"><strong class="mr-3 font-semibold ">Nota de venta N°</strong>{{order.DocNum}}</p>
          <Tag :icon="'pi pi-shopping-bag'" :value="order.MethodShippingName" class="ml-3 tag-radius tag-rounded-blue tag-font-method"></Tag>
        </div>
        <Tag :icon="'pi pi-user'" :value="order.Customer.CardName" class="tag-radius tag-rounded-blue tag-font-method "></Tag>
        <div class="mt-5">
          <p>
            2 archivos adjuntos
          </p>
          <div class="flex">
            <div class="mt-2 mr-5" width="200" height="180">
              <embed class=" w-full" src="http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf"  type="application/pdf">
              <div class="bg-gray-100">
                <i class="pi pi-file-pdf m-2" style="color:  #F40F02;"></i>
                <a href="#" class="font-normal text-sm">Nombre de pdf</a>
              </div>
            </div>
            <div class="mt-2 mr-5" width="200" height="180">
              <embed class=" w-full" src="http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf"  type="application/pdf">
              <div class="bg-gray-100">
                <i class="pi pi-file-pdf m-2" style="color:  #F40F02;"></i>
                <a href="#" class="font-normal text-sm">Nombre de pdf</a>
              </div>
            </div>
            
          </div>
        </div>
    </div>
   
   
    
    <Button label="Cerrar"  @click="visibleDetails" class="!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"/>
</Dialog>
</template>

<script setup>
import { ref, onBeforeMount, defineProps, defineEmits } from 'vue'
import Dialog from 'primevue/dialog'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const props = defineProps({
  order: String
})
const emit = defineEmits();
const visibleDetails = () => {
  emit('visible', {'visibleDetails': false});
}

const order = ref([]);

onBeforeMount(() => {
  order.value = props.order;
})
</script>
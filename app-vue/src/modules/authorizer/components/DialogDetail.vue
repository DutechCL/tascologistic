<template>
  <Dialog modal header=" " :style="{ width: '70vw' }" maximizable>
    <div>
        <h1 class="mb-1 text-primary-900 font-inter font-semibold text-xl">
          <i class="pi pi-eye !text-xl"></i>
          Ver Documentos
        </h1>
        <div class="flex align-center mb-2">
          <p class="text-primary-900"><strong class="mr-3 font-semibold ">Nota de venta N°</strong>{{ordersStore.order.DocNum}}</p>
          <Tag :icon="'pi pi-shopping-bag'" :value="ordersStore.order.MethodShippingName" class="ml-3 tag-radius tag-rounded-blue tag-font-method"></Tag>
        </div>
        <Tag :icon="'pi pi-user'" :value="ordersStore.order.Customer.CardName" class="tag-radius tag-rounded-blue tag-font-method "></Tag>
        <div class="mt-5">
          <p>
            2 archivos adjuntos
          </p>
          <div class="flex">
            <div v-for="document in documents" class="mt-2 mr-5 relative" width="200" height="180">
              <embed class=" w-full" :src="document.url"  type="application/pdf">
                <div class="bg-gray-100">
                  <i class="pi pi-file-pdf m-2" style="color:  #F40F02;"></i>
                  <span class="font-normal text-sm">{{document.name}}</span>
                </div>
                <a class="mask-pdf" :href="document.url" :target="'_blank'" ></a>
            </div>
          </div>
        </div>
    </div>
    
    <Button label="Cerrar"  @click="ordersStore.showDialog = false" class="!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"/>
</Dialog>
</template>

<script setup>
import { ref} from 'vue'
import Dialog from 'primevue/dialog'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import { useOrdersCda } from '../../../stores/orders/ordersCda.js'

const ordersStore = useOrdersCda();
const documents = ref([
      { name: 'Documento 1', url: 'http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf' },
      { name: 'Documento 2', url: 'http://ocw.uv.es/ingenieria-y-arquitectura/programacionmultimedia/t2-1-css.pdf' },
]);
</script>

<style>
.mask-pdf{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
}
</style>
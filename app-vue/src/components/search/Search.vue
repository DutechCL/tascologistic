<template>
  <div class="card flex flex-wrap justify-content-center gap-3">
      <span class="p-input-icon-left relative">
        <i class="pi pi-search absolute !top-5  " style="color: #259BD7"/>
        <InputText class="!py-2 !rounded-xl !bg-secundary-300 !border-none" v-model="inputSearch" placeholder="Buscar" />
        <!-- <i class="pi pi-microphone absolute !top-5 right-3"  style="color: #259BD7"/> -->
      </span>
  </div>
</template>

<script setup>
  import { ref,defineEmits, watch} from 'vue'
  import InputText from 'primevue/inputtext'

  const props = defineProps({
    orders: Object,
  })

  const orders = ref(props.orders);
  const allOrders = ref(props.orders);

  const inputSearch = ref(null)
  const emit = defineEmits();

  watch(() => props.orders, (value) => {
    orders.value = value;
    allOrders.value = value;
  })

  watch(
    () => inputSearch.value, 
    (data) => {
    search(data)
  })
  
  const search = (value) => {
    orders.value = filterOrdersByNumberAndName(allOrders.value, value)
    emit('search', { 'orders': orders.value});
  }
    
  function filterOrdersByNumberAndName(orders, data) {
    return orders.filter(order => 
      order.DocNum.toString().includes(data.toString())  || 
      order.Customer.CardName.toLowerCase().includes(data.toLowerCase())
    );
  }
</script>
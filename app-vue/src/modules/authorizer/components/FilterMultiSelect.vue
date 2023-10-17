<template>
    <div class="card flex justify-content-center ">
        <MultiSelect 
            v-model="DocNum" 
            :options="orders" 
            filter 
            optionLabel="DocNum" 
            placeholder="Nota de venta" 
            display="chip"  
            :maxSelectedLabels="3" 
            class="w-full md:w-20rem" 
            style="border: none; max-width: 300px;" 
            :key="DocNum" />
      </div>
      <div :class="[{ 'active-filter-date': !dateLabel, }, 'relative']">
        <Calendar 
            :inputId="props.typeOrders" 
            v-model="dates" 
            selectionMode="range" 
            :manualInput="false" 
            style="border: none !important; color: #259bd7 !important"/>
            <label v-if="dateLabel" style="position: absolute; left: 40%; color: #259bd7; top: 26%;" :for="props.typeOrders">Fecha</label>
            <div class="align-center card flex justify-content-center mr-5">
                <a class="close-filter-date" v-if="!dateLabel" @click="removeFilterDate()"> <i class="pi pi-times"></i> </a>
            </div>
      </div>
      <div class="card flex justify-content-center mr-5">
        <MultiSelect 
            v-model="DocTime" 
            :options="orders" 
            filter 
            optionLabel="DocTime" 
            placeholder="Hora" 
            display="chip"  
            :maxSelectedLabels="3" 
            class="w-full md:w-20rem" 
            style="border: none; max-width: 300px;" />
      </div>
      <div class="card flex justify-content-center mr-5">
        <MultiSelect 
            v-model="Customer" 
            :options="orders" 
            filter 
            optionLabel="Customer.CardName" 
            placeholder="Clientes" 
            display="chip"  
            :maxSelectedLabels="3" 
            class="w-full md:w-20rem" 
            style="border: none; max-width: 300px;" />
      </div>
      <div class="card flex justify-content-center">
        <MultiSelect v-model="DocTotal" :options="orders" filter optionLabel="DocTotal" placeholder="Total" display="chip"  :maxSelectedLabels="3" class="w-full md:w-20rem" style="border: none; max-width: 300px;" :key="DocTotal" />
      </div>
</template>

<script setup>
import { watch, toRefs, defineProps, defineEmits} from 'vue'
import MultiSelect from 'primevue/multiselect'
import Calendar from 'primevue/calendar'
import { UseFiltersMultiSelect } from '../composables/UseFiltersMultiSelect'

const emit = defineEmits();
const props = defineProps({
  allOrders: Array,
  typeOrders: String
})

const { allOrders } = toRefs(props);
const { typeOrders } = toRefs(props);
const {
    dates,
    dateLabel,
    orders,
    DocNum,
    DocTime,
    Customer,
    DocTotal,
    removeFilterDate,
} = UseFiltersMultiSelect(allOrders);

watch(
    () => orders.value,  
    (data) => {
    emit('filter', { 'orders': data, 'type': typeOrders.value });
})
</script>

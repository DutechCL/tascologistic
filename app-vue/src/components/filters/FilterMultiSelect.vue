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
            :key="DocNum" 
            @remove="toggleUnSelect"
            />
      </div>
      <div :class="[{ 'active-filter-date': !dateLabel, }, 'relative']">
        <Calendar 
            :inputId="generateUniqueId()" 
            v-model="dates" 
            selectionMode="range" 
            :manualInput="false" 
            style="border: none !important; color: #259bd7 !important"/>
            <label v-if="dateLabel" style="position: absolute; left: 40%; color: #259bd7; top: 26%;" :for="generateUniqueId()">Fecha</label>
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
import { UseFiltersMultiSelect } from './composables/UseFiltersMultiSelect'

const emit = defineEmits();
const props = defineProps({
  allOrders: Array,
  typeOrders: String
})

const toggleUnSelect = (value, id) => {
  console.log(value, id)
};

const generateUniqueId = () => {
  return `input_${Date.now()}`;
};

const { allOrders }  = toRefs(props);
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

<style>
.p-calendar .p-inputtext{
  border: none !important;
  padding: 6px;
  color: #fff;
  font-weight: 600;
  background: transparent;
}

.p-confirm-dialog .p-dialog-content {
  padding: 45px !important;
}

.p-multiselect-label.p-placeholder, .p-multiselect-trigger{
  color: #259bd7 !important;
}
.p-button.p-component.p-confirm-dialog-accept{
  background: #259bd7!important;
}
.p-multiselect.p-multiselect-chip .p-multiselect-token {
  background: #259bd7!important;
  font-weight: 600;
  color: #ffffff !important;
}
.p-dialog.p-component.p-ripple-disabled.p-confirm-dialog{
  padding: 15px !important;
  background: #ffffff !important;
}

.close-filter-date{
  padding: 0px;
  cursor: pointer;
  background: #259bd7;
  color: #fff;
  font-weight: 600;
  border-radius: 50%;
  width: 25px;
  text-align: center;
  position: absolute;
  border: 1px solid;
  right: 6px;
  top: 5px;
  height: 25px;
}
.active-filter-date{
  background: #259bd7;
  border-radius: 27px;
  height: 35px;
  margin-top: 5px;
}
.active-filter-date i{
  font-size: 12px;
}

.text-not-info{
  font-size: 20px;
  color: #898989;
}
</style>
        
<template>
  <div class="px-3">
    <TabView  v-model="selectedTab">
      <TabPanel header="Por gestionar">
        <div v-if="!isDataLoaded" class="text-center" style="color:#259bd7">
          <i class="pi pi-spin pi-spinner" style="font-size: 2rem;"></i>
        </div>
        <ToManage 
          v-if="isDataLoaded" 
          :toManage="true" 
          :orders="ordersToManager" 
          @updateOrders="updateOrders"
          />
      </TabPanel>
      <TabPanel header="Gestionadas">
        <ToManage 
          v-if="isDataLoaded" 
          :toManage="false" 
          :orders="ordersManager" 
          @updateOrders="updateOrders"/>
      </TabPanel>
    </TabView>
  </div>
  <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import { onBeforeMount, ref, watch } from 'vue';
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import ToManage from '../components/ToManage.vue'
import ConfirmDialog from 'primevue/confirmdialog';
import { useOrdersCda } from '../../../stores/orders/ordersCda';
import { ToastMixin } from '../../../Utils/ToastMixin';

const { showToast } = ToastMixin.setup();
const ordersStore = useOrdersCda();
const ordersToManager = ref([]);
const ordersManager = ref([]);
const isDataLoaded = ref(false); 


onBeforeMount( async() => {

  await ordersStore.getOrdersCdaToManager();
  await ordersStore.getOrdersCdaManage();

  ordersToManager.value = ordersStore.listOrders;
  ordersManager.value = ordersStore.listOrdersManage;
  isDataLoaded.value = true;
});

const updateOrders = () => {
  ordersStore.getOrdersCdaToManager();
  ordersStore.getOrdersCdaManage();

  showToast({
    status: 'success',
    title: 'Ordenes actualizadas',
    message: 'Las ordenes se han actualizado correctamente',
  })
}

watch(
  () => [ordersStore.listOrders, ordersStore.listOrdersManage],
  () => {
    ordersToManager.value = ordersStore.listOrders;
    ordersManager.value = ordersStore.listOrdersManage;
  }
)

</script>

<style>
  .p-tabview .p-tabview-nav{
    @apply flex justify-center border-none mb-3;
  }
  .p-tabview .p-tabview-nav li.p-highlight{
    @apply relative z-10 ;
    margin-right: -20px !important;
  }
  .p-tabview .p-tabview-nav li.p-highlight:nth-child(2){
    margin-left: -20px !important;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
      box-shadow: none;
  }
  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link{
    @apply bg-primary-900 rounded-3xl border-2 border-primary-900;
  }
  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link span{
    @apply text-white;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link{
    @apply !py-3 !px-10 border-primary-900 border-2 font-normal hover:border-primary-900;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link span{
    @apply text-primary-900;
  }

  .p-tabview .p-tabview-nav li:nth-child(2) .p-tabview-nav-link{
    @apply rounded-r-3xl border-l-0;
  }
 
  .p-tabview .p-tabview-nav li:nth-child(1) .p-tabview-nav-link{
    @apply rounded-l-3xl  border-r-0 ;
  }
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
  top: 6px;
  height: 25px;
}
.active-filter-date{
  background: #259bd7;
  border-radius: 27px;
  height: 40px;
}
.active-filter-date i{
  font-size: 12px;
}

.text-not-info{
  font-size: 20px;
  color: #898989;
}
</style>
        
<template>
  <div class="px-3">
    <TabView  v-model="selectedTab">
      <TabPanel header="Por gestionar">
        <ToManage :orders="orderToManage" @exportOrders="exportOrders"/>
      </TabPanel>
      <TabPanel header="Gestionadas" >
        <Manage :orders="orderManage"/>
      </TabPanel>
    </TabView>
  </div>
  <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import { onBeforeMount, ref, watch } from 'vue';
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import ConfirmDialog from 'primevue/confirmdialog';
import ToManage from '../components/ToManage.vue'
import Manage from '../components/Manage.vue'
import { useOrdersDispatch } from "../../../stores/orders/ordersDispatch";

const orderToManage = ref([]);
const orderManage = ref([]);
const ordersStore = useOrdersDispatch();

const updateOrders = async () => {
  await ordersStore.getOrdersDispatch().then(orders => {
    orderToManage.value = orders;
  });

  await ordersStore.getOrdersDispatchManage().then(orders => {
    orderManage.value = orders;
  });
}
onBeforeMount( async() => {
  updateOrders();
})

const exportOrders = (data) => {
  const orderIds = data.orders.map(order => order.id);
  const orderIdsString = orderIds.join(',');
  const url = `/api/v1/orders/dispatch/export?ids=${orderIdsString}`;
  window.open(url, '_blank');
  updateOrders();

};

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
        
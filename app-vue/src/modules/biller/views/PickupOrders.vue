<template>
  <div class="px-3">
    <TabView  v-model="selectedTab">
      <TabPanel header="Por gestionar">
        <Manage :status="'pending'" :methodShipping="constants.METHOD_SHIPPING_HERE" />
      </TabPanel>
      <TabPanel header="Gestionadas">
        <Manage :status="'done'" :methodShipping="constants.METHOD_SHIPPING_HERE" />
      </TabPanel>
    </TabView>

  </div>

    <ConfirmDialog></ConfirmDialog>
  </template>
  
  <script setup>
    import ConfirmDialog from 'primevue/confirmdialog';
    import TabView from 'primevue/tabview';
    import TabPanel from 'primevue/tabpanel';
    import Manage from '../components/Manage.vue';
    import constants from '@/constants/constants';

  const orderStore = useOrdersBills()
  const orders = ref([]);

  const updateOrders = async () => {
    await orderStore.getOrdersBillPickupAndHere();
    showToast({
      status: 'success',
      message: 'Ordenes actualizadas',
      time: 3000
    });
  }

  watch(() => orderStore.listOrders, (value) => {
    orders.value = orderStore.listOrders;
  });

  const search = (data) => {
    orders.value = data.orders;
  }

  const actionMethod = (data) => {
    switch (data.method) {
      case 'showDetailOrder':
        orderStore.showDetailOrder(data.order);
        break;
      case 'processOrderBiller':
        processOrderBiller(data);
        break;
    }
  }

  const processOrderBiller = async (value) => {
  try {
    let result = await showConfirm();

    if (result) {
      let response = await orderStore.processOrderBiller(value);

      if (response.status === 'success') {
        orders.value.filter(o => o.id !== response.data.id);
        showToast({
          status: 'success',
          message: response.message,
        });
      } 
    } else {
      showToast({
        status: 'info',
        message: 'Proceso cancelado',
      });
    }
  } catch (error) {

    if(error.response.status == 401){
      orders.value.filter(o => o.id !== error.response.data.data.id);
    }
    // Manejar errores generales, por ejemplo, problemas de conexión
    showToast({
      status: 'error',
      message: error.response.data.message,
    });
  }
};


  const visibleDetailsMethod = (value) => {
    orderStore.visibleDialog = value.visibleDetails;
  };

  onBeforeMount( async() => {
    await orderStore.getOrdersBillPickupAndHere();
    orders.value = orderStore.listOrders;
  })

  const goBack = () => {
    if (orders.value.length === 0) {
        window.location.href = '/admin/dashboard/'
      }
  }

</script>
  
<style>
  .p-tag-1{
    @apply bg-primary-100
    
  }
  .p-tag-1 span{
    @apply text-primary-900
  }

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
</style>
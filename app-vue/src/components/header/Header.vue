<template>
  <header class="bg-primary-100 py-4 mb-10 px-7">
    <div class="wrapper flex justify-start ">
      <img class="w-188 h-60" src="@/assets/img/logo_v1.png" />
      <Button class="main-bars" icon="pi pi-bars" @click="visible = true" />
    </div>
    <div class="card flex justify-content-center">
    </div>
  </header>
  <Sidebar v-model:visible="visible">
    <div class="flex justify-center mb-20">
      <img class="w-188 h-60" src="@/assets/img/logo_v1.png" />
    </div>
      <PanelMenu class="main-menu" :model="items" />
  </Sidebar>

  <Toast group="bc" @close="onClose" style="background: #f3f3f35e">
    <template #message="slotProps">
        <div class="" style="background: #f3f3f35e">
            <div class="gap-2">
                <!-- <Avatar image="/images/avatar/amyelsner.png" shape="circle" /> -->
                <span class="font-bold text-900" style="color: #313131">{{dataNotifications.currentUser.name}}</span>
            </div>
            <div class="font-medium text-lg my-3 text-900" style="color: #000;">Incidencia en nota de venta <strong>No: {{dataNotifications.chat.order.DocNum}}</strong> </div>
            <div class="font-medium text-lg my-3 text-900" style="color: #000;">Desde <strong>{{ dataNotifications.chat.order.report_problem_location }}</strong> </div>

            <router-link :to="{name: 'show-chat', params: {id: dataNotifications.chat.id}}"> Ver </router-link>
                <!-- <p class="mb-2 text-primary-900 font-inter font-semibold text-xl"> <i class="pi pi-arrow-left font-icon"></i> </p> -->
            <!-- <Button class="p-button-sm" label="Reply" @click="onReply()"></Button> -->
        </div>
    </template>
</Toast>

</template>

<script setup>

import { onBeforeMount, ref, watch } from "vue";
import Sidebar from 'primevue/sidebar';
import PanelMenu from 'primevue/panelmenu';
import Button from 'primevue/button';
import {useMenuItems} from '../../services/MenuItemsApiService.js';
import { useChat } from "../../stores/chat/chat";
// import Pusher from 'pusher-js'; // Importa la biblioteca Pusher
import { useNotificationStore } from '../../services/NotificationService.js';
import { useAuthStore } from '../../stores/auth';
import { useToast } from "primevue/usetoast";


const toast = useToast();
const visibleToast = ref(false);
const dataNotifications = ref([]);
const showTemplate = () => {
    if (!visibleToast.value) {
        toast.add({ severity: 'success', summary: 'Can you send me the report?', group: 'bc' });
        visibleToast.value = true;
    } 
};

const onReply = () => {
    toast.removeGroup('bc');
    visibleToast.value = false;
}

const onClose = () => {
    visibleToast.value = false;
}
const authStore = useAuthStore();
const chat = useChat();
const notificationStore = useNotificationStore();

// Observar cambios en la propiedad 'notifications'
watch(() => notificationStore.notifications, (newCount) => {
  let title = newCount > 1 ? `(${newCount}) Notificaciones` : `(${newCount}) Notificación`;
  document.title = newCount > 0 ? title : 'Tasco Logistics';

  showTemplate();
});
const itemsStore = useMenuItems();


const visible = ref(false);
const items = ref([]);

onBeforeMount( async () => {
  try {
      await chat.getUser();
      await itemsStore.getMenuItems();
      items.value = itemsStore.menuItems;

      const channel = chat.pusher().subscribe(`private-notification.${chat.currentUser.id}`);

      channel.bind('notification.sent', (data) => {

        dataNotifications.value = data;
        if(data.currentUser.id !== chat.currentUser.id){
          notificationStore.incrementNotifications();
        }
      });

  } catch (error) {
    console.error('Error fetching orders:', error);
  }
});

</script>

<style>
.main-bars{
  background: transparent;
  border: none;
  min-width: 65px;

}

.main-bars:hover{
  background: transparent !important;
}

.main-bars span{
  @apply text-primary-900;
  font-size: 2rem;
  margin-left: 1rem;
}

.main-menu .p-panelmenu-header-content{
  background: transparent !important;
  border: none !important;
}

.main-menu .p-panelmenu-header-content a{
  justify-content: space-between;
  padding: 0.75rem !important;
  font-weight: 500 !important;
  font-size: 18px;
  color: #495057 !important;
  
}

.main-menu .p-panelmenu-header-content .p-menuitem-text{
  order: -1;
}
</style>
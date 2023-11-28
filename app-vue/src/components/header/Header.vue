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
</template>

<script setup>

import { onBeforeMount, ref, watch } from "vue";
import Sidebar from 'primevue/sidebar';
import PanelMenu from 'primevue/panelmenu';
import Button from 'primevue/button';
import {useMenuItems} from '../../services/MenuItemsApiService.js';
import { useChat } from "../../stores/chat/chat";
import Pusher from 'pusher-js'; // Importa la biblioteca Pusher
import { useNotificationStore } from '../../services/NotificationService.js';

const chat = useChat();
const notificationStore = useNotificationStore();

// Observar cambios en la propiedad 'notifications'
watch(() => notificationStore.notifications, (newCount) => {
  document.title = newCount > 0 ? `(${newCount}) Chat` : 'Chat';
});
const itemsStore = useMenuItems();


const visible = ref(false);
const items = ref([]);

onBeforeMount( async () => {
  try {
      await chat.getUser();
      await itemsStore.getMenuItems();
      items.value = itemsStore.menuItems;

      const protocol = window.location.protocol;
      const domain = window.location.hostname;

      const pusher = new Pusher('fafc81d9b01571689422', {
            cluster: 'ap2',
            encrypted: true,
            channelAuthorization: {
                endpoint: `${protocol}//${domain}/broadcasting/auth`,
                headers: { 
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            },
        });

        const channel = pusher.subscribe(`private-notification.${chat.currentUser.id}`);

        channel.bind('notification.sent', (data) => {
          if(chat.currentUser.id !== data.user.id){
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
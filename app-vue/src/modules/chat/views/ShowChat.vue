<template>
    <div class="content-head-chat">
        <div>
            <router-link :to="{name: 'list-chats'}">
                <p class="mb-2 text-primary-900 font-inter font-semibold text-xl"> <i class="pi pi-arrow-left font-icon"></i> Incidencias en notas de venta</p>
            </router-link>
        </div>
        <div>
         <DataTableDetailOrder v-if="chat?.loadingOrder" :order="order"/>
        </div>
    </div>
    <div class="content-chat" ref="messageList">

        <ul>
            <li v-for="message in chat.messages" :key="message.id" style="width: 100% !important; list-style: none;">
                <div class="message-container" :class="{ 'self-message': selfUser(message.user.id) }">
                    <strong v-if="!selfUser(message.user.id)" class="mb-2 text-primary-900 font-inter font-semibold text-sm">{{ message.user.name }}</strong>
                    <div class="receiving-bubbles" :style="{
                        background: selfUser(message.user.id) ? '#259BD7' : '#d5ebf8', 
                        borderBottomLeftRadius: selfUser(message.user.id) ? '33px' : '0', 
                        borderBottomRightRadius: selfUser(message.user.id) ? '0' : '33px', 
                    }">
                        <p class="font-13" v-html="message.message"></p>
                    </div>
                    <p class="text-time">{{ formatTime(message.created_at) }}</p>
                </div>
            </li>
        </ul>
       
    </div>
    <div class="footer-chat p-3">
        <div v-if="chat?.currentChat.status === 'open'" class="input-container">
            <InputText
            placeholder="Escribe un mensaje..."
            type="text"
            v-model="message"
            @keyup.enter="handleEnterKey"
          />
          <Button :disabled="!message.trim() || sending" @click="sendMessage">
            <i v-if="!sending" class="pi pi-send" style="font-size: 25px !important; position: absolute; right: 25px;"></i>
            <i  v-else class="pi pi-spin pi-spinner" style="font-size: 25px !important; position: absolute; right: 25px;"></i>
          </Button>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref, watch, onMounted, nextTick, onBeforeUnmount } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useChat } from "../../../stores/chat/chat";
import DataTableDetailOrder from '../components/DataTableDetailOrder.vue';
import { format } from 'date-fns';
import Pusher from 'pusher-js';


const chat = useChat();
const message = ref('');
const loadingOrder = ref(false);
const sending = ref(false);
const sendButtonDisabled = ref(false);
const messageList = ref(null);
const order = ref({});
const props = defineProps({
    id: Number,
});

const formatTime = (dateTime) => {
    return format(new Date(dateTime), 'HH:mm');
};

const sendMessage = async () => {
      try {
        if (sending.value || sendButtonDisabled.value) {
          return;
        }

        sending.value = true;
        sendButtonDisabled.value = true;

        await chat.sendMessage({ message: message.value, chat_id: chat.current.id });

        message.value = '';
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
      } finally {
        sending.value = false;
        // Habilitar el botón después de un breve período de tiempo (puedes ajustar el tiempo según tus necesidades)
        setTimeout(() => {
          sendButtonDisabled.value = false;
        }, 2000);
      }
    };

    const handleEnterKey = () => {
      if (!sendButtonDisabled.value) {
        sendMessage();
      }
    };

    const selfUser = (userId) => {
        return userId === chat.currentUser?.id;
    };

    const scrollToBottom = () => {
        nextTick(() => {
            messageList.value.scrollTop = messageList.value.scrollHeight;
        })
    };

    onBeforeMount(async () => {
    try {
        await chat.showChat(props.id).then((data) => {
            order.value = chat.order;
        });
        scrollToBottom();

        loadingOrder.value = true;

        // Verificar si ya estamos suscritos al canal
        if (!chat.isSubscribed) {
            const channel = chat.pusher().subscribe(`private-chat.${chat.current.id}`);

            channel.bind('message.sent', (data) => {
                console.log(data)
                chat.addMessage(data.message);
                scrollToBottom();
            });

            // Marcar como suscrito para evitar futuras suscripciones
            chat.isSubscribed = true;
        }
        
    } catch (error) {
        console.error('Error al obtener los mensajes:', error);
    }
});

onBeforeUnmount(() => {
    // Limpiar las suscripciones cuando el componente se desmonta
    if (chat.isSubscribed) {
        const channel = chat.pusher().channels[`private-chat.${chat.current.id}`];
        if (channel) {
            channel.unbind();  // Desvincula todos los eventos del canal
            channel.unsubscribe();  // Desuscribe el canal
        }
    }
});

</script>

<style scoped>

::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #259bd7;
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-ms-scrollbar {
    width: 12px; 
  }
  
  ::-ms-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }
  
  ::-ms-scrollbar-track {
    background-color: #f1f1f1;
  }

body{
    overflow-y: hidden;
}
header{
    position: fixed;
    width: 100%;
    top: 0;
}

.text-time{
    color: #5b5b5b;
    font-size: 15px;
}

.content-head-chat{
    margin: auto;
    height: 10vh;
    padding: 0 40px;
    margin-top: -30px;
}

.content-chat {
    margin: auto;
    overflow-y: scroll;
    height: 400px;
    margin-top: 110px;
    padding: 0 40px;
}
.receiving-bubbles{
    padding: 7px;
    padding-left: 30px;
    width: 600px;
    border-radius: 33px;
    
}

.message-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Alinea a la izquierda por defecto */
    margin-bottom: 10px; /* Espacio entre mensajes */
}

.self-message {
    align-items: flex-end; /* Alinea a la derecha para mensajes propios */
}

.footer-chat{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 30px 50px;
    padding-bottom: 15px !important;
}

.input-container{
    width: 100%;
    background-color: #e1e1e1;
    display: flex;
    align-items: center;
    border-radius: 6px;
    height: 60px;
}
.input-container input{
    width: 100%;
    margin-right: 2%;
    background: transparent !important;
    border: none;
}

.input-container input:focus{
    box-shadow: none;
    border-color: transparent;
}

.input-container input:hover{
    border-color: transparent;
}

.input-container button{
    width: 10%;
    margin-bottom: 0;
    background: transparent !important;
    border: none !important;
    color: rgb(37, 155, 215) !important;
}

.input-container button:focus{
    box-shadow: none;
    border-color: transparent;
}

.font-icon{
    font-size: 20px;
}

.font-13{
    font-size: 13px !important;
}
</style>

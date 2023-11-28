<template>
    <div class="content-head-chat">
        <div>
            <router-link :to="{name: 'list-chats'}">
                <p class="mb-2 text-primary-900 font-inter font-semibold text-xl"> <i class="pi pi-arrow-left font-icon"></i> Incidencias en notas de venta</p>
            </router-link>
        </div>
        <div>
         <DataTableDetailOrder v-if="chat?.loadingOrder" :order="chat.order"/>
        </div>
    </div>
    <div class="content-chat">

        <ul>
            <li v-for="message in chat.messages" :key="message.id" style="width: 100% !important; list-style: none;">
                <div class="message-container" :class="{ 'self-message': selfUser(message.user.id) }">
                    <strong v-if="!selfUser(message.user.id)" class="mb-2 text-primary-900 font-inter font-semibold text-sm">{{ message.user.name }}</strong>
                    <div class="receiving-bubbles" :style="{
                        background: selfUser(message.user.id) ? '#259BD7' : '#d5ebf8', 
                        borderBottomLeftRadius: selfUser(message.user.id) ? '33px' : '0', 
                        borderBottomRightRadius: selfUser(message.user.id) ? '0' : '33px', 
                    }">
                        <p v-html="message.message"></p>
                    </div>
                    <p class="text-time">{{ formatTime(message.created_at) }}</p>
                </div>
            </li>
        </ul>
       
    </div>
    <div class="input-container">
        <InputText type="text" v-model="message"/>
        <Button icon="pi pi-arrow-right" @click="sendMessage" />
    </div>
</template>

<script setup>
import { onBeforeMount, ref, watch } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useChat } from "../../../stores/chat/chat";
import DataTableDetailOrder from '../components/DataTableDetailOrder.vue';
import { format } from 'date-fns';
// import Echo from 'laravel-echo';
import Pusher from 'pusher-js'; // Importa la biblioteca Pusher
import Cookies from 'js-cookie';

const chat = useChat();
const message = ref('');
const loadingOrder = ref(false);

const props = defineProps({
    id: Number,
});

const formatTime = (dateTime) => {
    return format(new Date(dateTime), 'HH:mm');
};

const sendMessage = async () => {
    try {

        await chat.sendMessage({ message: message.value, chat_id: chat.current.id });

        message.value = '';

    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
    }
};

const selfUser = (userId) => {
    return userId === chat.currentUser?.id;
};

onBeforeMount(async () => {
    try {
        const protocol = window.location.protocol;
        const domain = window.location.hostname;
    
        await chat.showChat(props.id);

        loadingOrder.value = true;

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

        const channel = pusher.subscribe(`private-chat.${chat.current.id}`);

        channel.bind('message.sent', (data) => {
            chat.addMessage(data.message);
        });
        
    } catch (error) {
        console.error('Error al obtener los mensajes:', error);
    }
});

</script>

<style scoped>
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
    height: 475px;
    margin-top: 180px;
    padding: 0 40px;
}
.receiving-bubbles{
    padding: 15px;
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

.input-container{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #ffffff;
    padding: 10px 20px;
    display: flex;
    align-items: center;
}
.input-container input{
    width: 88%;
    margin-right: 2%;
}
.input-container button{
    width: 10%;
    margin-bottom: 0;
}

.font-icon{
    font-size: 20px;
}
</style>

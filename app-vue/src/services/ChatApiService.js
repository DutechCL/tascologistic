// Store de Pinia
import { defineStore } from 'pinia';
import { postWithToken, getWithToken} from "./ApiService.js";


export const useChatApi = defineStore('chat', {
    state: () => ({ 
 
    }),
    getters: {
       
    },
    actions: {
        async sendMessage(body) {
            return await postWithToken(`api/v1/chat/send-message/`, body);
        },

        async getMessages() {
            return await getWithToken(`api/v1/chat/get-message/`);
        },

        async getUser() {
            return await getWithToken(`api/v1/chat/get-user/`);
        },

        async getOrders() {
            return await getWithToken(`api/v1/chat/get-orders/`);
        },

        async getOrder(id) {
            return await getWithToken(`api/v1/chat/get-order/${id}`);
        },
    }
});

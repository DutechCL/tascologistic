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
            return await postWithToken(`api/v1/chat/send-message`, body);
        },

        async getMessages(id) {
            return await getWithToken(`api/v1/chat/get-message/${id}`);
        },

        async getUser() {
            return await getWithToken(`api/v1/chat/get-user/`);
        },

        async getChats() {
            return await getWithToken(`api/v1/chat/get-orders/`);
        },

        async getResolve() {
            return await getWithToken(`api/v1/chat/get-resolve/`);  
        },

        async showChat(id) {
            return await getWithToken(`api/v1/chat/show/${id}`);
        },

        async resolveChatAndOrder(id) {
            return await getWithToken(`api/v1/chat/resolve/${id}`);
        }
    }
});

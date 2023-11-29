import { defineStore } from 'pinia';
import { useChatApi } from '../../services/ChatApiService.js'; 
import { useNotificationStore } from '../../services/NotificationService.js';

const notificationStore = useNotificationStore();
const chatService = useChatApi();

export const useChat = defineStore('useChat', {
  state: () => ({ 
    listChat: [],
    listMessages: [],
    currentChat: {},   
    currentUser: {},      
    currentOrder: {}, 
    loadingOrder: false,  
    csrf: '',
  }),
  getters: {
    messages: (state) => state.listMessages, 
    user: (state) => state.currentUser,
    order: (state) => state.currentOrder,
    current: (state) => state.currentChat,
  },
  actions: {
    async sendMessage(body) {
      return await chatService.sendMessage(body);
    },

    async getMessages(id) {
        let response = await chatService.getMessages(id);
        this.listMessages = response.data;
        return response.data;
    },

    async getUser() {
      let response = await chatService.getUser();
      this.currentUser = response.data.user;
      this.csrf = response.data.csrf;
      return response.data;
    },

    async getOrders() {
      let response = await chatService.getOrders();
      this.currentOrder = response.data;
      return response.data;
    },

    async getResolve() {
      let response = await chatService.getResolve();
      return response.data;
    },

    async showChat(id){
      let response = await chatService.showChat(id);
      this.listMessages = response.data.messages;
      this.currentOrder = response.data.order;
      this.currentChat = response.data;
      this.loadingOrder = true;
      return response.data;
    },

    async resolveOrder(id) {
      let response = await chatService.resolveOrder(id);
      console.log(response)
      return response;
    },

    addMessage(message) {
      this.listMessages.push(message);
    },

    currentChat(chat) {
      this.currentChat = chat;
    }

  }
})

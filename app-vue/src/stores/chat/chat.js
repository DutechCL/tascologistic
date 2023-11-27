import { defineStore } from 'pinia';
import { useChatApi } from '../../services/ChatApiService.js'; 
import constants from '../../constants/constants.js';

const chatService = useChatApi();

export const useChat = defineStore('useChat', {
  state: () => ({ 
    listChat: [],
    listMessages: [],
    currentChat: {},   
    currentUser: {},      
    currentOrder: {},   
  }),
  getters: {
    messages: (state) => state.listMessages, 
    user: (state) => state.currentUser,
    order: (state) => state.currentOrder
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
      this.currentUser = response.data;
      return response.data;
    },

    async getOrders() {
      let response = await chatService.getOrders();
      this.currentOrder = response.data;
      return response.data;
    },

    async showChat(id){
      let response = await chatService.showChat(id);
      this.currentOrder = response.data;
      return response.data;
    },
  }
})

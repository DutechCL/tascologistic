import { defineStore } from 'pinia';
import axios from 'axios';
import { getWithToken } from "../services/ApiService";

export const useAuthStore = defineStore('auth', {
  state: () => ({ 
      authUser: null,     
      authToken: localStorage.getItem('token'),     
  }),
  getters: {
    user: (state) => state.authUser,
    token: (state) => state.authToken
  },
  actions: {
    async getToken() {
      return await getWithToken('sanctum/csrf-cookie');
    },
    async login(email, password) {
      const data = await axios.post('/api/v1/login', {
          email,
          password
      });
      this.authToken = data.data.token;
      localStorage.setItem('token', this.authToken);
    },
  }
})

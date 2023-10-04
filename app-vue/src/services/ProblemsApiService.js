
import { defineStore } from 'pinia';
import { getWithToken, postWithToken } from "./ApiService.js";

export const useProblems = defineStore('problems', {
    state: () => ({ 
        listProblems: [],              
    }),
    getters: {
      problems: (state) => state.listProblems,
    },
    actions: {
        async getProblems (type) 
        {
          const body = {
            type: type
          }
            const response = await postWithToken('api/v1/problems', body)

            this.listProblems = response

            return response
        },
      }
});


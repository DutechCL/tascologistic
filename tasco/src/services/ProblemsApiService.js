
import { defineStore } from 'pinia';
import { getWithToken } from "./ApiService.js";

export const useProblems = defineStore('problems', {
    state: () => ({ 
        listProblems: [],              
    }),
    getters: {
      problems: (state) => state.listProblems,
    },
    actions: {
        async getProblems () 
        {
            const response = await getWithToken('api/v1/problems')

            this.listProblems = response

            return response
        },
      }
});


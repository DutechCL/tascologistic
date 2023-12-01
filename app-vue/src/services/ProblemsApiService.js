
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
          if(this.listProblems.length === 0){
            this.listProblems = await postWithToken('api/v1/problems', {type: type})
          }
        },
      }
});


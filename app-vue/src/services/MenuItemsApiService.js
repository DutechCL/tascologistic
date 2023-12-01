import { defineStore } from 'pinia';
import { getWithToken } from "./ApiService.js";

export const useMenuItems = defineStore('menuItems', {
    state: () => ({ 
        menuItems: [],         
    }),
    getters: {
        menu: (state) => state.menuItems,
    },
    actions: {
        async getMenuItems() {
            let response = await getWithToken('api/v1/menu-items');
            this.menuItems = response.data;
        },
    }
});

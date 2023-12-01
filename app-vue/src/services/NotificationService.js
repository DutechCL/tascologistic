import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: 0,
  }),
  actions: {
    incrementNotifications() {
      this.notifications++;
      this.playNotificationSound();
    },
    resetNotifications() {
      this.notifications = 0;
    },
    playNotificationSound(){
        const sound = new Audio('/sound/notification.mp3');
        sound.play();
    }
  },
});
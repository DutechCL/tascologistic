import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
import "@/assets/css/tailwind.css";

//import "primevue/resources/themes/soho-light/theme.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';

import './axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.use(ConfirmationService)
app.component('Toast',  Toast);

app.mount('#app')

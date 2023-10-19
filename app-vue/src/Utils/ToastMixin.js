import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';

export const ToastMixin = {
  setup() {
    const toast = useToast();

    const showToast = (data) => {
      toast.add({
        severity: data.status,
        summary: data.title || '',
        detail: data.message,
        life: data.time || 3000,
      });
    };

    // Para garantizar que el servicio de toasts esté disponible cuando se monta el componente
    onMounted(() => {
      toast;
    });

    return {
      showToast,
    };
  },
};
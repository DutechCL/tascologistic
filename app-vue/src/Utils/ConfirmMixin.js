import { onMounted } from 'vue';
import { useConfirm } from 'primevue/useconfirm';

export const ConfirmMixin = {
  setup() {
    const confirm = useConfirm();

    const showConfirm = (data) => {
      return new Promise((resolve, reject) => {
        confirm.require({
          message: data?.message || '¿Estás seguro de que quieres continuar?',
          header: 'Confirmación',
          icon: 'pi pi-exclamation-triangle',
          acceptIcon: 'pi pi-check',
          rejectIcon: 'pi pi-times',
          acceptLabel: 'Si',
          rejectLabel: 'No',
          accept: () => {
            resolve(true); // Resuelve la promesa con true cuando se acepta
          },
          reject: () => {
            resolve(false); // Resuelve la promesa con false cuando se rechaza
          },
        });
      });
    };

    onMounted(() => {
      // Puedes realizar acciones adicionales al montar el componente mixin si es necesario
    });

    return {
      showConfirm,
    };
  },
};

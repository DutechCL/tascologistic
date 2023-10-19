
import { ref } from 'vue';

export function UseDialogs() {

    const visible = ref(false)
    const selectedOrder = ref({})
    const currentDialog = ref('')

    const openDialog = (type, data) => {
        currentDialog.value = type;
        visible.value = true;
        selectedOrder.value = { ...data };
    };
      
    const closeDialog = ({ value }) => {
        if (!value) {
            selectedOrder.value = {}
            visible.value = visible.visible;
        }
    };
      
  return {
    visible,
    selectedOrder,
    currentDialog,
    openDialog,
    closeDialog,
  };
}

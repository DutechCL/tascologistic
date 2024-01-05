<template>
    <Dialog modal header=" " :style="{ width: '70vw' }">
      <div>
          <h1 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
              <i class="pi pi-info-circle rotate-180 !text-xl"></i>
                Medios de pago
            </h1>
            <p v-if="!ordersPayment.customer"  class="mb-4 text-primary-900 font-inter font-medium text-md">
                Factura N° {{ ordersPayment.order.DocNum }}
            </p>
      </div>
      <div class="flex justify-between" style="width: 80%;">
          <div  class="mt-2 mb-1 " style="max-width: 300px !important;">
              <p v-if="!ordersPayment.customer" >Cliente: <span  class="text-primary-900 font-semi-bold">{{ ordersPayment.order.Customer.CardName }}</span></p>
              <p v-if="ordersPayment.customer">Cliente: <span  class="text-primary-900 font-semi-bold">{{ ordersPayment.customer.CardName }}</span></p>
          </div>
          <div v-if="!ordersPayment.customer" class="mt-2 mb-1 ">
            <p>Monto total: <span class="text-primary-900 font-semi-bold">{{ ordersPayment.order.DocTotal }}</span></p>
        </div>
        <div v-if="!ordersPayment.customer" class="mt-2 mb-1 ">
            <p>Fecha: <span class="text-primary-900 font-semi-bold">{{ ordersPayment.order.DocDate }}</span></p>
        </div>
      </div>

      <div class="mt-4 flex justify-between align-center">
        <div class="w-9/12">
          <p class="mb-1">Selecciona el método de pago</p>
          <Dropdown v-model="selectedMethod" :options="methodsPayment" optionLabel="name" placeholder="Selecciona el método de pago" class="w-full md:w-14rem" />
        </div>
        <Button :icon="'pi pi-plus'" label="Agregar"  class="!py-2 !border-none !bg-primary-900"  @click="addPaymentMethod"/>
      </div>

      <div v-if="selectedPaymentMethods.length > 0">
        <p class="py-5">Aquí puedes navegar a través de los métodos de pagos</p>
        <ul class="grid grid-cols-5">
          <li class="!bg-cyan-500 !mr-3 !p-3 flex justify-between shadow-lg mt-3" v-for="method in selectedPaymentMethods" :key="method.name">
            <RadioButton v-model="checkedMethod" :inputId="method.idMethod" @change="methodCheckedInputs(method.idMethod)" name="method" :value="method.name" />
            <label :for="method.idMethod" class="ml-2">{{ method.name }}</label>
            <!-- Botón para eliminar -->
            <button @click="removeMethod(method.idMethod)" class="delete-btn" 
              style="border-radius: 50%; border: 1px solid; width: 25px; height: 25px;
            ">X</button>
          </li>
        </ul>
      </div>
    

    <!-- ... -->
    <div v-if="methodChecked" class="py-8">
      <!-- ... -->
      <div class="grid grid-cols-2">
        <div v-for="({key, type, label}, index) in methodChecked.inputs" :key="index" class="flex flex-col p-2">
          <label :for="key">{{ label }}</label>
          <InputText 
            :type="type" 
            :name="key" 
            :id="key" 
            :value="inputValues[methodChecked.idMethod][key]" 
            :required="required" 
            :pattern="pattern"
            inputmode="numeric"
            @input="updateInputValue(methodChecked.idMethod, key, $event.target.value)" 
            @keydown="type === 'number' ? onlyNumbers($event) : null"/>
        </div>   
      </div>
    </div>
      
      
      <Button label="Pagar"  @click="processPayment" class="!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"/>
  </Dialog>
  </template>
  
  <script setup>
  import { onBeforeMount, ref, watch } from 'vue'
  import Dialog from 'primevue/dialog'
  import Dropdown from 'primevue/dropdown'
  import Button from 'primevue/button'
  import RadioButton from 'primevue/radiobutton';
  import InputText from 'primevue/inputtext';
  import { useOrdersPayment } from '../../../stores/orders/ordersPayments.js';
  import { ToastMixin } from '../../../Utils/ToastMixin';
  import { ConfirmMixin } from '../../../Utils//ConfirmMixin';

  const { showToast } = ToastMixin.setup();
  const { showConfirm } = ConfirmMixin.setup();
  const ordersPayment = useOrdersPayment();
  const selectedMethod = ref();
  const selectedPaymentMethods = ref([]);
  const checkedMethod = ref('');
  const methodChecked = ref('');
  const inputValues = ref({});
  
  const methodsPayment = ref([
      { idMethod: 2, name: 'Transferencia', inputs: [
        { 
          key: 'methodTranfer-accountMayor',
          type: 'number',
          label: 'Cuenta de mayor',
          required: true,
          pattern: /^\d+$/ 
        },
        { 
          key: 'methodTranfer-date',
          type: 'date',
          label: 'Fecha de transferencia',
          required: true,
          pattern: null 
        },
        {
          key: 'methodTranfer-number',
          type: 'number',
          label: 'N° de transferencia',
          required: true,
          pattern: null 
        },
        {
          key: 'methodTranfer-import',
          type: 'number',
          label: 'Importe total',
          required: true,
          pattern: null 
        },
       
      ]},
      { idMethod: 3, name: 'Transbank - Webpay', inputs: [
        {
          key: 'webpay-nameCard',
          type: 'number',
          label: 'Nombre de tajeta',
          required: true,
          pattern: null 
        },
        {
          key: 'webpay-accountCardMayor',
          type: 'number',
          label: 'Cuenta de mayor',
          required: true,
          pattern: null 
        },
        {
          key: 'webpay-numberCard',
          type: 'number',
          label: 'N° de la tarjeta',
          required: true,
          pattern: null 
        },
        {
          key: 'webpay-validityFrom',
          type: 'date',
          label: 'Válido hasta',
          required: true,
          pattern: null 
        },
        {
          key: 'webpay-day',
          type: 'text',
          label: 'N° Dia (D, B, G, C)',
          required: true,
          pattern: null 
        },
        {
          key: 'webpay-quotas',
          type: 'number',
          label: 'Cantidad de cuotas',
          required: true,
          pattern: null 
        },
        {
          key: 'webpay-quantityPayments',
          type: 'number',
          label: 'Cantidad de pagos',
          required: true,
          pattern: null 
        },
        {
          key: 'webpay-documentCard',
          type: 'text',
          label: 'Partir documento de tarjeta',
          required: true,
          pattern: null 
        },
        {
          key: 'webpay-firstPayment',
          type: 'text',
          label: 'Primer pago parcial',
          required: true,
          pattern: null 
        },
        {
          key: 'webpay-aditionalPayment',
          type: 'number',
          label: 'Cada pago adicional',
          required: true,
          pattern: null 
        }
      ]},
      { idMethod: 4, name: 'Cheque',inputs: [
        {
          key: 'cheque-import',
          type: 'number',
          label: 'Importe',
          required: true,
          pattern: null 
        },
        {
          key: 'cheque-date',
          type: 'date',
          label: 'Fecha de vencimiento',
          required: true,
          pattern: null 
        },
        {
          key: 'cheque-bank',
          type: 'select',
          label: 'Banco',
          required: true,
          pattern: null 
        },
        {
          key: 'cheque-number',
          type: 'number',
          label: 'N° de cheque',
          required: true,
          pattern: null 
        }
       
      ] },
      { idMethod: 5, name: 'Efectivo',inputs: [
        {
          key: 'efectivo-accountMayor',
          type: 'number',
          label: 'Cuenta de mayor',
          required: true,
          pattern: null 
        },
        {
          key: 'efectivo-importTotal',
          type: 'number',
          label: 'Monto a pagar',
          required: true,
          pattern: null 
        },
      ] },
      { idMethod: 6, name: 'Cuenta corriente',inputs: [
      {
          key: 'cuentacorriente-accountClient',
          type: 'number',
          label: 'Código de cliente',
          required: true,
          pattern: null 
        },
        {
          key: 'cuentacorriente-importTotal',
          type: 'number',
          label: 'Monto a pagar',
          required: true,
          pattern: null 
        },
        
       
      ] },
      { idMethod: 7, name: 'Saldo a favor', inputs: [
      {
          key: 'saldoafavor-date',
          type: 'date',
          label: 'Fecha del pago',
          required: true,
          pattern: null 
        },
        {
          key: 'saldoafavor-importTotal',
          type: 'number',
          label: 'Monto a pagar',
          required: true,
          pattern: null 
        },
        
        
      ]}
  ]);

  function resetInputValues() {
    // Reinicia inputValues con la misma estructura, pero con valores vacíos
    const newInputValues = {};
    methodsPayment.value.forEach(method => {
      newInputValues[method.idMethod] = {};
      method.inputs.forEach(input => {
        newInputValues[method.idMethod][input.key] = '';
      });
    });
    inputValues.value = newInputValues;
  }

  function updateInputValue(methodId, inputKey, value) {
    inputValues.value[methodId][inputKey] = value;
  }

  const onlyNumbers = (event) => {
    if (event.target.type !== 'number') {
      return;
    }

    if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key) || event.key === 'e') {
      event.preventDefault();
    }
  };


  const removeMethod = (method) => {
    selectedPaymentMethods.value = selectedPaymentMethods.value.filter(methods => methods.idMethod !== method);
    methodChecked.value = '';
    checkedMethod.value = null;
  }
  const addPaymentMethod = () => {
    if (selectedMethod.value && !selectedPaymentMethods.value.some(method => method.name === selectedMethod.value.name)) {
      selectedPaymentMethods.value.push(selectedMethod.value);
      selectedMethod.value = null; 
    }
  };

  const methodCheckedInputs = (selectId) => {
    methodChecked.value = methodsPayment.value.find(method => method.idMethod === selectId);
  }

    const isValidPaymentData = () => {
    for (const method of selectedPaymentMethods.value) {
      for (const input of method.inputs) {
        const value = inputValues.value[method.idMethod][input.key];
        if (input.required && (value === '' || value === null)) {
          // Mostrar algún mensaje de error o marcar el campo como inválido
          return false;
        }
        if (input.pattern && value && !new RegExp(input.pattern).test(value)) {
          // Mostrar algún mensaje de error o marcar el campo como inválido
          return false;
        }
      }
    }
    return true;
  };


  const  processPayment = async () => {
    if (selectedPaymentMethods.value.length === 0) {
      showToast({
        status: 'error',
        message: 'Debe seleccionar al menos un método de pago',
      });
      return;
    }

    if (!isValidPaymentData()) {
      showToast({
        status: 'error',
        message: 'Complete todos los campos requeridos',
      });
      return;
    }
    
    let data = {};
    const paymentData = [];

    selectedPaymentMethods.value.forEach(method => {
      const methodData = {
        idMethod: method.idMethod,
        name: method.name,
        inputs: {}
      };

      method.inputs.forEach(input => {
        methodData.inputs[input.key] = inputValues.value[method.idMethod][input.key];
      });

      paymentData.push(methodData);
    });

    data.orderId =   ordersPayment.order ? ordersPayment.order.id : null;
    data.customerId =  ordersPayment.customer ? ordersPayment.customer.id : null;
    data.paymentData = paymentData;

    console.log(data);

    await ordersPayment.processPayment(data).then(response => {
      showToast({
        status: response.status,
        message: response.message,
      });
    }).catch(error => {
      showToast({
        status: error.response.data.status,
        message: error.response.data.message,
      });
    });

  }

  onBeforeMount(() => {
    resetInputValues();
  });

  watch(() => [ordersPayment.order, ordersPayment.customer], (value) => {
    if (value) {
      selectedMethod.value = null;
      selectedPaymentMethods.value = [];
      checkedMethod.value = '';
      methodChecked.value = '';
      resetInputValues();
    }
  })
  </script>
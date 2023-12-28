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
          <li class="!bg-cyan-500 !mr-3 !p-3 flex justify-between shadow-lg" v-for="method in selectedPaymentMethods" :key="method.name">
            <RadioButton v-model="checkedMethod" :inputId="method.idMethod" @change="methodCheckedInputs(method.idMethod)" name="method" :value="method.name" />
            <label :for="method.idMethod" class="ml-2">{{ method.name }}</label>
            <!-- Botón para eliminar -->
            <button @click="removeMethod(method.idMethod)" class="delete-btn">X</button>
          </li>
        </ul>
      </div>
    

    <!-- ... -->
    <div v-if="methodChecked" class="py-8">
      <!-- ... -->
      <div class="grid grid-cols-2">
        <div v-for="({key, type, label}, index) in methodChecked.inputs" :key="index" class="flex flex-col p-2">
          <label :for="key">{{ label }}</label>
          <InputText :type="type" :name="key" :id="key" :value="inputValues[methodChecked.idMethod][key]" @input="updateInputValue(methodChecked.idMethod, key, $event.target.value)" />
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
          label: 'Cuenta de mayor'
        },
        { 
          key: 'methodTranfer-date',
          type: 'date',
          label: 'Fecha de transferencia'
        },
        {
          key: 'methodTranfer-number',
          type: 'number',
          label: 'N° de transferencia'
        },
        {
          key: 'methodTranfer-import',
          type: 'number',
          label: 'Importe total'
        },
       
      ]},
      { idMethod: 3, name: 'Transbank - Webpay', inputs: [
        {
          key: 'webpay-nameCard',
          type: 'number',
          label: 'Nombre de tajeta'
        },
        {
          key: 'webpay-accountCardMayor',
          type: 'number',
          label: 'Cuenta de mayor'
        },
        {
          key: 'webpay-numberCard',
          type: 'number',
          label: 'N° de la tarjeta'
        },
        {
          key: 'webpay-validityFrom',
          type: 'date',
          label: 'Válido hasta'
        },
        {
          key: 'webpay-day',
          type: 'text',
          label: 'N° Dia (D, B, G, C)'
        },
        {
          key: 'webpay-quotas',
          type: 'number',
          label: 'Cantidad de cuotas'
        },
        {
          key: 'webpay-quantityPayments',
          type: 'number',
          label: 'Cantidad de pagos'
        },
        {
          key: 'webpay-documentCard',
          type: 'text',
          label: 'Partir documento de tarjeta'
        },
        {
          key: 'webpay-firstPayment',
          type: 'text',
          label: 'Primer pago parcial'
        },
        {
          key: 'webpay-aditionalPayment',
          type: 'number',
          label: 'Cada pago adicional'
        }
      ]},
      { idMethod: 4, name: 'Cheque',inputs: [
        {
          key: 'cheque-import',
          type: 'number',
          label: 'Importe'
        },
        {
          key: 'cheque-date',
          type: 'date',
          label: 'Fecha de vencimiento'
        },
        {
          key: 'cheque-bank',
          type: 'select',
          label: 'Banco'
        },
        {
          key: 'cheque-number',
          type: 'number',
          label: 'N° de cheque'
        }
       
      ] },
      { idMethod: 5, name: 'Efectivo',inputs: [
        {
          key: 'efectivo-accountMayor',
          type: 'number',
          label: 'Cuenta de mayor'
        },
        {
          key: 'efectivo-importTotal',
          type: 'number',
          label: 'Monto a pagar'
        },
      ] },
      { idMethod: 6, name: 'Cuenta corriente',inputs: [
      {
          key: 'cuentacorriente-accountClient',
          type: 'number',
          label: 'Código de cliente'
        },
        {
          key: 'cuentacorriente-importTotal',
          type: 'number',
          label: 'Monto a pagar'
        },
        
       
      ] },
      { idMethod: 7, name: 'Saldo a favor', inputs: [
      {
          key: 'saldoafavor-date',
          type: 'date',
          label: 'Fecha del pago'
        },
        {
          key: 'saldoafavor-importTotal',
          type: 'number',
          label: 'Monto a pagar'
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

  const removeMethod = (method) => {
    selectedPaymentMethods.value = selectedPaymentMethods.value.filter(methods => methods.idMethod !== method);
    methodChecked.value = '';
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

  const  processPayment = async () => {
    // ordersPayment.showDialog = false
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
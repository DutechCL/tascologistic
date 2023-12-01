<template>
    <Dialog modal header=" " :style="{ width: '70vw' }">
      <div>
          <h1 class="mb-4 text-primary-900 font-inter font-semibold text-xl">
              <i class="pi pi-info-circle rotate-180 !text-xl"></i>
                Medios de pago
            </h1>
            <p class="mb-4 text-primary-900 font-inter font-medium text-md">
                Factura N° {{ ordersPayment.order.DocNum }}
            </p>
      </div>
      <div class="flex justify-between" style="width: 80%;">
          <div class="mt-2 mb-1 " style="max-width: 300px !important;">
              <p>Cliente: <span class="text-primary-900 font-semi-bold">{{ ordersPayment.order.Customer.CardName }}</span></p>
          </div>
          <div class="mt-2 mb-1 ">
            <p>Monto total: <span class="text-primary-900 font-semi-bold">{{ ordersPayment.order.DocTotal }}</span></p>
        </div>
        <div class="mt-2 mb-1 ">
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

      <div v-if="selectedPaymentMethods.length > 0" >
        <p class="py-5">Aquí puedes navegar a través de los métodos de pagos</p>
        <ul class="grid grid-cols-5">
          <li class="!bg-cyan-500 shadow-lg  !mr-3 !p-3" v-for="method in selectedPaymentMethods" :key="method.name">
            <RadioButton v-model="checkedMethod" :inputId="method.idMethod" @change="methodCheckedInputs(method.idMethod)" name="method" :value="method.name" />
          <label :for="method.idMethod" class="ml-2">{{ method.name }}</label>
           
          </li>
        </ul>
      </div>

      <div v-if="methodChecked" class="py-8 ">
        <p class="text-primary-900 font-inter font-medium text-md">Datos de pago</p>
        <div  class="grid grid-cols-2">
          <div v-for="({key, type, label}, index) in methodChecked.inputs" :key="index" class="flex flex-col p-2">
            <label :for="key">{{ label }}</label>
            <InputText :type="type" :name="key"  v-model="value" :aria-describedby="key" />
            <!-- <small :id="keu">Enter your username to reset your password.</small> -->
          </div>   
        </div>
      </div>
      
      
      <Button label="Cerrar"  @click="ordersPayment.showDialog = false" class="!py-2 !border-none !px-10 !bg-primary-900 float-right mt-5"/>
  </Dialog>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
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

  
  const methodsPayment = ref([
      { idMethod: 1, name: 'BCI pagos', inputs: [
        {
          key: 'bci1',
          type: 'number',
          label: 'N° de la tarjeta'
        },
        {
          key: 'bci2',
          type: 'date',
          label: 'Válido hasta'
        },
        {
          key: 'bci3',
          type: 'text',
          label: 'N° Dia (D, B, G, C)'
        },
        {
          key: 'bci4',
          type: 'number',
          label: 'Cantidad de cuotas'
        },
        {
          key: 'bci5',
          type: 'number',
          label: 'Cantidad de pagos'
        },
        {
          key: 'bci6',
          type: 'text',
          label: 'Partir documento de tarjeta'
        },
        {
          key: 'bci7',
          type: 'number',
          label: 'Primer pago parcial'
        },
        {
          key: 'bci8',
          type: 'number',
          label: 'Cada pago adicional'
        }

        
      ]},
      { idMethod: 2, name: 'Transferencia', inputs: [
        { 
          key: 'transferencia1',
          type: 'date',
          label: 'Fecha de transferencia'
        },
        {
          key: 'transferencia2',
          type: 'number',
          label: 'N° de transferencia'
        },
        {
          key: 'transferencia3',
          type: 'number',
          label: 'Importe total'
        },
       
      ]},
      { idMethod: 3, name: 'Web pay', inputs: [
      {
          key: 'webpay1',
          type: 'number',
          label: 'N° de la tarjeta'
        },
        {
          key: 'webpay2',
          type: 'date',
          label: 'Válido hasta'
        },
        {
          key: 'webpay3',
          type: 'text',
          label: 'N° Dia (D, B, G, C)'
        },
        {
          key: 'webpay4',
          type: 'number',
          label: 'Cantidad de cuotas'
        },
        {
          key: 'webpay5',
          type: 'number',
          label: 'Cantidad de pagos'
        },
        {
          key: 'webpay6',
          type: 'text',
          label: 'Partir documento de tarjeta'
        },
        {
          key: 'webpay7',
          type: 'number',
          label: 'Primer pago parcial'
        },
        {
          key: 'webpay8',
          type: 'number',
          label: 'Cada pago adicional'
        }
      ]},
      { idMethod: 4, name: 'Cheque',inputs: [
        {
          key: 'cheque1',
          type: 'number',
          label: 'Importe'
        },
        {
          key: 'cheque2',
          type: 'date',
          label: 'Fecha de vencimiento'
        },
        {
          key: 'cheque3',
          type: 'select',
          label: 'Banco'
        },
        {
          key: 'cheque4',
          type: 'number',
          label: 'N° de cheque'
        }
       
      ] },
      { idMethod: 5, name: 'Efectivo',inputs: [
        {
          key: 'efectivo1',
          type: 'number',
          label: 'Monto a pagar'
        },
       
        
      ] },
      { idMethod: 6, name: 'Cuenta corriente',inputs: [
      {
          key: 'cuentacorriente1',
          type: 'number',
          label: 'Código de cliente'
        },
        {
          key: 'cuentacorriente2',
          type: 'number',
          label: 'Monto a pagar'
        },
        
       
      ] },
      { idMethod: 7, name: 'Saldo a favor', inputs: [
      {
          key: 'saldoafavor1',
          type: 'date',
          label: 'Fecha del pago'
        },
        {
          key: 'saldoafavor2',
          type: 'number',
          label: 'Monto a pagar'
        },
        
        
      ]}
  ]);

  const addPaymentMethod = () => {
    if (selectedMethod.value && !selectedPaymentMethods.value.some(method => method.name === selectedMethod.value.name)) {
      selectedPaymentMethods.value.push(selectedMethod.value);
      selectedMethod.value = null; 
    }
  };

  const methodCheckedInputs = (selectId) => {
    methodChecked.value = methodsPayment.value.find(method => method.idMethod === selectId);
  }

  watch(() => ordersPayment.order, (value) => {
    if (value) {
      selectedMethod.value = null;
      selectedPaymentMethods.value = [];
      checkedMethod.value = '';
      methodChecked.value = '';
    }
  })


  </script>
<template>
  <div class="card flex flex-wrap justify-content-center gap-3">
      <span class="p-input-icon-left relative">
        <i class="pi pi-search absolute !top-5  " style="color: #259BD7"/>
        <InputText class="!py-2 !rounded-xl !bg-secundary-300 !border-none" v-model="inputSearch" placeholder="Buscar" />
      </span>
  </div>
</template>

<script setup>
  import { ref,defineEmits, watch} from 'vue'
  import InputText from 'primevue/inputtext'
  import { useOrders } from '../../services/OrdersApiService'
  import { useOrdersPayment } from '../../stores/orders/ordersPayments';
  import _ from 'lodash';

  const ordersPayment = useOrdersPayment();
  const ordersStore = useOrders();
  const props = defineProps({
    customers: Object,
    orders: Object,
    type: String,
    warehouses: String,
    methodShipping: String
  })
  const orders = ref(props.orders);
  const allOrders = ref(props.orders);
  const customers = ref(props.customers);
  const allCustomers = ref(props.customers);
  const inputSearch = ref(null)
  const emit = defineEmits();

  watch(() => props.orders, (value) => {
    orders.value = value;
    allOrders.value = value;
  })

  watch(() => props.customers, (value) => {
    customers.value = value;
    allCustomers.value = value;
  })

  watch(
    () => inputSearch.value, 
    (data) => {
      debouncedSearch(data)
  })

  const debouncedSearch = _.debounce(async (value) => {
    let result = [];

    if (props.type === 'customers') {
      result = filterData(allCustomers.value, value, 'customers');
    } else {
      result = filterData(allOrders.value, value, 'orders');
    }

    if (result.length > 0) {
      emitSearchResult(result);
    } else {
      fetchFromServer(value);
    }
  }, 300); // 300ms de delay

  function filterData(data, query, type) {
    return data.filter(item => {
      if (type === 'customers') {
        return item.CardCode.toString().includes(query.toString()) || 
              item.CardName.toLowerCase().includes(query.toLowerCase());
      } else {
        return item.DocNum.toString().includes(query.toString()) ||
              item.DocEntry.toString().includes(query.toString()) ||
              item.Customer.CardName.toLowerCase().includes(query.toLowerCase());
      }
    });
  }

  function emitSearchResult(result) {
    if (props.type === 'customers') {
      emit('search', { 'customers': result });
    } else {
      emit('search', { 'orders': result });
    }
  }

  async function fetchFromServer(value) {
    let body = { search: value };
    
    if (props.type !== 'customers') {
      body = { ...body, type: props.type, warehouses: props.warehouses, methodShipping: props.methodShipping };
    }

    try {
      const response = props.type === 'customers' ? 
                      await ordersPayment.searchCustomers(body) : 
                      await ordersStore.searchOrders(body);

      emitSearchResult(response.data);
    } catch (error) {
      console.error("Error al buscar en el servidor:", error);
    }
  }

</script>
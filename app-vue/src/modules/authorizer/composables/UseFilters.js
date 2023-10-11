
import { ref, watch } from 'vue';
import { isWithinInterval } from 'date-fns';

export function useFilters(ListordersManager) {

  const METHOD_SHIPPING_HERE = 1;

  const datesHere = ref(null);
  const dateLabelHere = ref(true);
  const selectedDocNumHere = ref([])
  const selectedDocTimeHere = ref([])
  const selectedCustomerHere = ref([])
  const selectedDocTotalHere = ref([])
  const datesPickup = ref(null);
  const dateLabelPickup = ref(true);
  const selectedDocNumPickup = ref([])
  const selectedDocTimePickup = ref([])
  const selectedCustomerPickup = ref([])
  const selectedDocTotalPickup = ref([])
  const ordersHere = ref(ListordersManager.value.filter(order => order.MethodShippingId === METHOD_SHIPPING_HERE));
  const ordersPickupAndDelivery = ref(ListordersManager.value.filter(order => order.MethodShippingId !== METHOD_SHIPPING_HERE));
  const allOrdersPickupAndDelivery = ref(ordersPickupAndDelivery.value);
  const allOrdersHere = ref(ordersHere.value);

  watch(() => ListordersManager.value, (newListOrders) => {
    ordersHere.value = newListOrders.filter(order => order.MethodShippingId === METHOD_SHIPPING_HERE);
    ordersPickupAndDelivery.value = newListOrders.filter(order => order.MethodShippingId !== METHOD_SHIPPING_HERE);
    allOrdersPickupAndDelivery.value = ordersPickupAndDelivery.value;
    allOrdersHere.value = ordersHere.value;
  });

  // Métodos para filtrar por fecha
  watch([datesHere, datesPickup], (data) => {
    const isDatesHereValid = datesHere.value !== null && datesHere.value.every(date => date !== null);
    const isDatesPickupValid = datesPickup.value !== null && datesPickup.value.every(date => date !== null);

    if (isDatesHereValid) {
      filterOrders('Here', datesHere.value);
      dateLabelHere.value = false;
    } else if (isDatesPickupValid) {
      filterOrders('Pickup', datesPickup.value);
      dateLabelPickup.value = false;
    }
  });

  function filterOrders(type, dates) {
    const targetOrders = (type === 'Here') ? ordersHere : ordersPickupAndDelivery;
    const allOrders = (type === 'Here') ? allOrdersHere.value : allOrdersPickupAndDelivery.value;

    targetOrders.value = filterOrdersByDateRange(dates, allOrders);
  }

  function filterOrdersByDateRange(dates, allOrders) {
    return allOrders.filter(order => {
      const orderDate = new Date(order.DocDate);
      const start = new Date(dates[0]);
      const end = new Date(dates[1]);

      orderDate.setUTCHours(0, 0, 0, 0);
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCHours(0, 0, 0, 0);

      return isWithinInterval(orderDate, { start, end });
    });
  }

  function removeFilterDate(data) {
    if (data === 'Here') {
      datesHere.value = null;
      dateLabelHere.value = true;
      ordersHere.value = allOrdersHere.value;
    } else {
      datesPickup.value = null;
      dateLabelPickup.value = true;
      ordersPickupAndDelivery.value = allOrdersPickupAndDelivery.value;
    }
  }

  
  // filtros de select multiples
const watchFilters = (filters, typeOrders) => {
  filters.forEach((filter) => {
    watch(filter, (data) => {
      filterData(data, typeOrders);
    });
  });
};

const filterData = (data, typeOrders) => {
  const targetOrders = typeOrders === 'Here' ? ordersHere : ordersPickupAndDelivery;
  const filterCondition = (typeOrders === 'Here')
    ? (order) => order.MethodShippingId === METHOD_SHIPPING_HERE
    : (order) => order.MethodShippingId !== METHOD_SHIPPING_HERE;

  targetOrders.value = (data.length === 0)
    ? ListordersManager.value.filter(filterCondition)
    : data.filter(filterCondition);
};

watchFilters([selectedDocNumPickup, selectedCustomerPickup, selectedDocTimePickup, selectedDocTotalPickup], 'Pickup');
watchFilters([selectedDocNumHere, selectedCustomerHere, selectedDocTimeHere, selectedDocTotalHere], 'Here');

//buscador 

const search = (value) => {
  ordersPickupAndDelivery.value = filterOrdersByNumberAndName(allOrdersPickupAndDelivery.value, value)
  ordersHere.value = filterOrdersByNumberAndName(allOrdersHere.value, value)
}
  
function filterOrdersByNumberAndName(orders, data) {
  return orders.filter(order => 
    order.DocNum.toString().includes(data.value.toString())  || 
    order.Customer.CardName.toLowerCase().includes(data.value.toLowerCase())
  );
}

  return {
    datesHere,
    datesPickup,
    dateLabelHere,
    dateLabelPickup,
    ordersHere,
    ordersPickupAndDelivery,
    allOrdersPickupAndDelivery,
    selectedDocNumPickup,
    selectedDocTimePickup,
    selectedCustomerPickup,
    selectedDocTotalPickup,
    selectedDocNumHere,
    selectedDocTimeHere,
    selectedCustomerHere,
    selectedDocTotalHere,
    removeFilterDate,
    search
  };
}


import { ref, watch } from 'vue';
import { isWithinInterval } from 'date-fns';
import { ToastMixin } from '../../../Utils/ToastMixin';

export function UseFiltersMultiSelect(ListordersManager) {

  const { showToast } = ToastMixin.setup();

  const dates = ref(null);
  const dateLabel = ref(true);
  const DocNum = ref([])
  const DocTime = ref([])
  const Customer = ref([])
  const DocTotal = ref([])
  const isFiltersEmpty = ref(true);
  const orders = ref(ListordersManager.value);
  const oldOrders = ref([]);

  watch([dates], (data) => {
    const isDatesValid = dates.value !== null && dates.value.every(date => date !== null);
    if (isDatesValid) {
      filterOrders(dates.value);
      dateLabel.value = false;
    }
  });

  function filterOrders(dates) {
    let result = filterOrdersByDateRange(dates, orders.value)
    if(result.length > 0){
      orders.value = result
    }else{
      orders.value = orders.value
      showToast({
        status: 'info',
        title: 'Sin resultados',
        message: 'No hay resultados para el intervalo de tiempo seleccionado',
        time: 6000,
      });
    }
  }

  function filterOrdersByDateRange(dates, orders) {
    return orders.filter(order => {
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
      dates.value = null;
      dateLabel.value = true;
      if (isFiltersEmpty.value) {
        orders.value =  ListordersManager.value;
      }
      
  }

const watchFilters = (filters) => {
  filters.forEach((filter) => {
    watch(filter, (data) => {
      filterData(data);
    });
  });
};

watch([DocNum, Customer, DocTime, DocTotal], (data) => {
  isFiltersEmpty.value = data.every((filter) => filter.length === 0);
  console.log(isFiltersEmpty.value);
});

const filterData = (data) => {
  if(data.length === 0){    
    if (isFiltersEmpty.value) {
      orders.value =  ListordersManager.value;
      if (dates.value !== null && dates.value.every(date => date !== null)) {
        filterOrders(dates.value);
        dateLabel.value = false;
      }
    }
  }else{
    orders.value = data;
  }
};

watchFilters([DocNum, Customer, DocTime, DocTotal]);

  return {
    dates,
    dateLabel,
    orders,
    DocNum,
    DocTime,
    Customer,
    DocTotal,
    removeFilterDate,
  };
}

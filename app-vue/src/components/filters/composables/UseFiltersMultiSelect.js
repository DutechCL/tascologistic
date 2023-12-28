
import { ref, watch, onBeforeMount } from 'vue';
import { isWithinInterval } from 'date-fns';
import { ToastMixin } from '../../../Utils/ToastMixin';
import { useOrdersDispatch } from "../../../stores/orders/ordersDispatch";
import { arSA } from 'date-fns/locale';

export function UseFiltersMultiSelect(ListordersManager) {

  const { showToast } = ToastMixin.setup();
  const ordersStore = useOrdersDispatch();

  const dates = ref(null)
  const dateLabel = ref(true)
  const DocEntry = ref([])
  const DocNum = ref([])
  const DocTime = ref([])
  const Customer = ref([])
  const DocTotal = ref([])
  const Warehouse = ref([])
  const Warehouses = ref([])
  const isFiltersEmpty = ref(true);
  const timeLabel = ref('Hora de Emisión');
  const orders = ref(ListordersManager.value);


  // Variables reactivas
  const startDateTime = ref(null);
  const endDateTime = ref(null);
  const showDateTimeFields = ref(false);
  const selectedTime = ref(false);

  // Función para toggle de los campos
  const toggleDateTimeFields = () => {
      showDateTimeFields.value = !showDateTimeFields.value;
  };

  const applyFilter = () => {
      if (startDateTime.value && endDateTime.value) {
        let timeRange = [startDateTime.value, endDateTime.value];
        let result = filterOrdersByTimeRange(timeRange, orders.value);

        if(result.length > 0){
          orders.value = result
          const startTime = startDateTime.value.toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit', hour12: false });
          const endTime = endDateTime.value.toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit', hour12: false });
          timeLabel.value = `${startTime} - ${endTime}`;
          selectedTime.value = true;
        }else{
          orders.value = orders.value
          showToast({
            status: 'info',
            title: 'Sin resultados',
            message: 'No hay resultados para el intervalo de tiempo seleccionado',
            time: 6000,
          });
        }
        toggleDateTimeFields();
      } else {
          timeLabel.value = 'Hora no definida';
      }
  };

  const removeFilterTime = () => {
      startDateTime.value = null;
      endDateTime.value = null;
      timeLabel.value = 'Hora de Emisión';
      selectedTime.value = false;
      toggleDateTimeFields();
  }


  onBeforeMount( async () => {
    await ordersStore.getWarehouses().then((response) => {
      Warehouses.value = response.data;
    });
  })

  watch([dates], (data) => {
    const isDatesValid = dates.value !== null && dates.value.every(date => date !== null);
    if (isDatesValid) {
      filterOrders(dates.value);
      dateLabel.value = false;
    }
  });

  watch( 
    Warehouse, 
    () => {
      let warehouseCodes = Warehouse.value.map(warehouse => warehouse.WarehouseCode)

      let result = ListordersManager.value.filter(order => {
        return warehouseCodes.includes(order.warehouse)
      })  

      if(result.length > 0){
        orders.value = result 
      }else{
        orders.value = ListordersManager.value
      }
  })

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
  function getHourMinute(date) {
      return date.getHours() * 100 + date.getMinutes();
  }

  function filterOrdersByTimeRange(timeRange, orders) {
      const [startTime, endTime] = timeRange.map(time => getHourMinute(time));
      
      return orders.filter(order => {
          const orderTime = getHourMinute(new Date(order.bill?.created_at));
          return orderTime >= startTime && orderTime <= endTime;
      });
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

watch([DocNum, Customer, DocTime, DocTotal, DocEntry], (data) => {
  isFiltersEmpty.value = data.every((filter) => filter.length === 0);
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

watchFilters([DocNum, Customer, DocTime, DocTotal, DocEntry]);

  return {
    startDateTime,
    endDateTime,
    showDateTimeFields,
    timeLabel,
    selectedTime,
    dates,
    dateLabel,
    orders,
    DocEntry,
    DocNum,
    DocTime,
    Customer,
    DocTotal,
    Warehouse,
    Warehouses,
    removeFilterDate,
    toggleDateTimeFields,
    applyFilter,
    removeFilterTime,
  };
}

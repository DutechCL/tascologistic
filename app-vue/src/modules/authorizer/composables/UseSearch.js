
import { ref, watch } from 'vue';

export function UseSearch(ListordersManager) {

const METHOD_SHIPPING_HERE = 1;
const ordersHere = ref(ListordersManager.value.filter(order => order.method_shipping_id === METHOD_SHIPPING_HERE));
const ordersPickupAndDelivery = ref(ListordersManager.value.filter(order => order.method_shipping_id !== METHOD_SHIPPING_HERE));
const allOrdersPickupAndDelivery = ref(ordersPickupAndDelivery.value);
const allOrdersHere = ref(ordersHere.value);

watch(() => ListordersManager.value, (newListOrders) => {
  ordersHere.value = newListOrders
    .filter(order => order.method_shipping_id === METHOD_SHIPPING_HERE)
    .sort((a, b) => new Date(b.updateApp) - new Date(a.updateApp));
  ordersPickupAndDelivery.value = newListOrders
    .filter(order => order.method_shipping_id !== METHOD_SHIPPING_HERE)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  allOrdersPickupAndDelivery.value = ordersPickupAndDelivery.value;
  allOrdersHere.value = ordersHere.value;
});


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
    ordersHere,
    ordersPickupAndDelivery,
    allOrdersPickupAndDelivery,
    allOrdersHere,
    search
  };
}

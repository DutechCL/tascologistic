export default{
  name: 'table-dispatch-orders',
  component: ()=> import('../layouts/BillerLayout.vue'),
  children: [
    {
      path: 'despacho-pedidos',
      component: ()=> import('../views/DispatchOrders.vue'),
    },
    {
      path: 'retira-aqui',
      name: 'table-pickup-orders',
      component: ()=> import('../views/PickupOrders.vue'),
    },
  ]
}
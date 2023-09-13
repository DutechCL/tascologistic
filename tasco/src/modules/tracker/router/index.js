export default {
  name: 'tracking',
  component: () => import(/* webpackChunkName: "Tracking" */ '@/modules/tracker/layouts/TrackerLayout.vue'),
  children: [
    {
      path: 'ordenes',
      name: 'table-order',
      component: () => import(/* webpackChunkName: "Order" */ '../views/OrderTable.vue'),
    },
    {
      path: 'retiro-despacho',
      name: 'table-order-tracking',
      component: ()=> import('../views/OrderTracking.vue'),
    },
    
  ]
}
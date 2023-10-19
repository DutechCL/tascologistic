export default{
  name: 'payments',
  component: ()=> import('../layouts/PaymentsLayout.vue'),
  children: [
    {
      path: 'pendientes',
      component: ()=> import('../views/Payments.vue'),
    }
  ]
}
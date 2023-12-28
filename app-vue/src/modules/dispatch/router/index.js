export default{
  name: 'distpatch',
  component: ()=> import('../layouts/DispatchLayout.vue'),
  children: [
    {
      path: 'pedidos',
      component: ()=> import('../views/Dispatch.vue'),
    },
  ]
}
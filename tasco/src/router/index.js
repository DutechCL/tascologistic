import { createRouter, createWebHistory } from 'vue-router'
import TrackerRouter from '@/modules/tracker/router'
import SalesNotesRouter  from '@/modules/authorizer/router'
import BillerRouter  from '@/modules/biller/router'
import PaymentsRouter  from '@/modules/payments/router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/HomeView.vue'),
    },
    {
      path: '/tracking',
      redirect: '/tracking/ordenes',
      ...TrackerRouter
    },
    {
      path: '/autorizador',
      redirect: '/autorizador/notas',
      ...SalesNotesRouter
    },
    {
      path: '/facturador',
      redirect: '/facturador/despacho-pedidos',
      ...BillerRouter
    },
    {
      path: '/pagos',
      redirect: '/pagos/pendientes',
      ...PaymentsRouter
    },
  ]
})

export default router

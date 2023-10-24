export default{
  name: 'sales-notes',
  component: ()=> import('../layouts/AuthorizerLayout.vue'),
  children: [
    {
      path: 'notas',
      component: ()=> import('../views/SalesNotes.vue'),
    },
    {
      path: 'pickeo-revision/:wareHouseCode',
      name:'pickup-review',
      props: true,
      component: ()=> import('../views/PickupReview.vue'),
    },
    {
      path: 'notas-problema',
      name:'problem-notes',
      component: ()=> import('../views/SalesNotesProblem.vue'),
    },
  ]
}
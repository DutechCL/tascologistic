export default{
  name: 'sales-notes',
  component: ()=> import('../layouts/AuthorizerLayout.vue'),
  children: [
    {
      path: 'notas',
      component: ()=> import('../views/SalesNotes.vue'),
    },
    {
      path: 'pickeo-revision',
      name:'pickup-review',
      component: ()=> import('../views/PickupReview.vue'),
    },
    {
      path: 'notas-problema',
      name:'problem-notes',
      component: ()=> import('../views/SalesNotesProblem.vue'),
    },
    {
      path: 'notas-revision/:id/:responsible',
      name:'review-notes',
      component: ()=> import('../views/SalesNotesReview.vue'),
    }
  ]
}
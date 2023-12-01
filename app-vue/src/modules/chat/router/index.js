export default{
  name: 'chat',
  component: ()=> import('../layouts/Chat.vue'),
  children: [
    {
      path: 'list-chats',
      name:'list-chats',
      component: ()=> import('../views/ListChats.vue'),
    },
    {
      path: 'show/:id',
      name: 'show-chat',
      props: true,
      component: ()=> import('../views/ShowChat.vue'),
    },
  ]
}
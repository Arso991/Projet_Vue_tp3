import { createRouter, createWebHistory } from 'vue-router'
import Blog from '@/views/Blog.vue'
import Detail from '@/views/Details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/home',
      name : 'home',
      component : Blog
    },
    {
      path : '/detail',
      name : 'detail',
      component : Detail
    }
  ]
})

export default router

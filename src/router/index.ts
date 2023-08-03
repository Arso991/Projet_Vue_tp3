import { createRouter, createWebHistory } from 'vue-router'
import Blog from '@/views/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'home',
      component : Blog
    }
  ]
})

export default router

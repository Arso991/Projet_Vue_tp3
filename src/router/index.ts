import { createRouter, createWebHistory } from 'vue-router'
import Blog from '@/views/Blog.vue';
import ArticleDetails from '@/views/ArticleDetails.vue';
import NewArticle from '@/views/NewArticle.vue';
import Profil from '@/views/Profil.vue';
import Profil2 from '@/views/Profil2.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'home',
      component : Blog
    },
    {
      path : '/article/:id',
      name : 'detail',
      component : ArticleDetails
    },
    {
      path: '/new_article',
      name: 'new_article',
      component: NewArticle
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profil
    },
    {
      path: '/profil2',
      name: 'profil2',
      component: Profil2
    }
  ]
})

export default router

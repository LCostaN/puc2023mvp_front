import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthView
    },
    {
      path: '/adopt',
      name: 'Adopt',
      component: () => import('../views/AdoptView.vue')
    },
    {
      path: '/for-adoption',
      name: 'Adoption',
      component: () => import('../views/AdoptionView.vue')
    },
    {
      path: '/walk',
      name: 'Walk',
      component: () => import('../views/WalkView.vue')
    },
    {
      path: '/denounce',
      name: 'Denounce',
      component: () => import('../views/DenounceView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not Found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router

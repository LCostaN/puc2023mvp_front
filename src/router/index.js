import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/auth',
      component: AuthView
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
    // {
    //   path: '/add-pet',
    //   name: 'Cadastrar Pet',
    //   component: () => import('../views/PetRegisterView.vue')
    // },
    // {
    //   path: '/edit-pet',
    //   name: 'Editar Pet',
    //   component: () => import('../views/PetEditView.vue')
    // },
    // {
    //   path: '/walk-pet',
    //   name: 'Passear com Pets',
    //   component: () => import('../views/PetWalkView.vue')
    // },
    {
      path:'/:pathMatch(.*)*',
      name: 'Not Found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router

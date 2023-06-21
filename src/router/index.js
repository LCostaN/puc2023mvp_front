import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'Entrar',
      component: LoginView
    },
    {
      path: '/register',
      name: 'Cadastro',
      component: () => import('../views/RegisterView.vue')
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
    // }
  ]
})

export default router

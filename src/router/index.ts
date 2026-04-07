/// <reference types="vite/client" />
import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes = [
  { path: '/', redirect: '/home' },

  {
    path: '/home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/eventos',
    component: () => import('../views/EventosPage.vue')
  },
  {
    path: '/eventos/:id',
    component: () => import('../views/EventoDetalhePage.vue')
  },
  {
    path: '/favoritos',
    component: () => import('../views/FavoritosPage.vue')
  },
  {
    path: '/perfil',
    component: () => import('../views/PerfilPage.vue')
  }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),        
  routes
})
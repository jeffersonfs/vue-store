import { createRouter, createWebHistory } from 'vue-router'
import AppAbout from "../views/AppAbout.vue"
import AppMain from "../views/AppMain.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppMain
  },
  {
    path: '/about',
    name: 'Sobre',
    component: AppAbout
  },
  
]

const base_url = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(base_url),
  routes
})

export default router

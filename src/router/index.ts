import { createRouter, createWebHistory } from 'vue-router'
import AppAbout from "../views/AppAbout.vue"
import AppContact from "../views/AppContact.vue"
import AppMain from "../views/AppMain.vue"
import AppProduct from "../views/AppProduct.vue"
import AppLogin from "../views/AppLogin.vue"
import AppCart from "../views/AppCart.vue"
import AppCreateUser from "../views/AppCreateUser.vue"

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
  {
    path: '/contact',
    name: 'Contato',
    component: AppContact
  },
  {
    path: '/product/:id',
    name: 'Produto',
    component: AppProduct
  },
  {
    path: '/cart/',
    name: 'Cart',
    component: AppCart
  },
  {
    path: '/cart/:id',
    name: 'AddCart',
    component: AppCart
  },
  {
    path: '/login',
    name: 'Login',
    component: AppLogin
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: AppCreateUser
  }
]

const base_url = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(base_url),
  routes
})

export default router

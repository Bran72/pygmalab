import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Model from '../views/Model.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
    {
      path: '/modele/:id',
      name: 'Modele',
      component: Model,
      props: true
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

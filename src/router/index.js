import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Model from '../views/Model.vue'
import Offers from '../views/Offers'

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
    path: '/dashboard/new',
    name: 'New Model',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewModel.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/dashboard/offres',
    name: 'Offers',
    component: Offers
  },
  {
    path: '/dashboard/modele/:id',
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

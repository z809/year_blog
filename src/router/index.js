import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=> import("@/views/index")
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

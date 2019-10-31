import Vue from 'vue'
import VueRouter from 'vue-router'
import Forecast from '../views/Forecast.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'forecast',
    component: Forecast
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

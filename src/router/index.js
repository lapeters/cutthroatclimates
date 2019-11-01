import Vue from 'vue'
import VueRouter from 'vue-router'
import Forecast from '../views/Forecast.vue'
import Game from '../views/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'forecast',
    component: Forecast
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

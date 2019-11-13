import Vue from 'vue'
import VueRouter from 'vue-router'
import Forecast from '../views/Forecast.vue'
import About from '../views/About.vue'
import Game from '../views/Game.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'forecast',
    component: Forecast
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
    props: true
  },
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

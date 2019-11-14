import Vue from 'vue'
import VueRouter from 'vue-router'
// import Forecast from '../views/Forecast.vue'
// import About from '../views/About.vue'
// import Game from '../views/Game.vue'
// import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

function lazyLoad (view) {
  return () => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'forecast',
    component: lazyLoad('Forecast')
  },
  {
    path: '/about',
    name: 'about',
    component: lazyLoad('About')
  },
  {
    path: '/game',
    name: 'game',
    component: lazyLoad('Game'),
    props: true
  },
  {
    path: '*',
    component: lazyLoad('PageNotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

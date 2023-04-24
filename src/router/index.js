import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'
import WeatherView from '../views/WeatherView.vue'
import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherView,
      meta: {
        requireLocation: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(JSON.parse(JSON.stringify(store.getters["locations/currentWeather"])) )
//   if (to.meta.requireLocation && !localStorage.getItem('authorized')) {
//     next({ name: 'map' })
//   } else {
//     next()
//   }
// })

export default router

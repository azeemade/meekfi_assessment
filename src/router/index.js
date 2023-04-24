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
      },
      beforeRouteEnter (to, from, next) {
        console.log(localStorage.getItem('authorized'));
          if (localStorage.getItem('authorized') === true) {
            next()
          }
          else {
            next({ name: 'map' })
          }
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
//   if (to.meta.requireLocation) {
//     console.log('passed reqLoc');
//     if (localStorage.getItem('authorized') === true) {
//       next()
//       console.log('passed authorized');
//       return
//     }
//     console.log('not authorized');
//     next({ name: 'map' })
//   }
//   else {
//     console.log('not reqLoc');
//     next()
//   }
// })

export default router

import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import mainPage from '@/components/mainPage.vue'
import Footer from '@/components/Footer.vue'
import success from '@/components/success.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'mainPage',
      component: mainPage,
      children:[
        {
          path:'Footer',
          name: "Footer",
          component: Footer
        }
      ]
    },
    {
      path: '/success',
      name: 'success',
      component: success,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

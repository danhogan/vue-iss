import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '*',
      redirect: '/current'
    },
    {
      path: '/',
      redirect: '/current'
    },
    {
      path: '/current',
      name: 'current',
      component: () => import('../views/Current.vue')
    },
    {
      path: '/times',
      name: 'times',
      component: () => import('../views/Times.vue')
    },
    {
      path: '/who',
      name: 'who',
      component: () => import('../views/Who.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'


const routes = [
  {
    path: '/',
    name: 'base',
    component: HomeView,

  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),

  },
  {
    path:'/notFound',
    name:"notFound",
    component:()=>import('@/views/NotFound.vue')
  },
  {
    path:'/internalError',
    name:"internalError",
    component:()=>import('@/views/InternalErrorServer.vue')
  },
  {
    path:'/unauthorized',
    name:"Unauthorized",
    component:()=>import('@/views/Unauthorized.vue')
  }




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

let exclude_path = ['/login']
router.beforeEach((to, from, next) => {
  if (!exclude_path.includes(to.path)) {
    if (!store.getters['user/getToken']) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

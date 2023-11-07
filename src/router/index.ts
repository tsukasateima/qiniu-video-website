import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/message',
    component: () => import('@/views/message/index.vue')
  },
  {
    path: '/collections',
    component: () => import('@/views/collections/index.vue')
  },
  {
    path: '/videoInfo/:id',
    component: () => import('@/views/videoInfo/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

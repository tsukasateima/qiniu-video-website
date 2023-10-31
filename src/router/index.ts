import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/recommend/index.vue')
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

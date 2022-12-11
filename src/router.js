import Edit from '@/pages/edit/Index.vue'
import Preview from '@/pages/edit/Preview.vue'
import Embed from '@/pages/embed/Index.vue'
import { routerMode, base } from './config'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Editor',
    component: Edit
  },
  {
    path: '/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/share/:id',
    name: 'Share',
    component: Edit
  },
  {
    path: 'preview',
    name: 'Preview',
    component: 'Preview'
  },
  {
    path: '/embed/:id',
    name: 'Embed',
    component: Embed
  }
]

const router = createRouter({
  history:
    routerMode === 'hash' ? createWebHashHistory(base) : createWebHistory(base),
  routes
})
export default router

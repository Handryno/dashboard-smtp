import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: () => import('../views/HomeView.vue')
//     // component: HomeView
//   },
  {
    path: '/get-token',
    name: 'get-token',
    component: () => import('../components/GetToken.vue')
  },
  {
    path: '/user-list',
    name: 'user-list',
    component: () => import('../components/UserList.vue')
  },
  {
    path: '/user-delete/:username',
    name: 'user-delete',
    component: () => import(/* webpackChunkName: "user" */ '../components/UserDelete.vue')
  },
  {
    path: '/user-edit/:username',
    name: 'user-edit',
    params: true,
    component: () => import(/* webpackChunkName: "user" */ '../components/UserEdit.vue')
  },
  {
    path: '/user-create',
    name: 'user-create',
    component: () => import(/* webpackChunkName: "user" */ '../components/UserCreate.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "user" */ '../components/NotFound.vue'),
  }
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
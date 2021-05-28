import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/layouts/index.vue';

import childRoutes from './css3demo';

export const routes = [
  {
    path: '/',
    component: Layout,
    alwaysShow: true,
    meta: { title: '首页', icon: 'el-icon-s-home' },
    children: [
      {
        path: '',
        component: () => import('@/views/home.vue'),
        name: 'home',
        meta: { title: '首页', icon: 'el-icon-s-home' },
      },
    ],
  },
  {
    path: '/css3',
    component: Layout,
    alwaysShow: true,
    meta: { title: 'CSS3', icon: 'el-icon-menu' },
    children: childRoutes,
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/pages/Login.vue'),
  //   meta: {
  //     title: '登录',
  //     icon: 'el-icon-user',
  //   },
  // },
];

// 用工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

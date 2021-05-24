import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/layouts/index.vue';

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
    children: [
      {
        path: 'demo1',
        component: () => import('@/views/css3demo/demo1.vue'),
        name: 'demo1',
        meta: { title: '水瓶', icon: 'el-icon-ship' },
      },
      {
        path: 'demo2',
        component: () => import('@/views/css3demo/demo2.vue'),
        name: 'demo2',
        meta: { title: '窗户', icon: 'el-icon-collection-tag' },
      },
      {
        path: 'demo3',
        component: () => import('@/views/css3demo/demo3.vue'),
        name: 'demo3',
        meta: { title: 'Vue logo', icon: 'el-icon-collection-tag' },
      },
      {
        path: 'demo4',
        component: () => import('@/views/css3demo/demo4.vue'),
        name: 'demo4',
        meta: { title: '摇动的心', icon: 'el-icon-collection-tag' },
      },
      {
        path: 'demo5',
        component: () => import('@/views/css3demo/demo5.vue'),
        name: 'demo5',
        meta: { title: '一个按钮效果', icon: 'el-icon-collection-tag' },
      },
    ],
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

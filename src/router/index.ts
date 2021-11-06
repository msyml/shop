import { App } from 'vue';
import { PageEnum } from 'enums/pageEnum';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const RootRoute: RouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: PageEnum.BASE_HOME,
    meta: {
      title: 'Root',
    },
  };
  
  export const LoginRoute: RouteRecordRaw = {
    path: '/login',
    name: 'Login',
    component: () => import('views/login/index.vue'),
    meta: {
      title: '登录',
    },
  };

//普通路由 无需验证权限
export const constantRouter: any[] = [LoginRoute, RootRoute];

const router = createRouter({
    history: createWebHashHistory(''),
    routes: constantRouter,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
  });
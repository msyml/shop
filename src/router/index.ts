import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { PageEnum } from '@/enums/pageEnum';
import * as Views from '@/views'

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: RouteRecordRaw = {
  // 可以自己指定路径以及引入组件测试
  path: '/login',
  name: 'Login',
  component: () => Views.Login,
  meta: {
    title: '登录',
  },
};

export const TabBarRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('@/layout/Shop.vue'),
  children: [
    {
      path: '/home',
      component: () => Views.Home,
      meta: {
        title: "首页"
      },
    },
    {
      path: '/cart',
      component: () => Views.Cart,
      meta: {
        title: "购物车"
      },
    },
    {
      path: '/explore',
      component: () => Views.Explore,
      meta: {
        title: "探索"
      },
    },
    {
      path: '/account',
      component: () => Views.Account,
      meta: {
        title: "账户"
      },
    },
    {
      path: '/favorite',
      component: () => Views.Favorite,
      meta: {
        title: "喜欢"
      },
    },
  ],
};

export const constantRouter: any[] = [LoginRoute, RootRoute, TabBarRoute];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;

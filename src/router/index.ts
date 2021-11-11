import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { PageEnum } from '@/enums/pageEnum';

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
  component: () => import('views/login/index.vue'),
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
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: "首页"
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

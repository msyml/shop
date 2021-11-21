import { App } from 'vue';
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
} from 'vue-router';
import { PageEnum } from '@/enums/pageEnum';
import * as Views from '@/views';

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/welcome/index.vue'),
    meta: {
      title: 'Welcome',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/index.vue'),
    meta: {
      title: 'Sign Up',
    },
  },
  {
    path: '/signPass',
    name: 'SignPass',
    component: () => import('@/views/register/signPass.vue'),
    meta: {
      title: 'SignPass',
    },
  },
  {
    path: '/signCode',
    name: 'SignCode',
    component: () => import('@/views/register/signCode.vue'),
    meta: {
      title: 'Sign Code',
    },
  },
];

export const TabBarRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('@/layout/Shop.vue'),
  children: [
    {
      path: '/home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: 'Home',
        isNeedBack: false,
        icon: 'icon-place',
      },
    },
    {
      path: '/cart',
      component: () => import('@/views/cart/index.vue'),
      meta: {
        title: 'Cart',
      },
    },
    {
      path: '/explore',
      component: () => Views.Explore,
      meta: {
        title: 'Categories',
        isNeedBack: false,
      },
    },
    {
      path: '/exploreDetail',
      component: () => import('@/views/explore/detail.vue'),
      meta: {
        title: 'Fruits',
        isNeedBack: false,
        customTitle: true,
      },
    },
    {
      path: '/account',
      component: () => Views.Account,
      meta: {
        title: 'Account',
      },
    },
    {
      path: '/favorite',
      component: () => Views.Favorite,
      meta: {
        title: 'Favorite',
      },
    },
  ],
};

export const constantRouter: any[] = [...LoginRoute, RootRoute, TabBarRoute];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: () => any) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;

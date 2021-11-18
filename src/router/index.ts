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
    component: () => Views.Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => Views.Welcome,
    meta: {
      title: 'Welcome',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => Views.Register,
    meta: {
      title: 'Sign Up',
    },
  },
  {
    path: '/signPass',
    name: 'SignPass',
    component: () => Views.SignPass,
    meta: {
      title: 'SignPass',
    },
  },
  {
    path: '/signCode',
    name: 'SignCode',
    component: () => Views.SignCode,
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
      component: () => Views.Home,
      meta: {
        title: 'Home',
        isNeedBack: false,
        icon: 'icon-place',
      },
    },
    {
      path: '/cart',
      component: () => Views.Cart,
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

import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/GuestLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  },
  {
    path: '/auth',
    component: () => import('src/layouts/RedirectLayout.vue'),
    children: [
      { path: '/auth/login', component: () => import('pages/LoginPage.vue') },
      { path: '/auth/signUp', component: () => import('pages/SignUpPage.vue') },
      { path: '/posts', component: () => import('pages/PostPage.vue') },
      {
        path: '/posts/openedPost',
        component: () => import('pages/SinglePostPage.vue'),
      },
    ],
  },
  {
    path: '/psychologist',
    component: () => import('src/layouts/PsychologistLayout.vue'),
    children: [
      {
        path: '/psychologist/console',
        component: () => import('pages/PsychologistConsolePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/history.vue')
  },

// 下層ページ------------------------------------------------

  {
    path: '/banner',
    name: 'banner',
    component: () => import('../views/underLayer/banner.vue')
  },

  // banner下層ページ---------------------------------------

  {
    path: '/insta',
    name: 'insta',
    component: () => import('../views/portfolio_banner/banner_insta.vue')
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('../views/portfolio_banner/banner_food.vue')
  },
  {
    path: '/ultra',
    name: 'ultra',
    component: () => import('../views/portfolio_banner/banner_ultra.vue')
  },

// イラスト

  {
    path: '/illust',
    name: 'illust',
    component: () => import('../views/underLayer/illust.vue')
  },

  // イラスト下層ページ---------------------------------------

  {
    path: '/syu',
    name: 'syu',
    component: () => import('../views/portfolio_illust/illust_syu.vue')
  },
  {
    path: '/syu02',
    name: 'syu02',
    component: () => import('../views/portfolio_illust/illust_syu02.vue')
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: () => import('../views/portfolio_illust/illust_scroll.vue')
  },
  {
    path: '/myao',
    name: 'myao',
    component: () => import('../views/portfolio_illust/illust_myao.vue')
  },
  {
    path: '/myao_mike',
    name: 'myao_mike',
    component: () => import('../views/portfolio_illust/illust_myao_mike.vue')
  },
  {
    path: '/devil',
    name: 'devil',
    component: () => import('../views/portfolio_illust/illust_devil.vue')
  },
  {
    path: '/pig',
    name: 'pig',
    component: () => import('../views/portfolio_illust/illust_pig.vue')
  },

// 名刺

  {
    path: '/nameCard',
    name: 'nameCard',
    component: () => import('../views/underLayer/nameCard.vue')
  },

// レタッチ

  {
    path: '/reTouch',
    name: 'reTouch',
    component: () => import('../views/underLayer/reTouch.vue')
  },
  {
    path: '/hinami',
    name: 'hinami',
    component: () => import('../views/portfolio_photo/photo_hinami.vue')
  },
  {
    path: '/sky',
    name: 'sky',
    component: () => import('../views/portfolio_photo/photo_sky.vue')
  },
  {
    path: '/piro',
    name: 'piro',
    component: () => import('../views/portfolio_photo/photo_piro.vue')
  },

  
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition){

    return savedPosition || { top:0 }

  }
})

export default router

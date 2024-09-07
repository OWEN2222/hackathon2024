import { createRouter, createWebHistory } from 'vue-router';
import ScreenList from '../ScreenList.vue';
import Page12 from '../components/Page12.vue';
import Page2 from '../components/Page2.vue';
import Page20 from '../components/Page20.vue';
import Page21 from '../components/Page21.vue';
import Page22 from '../components/Page22.vue' ;
import Page23 from '../components/Page23.vue' ;
import Page24 from '../components/Page24.vue' ;
import Page4 from '@/components/Page4.vue';
import Page101 from '@/components/Page101.vue';
import Page102 from '@/components/Page102.vue';
import Page103food from '@/components/Page103food.vue';
import Page104water from '@/components/Page104water.vue';
import Page7 from '@/components/Page7.vue';
import Page333 from '@/components/Page333.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'screenList',
      component: ScreenList,
    },
    {
      path: '/Page12',
      name: 'Page12',
      component: Page12,
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2,
    },
    {
      path: '/Page20',
      name: 'Page20',
      component: Page20,
    },
    {
      path: '/Page21',
      name: 'Page21',
      component: Page21,
    },
    {
      path: '/Page22',
      name: 'Page22',
      component: Page22,
    },
    {
      path: '/Page23',
      name: 'Page23',
      component: Page23,
    },
    {
      path: '/Page24',
      name: 'Page24',
      component: Page24,
    },
    {
      path: '/Page4',
      name: 'Page4',
      component: Page4,
    },
    {
      path: '/Page101',
      name: 'Page101',
      component: Page101,
    },
    {
      path: '/Page102',
      name: 'Page102',
      component: Page102,
    },
    {
      path: '/Page103food',
      name: 'Page103food',
      component: Page103food,
    },
    {
      path: '/Page104water',
      name: 'Page104water',
      component: Page104water,
    },
    {
      path: '/Page7',
      name: 'Page7',
      component: Page7,
    },
    {
      path: '/Page333',
      name: 'Page333',
      component: Page333,
    },
  ],
});

export default router;

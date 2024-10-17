import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/home/index.vue';
import TopoPage from '@/pages/topo/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/topo',
    name: 'Topo',
    component: TopoPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import TechView from '@/views/TechView.vue'
import WorksView from '@/views/WorksView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/tech',
      name: 'tech',
      component: TechView,
    },
    {
      path: '/tech',
      name: 'tech',
      component: TechView,
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView,
    },
    // Route 404 à la fin pour capturer toutes les routes non définies
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { routes, router };
export default router;

import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import SettingsPage from '../views/SettingsPage.vue';

const routes = [
  { path: '/', redirect: '/home-page' }, // Redirect root ('/') to 'home-page'
  { path: '/home-page', name: 'Home', component: HomePage },
  { path: '/settings-page', name: 'Settings', component: SettingsPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;



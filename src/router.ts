import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/MainView.vue';
import Gallery from '@/views/GalleryView.vue';
import Contacts from '@/views/ContactsView.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/gallery', component: Gallery },
  { path: '/contacts', component: Contacts }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

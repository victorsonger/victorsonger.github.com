// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from "@ionic/vue-router"; // 使用@ionic/vue-router代替vue-router
// import Tabs from "../views/Tabs.vue";

import HomePage from '../views/Home.vue';
import AboutPage from '../views/About.vue';

const routes = [
  {
    path: "/",
    name: 'home',
    component: HomePage
  },
  {
    path: "/about",
    name: 'about',
    component: AboutPage
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

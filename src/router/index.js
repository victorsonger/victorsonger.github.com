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
  history: createWebHashHistory(), // 由于history形式的路由还需要配置服务端  不然到了新的路由，刷新页面就会404了。所以目前先用hash路由过渡一下
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from '../src/pages/HomeItem.vue'
import About from '../src/pages/AboutItem.vue'
import notFound from "../src/components/notFound.vue"
import Item from "../src/pages/_itemAlias.vue"

const routerHistory = createWebHistory();

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: "/:itemAlias",
      name: 'itemAlias',
      component: Item
    },
    {
      path: "/:catchAll(.*)",
      // path: '/:pathMatch(.*)*',
      name: 'not-Found',
      component: notFound,
    },
  ]
});

export default routers;
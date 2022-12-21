import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../src/pages/HomeItem.vue'
import About from '../src/pages/AboutItem.vue'
import Vacancy from '../src/pages/VacancyItem.vue'
import notFound from "../src/pages/notFound.vue"

const routerHistory = createWebHashHistory();

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
      path: '/vacancy',
      name: "vacancy",
      component: Vacancy
    },
    {
      path: "/:CatchAll(.*)",
      name: '404',
      component: notFound
    },
  ]
});

export default routers;
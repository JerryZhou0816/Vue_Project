import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Detail from '../views/Detail'
// const Detail = () => import('../views/Detail')
import Home from "../views/Home";

const routes = [{
    path: '/detail',
    component: Detail
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/",
    redirect: "/home",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
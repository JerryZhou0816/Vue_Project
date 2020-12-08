import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Detail from '../views/Detail'
// const Detail = () => import('../views/Detail')

const routes = [{
    path: '/detail',
    component: Detail
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
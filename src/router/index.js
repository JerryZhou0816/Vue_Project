import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import AllGoods  from '../views/AllGoods'
const routes = [{
  path:'/allgoods',
  component:AllGoods
}
]

import Detail from '../views/Detail'
// const Detail = () => import('../views/Detail')
import Home from "../views/Home";
import AllGoods from '../views/Detail'

const routes = [
  {
    path: '/detail',
    component: Detail
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/allgoods",
    component: AllGoods,
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
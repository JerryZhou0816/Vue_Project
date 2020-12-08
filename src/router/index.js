import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
<<<<<<< HEAD
import AllGoods  from '../views/AllGoods'
const routes = [{
  path:'/allgoods',
  component:AllGoods
}
]
=======

import Detail from '../views/Detail'
// const Detail = () => import('../views/Detail')
>>>>>>> origin/pengshuai
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
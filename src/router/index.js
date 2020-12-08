import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import AllGoods  from '../views/AllGoods'
const routes = [{
  path:'/allgoods',
  component:AllGoods
}
]
import Home from "../views/Home";
const routes = [
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
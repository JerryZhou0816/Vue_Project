import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import AllGoods  from '../views/AllGoods'
const routes = [{
  path:'/allgoods',
  component:AllGoods
}

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
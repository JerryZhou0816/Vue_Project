import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../views/Home";
// import Goods from '@/views/Goods';
import MyOrder from "@/views/MyOrder";
import MyPhoto from "@/views/MyPhoto";
import MyPreferential from "@/views/MyPreferential";
import MyNew from "@/views/MyNew";
import MyAfterSales from "@/views/MyAfterSales";
import MyProgress from '@/views/MyProgress'
const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/myorder",
    component: MyOrder,
  },
  {
    path: "/",
    redirect: "/home",
  },
  { path: "/myphoto", component: MyPhoto },

  { path: "/mypreferential",
   component: MyPreferential },
  { path: "/mynew",
   component: MyNew },
  { path: "/myaftersales",
   component: MyAfterSales },
   {
    path: "/myprogress",
    component: MyProgress,
  },
   
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

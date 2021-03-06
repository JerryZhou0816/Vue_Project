import MyOrder from "@/views/MyOrder";
import MyPhoto from "@/views/MyPhoto";
import MyPreferential from "@/views/MyPreferential";
import MyNew from "@/views/MyNew";
import MyAfterSales from "@/views/MyAfterSales";
import MyProgress from "@/views/MyProgress";
import Myaddress from "@/views/Myaddress";

export default [
  {
    path: "/myaddress",
    component: Myaddress,
  },
  {
    path: "/myorder",
    component: MyOrder,
  },
  {
    path: "/myphoto",
    component: MyPhoto,
  },
  {
    path: "/mypreferential",
    component: MyPreferential,
  },
  {
    path: "/mynew",
    component: MyNew,
  },
  {
    path: "/myaftersales",
    component: MyAfterSales,
  },
  {
    path: "/myprogress",
    component: MyProgress,
  },
  {
    path: "/checkout",
    component: () => import("@/views/Checkout/checkout"),
  },
  {
    path: "/login",
    component: () => import("../views/Login"),
  },
  {
    path: "/register",
    component: () => import("../views/Register"),
  },
  {
    path: "/shopcart",
    component: () => import("@/views/ShopCart"),
  },
  {
    path: "/surrounding",
    component: () => import("@/views/Surrounding"),
  },
  {
    path: "/home",
    component: () => import("../views/Home"),
  },
  {
    path: "/detail",
    component: () => import("@/views/Detail"),
  },
  {
    path: "/allgoods",
    component: () => import("../views/AllGoods"),
  },
  {
    path: "/shopcart",
    component: () => import("../views/ShopCart"),
  },
  {
    path: "/",
    redirect: "/home",
  },
];

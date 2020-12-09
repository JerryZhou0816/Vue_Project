import MyOrder from "@/views/MyOrder";
import MyPhoto from "@/views/MyPhoto";
import MyPreferential from "@/views/MyPreferential";
import MyNew from "@/views/MyNew";
import MyAfterSales from "@/views/MyAfterSales";
import MyProgress from "@/views/MyProgress";

export default [
  {
    path: "/myorder",
    component: MyOrder,
  },
  { path: "/myphoto", component: MyPhoto },
  { path: "/mypreferential", component: MyPreferential },
  { path: "/mynew", component: MyNew },
  { path: "/myaftersales", component: MyAfterSales },
  {
    path: "/myprogress",
    component: MyProgress,
  },
  {
    path: "/login",
    component: () => import("../views/Login/Login"),
  },
  {
    path: "/register",
    component: () => import("../views/Register/Register"),
  },
  {
    path: "/home",
    component: () => import("../views/Home"),
    children: [
      {
        path: "/detail",
        component: () => import("../views/Detail"),
      },
      {
        path: "/allgoods",
        component: () => import("../views/AllGoods"),
      },
    ],
  },

  {
    path: "/",
    redirect: "/home",
  },
];

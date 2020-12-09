export default [
  {
    path: "/login",
    component: () => import("../views/Login/Login"),
  },
  {
    path: "/home",
    component: () => import("../views/Home"),
  },

  {
    path: "/allgoods",
    component: () => import("../views/AllGoods"),
  },
  {
    path: "/detail",
    component: () => import("../views/Detail"),
  },
  {
    path: "/",
    redirect: "/home",
  },
];

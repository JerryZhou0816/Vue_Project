export default [
  {
    path: "/login",
    component: () => import("../views/Login"),
  },
  {
    path: "/register",
    component: () => import("../views/Register"),
  },
  {
    path: "/",
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

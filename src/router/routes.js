export default [
  {
    path: "/login",
    component: () => import("../views/Login/Login"),
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

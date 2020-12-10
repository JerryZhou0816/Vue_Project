


export default [
  {
    path: "/login",
    component: () => import("../views/Login/Login"),
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
    path:'/shopcart',
    component:()=>import('../views/ShopCart'),
  },
  {
    path: "/",
    redirect: "/home",
  },
];

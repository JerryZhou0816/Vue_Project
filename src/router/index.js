import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 把原来是push和replace函数保存一份
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

<<<<<<< HEAD
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
=======
// 修改路由器原型当中的push为我们定义的push
//我们自己定义的push并没有原来push的功能，最终还是使用原来的push功能
// 只是在原有的功能基础上加个判断而已
VueRouter.prototype.push = function(location, resolved, rejected) {
  if (resolved === undefined && rejected === undefined) {
    return originPush.call(this, location).catch(() => {});
  } else {
    return originPush.call(this, location, resolved, rejected);
  }
};
// 还是使用原来的replace功能 ，只是在原有的功能基础上加个判断
VueRouter.prototype.replace = function(location, resolved, rejected) {
  if (resolved === undefined && rejected === undefined) {
    return originReplace.call(this, location).catch(() => {});
  } else {
    return originReplace.call(this, location, resolved, rejected);
  }
};

import routes from "./routes";
>>>>>>> 登录页

const router = new VueRouter({
  mode: "history",
  routes,
  // 切换路由的时候保证跳转到的页面滚动位置在最上方
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // }
});

export default router;

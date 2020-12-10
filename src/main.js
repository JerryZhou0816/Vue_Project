import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入element-ui
import "./plugins/elements";
import "element-ui/lib/theme-chalk/index.css";

// 轮播图插件
import "swiper/dist/css/swiper.min.css";

// 路由懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);

//  引入mockjs
import './mock/mockServer'
// 引入api
import * as Http from "@/api";
Vue.config.productionTip = false;

//引入和表单验证相关的模块
// import "./validate";

// import './utils/validate.js'

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$API = Http;
  },
  render: (h) => h(App),
}).$mount("#app");

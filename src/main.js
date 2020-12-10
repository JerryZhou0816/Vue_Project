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

// 引入api
import * as Http from "@/api";
Vue.config.productionTip = false;
//使用ui
// Vue.use(ElementUI);

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$API = Http;
    Vue.prototype.$BUS = this;
  },
  render: (h) => h(App),
}).$mount("#app");

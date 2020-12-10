import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入element-ui
import "./plugins/elements";
import "element-ui/lib/theme-chalk/index.css";

// 轮播图插件
import "swiper/dist/css/swiper.min.css";
import loading from '@/assets/images/loading.gif'

// 路由懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  loading
});


// 引入api
import * as Http from "@/api";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$API = Http;
  },
  render: (h) => h(App),
}).$mount("#app");
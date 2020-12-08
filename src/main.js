import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入element-ui
<<<<<<< HEAD
import "./plugins/elements";
import "element-ui/lib/theme-chalk/index.css";
=======
// import "./plugins/elements";
import ElementUI from 'element-ui'
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css'
>>>>>>> origin/pengshuai

// 轮播图插件
import "swiper/dist/css/swiper.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
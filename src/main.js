import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入element-ui
import "./plugins/elements";
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';


// 轮播图插件
// import "swiper/dist/css/swiper.min.css";

Vue.config.productionTip = false;
//使用ui
// Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

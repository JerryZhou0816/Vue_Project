import axios from "axios";

// 引入vuex
import store from "../store";

// 加载动画插件
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const instance = axios.create({
  baseURL: "/api",
  timeout: 20000,
});

// 请求拦截器，只处理成功
instance.interceptors.request.use((config) => {
  // 开启加载动画
  nprogress.start();
  return config;
});

instance.interceptors.response.use(
  (response) => {
    // 关闭加载动画
    nprogress.done();
    return response.data;
  },
  (error) => {
    nprogress.done();

    return new Promise(() => {});
  }
);

export default instance;

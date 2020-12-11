import axios from "axios";

// 引入vuex
import store from "@/store";

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

 //每次请求带上用户的登录标识
 // let token = store.state.users.userInfo.token

 let token = '81d45a8c-b606-447a-9e6a-f94f5728f82f'
 config.headers.token = token

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

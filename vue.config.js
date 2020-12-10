module.exports = {
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico",
    },
  },
  //  写自己想要配置的东西去覆盖系统自带的
  // 关闭ESLint的规则
  lintOnSave: false,
  devServer: {
    proxy: {
      "^/api": {
        target: "http://xmall.exrick.cn",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 重写以/api开头的路径,直白:(/api---->'')
          "^/api": "", // rewrite path
        },
      },
    },
  },
};

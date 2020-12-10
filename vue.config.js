module.exports = {
  //  写自己想要配置的东西去覆盖系统自带的
  // 关闭ESLint的规则
  lintOnSave: true,
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
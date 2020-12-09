var Koa = require("koa");

var Router = require("koa-router");

// 创建app实例

var app = new Koa();

// 路由器实例
var router = new Router();

// 全部商品请求地址
const allGoods = require("./datas/allGoods.json");
router.get("/getAllGoods", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: allGoods,
  };
});

// 主页轮播图数据
const indexGoods = require("./datas/goods.json");
router.get("/getIndexGoods", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: indexGoods,
  };
});

// 品牌商品请求地址
const trademark = require("./datas/trademark.json");

router.get("/getTrademark", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: trademark,
  };
});

// 订单信息
const orderList = require("./datas/orderList.json");
router.get("/getOrderList", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: orderList,
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen("3001", (err) => {
  // 判断
  if (err) {
    console.log("服务器启动失败了");
    console.log("错误信息:", err);
  } else {
    console.log("服务器启动成功了");
    console.log("服务器的地址:http://localhost:3001");
  }
});

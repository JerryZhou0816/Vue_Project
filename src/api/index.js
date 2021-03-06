import Ajax from "@/ajax/Ajax";

//  轮播图数据
export const reqHomeGoods = () => {
  return Ajax({
    url: "/goods/home",
    method: "get",
  });
};
// 获取商品列表数据
export const reqAllGoodsList = (params) => {
  return Ajax({
    url: "/goods/allGoods",
    method: "get",
    params,
  });
};
// 请求添加购物车
export const reqAddShopCart = (productInfo) => {
  return Ajax({
    url: "/member/addCart",
    method: "post",
    data: productInfo,
  });
};

//获取商品详情   //去结算页
export const reqProductDet = (productId) => {
  return Ajax({
    url: `/goods/productDet/?productId=${productId}`,
    method: "get",
  });
};

//请求添加购物车
export const reqAddCart = (productInfo) => {
  return Ajax({
    url: "/member/addCart",
    // url: `/member/addCar/${productId}/${productNum}`,
    method: "post",
    data: productInfo,
  });
};

//请求购物车列表数据
// /api/cart/cartList
//get

export const reqShopCartList = (userInfo) => {
  return Ajax({
    url: `/member/cartList`,
    method: "post",
    data: userInfo,
  });
};

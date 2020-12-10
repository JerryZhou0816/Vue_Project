import Ajax from "@/ajax/Ajax";

export const reqAllGoodsList = () => {
  return Ajax({
    url: "/getAllGoods",
    method: "get",
  });
};


//获取商品详情   //去结算页
export const reqProductDet = (productId) => {
  return Ajax({
    url: `/goods/productDet/?productId=${productId}`,
    method: "get"
  })
}

//请求添加购物车
export const reqAddCart = (productInfo) => {
  return Ajax({
    url: "/member/addCart",
    // url: `/member/addCar/${productId}/${productNum}`,
    method: 'post',
    data: productInfo


  })
}
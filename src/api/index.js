import Ajax from "@/ajax/Ajax";

export const reqAllGoodsList = () => {
  return Ajax({
    url: "/getAllGoods",
    method: "get",
  });
};


//请求购物车列表数据
// /api/cart/cartList
//get

export const reqShopCartList = (userInfo) => {
  return Ajax({
    url:`/member/cartList`,
    method:'post',
    data:userInfo
  })
}

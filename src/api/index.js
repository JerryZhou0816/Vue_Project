import Ajax from "@/ajax/Ajax";

//  轮播图数据
export const reqHomeGoods = () => {
  return Ajax({
    url: '/getAllGoods',
    method: "get",
  });
}
// 获取商品列表数据
export const reqAllGoodsList = (params) => {
  return Ajax({
    url: '/goods/allGoods',
    method: "get",
    params
  });
}
// 请求添加购物车
export const reqAddShopCart = (productInfo)=>{
  return Ajax({
    url:'/member/addCart',
    method:'post',
    data:productInfo
  })
}
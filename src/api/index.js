import Ajax from "@/ajax/Ajax";

export const reqAllGoodsList = (params) => {
  return Ajax({
    url: '/goods/allGoods',
    method: "get",
    params
  });
}
export const reqAddShopCart = (productInfo)=>{
  return Ajax({
    url:'/member/addCart',
    method:'post',
    data:productInfo
  })
}
import Ajax from "@/ajax/Ajax";

export const reqAllGoodsList = () => {
  return Ajax({
    url: "/getAllGoods",
    method: "get",
  });
};
// 获取订单列表
export const reqOrderList = (params) => {
  return Ajax({
    url: '/member/orderList',
    method: "get",
    params:params
  });
};
//获取用户信息
export const reqCheckLogin = () => {
  return Ajax({
    url: `/member/checkLogin${'?token=89bc9d27-8ea4-4f9b-bcf8-2824256eb815'}` ,
    method: "get",
  });
};



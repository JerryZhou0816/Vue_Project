import Ajax from "@/ajax/Ajax";

export const reqAllGoodsList = (params) => {
  return Ajax({
    url: '/goods/allGoods',
    method: "get",
    params
  });
}
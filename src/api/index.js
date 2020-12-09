import Ajax from "@/ajax/Ajax";

export const reqAllGoodsList = () => {
  return Ajax({
    url: '/getAllGoods',
    method: "get",
  });
}
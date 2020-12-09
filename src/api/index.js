import Ajax from "@/ajax/Ajax";

//  轮播图数据
export const reqHomeGoods = () => {
  return Ajax({
    url: "/goods/home",
    method: "get",
  });
};

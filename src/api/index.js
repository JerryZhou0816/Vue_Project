import Ajax from "@/ajax/Ajax";

//  轮播图数据
export const reqHomeGoods = () => {
  return Ajax({
<<<<<<< HEAD
    url: '/getAllGoods',
=======
    url: "/goods/home",
>>>>>>> 88b30ec41b3662526dfce0d90d8959e016205cc6
    method: "get",
  });
}
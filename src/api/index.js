<<<<<<< HEAD
// import Ajax from '../utils/ajax/Ajax'
// export const req
=======
import Ajax from "@/ajax/Ajax";

export const reqAllGoodsList = () => {
  return Ajax({
    url: "/getAllGoods",
    method: "get",
  });
};
>>>>>>> e7c0f4639d7c3466738a2ed1c70ee6839073dab1

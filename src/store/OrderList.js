import { reqCheckLogin, reqOrderList } from "@/api";
const state = {
  userInfo:{},
  orderList:{}
};
const mutations = {
    RECEIVEUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
  RECEIVEORDERLIST(state, orderList) {
    state.orderList = orderList;
  },
};
const actions = {
    //用户信息
    async getUserInfo({commit}){
        const result = await reqCheckLogin()
        if (result.code===200){
            commit('RECEIVEUSERINFO',result.result)
        }
    },
    //订单页
  async getOrderList({ commit },params) {
    const result = await reqOrderList(params);
    if (result.code === 200) {
      commit("RECEIVEORDERLIST",result.result.data);
    }
  },
};
const getters = {
  orderItem(state){
    return state.orderList.data
  } 

};
export default {
  state,
  mutations,
  actions,
  getters,
};

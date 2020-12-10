import { INDEX_INFO } from "@/store/mutation-types";
import { reqHomeGoods } from "@/api";
const state = {
  indexData: [],
};
const mutations = {
  [INDEX_INFO](state, indexData) {
    state.indexData = indexData;
  },
};
const actions = {
  async getHomeData({ commit }) {
    try {
      const banner = await reqHomeGoods();
      commit(INDEX_INFO, banner.result);
    } catch (error) {
      console.log(error);
    }
  },
};
const getters = {
  banner: (state) => state.indexData.filter((item) => item.type === 1) || {},
};
export default {
  state,
  mutations,
  actions,
  getters,
};

const state = {
  userInfo: JSON.parse(localStorage.getItem("USERINFO_KEY")) || "",
};
const mutations = {};

const actions = {};

const getters = {
  users: (state) => state.userInfo.loginData,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

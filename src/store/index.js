import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import home from "@/store/home";
import detail from "@/store/detail";
import shopcart from "@/store/ShopCart";
import users from "@/store/users";
const state = {};
const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    detail,
    shopcart,
    users,
  },
});

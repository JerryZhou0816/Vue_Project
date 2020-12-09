import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import modules from "@/store/modules";

const state = {};
const mutations = {};
const actions = {};
const getters = {};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules,
});

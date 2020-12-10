import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


import detail from '@/store/detail'

import homeIndex from '@/store/homeIndex/index'

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
    homeIndex,
    detail
  }
});
import Vue from "vue";
import Vuex from "vuex";
import OrderList from '@/store/OrderList'
import User from '@/store/User'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    OrderList,
    User,

  }
});

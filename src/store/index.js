import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import {reqShopCartList} from '@/api'
import shopcart from '@/store/ShopCart'
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {shopcart}
});

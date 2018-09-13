// 组装模块并导出 store 的地方
import Vue from 'vue';
import Vuex from 'vuex';

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production', // 严格模式
});

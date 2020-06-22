import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: 'test'
  },
  getters: {
    test(state){
      return state.test
    }
  },
  mutations: {
    SET_TEST(state, value) {
      state.test = value;
    }
  },
  actions: {
    fetchTest({ commit }, test) {
        commit("SET_TEST", test);
    }
  },
  modules: {
  }
})

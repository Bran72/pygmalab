import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    user: {},
  },
  getters: {
    users(state) {
      return state.users
    },
    user(state) {
      return state.user
    }
  },
  mutations: {
    SET_USERS(state, value) {
      state.users = value;
    },
    SET_USER(state, value) {
      state.user = value;
    }
  },
  actions: {
    fetchUsers({ commit }, users) {
        commit("SET_USERS", users);
    },
    fetchUser({ commit }, user) {
      commit("SET_USER", user);
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: null,
    user: null,
    models: null
  },
  getters: {
    users(state) {
      return state.users
    },
    user(state) {
      return state.user
    },
    models(state) {
      return state.models
    }
  },
  mutations: {
    SET_USERS(state, value) {
      state.users = value;
    },
    SET_USER(state, value) {
      state.user = value;
    },
    SET_MODELS(state, value) {
      state.models = value;
    }
  },
  actions: {
    fetchUsers({ commit }, users) {
        commit("SET_USERS", users);
    },
    fetchUser({ commit }, user) {
      commit("SET_USER", user);
    },
    fetchModels({ commit }, models) {
      commit("SET_MODELS", models);
    }
  },
  modules: {
  }
})

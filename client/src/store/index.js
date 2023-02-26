import { createStore } from "vuex";

import posts from "./posts";

import users from "./users";

export default createStore({
  namespaced: true,
  state: {
    loading: false,
  },
  mutations: {},
  actions: {},
  getters: {
    loading: (state) => state.loading,
  },
  modules: {
    users,
    posts,
  },
});

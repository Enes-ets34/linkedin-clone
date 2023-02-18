import { createStore } from "vuex";

import users from "./users";


export default createStore({
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
  },
});
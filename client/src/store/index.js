import { createStore } from "vuex";

import posts from "./posts";

import users from "./users";

import notifications from "./notifications";

export default createStore({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    users,
    posts,
    notifications,
  },
});

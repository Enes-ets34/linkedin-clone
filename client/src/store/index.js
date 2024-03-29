import { createStore } from "vuex";

import posts from "./posts";

import users from "./users";

import notifications from "./notifications";

import loader from "./loader";

import userNotifications from "./userNotifications";

export default createStore({
  namespaced: true,
  state: {
    modal: null,
  },
  mutations: {
    SET_MODAL(state, modal) {
      state.modal = modal;
    },
  },
  actions: {
    setModal({ commit }, modal) {
      commit("SET_MODAL", modal);
    },
  },
  getters: {},
  modules: {
    users,
    userNotifications,
    posts,
    notifications,
    loader,
  },
});

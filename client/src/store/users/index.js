import router from "../../router";
export default {
  namespaced: true,
  state: {
    user: {
      id: 1,
      name: "enes",
    },
  },
  mutations: {
    setUser(state, pUser) {
      state.user = pUser;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentUser: (state) => state.user,
    isAuth: (state) => state.user !== null,
  },
};

import router from "../../router";
export default {
  namespaced: true,
  state: {
    user: {},
    access_token: null,
  },
  mutations: {
    setUserInfo(state, pUser) {
      state.user = pUser;
      localStorage.user = JSON.stringify(pUser);
    },
    clearUser(state) {
      state.user = null;
    },
  },
  actions: {
    signin({ commit }, pUser) {
      console.log("pUSer :>> ", pUser);
      commit("setUserInfo", pUser);
    },
    signup({ commit }, pUser) {
      console.log("pUSer :>> ", pUser);
      commit("setUserInfo", pUser);
      router?.push("/")
    },
  },
  modules: {},
  getters: {
    getCurrentUser: (state) => state.user,
    isAuth: (state) => state.user !== null && state.accessToken !== null,
    getAccessToken: (state) => state.tokens?.accessToken,
  },
};

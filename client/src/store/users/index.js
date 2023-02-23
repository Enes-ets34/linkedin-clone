import router from "../../router";
import appAxios from "../../utils/appAxios";
export default {
  namespaced: true,
  state: {
    user: null,
    access_token: null,
    registerData: null,
  },
  mutations: {
    setUser(state, pUser) {
      state.user = pUser;
    },
    setUserInfo(state, pUser) {
      state.registerData = pUser;
    },
    setAccessToken(state, pAccessToken) {
      state.access_token = pAccessToken;
    },
    logout(state) {
      appAxios
        .get("/auth/logout", {
          headers: {
            Authorization: `Bearer: ${JSON.parse(localStorage?.access_token)}`,
          },
        })
        .then((res) => {
          if (res?.status === 200) {
            localStorage.lastUserName = state?.user?.full_name;
            state.user = null;
            state.access_token = null;
            localStorage.removeItem("user");
            localStorage.removeItem("access_token");
            router.push("/signup");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  actions: {
    signin({ commit }, pUser) {
      appAxios
        .post("/auth/register", pUser)
        .then((res) => {
          if (res?.status === 200) {
            commit("setUser", res.data.user);
            commit("setAccessToken", res.data.access_token);
            localStorage.user = JSON.stringify(res.data.user);
            localStorage.access_token = JSON.stringify(res.data.access_token);
            router?.push("/signup");
          }
        })
        .catch((err) => {});
    },
    signup({ commit }, pUser) {
      appAxios
        .post("/auth/login", pUser)
        .then((res) => {
          if (res?.status === 200) {
            commit("setUser", res.data.user);
            commit("setAccessToken", res.data.access_token);
            localStorage.user = JSON.stringify(res.data.user);
            localStorage.access_token = JSON.stringify(res.data.access_token);
            router?.push("/");
          }
        })
        .catch((err) => {});
    },
  },
  modules: {},
  getters: {
    getCurrentUser: (state) => state?.user,
    isAuth: (state) => state.user !== null && state.access_token !== null,
    getAccessToken: (state) => state.tokens?.access_token,
  },
};

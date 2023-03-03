import store from "../index";
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
      localStorage.user = JSON.stringify(pUser);
    },
    setAccessToken(state, pAccessToken) {
      state.access_token = pAccessToken;
      localStorage.access_token = pAccessToken;
    },
    setUserInfo(state, pUser) {
      state.registerData = pUser;
    },
    logout(state) {
      appAxios
        .get("/auth/logout")
        .then((res) => {
          console.log("res.status :>> ", res.status);
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
          localStorage.lastUserName = state?.user?.full_name;
          state.user = null;
          state.access_token = null;
          localStorage.removeItem("user");
          localStorage.removeItem("access_token");
          router.push("/signup");
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
            router?.push("/signup");
          }
        })
        .catch((err) => {
          alert("ERROR:" + err.response.data.message);
        });
    },
    signup({ commit }, pUser) {
      appAxios
        .post("/auth/login", pUser)
        .then((res) => {
          if (res?.status === 200) {
            console.log("res.data :>> ", res.data);
            commit("setUser", res.data.user);
            commit("setAccessToken", res.data.access_token);
            router?.push("/");
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            store.dispatch("notifications/showMessage", {
              message: err.response.data.message,
              type: "error",
            });
          } else {
            store.dispatch("notifications/showMessage", {
              message: "Please check your email...",
              type: "error",
            });
          }
        });
    },
    uploadProfilePhoto({ commit }, pUploadedPhoto) {
      
      const formData = new FormData();
      formData.append("profile_image", pUploadedPhoto);

      appAxios
        .post("/auth/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res?.status === 200) {
            commit("setUser", res.data.user);
            location.reload();
          }
        })
        .catch((err) => {
          store.dispatch("notifications/showMessage", {
            message:  err.response.data.message,
            type: "error",
          });
        });
    },
    removeProfilePhoto({ commit }) {
      appAxios
        .delete("/auth/upload")
        .then((res) => {
          if (res?.status === 200) {
            commit("setUser", res.data.user);
            location.reload();
          }
        })
        .catch((err) => {
          store.dispatch("notifications/showMessage", {
            message:  err.response.data.message,
            type: "error",
          });
        });
    },
    updateUser({ commit }, pUser) {
      appAxios
        .put("/users/update", pUser)
        .then((res) => {
          if (res?.status === 200) {
            commit("setUser", res.data.user);
            store.dispatch("notifications/showMessage", {
              message:  'Profiliniz başarıyla güncellendi...',
              type: "success",
            });
          }
        })
        .catch((err) => {
          store.dispatch("notifications/showMessage", {
            message:  err.response.data.message,
            type: "error",
          });
        });
    },
  },
  modules: {},
  getters: {
    getCurrentUser: (state) => state?.user,
    isAuth: (state) => state.user !== null && state.access_token !== null,
    getAccessToken: (state) => state.tokens?.access_token,
  },
};

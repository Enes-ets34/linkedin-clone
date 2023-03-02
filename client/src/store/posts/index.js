import router from "../../router";
import appAxios from "../../utils/appAxios";
import store from "../index";
export default {
  namespaced: true,
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, pPosts) {
      state.posts = pPosts;
    },
    addPost(state, pPost) {
      state.posts.unshift(pPost);
    },
    filterPosts(state, ID) {
      state.posts = state.posts.filter((p) => p._id !== ID);
    },
  },
  actions: {
    fetchPosts({ commit }) {
      appAxios
        .get("/post")
        .then((res) => {
          if (res.status === 200) {
            commit("setPosts", res.data.posts);
          }
        })
        .catch((err) => {
          store.dispatch("notifications/showMessage", {
            message: err.response.data.message,
            type: "error",
          });
        });
    },
    sendPost({ commit }, pPost) {
      appAxios
        .post("/post/new", { content: pPost })
        .then((res) => {
          if (res.status === 200) {
            commit("addPost", res.data.post);
            store.dispatch("notifications/showMessage", {
              message: "Yazınız başarıyla paylaşıldı...",
              type: "success",
            });
          }
        })
        .catch((err) => {
          store.dispatch("notifications/showMessage", {
            message: err.response.data.message,
            type: "error",
          });
        });
    },
    deletePost({ commit }, pPost) {
      if (confirm("ARE YOU SURE?")) {
        appAxios
          .delete(`/post/delete/${pPost._id}`)
          .then((res) => {
            if (res.status === 200) {
              commit("filterPosts", pPost._id);
              store.dispatch("notifications/showMessage", {
                message: "Gönderiniz başarıyla silindi...",
                type: "info",
              });
            }
          })
          .catch((err) => {
            store.dispatch("notifications/showMessage", {
              message: err.response.data.message,
              type: "error",
            });
          });
      }
    },
  },
  modules: {},
  getters: {},
};

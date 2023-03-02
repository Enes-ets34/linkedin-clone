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
          alert('ERROR:' + err.response.data.message)
        });
    },
    sendPost({ commit }, pPost) {
      appAxios
        .post("/post/new", { content: pPost })
        .then((res) => {
          if (res.status === 200) {
            commit("addPost", res.data.post);
            store.dispatch("notifications/showMessage", {
              message: 'Yazınız başarıyla paylaşıldı...',
              type: "success",
            });
          }
        })
        .catch((err) => {
          alert('ERROR:' + err.response.data.message)
        });
    },
  },
  modules: {},
  getters: {},
};

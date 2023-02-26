import router from "../../router";
import appAxios from "../../utils/appAxios";
export default {
  namespaced: true,
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, pPosts) {
      state.posts = pPosts;
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
          console.error(err);
        });
    },
  },
  modules: {},
  getters: {},
};

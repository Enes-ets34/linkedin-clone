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
    updatePost(state, { pPost, pUpdatedPost }) {
      let post = state.posts.find((p) => p._id === pPost._id);
      post.content = pUpdatedPost.content;
    },
    filterPosts(state, ID) {
      state.posts = state.posts.filter((p) => p._id !== ID);
    },
    deleteComment(state, { pPostID, pCommentID }) {
      const post = state?.posts?.find((p) => p._id === pPostID);
      post.comments = post.comments.filter((c) => c._id !== pCommentID);
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
    updatePost({ commit }, pPost) {
      appAxios
        .put(`/post/update/${pPost._id}`, pPost)
        .then((res) => {
          if (res.status === 200) {
            commit("updatePost", { pPost: pPost, pUpdatedPost: res?.data?.post });
            store.dispatch("notifications/showMessage", {
              message: "Gönderiniz başarıyla güncellendi...",
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
    addComment({ commit }, { pUserData, pPost }) {
      appAxios
        .post(`/post/${pPost._id}/comments`, { content: pUserData })
        .then((res) => {
          if (res.status === 200) {
            pPost?.comments.unshift(res?.data?.comment);
          }
        })
        .catch((err) => {
          store.dispatch("notifications/showMessage", {
            message: err.response.data.message,
            type: "error",
          });
        });
    },
    deleteComment({ commit }, pComment) {
      appAxios
        .delete(`/post/${pComment.post}/comments/${pComment._id}/delete`)
        .then((res) => {
          if (res.status === 200) {
            commit("deleteComment", {
              pCommentID: pComment._id,
              pPostID: pComment.post,
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
  },
  modules: {},
  getters: {},
};

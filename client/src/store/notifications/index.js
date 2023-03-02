export default {
  namespaced: true,
  state: {
    message: null,
    type: null,
    duration: 3000,
  },
  mutations: {
    showMessage(state, payload) {
      state.message = payload.message;
      state.type = payload.type
    },
    hideMessage(state) {
      state.message = null;
     state.type = null
    },
  },
  actions: {
    showMessage({ commit, state }, payload) {
      commit("showMessage", payload);
      setTimeout(() => {
        commit("hideMessage");
      }, state.duration);
    },
  },
  modules: {},
  getters: {
  },
};

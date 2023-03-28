import appAxios from "../../utils/appAxios";
import store from "../index";

export default {
  namespaced: true,
  state: {
    notifications: [],
  },
  mutations: {
    setUserNotifications(state, pNotifications) {
      state.notifications = pNotifications;
    },
    setReadedUserNotification(state, pNotificationID) {
      const notif = state.notifications.find((n) => n._id === pNotificationID);
      notif.read = true;
    },
    removeUserNotification(state, pNotificationID) {
      state.notifications = state.notifications.filter(
        (n) => n._id !== pNotificationID
      );
    },
  },
  actions: {
    fetchUserNotifications({ commit }) {
      const userID = store.getters["users/getCurrentUser"]._id;
      appAxios
        .get(`/notification/${userID}`)
        .then((res) => {
          commit("setUserNotifications", res.data.notifications);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    readUserNotification({ commit }, pNotifID) {
      appAxios
        .get(`/notification/read/${pNotifID}`)
        .then((res) => {
          commit("setReadedUserNotification", res.data.notification._id);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    deleteUserNotification({ commit }, pNotifID) {
      appAxios
        .delete(`/notification/${pNotifID}`)
        .then((res) => {
          if (res.status === 200) {
            commit("removeUserNotification", pNotifID);
            store.dispatch("notifications/showMessage", {
              message: "Bildirim başarıyla silindi...",
              type: "info",
            });
          }
        })
        .catch((err) => {
          console.error(err);
          store.dispatch("notifications/showMessage", {
            message: err.response.data.message,
            type: "error",
          });
        });
    },
  },
  modules: {},
  getters: {
    getNotifications: (state) => state.notifications,
    showIcon: (state) =>
      Boolean(state.notifications.filter((n) => n.read === false).length > 0),
  },
};

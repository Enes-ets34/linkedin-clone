import { createApp } from "vue";
import router from "./router";
import store from "./store";
import appAxios from "./utils/appAxios";

import "./assets/index.css";
import appNavbar from "./components/shared/appNavbar.vue";
import appChatBox from "./components/shared/appChatBox.vue";
import appNotif from "./components/shared/appNotif.vue";
import appLoader from "./components/shared/appLoader.vue";
import App from "./App.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("appLoader", appLoader)
  .component("appNavbar", appNavbar)
  .component("appNotif", appNotif)
  .component("appChatBox", appChatBox)
  .mount("#app");

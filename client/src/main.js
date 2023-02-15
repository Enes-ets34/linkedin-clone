import { createApp } from "vue";
import "./assets/index.css";
import appNavbar from "./components/shared/appNavbar.vue";
import appChatBox from "./components/shared/appChatBox.vue";
import App from "./App.vue";

createApp(App)
.component("appNavbar", appNavbar)
.component("appChatBox", appChatBox)
.mount("#app");

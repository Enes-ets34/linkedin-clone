import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/auth/signin/Signin.vue"),
    children: [
      {
        path: "name_info",
        component: () => import("../views/auth/signin/SigninNameInfo.vue"),
      },
      {
        path: "location_info",
        component: () => import("../views/auth/signin/SigninLocationInfo.vue"),
      },
      {
        path: "title_info",
        component: () => import("../views/auth/signin/SigninTitleInfo.vue"),
      },
    ],
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/auth/Signup.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  let user = null;
  if (localStorage?.user) user = JSON.parse(localStorage?.user);
  store.commit("users/setUserInfo", user);
  next();
});
export default router;

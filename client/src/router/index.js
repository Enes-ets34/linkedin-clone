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
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/user/Profile.vue"),
  },
  {
    path: "/user/:slug",
    name: "User",
    component: () => import("../views/user/User.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../views/auth/ForgotPassword.vue"),
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
  let user,
    access_token = null;
  const authenticatedPages = ["Home", "Profile"];
  // LocalStorage üzerinde User var mi?

  if (localStorage?.user) {
    user = JSON.parse(localStorage?.user);
  }
  if (localStorage?.access_token) {
    access_token = localStorage?.access_token;
  }

  // LocalStorage üzerinde User varsa Store'u güncelle
  if (user && access_token) {
    store.commit("users/setUser", user);
    store.commit("users/setAccessToken", access_token);
  }
  // isAuthenticated bilgisini Store üzerinden al..
  const isAuth = store.getters["users/isAuth"];

  // Rules...
  // Eğer Giriş yapmamışsa ve User ile ilgili bölümlere girmek istiyorsa.. Engelle ve Login sayfasına yönlendir..
  if (!isAuth && authenticatedPages.indexOf(to.name) > -1) return next({ name: "Signup" });

  if (isAuth && (to.name === "Signup" || to.name === "Signin"))  return next({ name: "Home" });

  next();
});

export default router;

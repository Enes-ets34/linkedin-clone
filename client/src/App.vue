<script setup>
import { useStore } from 'vuex';
import { BASE_URL } from './constants';
import appAxios from './utils/appAxios';
const store = useStore()
const token = localStorage.access_token
if (token) {
  appAxios.get(`${BASE_URL}/auth/profile`)
    .then((res) => {
      console.log('res :>> ', res);
    }).catch((err) => {
      store.dispatch("notifications/showMessage", {
        message: 'Please login again.',
        type: "error",
      });
      store.commit("users/logout")
    });
}
store.dispatch('posts/fetchPosts')
</script>
<template class="relative">
  <appNavbar />
  <router-view>
  </router-view>
  <teleport to="body">
    <appNotif class="sm:bottom-2 top-0" v-if="$store.state['notifications'].message" />
  </teleport>
  <appChatBox />
</template>

<style ></style>

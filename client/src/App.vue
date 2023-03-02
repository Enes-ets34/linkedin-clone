<script setup>
</script>
<template class="relative">
  <appNavbar />
  <router-view>
  </router-view>
  <appNotif class=" sm:bottom-2 top-0" v-if="$store.state['notifications'].message" />
  <appChatBox />
</template>

<style scoped></style>

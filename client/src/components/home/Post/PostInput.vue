<script setup>
import { ref } from 'vue';
import { BASE_URL } from '../../../constants';

import SendPostModal from "./SendPostModal.vue"
const props = defineProps({
    currentUser: {
        type: Object,
    }
})
const postModal = ref(false)
const openSendPostModal = () => {
    postModal.value = true
}
</script>
<template>
    <div class="flex justfiy-between items-center space-x-2">
        <!-- <img :src="`${BASE_URL}/uploads/${currentUser?.profile_image}`" alt="" class="rounded-full w-14 " /> -->
        <img :src="`${BASE_URL}/uploads/default.png`" alt="" class="rounded-full w-14 " />
        <input @focus="openSendPostModal" type="text" placeholder="Gönderi başlat"
            class="border flex-1 border-muted placeholder:font-semibold placeholder:text-muted hover:cursor-pointer hover:bg-gray-200 transition-all duration-300 py-3 px-4 rounded-full" />
    </div>
    <SendPostModal v-if="postModal" @close-post-modal="postModal = $event" />
</template>

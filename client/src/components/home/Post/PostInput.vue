<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    currentUser: {
        type: Object,
    }
})

</script>
<template>
    <div class="flex justfiy-between items-center space-x-2">
        <img :src="`http://localhost:3000/uploads/${currentUser?.profile_image}`" alt="" class="rounded-full w-14 " />
        <input type="text" placeholder="Gönderi başlat"
            class="border flex-1 border-muted placeholder:font-semibold placeholder:text-muted hover:cursor-pointer hover:bg-gray-200 transition-all duration-300 py-3 px-4 rounded-full">
    </div>
</template>

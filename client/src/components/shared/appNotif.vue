<script setup>

import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

const getNotif = store.state['notifications']
const icon = computed(() => {
    if (getNotif.type === 'success') {
        return "fa-sharp fa-solid fa-circle-check text-green-600 "
    }
    if (getNotif.type === 'error') {
        return "fa-solid fa-circle-xmark text-red-600 "
    }
    if (getNotif.type === 'info') {
        return "fa-sharp fa-solid fa-circle-info text-sky-600"
    }
})
</script>
<template >
    <div id="body"
        class=" bg-white w-full p-4 z-20 fixed md:sticky sm:left-2 top-0 md:bottom-0 lg:bottom-1 md:left-1 md:w-1/4 sm:w-1/2 whitespace-nowrap border text font-semibold flex justify-between items-center rounded-lg shadow-2xl">

        <i v-if="getNotif.type" :class="icon" class="text-2xl"></i>
        <span>{{ getNotif.message }} </span>
        <i class="fa-solid fa-xmark"></i>
    </div>
</template>

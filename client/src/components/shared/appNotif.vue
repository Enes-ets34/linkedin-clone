<script setup>

import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

const getNotif = store.state['notifications']
const icon = computed(() => {
    if (getNotif.type === 'success') {
        return "fa-sharp fa-solid fa-circle-check text-green-600 text-2xl"
    }
    if (getNotif.type === 'error') {
        return "fa-solid fa-circle-xmark text-red-600 text-2xl"
    }
})
</script>
<template >
    <div
        class="bg-white p-4 z-20 sm:left-2 sticky bottom-[600px] md:bottom-1 md:left-1  w-full sm:w-1/4 whitespace-nowrap  border text font-semibold flex justify-between items-center rounded-lg shadow-2xl">

        <i v-if="getNotif.type" :class="icon"></i>
        <span>{{ getNotif.message }} </span>
        <i class="fa-solid fa-xmark"></i>
    </div>
</template>
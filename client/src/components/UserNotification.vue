<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { BASE_URL } from '../constants';
const store = useStore()
const notifMenu = ref(false)
const props = defineProps({
    notification: {
        type: Object
    }
})
const readUserNotification = () => {
    if (props.notification.read === false) {
        store.dispatch('userNotifications/readUserNotification', props.notification._id)
    }
}
const deleteNotif = () => {
    store.dispatch('userNotifications/deleteUserNotification', props.notification._id)
}

</script>
<template>
    <div :class="{ 'bg-blue-100 hover:bg-blue-200 hover:bg-opacity-80 ': !notification.read, 'pl-2': notification.read }"
        class="flex relative justify-between items-start  border-b cursor-pointer hover:bg-[#ebebeb] transition-all duration-200">
        <div @click="readUserNotification()"
            class="flex relative sm:justify-between  items-start  space-x-2 p-4 px-6 pb-2 ">
            <span v-if="!notification.read" class="p-1 absolute top-10 left-2 bg-primary rounded-full"></span>
            <img :src="`${BASE_URL}/uploads/default.png`" alt="" class="object-contain w-14 h-14 rounded-full ">
            <div class="flex flex-col text-sm">
                <div class="space-x-4">
                    <span class="font-semibold">{{ notification.sender.full_name }}</span> {{ notification.message }}
                </div>
                <span>
                    <button
                        class=" px-3 py-1 mt-2 rounded-full ring-1 hover:ring-2 ring-primary text-primary font-semibold bg-tranparent transition-all duration-300 hover:bg-blue-100">
                        Message
                    </button>
                </span>
            </div>
        </div>
        <div class="p-4 relative flex flex-col text-muted items-center">
            <small>20s</small>
            <span @click="notifMenu = !notifMenu" class="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
                    class="mercado-match" width="24" height="24" focusable="false">
                    <path
                        d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z">
                    </path>
                </svg>
            </span>
            <div v-if="notifMenu"
                class="bg-white border w-36 text-xs rounded-lg rounded-tr-none shadow-xl absolute top-20 z-10 right-5 font-semibold">
                <ul class="rounded-lg ">
                    <li @click="deleteNotif()"
                        class="flex rounded-tl-md justify-start space-x-4 items-center p-4 hover:cursor-pointer hover:bg-neutral-200">
                        <i class="fa-sharp fa-solid fa-trash"></i>
                        <span class="flex flex-col">
                            <p>Sil</p>
                            <small>Bu bildirimi sil.</small>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
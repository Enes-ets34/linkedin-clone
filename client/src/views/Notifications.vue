<script setup>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import RightSide from '../components/home/RightSide.vue';
import { useRoute } from 'vue-router';
import UserNotification from '../components/UserNotification.vue'
const route = useRoute()
const store = useStore()


const currentUser = computed(() => store.getters['users/getCurrentUser'])
const notifications = computed(() => store.getters['userNotifications/getNotifications'])
store.dispatch('userNotifications/fetchUserNotifications')
</script>
<template>
    <div class="container mt-16  sm:mt-20">

        <div class="flex flex-col md:flex-row justify-between pb-52 items-center md:items-start md:space-x-5 ">
            <div class="hidden md:flex flex-col sticky -top-[295px] flex-1 md:basis-1/4 space-y-2  ">
                <div class="border bg-white rounded-lg p-4 ">
                    <h3 class=" font-semibold mb-2">Bildirimlerinizi yönetin</h3>
                    <small class="text-primary font-semibold hover:underline cursor-pointer">Ayarları Görüntüle</small>
                </div>
            </div>
            <div class="w-full md:basis-2/3 flex flex-col border rounded-lg bg-white first:bg-red-500">
                <div v-if="notifications.length === 0" class="flex flex-col justify-center items-center py-6 space-y-2">
                    <img src="/noNotifImg.png" class="w-72" alt="">
                    <h3 class="text-2xl">Yeni bildirim yok</h3>
                    <p class="text-center">Ana sayfanızdaki diğer güncellemeleri <br> görüntüleyin</p>
                    <router-link to="/"
                        class=" px-3 py-1 mt-12 rounded-full ring-1 hover:ring-2 ring-primary text-primary font-semibold bg-tranparent transition-all duration-300 hover:bg-blue-100">
                       Ana Sayfaya git
                    </router-link>
                </div>
                <UserNotification v-for="notification in notifications" :key="notification._id"
                    :notification="notification" />
            </div>
            <!-- RightSide -->
            <RightSide />
            <!-- /RightSide -->
        </div>
    </div>
</template>
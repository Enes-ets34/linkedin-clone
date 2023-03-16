<script setup>
import { BASE_URL } from '../../constants';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const route = useRouter()
const store = useStore()
const currentUser = computed(() => store.getters['users/getCurrentUser'])

const hideChatbox = computed(() => {
    return !Boolean(route.currentRoute.value.fullPath.includes('/signin') || route.currentRoute.value.fullPath.includes('/signup') || route.currentRoute.value.fullPath.includes('/forgot-password')||route.currentRoute.value.fullPath.includes('/reset-password'))
})

const profile_image = computed(() => {
    return currentUser.profile_image ? `${BASE_URL}/uploads/${currentUser?.value?.profile_image}` : `${BASE_URL}/uploads/default.png`
})
</script>
<template>
    <div v-if="hideChatbox"
        class=" hidden md:flex h-12 group hover:h-[650px] duration-500  fixed bottom-0 right-0 max-w-xs flex-col   bg-white rounded-t-lg border">
        <div
            class="top-0  flex rounded-t-lg text-sm border-b py-2 px-3 z-10   drop-shadow-lg font-semibold hover:cursor-pointer  justify-between items-center space-x-12 hover:bg-gray-100">
            <div class="flex items-center space-x-2">
                <div class="relative w-8 ">
                    <img class="w-8 rounded-full" :src="profile_image|| 'default.png'" alt="">
                    <div
                        class="absolute right-0 bottom-0 rounded-full w-1 h-1 bg-green-700 p-1 border-[1.5px] border-white">
                    </div>
                </div>
                <p class="text-sm">Mesajlaşma</p>
            </div>

            <div class="flex justify-between items-center text-muted ">
                <span
                    class="font-bold  inline-block align-top hover:bg-gray-200 transition-all duration-150 rounded-full pb-2 px-2">...</span>
                <i class="fa-solid fa-pen-to-square    hover:bg-gray-200 transition-all duration-150 rounded-full p-2"></i>
                <i
                    class=" fa-solid fa-chevron-up group-hover:rotate-180  hover:bg-gray-200 transition-all duration-150 rounded-full p-2"></i>
            </div>
        </div>
        <div class="px-3 py-2 mb-2 ">
            <div
                class=" flex justify-between items-center px-4 py-1 space-x-2 border border-transparent hover:border-black bg-slate-100 rounded-sm">
                <i class="fa-solid fa-magnifying-glass text-muted"></i>
                <input type="text" placeholder="Mesajlarda ara"
                    class=" bg-transparent border-none outline-none text-sm placeholder:text-muted ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#666666"
                    width="16" height="16" focusable="false">
                    <path
                        d="M15 2v2H6.72a2 2 0 01-3.44 0H1V2h2.28a2 2 0 013.44 0H15zm-4 4a2 2 0 00-1.72 1H1v2h8.28a2 2 0 003.45 0H15V7h-2.28A2 2 0 0011 6zm-6 5a2 2 0 00-1.72 1H1v2h2.28a2 2 0 003.45 0H15v-2H6.72A2 2 0 005 11z">
                    </path>
                </svg>
            </div>
        </div>
        <div class="overflow-auto transition-all duration-1000">

            <div class="px-3 flex justify-between items-start  py-2  hover:cursor-pointer hover:bg-gray-100 border-b"
                v-for="i in 10" :key="i">
                <div class="flex space-x-2  ">
                    <div class="relative ">
                        <img src="https://avatars.githubusercontent.com/u/5469995?v=4" alt=""
                            class="rounded-full object-contain w-14 h-14 ">
                        <div
                            class="absolute right-1 bottom-0 rounded-full w-3 h-3 bg-green-700 p-1 border-[1.5px] border-white">
                        </div>
                    </div>
                    <div class="flex flex-col ">
                        <a href="#" class="font-bold text-sm">Gokhan Kandemir</a>
                        <small class="text-xs text-muted max-w-[155px] overflow-hidden">Siz: Abi selam, nasılsın proje Lorem
                            ipsum dolor...</small>
                    </div>
                </div>
                <small class="text-muted">15 Şub</small>

            </div>
        </div>


    </div>
</template>
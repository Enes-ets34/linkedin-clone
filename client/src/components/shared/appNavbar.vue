<script setup>
import { computed, ref } from 'vue';
import { BASE_URL } from '../../constants';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import SettingsCard from '../../components/SettingsCard.vue';
const store = useStore()
const route = useRouter()
const router = useRouter()
const currentUser = computed(() => store.getters['users/getCurrentUser'])
const profile_image = computed(() => {
    return currentUser?.profile_image ? `${BASE_URL}/uploads/${currentUser?.value?.profile_image}` : `${BASE_URL}/uploads/default.png`
})
const search = (e) => {
    router.push({
        path: "/search",
        query: { search: e.target.value }
    })
    e.target.value = ""
}
const currentRoute = computed(() => {
    return route.currentRoute.value.fullPath
})

const unReadIcon = computed(() => store.getters['userNotifications/showIcon'])


const hideNavbar = computed(() => {
    return !Boolean(currentRoute.value === '/signin' || currentRoute.value === '/signup' || currentRoute.value === '/forgot-password' || currentRoute.value === '/reset-password' || route.currentRoute.value.name==='NotFound')
})
const showSettingsCard = ref(false)
</script>
<template>
    <header v-if="hideNavbar"
        class="fixed z-[1] top-0 left-0 right-0 border-b-[1px] bg-white border-b-[rgba(0,0,0,0.2)] sm:mb-3 ">
        <nav class="">
            <div class="container w-full  py-3 px-4 md:py-0 md:px-0">
                <div class="flex relative md:static justify-between items-center">
                    <div
                        class="md:order-none md:py-1 md:static absolute left-12 flex justify-start items-center md:space-x-3">
                        <!-- Logo -->
                        <router-link to="/" tag="i"
                            class="fa-brands hidden md:block fa-linkedin text-3xl md:text-5xl text-primary"></router-link>
                        <!-- /Logo -->
                        <!-- Search Area -->
                        <div
                            class="relative bg-slate-100 px-4 py-1 flex items-center  md:hover:w-[350px] w-[250px] rounded-md text-sm h-10 ">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#666667" class="mercado-match absolute left-3 group-hover:fill-black " width="24"
                                height="24" focusable="false">
                                <path
                                    d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z">
                                </path>
                            </svg>
                            <input @keypress.enter="search($event)"
                                class=" bg-slate-100 h-full w-full ml-5 outline-0 placeholder:text-slate-600 "
                                placeholder="Arama Yap" type="text">
                        </div>
                        <!-- /Search Area -->
                    </div>
                    <!-- Nav Items -->

                    <ul class="flex justify-between items-center ">

                        <div
                            class="px-2 md:p-0 md:static flex justify-between items-center fixed z-[1] bottom-0 left-0 right-0 border-t-[1px] bg-white sm:border-none border-t-[rgba(0,0,0,0.2)]">
                            <li class="text-muted">
                                <router-link tag="li"
                                    class="flex flex-col hover:text-black justify-start items-center text-center hover:cursor-pointer group border-0  w-12 md:w-20"
                                    active-class="lg:border-b-2 border-t md:border-t-0 md:border-b text-black border-black"
                                    to="/">
                                    <svg v-if="currentRoute === '/'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24"
                                        height="24" focusable="false">
                                        <path
                                            d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z">
                                        </path>
                                    </svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24"
                                        height="24" focusable="false">
                                        <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                                    </svg><small class="">Anasayfa</small>
                                </router-link>
                            </li>
                            <li
                                class="flex flex-col justify-start items-center text-center group  hover:cursor-pointer w-12 md:w-20 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="#666667" class="mercado-match group-hover:fill-black" width="24" height="24"
                                    focusable="false">
                                    <path
                                        d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z">
                                    </path>
                                </svg><small class="text-muted group-hover:text-black">Ağım</small>
                            </li>
                            <li
                                class="flex sm:hidden flex-col justify-start items-center text-center group  hover:cursor-pointer w-12 md:w-20 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                                </svg>
                                <small class="text-muted group-hover:text-black">Gönder</small>
                            </li>
                            <router-link to="/notifications"
                                active-class="lg:border-b-2 border-t md:border-t-0 md:border-b text-black border-black"
                                class="relative md:hidden flex flex-col justify-start items-center text-center hover:cursor-pointer group w-12 md:w-20 ">
                                <span v-if="unReadIcon"
                                    class="p-[5px]  absolute top-1 right-3 bg-red-600 rounded-full"></span>
                                <svg v-if="currentRoute.includes('notifications')" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match"
                                    width="24" height="24" focusable="false">
                                    <path
                                        d="M22 19.24a3.46 3.46 0 01-.09.78l-.22 1-6.76-1.51A2.16 2.16 0 0115 20a2 2 0 11-3.53-1.28L2 16.62l.22-1A4.45 4.45 0 014 13.12l1.22-.93 15.46 3.44.7 1.36a5 5 0 01.62 2.25zm-1.49-10.4a6.29 6.29 0 00-4.92-6.69A6.76 6.76 0 0014.18 2a6.29 6.29 0 00-5.9 4.12l-2 5.27 13.8 3.08z">
                                    </path>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    data-supported-dps="24x24" fill="#666667" class="mercado-match group-hover:fill-black"
                                    width="24" height="24" focusable="false">
                                    <path
                                        d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z">
                                    </path>
                                </svg>
                                <small class="text-muted  group-hover:text-black">Bildirimler</small>
                            </router-link>
                            <li class="text-muted">
                                <router-link tag="li"
                                    class="flex no-wrap flex-col hover:text-black justify-start items-center text-center hover:cursor-pointer group border-0  w-12 md:w-20"
                                    :class="{ 'lg:border-b-2 border-t md:border-t-0 md:border-b text-black border-black': currentRoute.includes('job') }"
                                    to="/jobs">

                                    <svg v-if="currentRoute.includes('job')" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
                                        class="mercado-match" width="24" height="24" focusable="false">
                                        <path
                                            d="M22.84 10.22L21 6h-3.95V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2l2.22 5.18A3 3 0 007 13h14a2 2 0 001.84-2.78zM15.05 6h-6V5a1 1 0 011-1h4a1 1 0 011 1zM7 14h15v3a3 3 0 01-3 3H5a3 3 0 01-3-3V8.54l1.3 3A4 4 0 007 14z">
                                        </path>
                                    </svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        data-supported-dps="24x24" fill="currentColor" class="mercado-match " width="24"
                                        height="24" focusable="false">
                                        <path
                                            d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z">
                                        </path>

                                    </svg><small class="whitespace-nowrap">İş İlanları</small>

                                </router-link>
                            </li>
                        </div>


                        <li
                            class="absolute right-px md:static flex flex-col justify-start items-center text-center hover:cursor-pointer group  w-12 md:w-20">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#666667" class="mercado-match group-hover:fill-black" width="24" height="24"
                                focusable="false">
                                <path
                                    d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z">
                                </path>
                            </svg><small class="text-muted hidden md:block group-hover:text-black">Mesajlaşma</small>
                        </li>
                        <router-link to="/notifications"
                            class=" relative hidden md:flex flex-col justify-start items-center text-center hover:cursor-pointer group w-12 md:w-20 "
                            :class="{ 'lg:border-b-2 border-t md:border-t-0 md:border-b text-black border-black': currentRoute.includes('notifications') }">
                            <span v-if="unReadIcon" class="p-1  absolute  right-7 bg-red-600 rounded-full"></span>
                            <svg v-if="currentRoute.includes('notifications')" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match"
                                width="24" height="24" focusable="false">
                                <path
                                    d="M22 19.24a3.46 3.46 0 01-.09.78l-.22 1-6.76-1.51A2.16 2.16 0 0115 20a2 2 0 11-3.53-1.28L2 16.62l.22-1A4.45 4.45 0 014 13.12l1.22-.93 15.46 3.44.7 1.36a5 5 0 01.62 2.25zm-1.49-10.4a6.29 6.29 0 00-4.92-6.69A6.76 6.76 0 0014.18 2a6.29 6.29 0 00-5.9 4.12l-2 5.27 13.8 3.08z">
                                </path>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#666667" class="mercado-match group-hover:fill-black" width="24" height="24"
                                focusable="false">
                                <path
                                    d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z">
                                </path>
                            </svg><small class="text-muted hidden md:block group-hover:text-black">Bildirimler</small>
                        </router-link>
                        <!-- Profile -->

                        <li @click="showSettingsCard = !showSettingsCard"
                            class="flex group flex-col justify-between items-center text-center hover:cursor-pointer group  lg:w-20 lg:border-r-2  border-gray-300 ">
                            <img :src="profile_image || 'default.png'" alt="" class="rounded-full w-8 md:w-6">
                            <div class="md:flex hidden justify-between items-center space-x-1">
                                <small class="text-muted  group-hover:text-black">Ben</small><i
                                    class="fas fa-caret-down text-muted  group-hover:text-black"></i>
                            </div>
                            <SettingsCard v-if="showSettingsCard" />
                        </li>
                        <!-- /Profile -->
                        <li
                            class=" flex-col hidden lg:flex justify-start items-center text-center hover:cursor-pointer group w-12 md:w-20 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#666667" class="mercado-match group-hover:fill-black" width="24" height="24"
                                focusable="false">
                                <path
                                    d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z">
                                </path>
                            </svg>
                            <div class="flex  justify-between items-center space-x-1">
                                <small class="text-muted hidden lg:block group-hover:text-black">İş</small><i
                                    class="fas fa-caret-down text-muted group-hover:text-black"></i>
                            </div>
                        </li>
                        <li class="text-center  hover:cursor-pointer group w-32 leading-[1px] break-words ">
                            <a href="#"
                                class="text-[#915907] hidden lg:block text-xs underline decoration-1 hover:text-[#5d3b09]">
                                Daha hızlı işe alın. Ücretsiz deneyin Premium .
                            </a>
                        </li>

                    </ul>
                    <!-- /Nav Items -->

                </div>
            </div>
        </nav>
    </header>
</template>
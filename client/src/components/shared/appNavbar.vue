<script setup>
import SettingsCard from '../../components/SettingsCard.vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter()
const hideNavbar = computed(() => {
    return route.currentRoute.value.fullPath.includes('signin') || route.currentRoute.value.fullPath.includes('signup')
})
</script>
<template>
    <header v-if="!hideNavbar"
        class="fixed z-[1] top-0 left-0 right-0 border-b-[1px] bg-white border-b-[rgba(0,0,0,0.2)] mb-3 ">
        <nav class="">
            <div class="container w-full   py-6 px-4 md:py-2 md:px-0">
                <div class="flex justify-between items-center">
                    <div class=" w-full flex justify-start items-center md:space-x-3">
                        <!-- Logo -->
                        <i class="fa-brands fa-linkedin text-3xl md:text-5xl text-primary"></i>
                        <!-- /Logo -->
                        <!-- Search Area -->

                        <input
                            class="hidden lg:block bg-slate-100 px-4  py-1 placeholder:text-slate-600 focus:outline-2 focus:border-primary focus:w-[85%]  rounded-md text-sm h-10 "
                            placeholder="Arama Yap" type="text">
                        <!-- /Search Area -->
                    </div>
                    <!-- Nav Items -->
                    <ul class="flex justify-between items-center ">
                        <li
                            class="flex lg:hidden flex-col justify-start items-center text-center hover:cursor-pointer group w-12 md:w-20 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#666667" class="mercado-match group-hover:fill-black " width="24" height="24"
                                focusable="false">
                                <path
                                    d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z">
                                </path>
                            </svg><small class="text-muted  hidden lg:block group-hover:text-black">Arama Yap</small>
                        </li>
                        <li
                            class="flex flex-col justify-start items-center text-center hover:cursor-pointer group border-0 lg:border-b-2  border-black w-12 md:w-20">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="currentColor" class="mercado-match group-hover:fill-black w-40" width="24" height="24"
                                focusable="false">
                                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z">
                                </path>
                            </svg> <small class="hidden lg:block">Anasayfa</small>
                        </li>
                        <li
                            class="flex flex-col justify-start items-center text-center group  hover:cursor-pointer w-12 md:w-20 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#666667" class="mercado-match group-hover:fill-black" width="24" height="24"
                                focusable="false">
                                <path
                                    d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z">
                                </path>
                            </svg><small class="text-muted hidden lg:block group-hover:text-black">Ağım</small>
                        </li>
                        <li
                            class="flex flex-col justify-start items-center text-center hover:cursor-pointer group  w-12 md:w-20">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#666667" class="mercado-match group-hover:fill-black" width="24" height="24"
                                focusable="false">
                                <path
                                    d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z">
                                </path>
                            </svg><small class="text-muted hidden lg:block group-hover:text-black">İş İlanları</small>
                        </li>
                        <li
                            class="flex flex-col justify-start items-center text-center hover:cursor-pointer group  w-12 md:w-20">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#666667" class="mercado-match group-hover:fill-black" width="24" height="24"
                                focusable="false">
                                <path
                                    d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z">
                                </path>
                            </svg><small class="text-muted hidden lg:block group-hover:text-black">Mesajlaşma</small>
                        </li>
                        <li
                            class="flex flex-col justify-start items-center text-center hover:cursor-pointer group w-12 md:w-20 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#666667" class="mercado-match group-hover:fill-black" width="24" height="24"
                                focusable="false">
                                <path
                                    d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z">
                                </path>
                            </svg><small class="text-muted hidden lg:block group-hover:text-black">Bildirimler</small>
                        </li>
                        <li
                            class="flex group flex-col justify-start items-center text-center hover:cursor-pointer group w-12 md:w-20 md:border-r-2  border-gray-300 ">
                            <img src="https://media.licdn.com/dms/image/D4D03AQHzAd40z9LpCQ/profile-displayphoto-shrink_400_400/0/1676202254256?e=1681948800&v=beta&t=6JsAPyVaEwX2ti9XZZ9bCFBRDcbdSfhaw_2PDUOKg6M"
                                alt="" class="rounded-full w-8 md:w-6">
                            <div class="flex justify-between items-center space-x-1">
                                <small class="text-muted hidden lg:block group-hover:text-black">Ben</small><i
                                    class="fas fa-caret-down text-muted hidden lg:block group-hover:text-black"></i>
                            </div>
                            <SettingsCard class=""/>
                        </li>
                        <li
                            class=" flex-col hidden md:flex justify-start items-center text-center hover:cursor-pointer group w-12 md:w-20 ">
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
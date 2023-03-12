<script setup>
import { useRouter } from 'vue-router';
import RightSide from '../components/home/RightSide.vue';
const route = useRouter()

</script>
<template>
    <div class="container mt-16 px-0 sm:mt-20">

        <div class="flex flex-col md:flex-row justify-start items-center md:items-start md:space-x-5 ">
            <div class="flex flex-col w-full md:basis-1/2 ">
                <div class=" flex flex-col space-y-2">
                    <div class="border pt-3  py-4 px-4  text-sm bg-white rounded-lg">
                        <div class="flex justify-start items-start space-x-2">
                            <img src="https://yt3.googleusercontent.com/AAnXC4o1n8BKDsO5l6Uc71rf7WOJjm2-aUHzkvyp9vGYB5F4UtXWTecVzvPOBCFK0bNYsZlD7Hk=s900-c-k-c0x00ffffff-no-rj"
                                alt="" class="object-contain  w-24 h-24 ">
                            <div class="flex flex-col">
                                <a href="#" class="font-semibold text-2xl">META</a>
                                <p>Teknoloji</p>
                                <p class="text-muted">735 B takipçi</p>
                                <p class="text-muted mb-2">California,ABD</p>
                                <p class="font-semibold flex items-center text-muted mb-2"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                                        fill="currentColor" class="mr-2" width="16" height="16" focusable="false">
                                        <path
                                            d="M14 11.75V15H9v-3.25A1.75 1.75 0 0110.75 10h1.5A1.75 1.75 0 0114 11.75zM11.5 9A2.5 2.5 0 109 6.5 2.5 2.5 0 0011.5 9zM5 1a3 3 0 103 3 3 3 0 00-3-3zm.75 7h-1.5A2.25 2.25 0 002 10.25V15h6v-4.75A2.25 2.25 0 005.75 8z">
                                        </path>
                                    </svg>248B Takipçi
                                </p>

                                <div class="flex items-center space-x-2">
                                    <button
                                        class=" text-base bg-primary  rounded-full py-1 px-3 text-white active:bg-[#09223b] hover:bg-[#004182] transition-all duration-300 font-semibold">
                                        Takip et
                                    </button>
                                    <router-link to=""
                                        class="py-1 px-3 text-base rounded-full border border-1 border-muted text-muted font-semibold bg-white transition-all duration-300 hover:bg-gray-200">
                                        Sayfayı görüntüle
                                    </router-link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="border   py-2  text-sm bg-white rounded-lg">
                        <p class="font-semibold text-xl mb-4  px-4">Kişiler</p>
                        <div v-for="i in 5" class="flex justify-start pl-4 py-2  items-start ">
                            <img src="https://media.licdn.com/dms/image/D4D03AQEBpJLboCb2KQ/profile-displayphoto-shrink_800_800/0/1677235747564?e=2147483647&v=beta&t=xDXFxbs-NYmGmUPvkqw_bghdwxV8maJz7julZwxP9oI"
                                alt="" class="object-contain   w-14 h-14 rounded-full ">
                            <div class="flex justify-between px-4  border-b items-start  w-full space-x-2 ">
                                <div class="flex flex-col">
                                    <a href="#" class="font-semibold  text-base">Enes Taha SARI</a>
                                    <p>Software Developer | Vue</p>
                                    <p class="text-muted ">İstanbul,Turkey</p>
                                    <small class="text-muted mb-2">Şu anda: <b>META</b> şirketinde Software
                                        Developer</small>
                                </div>
                                
                                <button
                                class="px-4 py-1 text-base mt-2 rounded-full border border-1 border-primary text-primary font-semibold bg-white transition-all duration-300 hover:bg-blue-100">
                                <p> Bağlantı kur</p>
                            </button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- RightSide -->
            <div class="sticky -top-[245px] basis-1/4 hidden lg:flex flex-col">
                <div class="border p-3 space-y-2 bg-white rounded-lg">
                    <div class="flex justify-between items-center">
                        <p class="font-semibold">Diğer görüntülenenler</p>
                        <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="signal-notice-small"
                            class="text-muted">
                            <!---->
                            <use href="#signal-notice-small" width="16" height="16"></use>
                        </svg>
                    </div>
                    <div v-for="i in 5" :key="i" class="flex justify-start items-start space-x-2">
                        <img src="https://yt3.googleusercontent.com/AAnXC4o1n8BKDsO5l6Uc71rf7WOJjm2-aUHzkvyp9vGYB5F4UtXWTecVzvPOBCFK0bNYsZlD7Hk=s900-c-k-c0x00ffffff-no-rj"
                            alt="" class="object-contain  w-14 h-14 ">
                        <div class="flex flex-col">
                            <a href="#" class="font-semibold ">META</a>
                            <small>Teknoloji</small>
                            <small class="text-muted">735 B takipçi</small>

                            <button
                                class=" px-3 py-1 mt-2 rounded-full border border-1 border-primary text-primary font-semibold bg-white transition-all duration-300 hover:bg-blue-100">
                                <p> Takip Et</p>
                            </button>

                        </div>
                    </div>

                </div>


            </div>
            <!-- /RightSide -->
        </div>
    </div>
</template>
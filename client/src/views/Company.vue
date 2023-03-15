<script setup>
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import appAxios from "../utils/appAxios";
import ProfileRightSide from '../components/profile/ProfileRightSide.vue';

const route = useRoute()
const slug = computed(() => route.params.slug)
let company = ref(null)

appAxios.get(`/company/${slug.value}`)
    .then((res) => {
        if (res.status === 200) {
            company.value = res?.data?.company
        }
    }).catch((err) => {
        console.error(err);
    });


</script>
<template>
    
    <div class="container pb-20 mt-16 sm:mt-20">
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-5  ">
            <div class=" flex-col flex-1 md:basis-8/12 space-y-2  ">
                <div class="border flex flex-col space-y-2 bg-white rounded-lg">
                    <div class="relative ">
                        <img class="rounded-t-lg md:h-32 h-20  w-full object-fill"
                            src="https://media.licdn.com/dms/image/D4D16AQFHK_sNYVFAOg/profile-displaybackgroundimage-shrink_350_1400/0/1676201844347?e=1681948800&v=beta&t=oOIDZleH7CwOJIS-dYm5WoWMJE-MHBCsD2XKtqoXop4"
                            alt="">
                        <div class=" absolute left-5 top-12 md:top-20 md:left-5  border-4 bg-white  border-white">

                            <img class="hover:cursor-pointer  object-contain w-24  h-24 md:w-30 md:h-30"
                                :src="`${company?.media}`" alt="">
                        </div>
                    </div>
                    <div class="flex relative justify-between pt-14  pb-7 pl-6 pr-5 items-start">

                        <div class="">
                            <p class="font-semibold text-2xl">{{ company?.name }}</p>
                            <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, optio.</p>
                            <div class="flex  justify-start items-center text-sm">
                                <span class="text-muted ">İstanbul,Turkey</span>
                                <div class="mx-1">•</div>
                                <a href="#" class="text-primary hover:underline font-semibold">iletişim bilgileri</a>
                            </div>
                            <a href="#" class="text-primary text-sm hover:underline font-semibold">{{
                                company?.employees.length }} Kişi burda çalışıyor.
                            </a>
                            <div class="flex justify-start space-x-2 items-center mt-2 ">
                                <button
                                    class=" flex justify-between items-center space-x-2 bg-primary  rounded-full py-px px-3 text-white active:bg-[#09223b] hover:bg-[#004182] transition-all duration-300 font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                                        fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
                                    </svg>
                                    Web sitesini ziyaret edin
                                </button>
                                <button
                                    class="py-px px-3 rounded-full border border-1 border-muted text-muted font-semibold bg-white transition-all duration-300 hover:bg-gray-200">
                                    Daha fazla
                                </button>
                            </div>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                            fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path
                                d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z">
                            </path>
                        </svg>

                    </div>
                </div>
                <div class="border flex flex-col space-y-2 bg-white rounded-lg">
                    <div class=" relative py-6 pl-6 pr-14">

                        <p class="font-semibold text-xl mb-3">Hakkında</p>
                        <p class="text-sm">{{ company?.about }}</p>

                    </div>
                </div>
            </div>
            <ProfileRightSide />

        </div>




    </div>
</template>
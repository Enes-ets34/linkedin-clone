<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { BASE_URL } from '../../constants';
import appAxios from "../../utils/appAxios";
import { useRouter } from 'vue-router';
import ProfileRightSide from '../../components/ProfileRightSide.vue';
import router from '../../router';
const route = useRouter()
const store = useStore()
let currentUser = computed(() => store.getters['users/getCurrentUser'])
const slug = route.currentRoute.value.params.slug
let user = ref({})
appAxios.get(`/users/${slug}`)
    .then((res) => {
        if (res.status === 200) {
            user.value = res.data.user
            if (currentUser.value._id === user.value._id) {
                router.push("/profile")
            }
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
                        <img class="rounded-t-lg"
                            src="https://media.licdn.com/dms/image/D4D16AQFHK_sNYVFAOg/profile-displaybackgroundimage-shrink_350_1400/0/1676201844347?e=1681948800&v=beta&t=oOIDZleH7CwOJIS-dYm5WoWMJE-MHBCsD2XKtqoXop4"
                            alt="">
                        <div
                            class="rounded-full absolute left-5 top-12 md:left-5 md:top-20 md:w-40 border-4 bg-white border-white">

                            <img class="hover:cursor-pointer rounded-full object-contain w-24 h-24 md:w-40 md:h-40"
                                :src="`${BASE_URL}/uploads/${user?.profile_image}`" alt="">
                            <div
                                class="rounded-full  p-[px]  bg-white  absolute top-14  md:top-28 right-2 border-[6px] w-6 h-6 border-green-700">

                            </div>
                        </div>
                    </div>
                    <div class="flex relative justify-between pt-14  pb-7 pl-6 pr-5 md:pr-20 items-start">

                        <div class="">
                            <p class="font-semibold text-2xl">{{ user?.full_name }}</p>
                            <p class="">{{ user?.title }}</p>
                            <div class="flex  justify-start items-center text-sm">
                                <span class="text-muted ">{{ user?.location }}</span>
                                <div class="mx-1">•</div>
                                <a href="#" class="text-primary hover:underline font-semibold">iletişim bilgileri</a>
                            </div>
                            <a href="#" class="text-primary text-sm hover:underline font-semibold">500+ bağlantı</a>
                            <div class="flex justify-start space-x-2 items-center mt-2 ">
                                <button
                                    class=" flex justify-between items-center space-x-2 bg-primary  rounded-full py-px px-3 text-white active:bg-[#09223b] hover:bg-[#004182] transition-all duration-300 font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                                        fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
                                    </svg>
                                    Mesaj
                                </button>
                                <button
                                    class="py-px px-3 rounded-full border border-1 border-muted text-muted font-semibold bg-white transition-all duration-300 hover:bg-gray-200">
                                    Daha fazla
                                </button>
                            </div>
                        </div>
                        <div class="flex justify-start items-center text-sm font-semibold  space-x-2">
                            <img :src="`${user?.company?.media}`" alt="" class="w-8">
                            <a href="#" class="hover:underline hover:text-primary">{{ user?.company?.name }}</a>
                        </div>
                    </div>
                </div>
                <div class="border flex flex-col space-y-2 bg-white rounded-lg">
                    <div class=" relative py-6 pl-6 pr-14">

                        <p class="font-semibold text-xl mb-3">Hakkında</p>
                        <p class="text-sm">{{ user?.about }}</p>

                    </div>
                </div>
                <div class="border flex flex-col space-y-2 bg-white rounded-lg">
                    <div class="relative py-6 pl-6 pr-14">

                        <p class="font-semibold text-xl mb-3">Deneyim</p>
                        <div class="flex justify-start items-start space-x-2">
                            <img src="https://media.licdn.com/dms/image/C4D0BAQFmAQR2llZUBw/company-logo_100_100/0/1675688917366?e=1685577600&v=beta&t=Gln6qsMZTZqaB4a0sYvZWlk04moAxbQ2sSquJB9nf_M"
                                alt="" class="w-12 object-contain ">
                            <div class="flex flex-col">
                                <p class="font-semibold">Information Technology Intern</p>
                                <p class="text-sm">Borusan Otomotiv</p>
                                <p class="text-sm text-muted">Eyl 2017 - Haz 2018 · 10 ay</p>
                                <p class="text-sm text-muted">İstanbul, Turkey</p>
                                <p class="text-sm my-2">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim possimus temporibus, at
                                    totam illum perspiciatis.
                                </p>
                                <div class="text-sm ">
                                    <span class="font-semibold">
                                        Yetenekler:
                                    </span>
                                    Teknik Destek · Bilgisayar Donanımı · Bilgisayar Donanımı Sorun Giderme · Bilgisayar
                                    Tamiri · Bilgisayar Ağları · İnsan Bilgisayar Etkileşimi

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <ProfileRightSide />

        </div>




    </div>
</template>
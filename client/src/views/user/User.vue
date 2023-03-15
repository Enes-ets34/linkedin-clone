<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import appAxios from "../../utils/appAxios";
import { BASE_URL } from '../../constants';
import ProfileRightSide from '../../components/profile/ProfileRightSide.vue';
import router from '../../router';
const route = useRoute()
const store = useStore()
const slug = computed(() => route.params.slug)
let currentUser = computed(() => store.getters['users/getCurrentUser'])
let user = ref({})
appAxios.get(`/users/${slug.value}`)
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

function formatContent(content) {
    return content
        .replace(/\n/g, "<br/>")
        .replace(
            /#\w+/g,
            '<span class="text-primary cursor-pointer hover:underline font-semibold">$&</span>'
        );
}
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
                            class="rounded-full absolute left-5 top-12 md:left-5 md:top-12 lg:top-20 md:w-32 md:h-32 lg:w-40 lg:h-40 border-4 bg-white border-white">

                            <img class="hover:cursor-pointer rounded-full object-contain w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                                :src="`${BASE_URL}/uploads/${user?.profile_image}`" alt="">
                            <div
                                class="rounded-full  p-[px]  bg-white  absolute  top-16  sm:top-3/4  right-2 border-[6px] w-6 h-6 border-green-700">

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
                        <router-link :to="`/company/${user?.company?.slug}`"
                            class="flex justify-start items-center text-sm font-semibold  space-x-2">
                            <img :src="`${user?.company?.media}`" alt="" class="w-8">
                            <a href="#" class="hover:underline hover:text-primary">{{ user?.company?.name }}</a>
                    </router-link>
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
                        <div v-for="experience in user.experiences" :key="experience?._id"
                            class="flex justify-start items-start space-x-2">

                            <img :src="experience?.company?.media" alt="" class="w-12 object-contain ">
                            <div class="flex flex-col w-full">
                                <p class="font-semibold flex justify-between items-center relative">
                                    {{ experience?.title }}
                                    <button @click="$store.dispatch('setModal', 'edit-experience-modal')"
                                        class="hover:bg-gray-200 rounded-full p-2 absolute top-0 right-4 cursor-pointer transition-all duration-300 active:bg-gray-300 ">

                                    </button>
                                </p>
                                <p class="text-sm">{{ experience?.company?.name }}</p>
                                <p class="text-sm text-muted">{{ experience?.date }}</p>
                                <p class="text-sm text-muted">{{ experience?.location }}</p>
                                <p v-html="formatContent(experience?.description)" class="text-sm my-2">

                                </p>
                                <!-- <div class="text-sm ">
                       Yetenekler:
                </span>
                Teknik Destek · Bilgisayar Donanımı · Bilgisayar Donanımı Sorun Giderme · Bilgisayar
            Tamiri · Bilgisayar Ağları · İnsan Bilgisayar Etkileşimi
            </div> -->
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <ProfileRightSide />

        </div>




    </div>
</template>